import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../hooks/StateProvider";
import { getBasketTotal } from "../hooks/reducer";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <div className="subtotal--gift">
              <input type="checkbox" /> <p>This order contains a gift</p>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button
        onClick={(e) => {
          user ? navigate("/pay") : navigate("/signin");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
