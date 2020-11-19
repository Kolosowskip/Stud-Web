// pages/index.js
import Link from "next/link";
import React, {useState, Component} from "react";
import Layout from "../components/Layout";
import Router from "next/router";


// export const Index = () => {
//     const [input, setInput] = useState('');


// class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {city: ''}
//     }
//
//     handleSubmit = (e) => {
//         this.setState({city: e.target.value})
//         // e.preventDefault()
//         // localStorage.setItem('city', 'Krakow');
//         console.log('submit');
//     }


class Index extends Component {
    state = {
        city: ""
    };

    handleNameChange = e => {
        this.setState({
            city: e.target.value
        });
    };





    handleSubmit = (e) => {
      //  this.setState({city: e.target.value})
        e.preventDefault()
        localStorage.setItem('city', this.state.city);
        console.log('submit');

        Router.push("/explore");
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <label className="search-container">
                        <h3>SZUKAJ STAJNI</h3>
                        <input type="text"
                               city="city"
                               value={this.state.name}
                               onChange={this.handleNameChange}/>
                    </label>
                    <input type="submit" value="Wyślij"/>
                </form>
            </Layout>
        );

    }

}


// render()
// {
//     return (
//
//         <Layout>
//
//             <form>
//
//                 <label>
//                     Znajdź swoje miejsce do jazdy konnej
//                     <input type="text" city="city"/>
//                 </label>
//                 <input type="submit" value="Wyślij" onChange={this.handleSubmit}/>
//
//             </form>
//         </Layout>
//
//     )
//         ;
// }
//
// }


export default Index;

// <p>Znajdź swoje miejsce do jazdy konnej</p>
// <input type={"search"} placeholder={"Miasto"}/>
// <button type={"submit"}>Szukaj</button>