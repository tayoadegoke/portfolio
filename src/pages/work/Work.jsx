import React, { Component } from 'react'
import './work.css'
import Nav from '../../components/Nav/Nav'
export default class Work extends Component {
    render() {
        return (
            <div className='page-wrapper'>
            <Nav></Nav>
            <div className='main-content'> 
                <div className="bio-heading">
                    <h1 style={{textAlign:"center", fontSize:"42px", }}><span style={{borderBottom:"solid 3px #1565c0"}}>My Work</span>
                    </h1>
                   
                </div>
                <div className ="project">
                    <div className="project1" >
                        
                       
                        <div>
                           {/* <img className={"project-pic"} src="./logo-alt2.png"></img>*/}
                        </div>
                        <h3 className="project-headings">Loanchief</h3>
                        
                    </div>
                    <div className="project2">
                        
                        
                        <div>
                           {/*} <img className={"project-pic"} src="./logo.png"></img>*/}
                        </div>
                        <h3 className="project-headings">Instacare</h3>
                       
                    </div>
                    <div className="project3">
                        
                         <div>
                           {/* <img className={"project-pic"} src="./gitav.jpeg"></img>*/}
                        </div>
                        <h3 className="project-headings">Real Estate</h3>
                       
                       
                    </div>
                </div>
            </div>

            
        </div>
        )
    }
}
