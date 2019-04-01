import React from "react";
import { Title } from "../../utils";
import styled from "styled-components";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section>
      <ProductConsumer>
        {val => {
          const { cart } = val;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title title="your" message="cart" />
                <CartColumns />
                <CartList value={val} />
                <CartTotals value={val} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
}
