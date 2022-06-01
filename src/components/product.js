import React, { Component } from "react";
import ProductItem from "./productItem";

export default class Product extends Component {
  renderListProduct = () => {
    const { productsList,getProducts } = this.props;
    return productsList.map((product) => {
      return (
        <ProductItem key={product.id} product={product} getProducts ={getProducts}/>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}
