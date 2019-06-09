import React, {Component} from 'react';
import Popsicle from './Popsicle';

class Menu extends Component {
	render() {
		return (
			<div className="itemsContainer">
				{Object.keys(this.props.popsicles).map(key => (
					<Popsicle
						key={key}
						index={key}
						popsicle={this.props.popsicles[key]}
						addToCart={this.props.addToCart}
					/>
				))}
			</div>	
		);
	}
}

export default Menu;