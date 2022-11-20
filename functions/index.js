const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51M4M7eGnbbBlpIzDz6CCBHvGxoKPT7F2QINX4zQotEC7LpI5DUTHMRF0jVk4cc4xFQyrbO8VYQOuFz3F4IC8XFM400CR1vg4b4"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("it works!"));
app.post("/pay/create", payment);

function payment(request, response) {
	try {
		const total = request.query.total;

		console.log("Payment request received!", total);

		const paymentIntent = stripe.paymentIntents.create({
			amount: total,
			currency: "eur",
		});

		response.status(201).send({clientSecret: paymentIntent.client_secret});
	} catch (err) {
		console.log(err);
	}
}

exports.api = functions.https.onRequest(app);
