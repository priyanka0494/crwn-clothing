import { CartActionTypes } from './cart.types';

export const toggleCartHidden = (state) => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});