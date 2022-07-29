import React from 'react'

const PaymentCard = ({date, heading, subHeading, device, logo, color}) => {

  const divStyle = {
    backgroundColor: color,
  };

  return (
    <div className='cart' style={divStyle}>
      <div className='cart-1'>
        <h3>{date}</h3>
        <span>{heading}</span>
        <h1>{subHeading}</h1>
        <h3>{device}</h3>
      </div>
      <div className='cart-2'>
        <img src={logo} alt='' />
        <div>&#8594;</div>
      </div>
    </div>
  )
}

export default PaymentCard