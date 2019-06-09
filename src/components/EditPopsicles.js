import React, {Component} from 'react';

class EditPopsicles extends Component {
	handleChange = event => {
		console.log(event.currentTarget.name, event.currentTarget.value);
		const name = event.currentTarget.name;
		const value = event.currentTarget.value;

		const updatedPopsicle = {
			...this.props.popsicle,
			[name]: value
		};

		console.log(updatedPopsicle);
		this.props.updatePopsicles(this.props.index, updatedPopsicle);
	};

	trash = event => {
		this.props.deletePopsicle(this.props.index);
	}

	render() {
		const  {name, status, desc, price, image} = this.props.popsicle;
		return (
			<div className="item-edit">
				<div className="imgContainer">
          <img src={image} alt={name} />
        </div>
        <label htmlFor="image">Image: </label>
        <input
        	type="text"
        	name="image"
        	value={image}
        	onChange={this.handleChange}
        />
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={this.handleChange}
				/>
				<div className="controlgroup">
					<label htmlFor="price">Price: </label>
					<input 
						type="number"
						name="price"
						value={price}
						onChange={this.handleChange}
					/>
				</div>
				<div className="controlgroup">
					<label htmlFor="status">Status: </label>
					<select
						name="status"
						onChange={this.handleChange}
						value={status}
					>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>
				</div>
				<div className="controlgroup">
					<textarea
						name="desc"
						rows="4"
						onChange={this.handleChange}
						value={desc}
					/>
				</div>
				<div className="controlgroup">
					<button
						class="delete"
						type="button"
						name="delete"
						onClick={this.trash}
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default EditPopsicles;