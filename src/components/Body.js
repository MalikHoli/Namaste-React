import RestaurantCard from "./RestaurantCard";
import importrestaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Note that when you use normal variables then yes bases on onClick the variable is updating but not the UI
  // To solve this problem we need react powered variable know as state variables
  /*** 
  let restaurantList2 = [
    {
      id: 1,
      name: "Love Birds",
      cuisine: "Biryani,South Indian,Asian",
      rate: 4.1,
      DeliveryTime: 30,
      costForTwo: 500,
    },
    {
      id: 2,
      name: "Benni Dosa",
      cuisine: "Chinese,North Indian,Asian",
      rate: 4.4,
      DeliveryTime: 60,
      costForTwo: 700,
    },
    {
      id: 3,
      name: "Jogeshwari",
      cuisine: "South Indian,Idali,Dosa",
      rate: 3.6,
      DeliveryTime: 10,
      costForTwo: 1500,
    },
    {
      id: 4,
      name: "KFC",
      cuisine: "Mainly Non veg",
      rate: 3.8,
      DeliveryTime: 60,
      costForTwo: 1500,
    },
    {
      id: 5,
      name: "Rohit Wadewale",
      cuisine: "Evening Snacks",
      rate: 4.1,
      DeliveryTime: 10,
      costForTwo: 150,
    },
  ];
  ***/

  // React equivalent state variable for above normal variable (go through README for more information)
  const [restaurantList2, setRestaurantList2] = useState(importrestaurantList);

  const top_rated_onClick = () => {
    setRestaurantList2(
      restaurantList2.filter((restaurant) => restaurant.rate >= 4.0)
    );
  }; 

  return (
    <div className="body">
      <div className="filters">
        <button className="top-rated-filter-btn" onClick={top_rated_onClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList2.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
