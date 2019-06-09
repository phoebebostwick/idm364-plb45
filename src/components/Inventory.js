import React, {Component} from 'react';
import EditPopsicles from './EditPopsicles';

class Inventory extends Component {
	render() {
		return (
			<div className="inventory">
				{Object.keys(this.props.popsicles).map(key => (
					<EditPopsicles
						key={key}
						index={key}
						popsicle={this.props.popsicles[key]}
						updatePopsicles={this.props.updatePopsicles}
						deletePopsicle={this.props.deletePopsicle}
					/>
				))}
			</div>	
		);
	}
}

export default Inventory; 