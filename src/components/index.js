import React, { Component } from "react";
import data from "./data.json";
import Product from "./product";
import Modal from "./modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      modalProductList: data[0],
    }
  }
  handleProducts = (product) => {
    this.setState({
      modalProductList: product,
    })
  }

  render() {
    const { products, modalProductList } = this.state;
    return (
      <>
        <h3 className="text-center">Shoes Store</h3>
        <Product productsList={products} getProducts={this.handleProducts} />
        <Modal modalProductList={modalProductList} />
      </>
    );
  }
}
