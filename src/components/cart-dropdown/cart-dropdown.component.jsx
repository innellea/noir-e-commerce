import React from "react";

import { withRouter } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
// Styles
import "./cart-dropdown.styles.scss";
// Comps
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history,dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton inverted onClick={() => {history.push("/checkout");
  dispatch(toggleCartHidden());
  }}>
      Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
