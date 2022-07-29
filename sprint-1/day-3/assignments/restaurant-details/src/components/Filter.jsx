import React from 'react'

const Filter = ({restaurantData}) => {
  const handleFilter1 = ()=>{
    
    const filterArr = restaurantData.filter((key) =>{
      return key.rating > 3;
    })

    // console.log(restaurantData)
    console.log(filterArr);
  }
  return (
    <div className='navbar'>
        <button onClick={handleFilter1}>Star 1</button>
    </div>
  )
}

export default Filter