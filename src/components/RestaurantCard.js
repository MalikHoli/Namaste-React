import {RESTAURANT_CARD_CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const { restaurant } = props
    
    const {
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwoString
    } = restaurant?.data

    return (
        <div className="res-card">
            <div className="card-name">
                <h3>{name}</h3>
            </div>
            <div className="res-img-div">
                <img className="res-img" src={RESTAURANT_CARD_CDN_URL} alt="Restaurant image" />
            </div>
            <div className="res-menu-div">
                <h4>{cuisines.join(',')}</h4>
                <div className="res-info-div">
                    <h4>{avgRating}</h4>
                    <h4>{deliveryTime} min</h4>
                    <h4>{costForTwoString}</h4>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;