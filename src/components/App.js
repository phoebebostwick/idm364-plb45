import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from './Button';
import Menu from './Menu';
import popsicles from '../js/popsicles.js';
import Inventory from './Inventory';
import base from '../js/base';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends Component {
  state = {
    popsicles: [],
    inCart: []
  };

  componentDidMount(){
    this.ref = base.syncState('popsicles', {
      context: this,
      state: 'popsicles'
    });
  };

  reloadPopsicles = () => {
    this.setState({ popsicles });
  };

  updatePopsicles = (key, updatedPopsicle) => {
    const popsicles = {...this.state.popsicles}
    popsicles[key] = updatedPopsicle;
    this.setState({popsicles})
  };

  deletePopsicle = (key) => {
    const popsicles = {...this.state.popsicles}
    popsicles[key] = null;
    this.setState({popsicles});
  };

  addToCart = (key) => {
    const inCart = {...this.state.inCart};

    if (inCart[key]) {
      inCart[key] += 1;
    } else {
      inCart[key] = 1;
    }
    this.setState({inCart});
  };


  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" render = {() => (
              <>
                <Menu 
                  addToCart={this.addToCart}
                  popsicles={this.state.popsicles}
                  inCart={this.state.inCart}
                />
                <Cart 
                  deleteFromCart={this.deleteFromCart}
                  popsicles={this.state.popsicles}
                  inCart={this.state.inCart}
                />
              </>
            )}
          />
          <Route path="/inventory" render = {() => (
            <>
              <Button reloadPopsicles={this.reloadPopsicles} />
              <Inventory
                updatePopsicles={this.updatePopsicles}
                deletePopsicle={this.deletePopsicle}
                popsicles={this.state.popsicles}
              />
              </>
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;