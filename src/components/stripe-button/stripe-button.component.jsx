import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HvhrrKnPs5GAHWu9Uwdn8boic3K6kAcm5CHfOzHcAnvQ6faqpApDP5DPWIS43WprHV8qkTkZpV8cZaNgtyp1XTm00h7bBENT2';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your Total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;