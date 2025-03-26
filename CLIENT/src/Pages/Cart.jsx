import React from "react";
import emptyCartImage from "../assets/Animation.gif";

function Cart() {
  return (
    <>
      <div className="flex w-full justify-center items-center mt-32 flex-col">
        <img src={emptyCartImage} className="w-60 max-w-full" />
        <p className="text-slate-500 text-3xl font-bold">🛒 Sorry the cart is Empty! </p>
      </div>
    </>
  );
}

export default Cart;
