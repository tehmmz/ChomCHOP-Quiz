import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Products from './Component/products';
import ProductDetail from './Component/productDetail';

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container" style={{ paddingTop: 50 }}>
          <h2>Product</h2>
          <hr />
          <Switch>
            <Route path="/" component={() => <Products />} exact />
            <Route path="/productlist" component={() => <Products />} />
            <Route path="/productdetail" component={() => <ProductDetail />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
