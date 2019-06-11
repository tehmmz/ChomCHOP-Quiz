import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { withRouter } from 'react-router-dom';

class productDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: [],
            piece: 1
        }
    }

    componentDidMount() {
        this._apiProductDetail();
    }

    _apiProductDetail = async () => {
        await axios.get('https://cc-mock-api.herokuapp.com/product/' + this.props.location.state.pID)
            .then((res) => this.setState({ detail: res.data }))
    }

    _increasePiece = () => {
        this.setState({
            piece: this.state.piece + 1
        })
    }

    _decreasePiece = () => {
        this.setState({
            piece: this.state.piece - 1
        })

        if (this.state.piece <= 1) {
            this.setState({
                piece: 1
            })
        }
    }

    render() {
        const detail = this.state.detail;
        return (
            <div className="container" style={{ paddingTop: 50 }}>
                <Card>
                    <div className="row">
                        <div className="col-4">
                            <Card.Img src={detail.image_url} />
                        </div>
                        <div className="col-8">
                            <Card.Body>
                                <Card.Title style={{ fontSize: 32, fontWeight: 'bold' }}>{detail.name}</Card.Title>
                                <Card.Text style={{ fontSize: 18 }}>{detail.description}</Card.Text>
                                <Card.Text style={{ color: 'red', fontWeight: 'bold' }}>
                                    <NumberFormat value={detail.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
                                </Card.Text>
                                <Card.Text>
                                    <ButtonGroup>
                                        <Button variant="light" onClick={() => this._decreasePiece()}>-</Button>
                                        <input type="number" style={{ width: 40, textAlign: 'center', border: 0 }}
                                            defaultValue={"1"} value={this.state.piece} min={1} />
                                        <Button variant="light" onClick={() => this._increasePiece()}>+</Button>
                                    </ButtonGroup>
                                </Card.Text>
                                <Button variant="info">Add to Cart</Button>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(productDetail)