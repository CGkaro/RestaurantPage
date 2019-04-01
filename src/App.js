import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/globals/navbar/Navbar";
import Footer from "./components/globals/footer";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import NotFound from "./components//404";
import { Switch, Link, Route } from "react-router-dom";
import Modal from "./components/modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/Product" component={Product} />
          <Route path="/Details" component={Details} />
          <Route path="/Cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
