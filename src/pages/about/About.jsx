import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className='page-wrapper'>
                <div className='side-bar'>
                    
                   {/*<h1>Logo</h1>  */}

                   <ul>
                      <li className="active">About</li>
                      <li>Projects</li>
                      <li>Résumé</li>
                      <li>Contact</li>
                    
                   </ul>  
                </div>
                <div className='main-content'> 
                    <div className="bio-heading">
                        {<img className="profile-img" src="./gitav.jpeg"></img>}
                        <h1>Hello my name is <span className="highlight">Tayo Adegoke</span>, I am a <span className={"highlight"}>full stack developer</span> from Lagos, Nigeria. </h1>
                        <button className="btn">View My Projects</button>
                    </div>
                </div>

                
            </div>
        )
    }
}
