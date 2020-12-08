import React, { useState } from 'react';
import searchData from '../SearchResult/searchData';
import BusSeat from './BusSeat';
import './SelectResult.css'

const SelectResult = () => {
    const router = Number(localStorage.getItem('seat'))
    // const [seatData, setSeatData]= useState([])
    const seatData = searchData.filter(data => data.id === router)

    return (
        <section className="select-result">
            <table className="w-100">
                <tbody>
                    {
                        seatData.map(data => {
                            const { id, transportName, from, to, coachType, depTime, ariveTime, seats, fair } = data
                            return (
                                <tr key={id} className="my-3">
                                    <td>
                                        <p>{transportName}</p>
                                        <p>{from}- {to}</p>
                                        <p>{coachType}</p>
                                        <p>Starting Point- {from}</p>
                                        <p>Ending Point- {to}</p>
                                    </td>
                                    <td>
                                        <p>Departure Time</p>
                                        <p>Time- {depTime}</p>
                                    </td>
                                    <td>
                                        <p>Arrival Time</p>
                                        <p>Time- {ariveTime}</p>
                                    </td>
                                    <td>
                                        <p>Seats Available</p>
                                        <p>{seats}</p>
                                    </td>
                                    <td>
                                        <h1>{fair} Taka</h1>
                                    </td>
                                    <td>
                                        <button>View Seats</button><br />
                                        <span>Cancellation Policy</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="seat-types d-flex justify-content-center">
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Booked(M)</span>
                </div>
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Sooked(F)</span>
                </div>
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Blocked</span>
                </div>
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Available</span>
                </div>
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Selected</span>
                </div>
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Sold</span>
                </div>
                <div className="d-flex mx-3">
                    <p>S</p>
                    <span>Sold</span>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <BusSeat />
                </div>
                <div className="col-4">
                    <div>
                        <p>Seat information</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Seats</th>
                                    <th>Class</th>
                                    <th>Fare</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Sub Total</th>
                                    <th>Service Charge</th>
                                    <th>Grand Total</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-4">
                    <p>Your mobile number</p>
                    <input type="text" />
                    <button>Varify</button>
                </div>
            </div>
        </section>
    );
};

export default SelectResult;