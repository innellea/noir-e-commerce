import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Lbu1tC0ekdMbxRUuffsifXKs";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");

  };

  return (
    <StripeCheckout
    label = 'Pay Now!'
      name="Noir clothing"
      billingAddress
      shippingAddress
      description={`Your total amount is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now!'
      token={onToken}
      currency="USD"
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
