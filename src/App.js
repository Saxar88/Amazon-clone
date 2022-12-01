import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./hooks/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Pay from "./pages/Pay";
import OrderHistory from "./pages/OrderHistory";
import { useStateValue } from "./hooks/StateProvider";

const stripePromise = loadStripe(
  "pk_test_51M4M7eGnbbBlpIzDpt3OfX4UmJnxrPK9PKQGfQ2CX3nzvoiVLBQOiyt9d3FXZBUg844UARUm85fhpfFcL4Sc171200L26J36hg"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/order-history"
            element={
              <>
                <Header />
                <OrderHistory />
                <Footer />
              </>
            }
          />
          <Route
            path="/pay"
            element={
              stripePromise && (
                <Elements stripe={stripePromise}>
                  <Pay />
                </Elements>
              )
            }
            exact
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
