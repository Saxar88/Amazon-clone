const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51M4M7eGnbbBlpIzDz6CCBHvGxoKPT7F2QINX4zQotEC7LpI5DUTHMRF0jVk4cc4xFQyrbO8VYQOuFz3F4IC8XFM400CR1vg4b4");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("It works!"));

app.post("/pay/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
    automatic_payment_methods: {enabled: true},
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
