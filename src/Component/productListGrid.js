import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class productListGrid extends Component {

    _viewDetail = (pID) => {
        this.props.history.push("/productdetail", { pID: pID })
    }

    render() {
        return (
            <div>
                {(this.props.products.length >= 1) ?
                    <div>
                        <div className="container" style={{ paddingTop: 50 }}>
                            <div className="row">
                                {this.props.products.map((list, key) =>
                                    <div className="col-3" key={list.id}>
                                        <Card className="cardHover" style={{ marginBottom: 20 }}>
                                            <Card.Img variant="top" src={list.image_url} width={200} height={200} />
                                            <Card.Body>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <Card.Img variant="top" src={list.brand_info.url} />
                                                    </div>
                                                    <div className="col-8">
                                                        <Card.Title style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                            <LinesEllipsis
                                                                text={list.name}
                                                                maxLine='2'
                                                                ellipsis='…'
                                                                trimRight
                                                                basedOn='letters'
                                                            />
                                                        </Card.Title>
                                                    </div>
                                                </div>
                                                <Card.Text style={{ fontSize: 14, paddingTop: 10 }}>
                                                    <LinesEllipsis
                                                        text={list.description}
                                                        maxLine='2'
                                                        ellipsis='…'
                                                        trimRight
                                                        basedOn='letters'
                                                    />
                                                </Card.Text>
                                                <Card.Text className="text-right" style={{ color: 'red', fontWeight: 'bold' }}>
                                                    <NumberFormat value={list.price} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
                                                </Card.Text>
                                                <Button variant="info" style={{ width: "100%" }} onClick={() => this._viewDetail(list.id)}>Detail</Button>
                                            </Card.Body >
                                        </Card >
                                    </div >
                                )
                                }
                            </div>
                        </div >
                    </div > :
                    <span>Loading...</span>}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default withRouter(connect(mapStateToProps)(productListGrid));