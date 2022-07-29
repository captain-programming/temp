import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
    // console.log(prop)
  return (
    <div className='container'>
        {props.data.map((restaurant)=>
            <Restaurant key={restaurant.id} restaurant={restaurant} />
        )}
    </div>
  )
}

export default Restaurants