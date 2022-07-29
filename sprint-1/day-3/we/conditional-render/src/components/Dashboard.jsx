import React from 'react'

const Dashboard = ({isAuth}) => {
  return (
    <div>{isAuth ? (<h1>Logged in</h1>):(<h1>Login Form</h1>)}</div>
  )
}

export default Dashboard