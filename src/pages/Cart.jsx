import { useState } from "react";
import AccountBar from "../components/dashboard/AccountBar";
import NavBar from "../components/dashboard/NavBar";

const Cart = () => {
   return (
    <>
      <AccountBar />
      <NavBar />
      <div>Here is the cart</div>
   </>
  );
};

export default Cart;
