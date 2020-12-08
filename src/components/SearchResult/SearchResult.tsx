import React from 'react';
import './SearchResult.css'
import searchData from './searchData';

const SearchResult = () => {
    const viewSeat = (id: any) => {
        console.log(id);
        JSON.stringify(localStorage.setItem("seat", id))
        JSON.stringify(localStorage.setItem("Router", "SelectResult"))
    }

    return (
        <section className="search-result">
            <table className="w-100">
                <tbody>
                    {
                        searchData.map(data => {
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
                                        <button onClick={() => viewSeat(id)}>View Seats</button><br />
                                        <span>Cancellation Policy</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    );
};

export default SearchResult;