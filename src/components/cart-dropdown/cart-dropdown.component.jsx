import React from "react";

// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
// Styles
import "./cart-dropdown.styles.scss";
// Comps
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton inverted>Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) =>
  createStructuredSelector({ cartItems: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
