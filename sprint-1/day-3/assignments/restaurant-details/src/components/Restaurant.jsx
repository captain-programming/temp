import React from 'react'

const Restaurant = ({restaurant}) => {
    // console.log(restaurant)
  return (
    <div className='card'>
        <div className='card-part1'>
            <img src={restaurant.image} alt=""/>
            <div className='restaurant-details'>
                <div className='restaurant-name'><h2>{restaurant.name}</h2></div>
                <div className='restaurant-category'>{restaurant.category.join(", ")}</div>
                <div className='cost-for-two'>{`cost ₹ ${restaurant.costfortwo} for two`}</div>
                <div className='delevery-timing'>
                    Min ₹50 <li>Up to {restaurant.deliveryTimings}</li>
                </div>
                <div>Accepts online payments only</div>
                <div>{restaurant.offer.join(" | ")}</div>
            </div>
            <div className='rating'> &#9733; {restaurant.rating}</div>
        </div>
        <div className='card-part2'>
            Order Online   &gt;
        </div>
    </div>
  )
}

export default Restaurant