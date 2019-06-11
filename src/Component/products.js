import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import ProductListGrid from './productListGrid';
import ProductList from './productList';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewChange: 1,
            btnGrid: true,
            btnList: false
        }
    }

    componentDidMount() {
        this._getListProduct();
    }

    _getListProduct = async () => {
        await axios.get('https://cc-mock-api.herokuapp.com/product')
            .then((res) => {
                this.props.dispatch({
                    type: "FETCH_PRODUCT",
                    data: res.data.list
                })
            })
    }

    _changeView = (value, selected) => {
        this.setState({
            viewChange: value,
            btnGrid: value === 1 ? true : false,
            btnList: value === 2 ? true : false
        })
    }

    render() {
        return (
            <div>
                <div className="float-right">
                    <ButtonGroup>
                        <Button variant={(this.state.btnGrid === true) ? "info" : "light"} onClick={() => this._changeView(1)} active={this.state.btnGrid}>
                            <img src="https://www.shareicon.net/download/2016/07/08/116896_sort.svg" width={20} height={20} alt="grid" />
                        </Button>
                        <Button variant={(this.state.btnList === true) ? "info" : "light"} onClick={() => this._changeView(2)} active={this.state.btnList}>
                            <img sr src="https://freeiconshop.com/wp-content/uploads/edd/list-solid.png" width={20} height={20} alt="list" />
                        </Button>
                    </ButtonGroup>
                </div>
                {
                    (this.state.viewChange === 1) ?
                        <ProductListGrid /> :
                        <ProductList />
                }
            </div >
        )
    }
}

export default connect()(Products);