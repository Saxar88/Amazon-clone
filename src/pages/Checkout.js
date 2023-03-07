import React from "react";
import "./Checkout.css";
import {Link} from "react-router-dom";
import {useStateValue} from "../hooks/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";

function Checkout() {
	const [{basket, user}, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout--leftMenu">
				{basket.length === 0 ? (
					<div className="emptyBasket">
						<div className="emptyBasket--container">
							<img
								className="emptyBasket--image"
								src="images/empty-basket.svg"
								alt=""
							/>
							<div className="emptyBasket--menu">
								<h2>Your Amazon Cart is empty</h2>
								<a href="">Shop today's deals</a>
								{!user ? (
									<span>
										<Link to="/signin">
											<button className="emptyBasket--signInButton">
												Sign in to your account
											</button>
										</Link>
										<Link to="/register">
											<button className="emptyBasket--registerButton">
												Sign up now
											</button>
										</Link>
									</span>
								) : (
									<div />
								)}
							</div>
						</div>
					</div>
				) : (
					<div className="shoppingBasket">
						<p className="checkout--title">Shopping Basket</p>
						<Link to="/checkout#" className="checkout--deselect">
							Deselect all items
						</Link>
						<p className="checkout--price">Price</p>
						{basket.map((item, i) => (
							<CheckoutProduct
								key={i}
								id={item.id}
								image={item.image}
								title={item.title}
								author={item.author}
								coverType={item.coverType}
								price={item.price}
							/>
						))}
					</div>
				)}
				<p>
					The price and availability of items at Amazon.de are subject to
					change. The shopping basket is a temporary place to store a list of
					your items and reflects each item's most recent price.
				</p>
				<p>
					Do you have a gift card or promotional code? We'll ask you to enter
					your claim code when it's time to pay.
				</p>
			</div>
			<div className="checkout--rightMenu">
				{basket.length === 0 ? (
					<div />
				) : (
					<>
						<Subtotal />
					</>
				)}
			</div>
		</div>
	);
}

export default Checkout;
