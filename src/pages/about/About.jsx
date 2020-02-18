import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './about.css'
import Nav from '../../components/Nav/Nav'
export default class About extends Component {
    render() {
        return (
            <div className='page-wrapper'>
               <Nav></Nav>
                <div className='main-content'> 
                    <div className="bio-heading">
                     
                        <h1>Hello my name is <span className="highlight">Tayo Adegoke</span>, I am a <span className={"highlight"}>full stack developer</span> from Lagos, Nigeria. </h1>
                        <button className="btn">View My Projects</button>
                    </div>
                </div>

                
            </div>
        )
    }
}
