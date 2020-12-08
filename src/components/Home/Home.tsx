import React from 'react';
import './Home.css'

const Home = () => {
    const searchBuses = (e: any) => {
        e.preventDefault()
        alert('Hi')
    }
    return (
        <section className="home d-flex justify-content-center">
            <form onSubmit={searchBuses} className="w-75 d-flex justify-content-around">
                <select name="locationFrom" id="">
                    <option className="d-none">Select Location From</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="rajshahi">Rajshahi</option>
                </select>
                <select name="locationTo" id="">
                    <option className="d-none">Select Location To</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="rajshahi">Rajshahi</option>
                </select>
                <input type="date" />
                <input type="date" />
                <input type="submit" value="Search Buses" />
            </form>
        </section>
    );
};

export default Home;