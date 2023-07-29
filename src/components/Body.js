import RestaurantCard from "./RestaurantCard";
import BodyShimmerUI from "./BodyShimmerUI";
import mockRestaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurantList, setfilteredrestaurantList] = useState([]);
  // We can show the cards info dynamically using below 2 approaches:
  // 1. Page loads --> call the API and once data is received --> render the component and display
  // 2. page loads --> components render --> Then call API --> once data is received then render the component again

  // useEffect will be called when the component renders (page loads --> components render --> This triggers the useEffect --> once data is received then component will rerender as state is changed)
  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(
      // fetch API is the superpower given by browser to JS engine
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const fetchedRestaurants = await data.json();
    setfilteredrestaurantList(
      fetchedRestaurants?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setrestaurantList(
      fetchedRestaurants?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    ); //?. is optional chaining - Explore about this
  };

  const top_rated_onClick = () => {
    setfilteredrestaurantList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4.1)
    );
  };

  const search = () => {
    setfilteredrestaurantList(
      restaurantList.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const updateInput = (e) => {
    setSearchText(e.target.value);
  };
  // Lets create shimmer component untill the restaurantList is updated with called API data
  // Read more about shimmer UI in the readme section
  // if (restaurantList.length === 0) {
  // Note that we don't have to write else statement for this if because below return statement will exit this functions execution context
  // Always remember that body is react component which is expected to return only object
  // And this is also called conditional rendering (redering based on conditions)
  return filteredrestaurantList.length === 0 ? ( // Used ternary operator
    <div className="body">
      <div className="filters">
        <input
          type="search"
          id="search"
          name="search"
          value={searchText}
          onChange={updateInput}
        ></input>
        <button className="search" onClick={search}>
          Search
        </button>
        <button className="top-rated-filter-btn" onClick={top_rated_onClick}>
          Select Top Rated Restaurants
        </button>
      </div>
      <div className="shimmer-container">
        {/* Note that you cannot use for loop inside JSX as JSX expects inside of it to return object(react element) but for loop returns nothing just iterates while map can return values hence we can use map but not for loop inside JSX */}
        <BodyShimmerUI />
      </div>
    </div>
  ) : (
    // }
    <div className="body">
      <div className="filters">
        <input
          type="search"
          id="search"
          name="search"
          value={searchText}
          onChange={updateInput}
        ></input>
        <button className="search" onClick={search}>
          Search
        </button>
        <button className="top-rated-filter-btn" onClick={top_rated_onClick}>
          Select Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredrestaurantList.map((restaurant) => (
          <Link to={"/restMenu/"+restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
