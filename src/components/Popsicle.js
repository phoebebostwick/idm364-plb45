import React, {Component} from 'react';
import styled from 'styled-components';

class Popsicle extends Component {
  add = event => {
    console.log(this.props.index)
    this.props.addToCart(this.props.index);
  }

    render() {
    const { image, name, desc, status, price } = this.props.popsicle;
    return (
      <div className={`item ${status}`}>
        <div className="imgContainer">
          <img src={image} alt={name} />
        </div>
        <div className="itemInfo">
          <ItemInfoTop>
            <h3 className="itemName">{name}</h3>
            <h3 className="itemPrice">${price}</h3>
          </ItemInfoTop>
          <p>{desc}</p>
        </div>
        <button className="add" name="add" onClick={this.add}>Add To Cart</button>
      </div>
    );
  }
}

const ItemInfoTop = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`

export default Popsicle; 