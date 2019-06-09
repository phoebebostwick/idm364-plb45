import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {

	render() {
		return (
			<Navigation className="navigation">
				<Link to='/' className="homeLink">
					<h1>Artisan Popsicles</h1>
				</Link>
				<Link to='/inventory' className="inventoryLink">
						<img src="img/admin_icon.png" />
				</Link>
				<h3 className="cartLink"><a class="button" href="#cart"><img src="img/cart_icon.png" /></a></h3>
			</Navigation>
		);
	}
}

const Navigation = styled.nav`
	background: white;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
	.homeLink{
		color: #ffdd55;
		text-align: center;
		margin: auto;
		font-size: 5rem;
	}
	.cartLink{
		position: absolute;
		top: 5px;
		right: 5px;
	}
	.inventoryLink {
		position: absolute;
		top: 10px;
		left: 10px;
		color: white;
	}
`