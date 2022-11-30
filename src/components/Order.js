import React from "react";
import moment from "moment";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({order}) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("Do MMMM YYYY, h:mma")}</p>
			<p className="order--id">
				<small>{order.id}</small>
			</p>
			{order.data.basket.map((item) => (
				<CheckoutProduct
					id={item.id}
					image={item.image}
					title={item.title}
					author={item.author}
					coverType={item.coverType}
					price={item.price}
				/>
			))}
			<CurrencyFormat
				renderText={(value) => (
					<>
						<h5 className="order--total">Payment Total: {value}</h5>
					</>
				)}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"€"}
			/>
		</div>
	);
}

export default Order;
