import React, { Component } from 'react'
import './resume.css'
import Nav from '../../components/Nav/Nav'
export default class Resume extends Component {
    render() {
        return (
            <div className='page-wrapper'>
            <Nav></Nav>
            <div className='main-content'> 
                <div>
                    <h1 style={{textAlign:"center", fontSize:"42px", }}><span>Résumé</span>
                    </h1>
                   
                </div>
              
                <h3 className="company-headings" style={{marginLeft:"5%"}}> 
                           Work Experience 
                           
                </h3>
                <div className ="company">
                   <div className={"company-description"}>
                      <h2>PM Global Technology Services</h2>
                      <p style={{fontSize:"1.2em"}}>Associate Software Engineer <span className={"dates"}>(Aug 2019 - Present)</span> </p>
                       
                       <h4> Duties</h4>
                       <ul className="duties-list">
                           <li>Built out User Interfaces for front end web applications using React</li>
                           <li>Built a REST API using Node and Express, that integrated with client's API's and automatically moved data from the company's database to clients databases</li>
                           <li>Gave Technical Support to clients regarding making calls to the API and Data Integration</li>
                       </ul>
                   </div>
                    <div className={"company-img"}>
                  
                    <img className={"company-pic"}src="./pm-logo.png"></img>
                    </div>
                </div>


                <h3 className="company-headings" style={{marginLeft:"5%"}}> 
                           Education 
                           
                </h3>
                <div className ="company">
                   <div className={"company-description"}>
                      <h2>ALC Grow With Google</h2>
                      <p style={{fontSize:"1.2em"}}>Mobile Web Track <span className={"dates"}> (June 2019 - Sept 2019)</span> </p>
                       <p style={{fontSize:"0.9em", lineHeight:"20px"}}>Grow with Google has sponsored 30,000 developers in Africa to receive education from Pluralsight, supported by the Andela Learning Community. I was privileged to receive a scholarship to study in the Mobile Web Specialist Track while solving code challenges and being mentored by industry professionals.</p>
                   </div>
                    <div className={"company-img"}>
                  
                    <img className={"company-pic"}src="./alc.png"></img>
                    </div>
                </div>
                <div className ="company">
                   <div className={"company-description"}>
                      <h2>Bells University Of Technology</h2>
                      <p>B.Tech Electrical Electronics Engineering <span className={"dates"}>(2012-2017)</span> </p>
                   </div>
                    <div className={"company-img"}>
                  
                    <img className={"company-pic"}src="./bells.jpg"></img>
                    </div>
                </div>
               
               
            </div>
            
            
        </div>
        )
    }
}
