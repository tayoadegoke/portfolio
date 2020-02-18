import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className='page-wrapper'>
                <div className='side-bar'>
                    
                   <h1>Tayo Adegoke</h1>    
                </div>
                <div className='main-content'> 
                    <div className="bio-heading">
                        {/*<img className="profile-img" src="./gitav.jpeg"></img>*/}
                        <h1>Hello my name is Tayo Adegoke, I am a full stack developer from Lagos Nigeria. </h1>
                    </div>
                </div>

                
            </div>
        )
    }
}
