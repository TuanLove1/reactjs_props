import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const {product,getProducts} = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.name} </h4>
            <p className="card-text">{product.price}</p>
            <button
              className="btn btn-success" onClick={()=>{
                getProducts(product);
              }}>
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
