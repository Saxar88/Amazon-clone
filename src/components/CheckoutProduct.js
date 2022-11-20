import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "../hooks/StateProvider";
import Checkbox from "@mui/material/Checkbox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function CheckoutProduct({id, image, title, author, coverType, price}) {
	const [{basket}, dispatch] = useStateValue();

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	const removeFromBasket = () => {
		dispatch({type: "REMOVE_FROM_BASKET", id: id});
	};

	return (
		<div className="checkoutProduct">
			<Checkbox
				className="checkoutProduct--checkbox"
				defaultChecked
				size="small"
			/>
			<img className="checkoutProduct--img" src={image} alt="" />
			<div className="checkoutProduct--info">
				<p className="checkoutProduct--title">{title}</p>
				<p className="checkoutProduct--author">{author}</p>
				<p className="coverType">{coverType}</p>
				<small className="checkoutProduct--gift">
					<Checkbox
						className="checkoutProduct--checkbox"
						default
						size="small"
					/>
					<span className="checkoutProduct--checkboxText">
						This will be a gift{" "}
						<a href="url" className="checkoutProduct--learnMore">
							Learn more
						</a>
					</span>
				</small>
				<div className="checkoutProduct--menu">
					<div className="checkoutProduct--menuDropdown">
						<button onClick={handleOpen}>
							Qty: 1{" "}
							<FontAwesomeIcon
								icon={faChevronDown}
								className="checkoutProduct--menuArrow"
							/>
						</button>
						{open ? (
							<ul className="checkoutProduct--menuList">
								<li className="checkoutProduct--menuQty">0 (Delete)</li>
								<li className="checkoutProduct--menuQty">1</li>
								<li className="checkoutProduct--menuQty">2</li>
								<li className="checkoutProduct--menuQty">3</li>
								<li className="checkoutProduct--menuQty">4</li>
								<li className="checkoutProduct--menuQty">5</li>
								<li className="checkoutProduct--menuQty">6</li>
								<li className="checkoutProduct--menuQty">7</li>
								<li className="checkoutProduct--menuQty">8</li>
								<li className="checkoutProduct--menuQty">9</li>
								<li className="checkoutProduct--menuQty tenPlus">10+</li>
							</ul>
						) : null}
					</div>
					<p className="textSeparator">|</p>
					<p className="checkoutProduct--menuOption" onClick={removeFromBasket}>
						Delete
					</p>
					<p className="textSeparator">|</p>
					<p className="checkoutProduct--menuOption">Save for later</p>
				</div>
			</div>
			<div className="chekcoutProduct--price">
				<strong>€{price}</strong>
			</div>
		</div>
	);
}

export default CheckoutProduct;
