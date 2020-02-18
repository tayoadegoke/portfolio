import React, { Component } from 'react'
import './work.css'
export default class Work extends Component {
    render() {
        return (
            <div className='page-wrapper'>
            <div className='side-bar'>
                
               <h1>ghfhfh</h1>    
            </div>
            <div className='main-content'> 
                <div className="bio-heading">
                    <h1 style={{textAlign:"center", fontSize:"42px"}}>My Work
                    </h1>
                   
                </div>
                <div className ="project">
                    <div className="project1" >
                        
                        <h3 className="project-headings">Loanchief</h3>
                        <div>
                            <img className={"project-pic"} src="./gitav.jpeg"></img>
                        </div>
                       
                        <p>hello from the other side</p>
                    </div>
                    <div className="project2">
                        
                        <h3 className="project-headings">Loanchief</h3>
                        <div>
                            <img className={"project-pic"} src="./gitav.jpeg"></img>
                        </div>
                       
                        <p>hello from the other side</p>
                    </div>
                    <div className="project3">
                         <h3 className="project-headings">Loanchief</h3>
                         <div>
                            <img className={"project-pic"} src="./gitav.jpeg"></img>
                        </div>
                       
                        <p>hello from the other side, to youohohohohdofodhfoufofudoufou</p>
                       
                    </div>
                </div>
            </div>

            
        </div>
        )
    }
}
