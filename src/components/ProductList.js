import React, { Component } from "react";
import Product from "./Product";
import { Title } from "../utils";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title title="our" message="Products" />
              <div className="row">
                <ProductConsumer>
                  {val => {
                    return val.products.map(product => {
                      return <Product product={product} key={product.id} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
