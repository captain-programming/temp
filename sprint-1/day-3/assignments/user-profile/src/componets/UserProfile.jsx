import React from 'react'

const UserProfile = ({userInfo}) => {
    console.log(userInfo);
  return (
    <div className='profile-card'>
        <div>
            <div className='name-title'>
                <div className='follow'><h1>{userInfo.name}</h1><button className="button">Follow</button></div>
                <h4>{userInfo.title}</h4>
            </div>
            <div className='skillset'>
                {userInfo.skillsets.map((ele)=>(
                    <div key={ele.description} className="skillset-div">
                        <img className='skillset-img' src={ele.icon} alt=""/>
                        <div>{ele.description}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className='profile-div'>
            <img className='profile-img' src={userInfo.avatar_url} alt=""/>
        </div> 
    </div>
  )
}

export default UserProfile