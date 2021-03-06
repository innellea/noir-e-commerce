import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import swal from 'sweetalert';

import { clearCart } from '../../redux/cart/cart.actions';

import { StripeButton } from './stripe-button.styles';

const StripeCheckoutButton = ({ price, dispatch, history }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ghjMMq6QNw2yKFSPwbdgL8CV00i3EAIXXG';

    const onToken = (token) => {
        fetch('http://localhost:5000/payment', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                amount: priceForStripe
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    dispatch(clearCart());
                    swal(
                        'Good Job',
                        'Your Transaction is Now Completed',
                        'success'
                    );
                    setTimeout(() => history.push('/'), 1000);
                } else {
                    if (data.error) {
                        swal(
                            'Something Went Wrong..',
                            'Your Transaction Failed',
                            'error'
                        );
                    }
                }
            })
            .catch((error) => {
                alert(error);
            });
    };
    if (price < 1) {
        return (
            <StripeButton
                label='Pay Now'
                name='Noir'
                billingAddress
                shippingAddress
                description={`Your toal is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
                bitcoin
            />
        );
    }
    return (
        <StripeButton
            label='Pay Now'
            name='N O I R.'
            billingAddress
            shippingAddress
            description={`Your toal is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            // email="info@vidhub.co"
            bitcoin
        />
    );
};
export default withRouter(connect()(StripeCheckoutButton));
