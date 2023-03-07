import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {doc, setDoc} from "firebase/firestore";
import "./Pay.css";
import {useStateValue} from "../hooks/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../hooks/reducer";
import axios from "../hooks/axios";
import {db} from "../hooks/firebase";

function Pay() {
	const [{basket, user}, dispatch] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	const [processing, setProcessing] = useState("");
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/pay/create?total=${getBasketTotal(basket) * 100}`,
			});

			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {card: elements.getElement(CardElement)},
			})
			.then(({paymentIntent}) => {
				setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				navigate("/order-history", {replace: true});
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="pay">
			<div className="pay--header">
				<Link to="/">
					<img className="pay--logo" src="images/logo-b.png" alt="logo" />
				</Link>
				<h1>
					Checkout{" "}
					<Link to="/checkout">
						(<a href="">{basket.length} items</a>)
					</Link>
				</h1>
				<FontAwesomeIcon icon={faLock} className="pay--headerLock" />
			</div>
			<div className="pay--container">
				<div className="pay--leftMenu">
					<div className="pay--steps">
						<h3 className="pay--stepsNumber">1</h3>
						<h3>Delivery address</h3>
						<ul>
							<li>Full name</li>
							<li>Adress</li>
							<li>City</li>
						</ul>
						<a href="" className="pay--stepsChange">
							Change
						</a>
					</div>
					<div className="pay--steps">
						<h3 className="pay--stepsNumber">2</h3>
						<h3>Payment method</h3>
						<form id="cardInfo" onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
						</form>
						<a href="" className="pay--stepsChange">
							Change
						</a>
					</div>
					<div className="pay--steps">
						<h3 className="pay--stepsNumber">3</h3>
						<h3>Offers</h3>
					</div>
					<div className="pay--steps">
						<h3 className="pay--stepsNumber">4</h3>
						<h3>Review items and delivery</h3>
						<div className="pay--product">
							{basket.map((item) => (
								<CheckoutProduct
									id={item.id}
									image={item.image}
									title={item.title}
									author={item.author}
									coverType={item.coverType}
									price={item.price}
								/>
							))}
						</div>
					</div>
					<div className="pay--total">
						<div>
							<button
								type="submit"
								form="cardInfo"
								disabled={processing || disabled || succeeded}
								className="pay--totalButton">
								<span>{processing ? <p>Processing...</p> : "Pay in EUR"}</span>
							</button>
							{error && <div>{error}</div>}
						</div>
						<div className="pay--totalInfo">
							<CurrencyFormat
								renderText={(value) => (
									<>
										<h5>Payment Total: {value}</h5>
									</>
								)}
								decimalScale={2}
								value={getBasketTotal(basket)}
								displayType={"text"}
								thousandSeparator={true}
								prefix={"€"}
							/>
							<p>
								By placing your order you agree to Amazon's Conditions of Use &
								Sale. Please see our Privacy Notice, our Cookies Notice and our
								Interest-Based Ads Notice.
							</p>
							<p>You also agree to Amazon Global's terms and conditions.</p>
						</div>
					</div>
					<div className="pay--info">
						<p>Need help? Check our Help pages or contact us</p>
						<p>
							When you click the "Buy now" button, we'll send you an e-mail
							message acknowledging receipt of your order. Your contract to
							purchase an item will not be complete until we send you an e-mail
							to indicate that the item has been dispatched.
						</p>
						<p>
							All items in this order are sold by Amazon EU S.à r.l. (AEU),
							unless otherwise noted. By placing your order, you authorise AEU
							to designate a carrier to clear the package and pay the Import
							Fees on your (or the recipient's) behalf. Customs declarations
							will be made in your (or the recipient's) name and your (or the
							recipient's) behalf by the Designated Carrier. See terms and
							conditions here
						</p>
						<p>
							When ordering via a marketplace seller please accept their terms
							and conditions. For further information, company details, terms
							and conditions, and cancellation rights, please click on the
							seller's name.
						</p>
						<p>
							You can return items dispatched from and/or sold by Amazon.de
							within 30 days from the date of purchase. This guarantee applies
							in addition to your statutory right to cancel your order within
							two weeks from the date of receipt. Please note that we only
							accept returns of shrink-wrapped or sealed data carriers such as
							CDs, cassettes, VHS-videos, DVDs, PC- and video games, as well as
							software in their original, sealed or wrapped condition. Digital
							content purchased and downloaded via Amazon's MP3 music service
							cannot be returned. Please visit Return Policy for more
							information.
						</p>
						<p>
							You can print your order details and our Terms and Conditions and
							file them for your documentation. Order details can be accessed at
							any time through Your Account. We only publish the Terms and
							Conditions in their most current version.
						</p>
						<p>
							If you wish to return an order to one of our partners, then please
							contact the seller directly and ask about their return and refund
							procedures. Amazon.de merely offers its Marketplace as an
							environment for transactions and does not become party to any
							sales contract between you and the seller.
						</p>
					</div>
				</div>
				<div className="pay--rightMenu">
					<div className="pay--buttonInfo">
						<button
							type="submit"
							form="cardInfo"
							disabled={processing || disabled || succeeded}>
							<span>{processing ? <p>Processing...</p> : "Pay in EUR"}</span>
						</button>
						{error && <div>{error}</div>}
						<p>
							By placing your order you agree to Amazon's{" "}
							<a>Conditions of Use & Sale</a>. Please see our{" "}
							<a>Privacy Notice</a>, our <a>Cookies Notice</a> and our
							<a>Interest-Based Ads Notice</a>.
						</p>
						<p>You also agree to Amazon Global's terms and conditions.</p>
						<hr />
					</div>
					<div className="pay--summary">
						<CurrencyFormat
							renderText={(value) => (
								<h3 className="orderTotal">Order Total: {value}</h3>
							)}
							decimalScale={2}
							value={getBasketTotal(basket)}
							displayType={"text"}
							thousandSeparator={true}
							prefix={"€"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pay;
