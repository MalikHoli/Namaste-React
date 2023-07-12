import {RESTAURANT_CARD_CDN_URL} from "../utils/constants"

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
                <img className="res-img" src={RESTAURANT_CARD_CDN_URL} alt="Restaurant image" />
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

export default RestaurantCard;