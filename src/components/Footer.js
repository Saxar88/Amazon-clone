import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer--list getToKnowUs">
				<h5>Get to Know Us</h5>
				<ul>
					<li>Careers</li>
					<li>Press Releases</li>
					<li>About us</li>
					<li>Blog</li>
					<li>Imprint</li>
					<li>Amazon Science</li>
				</ul>
			</div>
			<div className="footer--list makeMoneyWithUs">
				<h5>Make Money with Us</h5>
				<ul>
					<li>Sell on Amazon</li>
					<li>Sell on Amazon Business</li>
					<li>Sell on Amazon Handmade</li>
					<li>Associates Programme</li>
					<li>Fulfilment by Amazon</li>
					<li>Seller Fulfilled Prime</li>
					<li>Advertise Your Products</li>
					<li>Independently Publish with Us</li>
					<li>Amazon Pay</li>
				</ul>
			</div>
			<div className="footer--list">
				<h5>Amazon Payment Methods</h5>
				<ul>
					<li>Amazon Visa Card</li>
					<li>Shop with points</li>
					<li>Credit Card</li>
					<li>Gift Cards</li>
					<li>Payment by Invoice</li>
					<li>Direct Debit</li>
					<li>Amazon Currency Converter</li>
					<li>Top Up Your Account</li>
				</ul>
			</div>
			<div className="footer--list">
				<h5>Let Us Help You</h5>
				<ul>
					<li>Track Packages or View Orders</li>
					<li>Delivery Rates & Policies</li>
					<li>Returns & Replacements</li>
					<li>
						Recycling (including disposal of electrical and electronic
						equipment)
					</li>
					<li>Manage Your Content and Devices</li>
					<li>Amazon Mobile App</li>
					<li>Amazon Assistant</li>
					<li>Customer Service</li>
					<li>Accessibility</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
