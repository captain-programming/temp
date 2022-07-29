
import React from "react";

const Card1 = ()=>{
    return <div>
        <h1>Mobile Operating System</h1>
        <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>
    </div>
}
const Card2 = ()=>{
    return <div>
        <h1>Mobile Manufactures</h1>
        <ul>
            <li type="square">Samsung</li>
            <li type="square">HTC</li>
            <li >Micromax</li>
            <li type="circle">Apple</li>
        </ul>
    </div>
}

export {Card1, Card2}