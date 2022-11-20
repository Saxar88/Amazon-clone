import React from "react";
import moment from "moment";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";

function Order({order}) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format("Do MMMM YYYY, h:mma")}</p>
			<p className="order--id">
				<small>{order.id}</small>
			</p>
			{order.data.basket.map((item) => {
				<CheckoutProduct
					id={item.id}
					image={item.image}
					title={item.title}
					author={item.author}
					coverType={item.coverType}
					price={item.price}
				/>;
			})}
		</div>
	);
}

export default Order;
