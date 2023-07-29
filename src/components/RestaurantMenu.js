import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantMenuList, setRestaurantMenuList] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + restaurantId);
    const RestaurantMenuData = await data.json();
    console.log(
      RestaurantMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[2]?.card?.card?.itemCards
    );
    setRestaurantMenuList(
      RestaurantMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[2]?.card?.card?.itemCards
    );
  };
  if (restaurantMenuList.length !== 0) {
    return (
      <div>
        <h1>This the Menu of Restaurant</h1>
        <div className="restaurantMenuList">
          {restaurantMenuList.map((menu) => (
            <li key={menu.card.info.id}>{menu.card.info.name}</li>
          ))}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
