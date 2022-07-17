import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { UPDATE_RESERVATION, REMOVE_RESERVATION } from "../reducers/cartReducer";

const Cart = ({ cart, updateItem, removeItem }) => {

    const handleChange = (e, element) => {
        // e.preventDefault();
        console.log('handleChange', cart, e.target.value);
        if (e.target.value < 1)
            return removeItem(element);

        updateItem({ _id: element._id, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container mt-5 p-8 rounded cart">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="product-details me-2">
                            <div className="d-flex flex-row align-items-center">
                                <Link to={'/'}> <i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span>
                                </Link>
                            </div>
                            <hr />
                            <h6 className="mb-0">Shopping cart</h6>
                            {cart.map((element) => (
                                <div key={element._id} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                    <div className="d-flex flex-row">
                                        <div className="me-4">
                                            <h6 className='city'><b>
                                                {element.cityFrom}&nbsp;
                                                <span className="material-icons">
                                                    flight_takeoff flight_land
                                                </span>
                                                &nbsp;{element.cityTo}
                                            </b></h6>
                                        </div>
                                        <span className="material-icons large align-items-center">luggage</span>
                                        <span className="align-middle kilo ">
                                            <label htmlFor=""> {element.description}</label>

                                            <input type="number"
                                                pattern="[0-9]*"
                                                name="quantity"
                                                className="form-control"
                                                id="quantity"
                                                value={element.quantity}
                                                onChange={(e) => handleChange(e, element)} required />

                                            {element.avalaiblekilos && element.avalaiblekilos + ' Kg (max)'}
                                        </span>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <span className="d-block ms-5 fw-bold">€ {(element.quantity * element.kiloPrice).toFixed(2)}</span>
                                        &nbsp;
                                        <i className="fa fa-trash" aria-hidden="true" onClick={() => removeItem(element)}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect((state) =>
({
    cart: state.cart

}),
    (dispatch) => ({

        updateItem: (item) => dispatch({ type: UPDATE_RESERVATION, payload: item }),
        removeItem: (item) => dispatch({ type: REMOVE_RESERVATION, payload: item })
    })
)(Cart); 