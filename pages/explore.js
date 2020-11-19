// pages/explore.js
import React from "react";
import {useState, useEffect, Component} from "react";
import Layout from "../components/Layout";
import stud from "../data/stud";
import "../components/scss/explore.scss"

export const ExploreView = () => {

    const [stud, setStud] = useState([]);

    useEffect(() => {
        const city = localStorage.getItem("city");
        fetch("http://localhost:3000/api/stud", {
        // fetch("http://localhost:3000/api/stud?city="+city, {
            headers: {
                "Content-Type": "Application/json"
            }
        })
            .then(r => r.json())
            .then(value => {
                // filter
                let newStud = value.filter(function (place) {
                    return place.city == city;
                })

                setStud(newStud)
            })
        ;
    }, []);


    return (
        <Layout>
            <div className="layout-container">
                <ul className="explore-container">
                    {
                        stud.length === 0
                            ? 'Wczytywanie...'
                            : stud.map(stud => <div className="result">
                                <li> - {stud.name} {stud.city} ul. {stud.address}</li>
                            </div>)
                    }
                </ul>
            </div>

        </Layout>
    )

}
// Usefecct, map, state

export default ExploreView;
