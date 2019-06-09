import React, {Component} from 'react';

class Cart extends Component {
	cartList = (key) => {
		const popsicle = this.props.popsicles[key];
		const inCartItem = this.props.inCart[key];

		if (!popsicle) return null;

		return (
			<div key={key} className="inCartItem">
				<h3 className="cartItemCount">{inCartItem}</h3>
				<h3 className="cartItemName">{popsicle.name}</h3>
				<h3 className="cartItemPrice">${(popsicle.price * inCartItem)}</h3>
			</div>
		);
	};

	render() {
		const cartTotal = Object.keys(this.props.inCart).reduce((accTotal, key) => {
			const popsicle = this.props.popsicles[key];
			const inCartItem = this.props.inCart[key];

			return accTotal + popsicle.price * inCartItem;
		}, 0);

		return(
			<>
				<div id="cart">
					<div className="cartModal">
						<h1>Your Cart</h1>
						<a className="close" href="#">&times;</a>
						<div className="cartItems">
							<div className="inCartItem" style={{borderBottom: '2px solid var(--softPink)'}}>
								<h2 className="cartItemCount" style={{borderRight: 'none'}}>Quanitity</h2>
								<h2 className="cartItemName">Popsicle</h2>
								<h2 className="cartItemPrice" style={{borderLeft: 'none'}}>Price</h2>
							</div>
							{Object.keys(this.props.inCart).map(key => this.cartList(key))}
						</div>
						<h2 className="total">Total: ${cartTotal}</h2>
					</div>
				</div>
			</>
		);
	}
}

export default Cart;

