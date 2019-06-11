import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class productList extends Component {

    _viewDetail = (pID) => {
        this.props.history.push("/productdetail", { pID: pID })
    }

    render() {
        return (
            <div className="container" style={{ paddingTop: 50 }}>
                <div className="row">
                    <div className="col-12">
                        {this.props.products.map((list, key) =>
                            <Card className="cardHover" style={{ width: "100%", paddingTop: 10, marginBottom: 10, border: 0 }} key={list.id}>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-2">
                                            <Card.Img src={list.image_url} height={150} width={200} />
                                        </div>
                                        <div className="col-8">
                                            <Card.Title>{list.name}</Card.Title>
                                            <Card.Text style={{ fontSize: 14 }}>{list.description}</Card.Text>
                                        </div>
                                        <div className="col-2" style={{ textAlign: 'center', alignSelf: 'center' }}>
                                            <Card.Title style={{ color: 'red', fontSize: 16, fontWeight: "bold" }}>
                                                <NumberFormat value={list.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
                                            </Card.Title>
                                            <Button variant="info" onClick={() => this._viewDetail(list.id)}>Detail</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default withRouter(connect(mapStateToProps)(productList));