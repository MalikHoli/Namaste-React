import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo2.jpg";

const Header = () => (
    <div className="header">
        <img className="logo" src={logo} />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const RestaurantCard = (props) => {
    const { restaurant } = props

    const {
        name,
        cuisine,
        rate,
        DeliveryTime,
        costForTwo
    } = restaurant

    return (
        <div className="res-card">
            <div className="card-name">
                <h3>{name}</h3>
            </div>
            <div className="res-img-div">
                <img className="res-img" src="https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=1024x1024&w=is&k=20&c=YG5d5n9VuzjnSTB6s3R1vOwCykh4vpVq3oFluC6HBsk=" alt="Restaurant image" />
            </div>
            <div className="res-menu-div">
                <h4>{cuisine}</h4>
                <div className="res-info-div">
                    <h4>{rate}</h4>
                    <h4>{DeliveryTime} min</h4>
                    <h4>{costForTwo} For Two</h4>
                </div>
            </div>
        </div>
    )
};

const restaurantList = [
    {
        id: 1,
        name: "Love Birds",
        cuisine: "Biryani,South Indian,Asian",
        rate: 4.1,
        DeliveryTime: 30,
        costForTwo: 500
    },
    {
        id: 2,
        name: "Benni Dosa",
        cuisine: "Chinese,North Indian,Asian",
        rate: 4.4,
        DeliveryTime: 60,
        costForTwo: 700
    },
    {
        id: 3,
        name: "Jogeshwari",
        cuisine: "South Indian,Idali,Dosa",
        rate: 4.3,
        DeliveryTime: 10,
        costForTwo: 1500
    }
]

const Body = () => (
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className="res-container">
            {
                restaurantList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                })
            }
        </div>
    </div>
);

const Applayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout />)