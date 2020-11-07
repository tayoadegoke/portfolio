import React, { Component } from 'react'
import './about.css'


export default class About extends Component {
    
    state = {
        nav:null
    }

     goTo = (id) => {
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    render() {
        return (
            <div className='page-wrapper'>
                <div className='navbar'>
                   <ul>
                       <li onClick={()=>this.goTo('home')}>Home</li>
                       <li onClick={()=>this.goTo('work')}>Projects</li>
                       <li onClick={()=>this.goTo('contact')}>Contact</li>
                   </ul>
                </div>
                <div className='main-content' id='home'> 
                {/* <img  src="./hamb.png" onClick={this.toggleNav}className={"hamb"}></img> */}
                    <div className="bio-heading">
                        <img className="profile-img" src="./gitav.jpeg"></img>
                        <h1>Hello, welcome to my portfolio. <br/> My name is <span className="highlight">Tayo Adegoke</span> and I am a <span className={"highlight"}>full stack web developer</span> from Lagos, Nigeria. </h1>
                        <button onClick={()=>this.goTo('work')} className="btn">View My Projects</button>
                    </div>
                </div>
                <div id='work'>
                <div  className='main-content'>
                <div className="bio-heading" style={{paddingTop:'4em'}}>
                  <h1 className='title'>Projects</h1>
                      <p>Below you can find links to some of my recent personal projects</p>
                   <a target = "_blank" rel="noopener noreferrer" href = "https://social-app-7a613.web.app/"> 
                       <div className='card'>
                       <h3>Twitter Clone</h3>
                       <img src="./twit.png"></img>
                    </div>
                  </a>
                </div>
                </div>
                </div>

                <div id='contact'>
                <div  className='main-content'>
                <div className="bio-heading" style={{paddingTop:'4em'}}>
                <h1 className='title'>Contact</h1>
                
                <h3>Got something Interesting? <span className="highlight">Let's Chat</span></h3>
                      
                      <div className='container-div'>
                          <div>
                              <a href= "mailto: omotayoadegoke19@gmail.com" rel="noopener noreferrer"><img  className="contactimg"src="./mail.png"></img></a>
                          </div>
                          <div>
                             <a target = "_blank" href = "https://ng.linkedin.com/in/omotayo-adegoke-33a3a3120" rel="noopener noreferrer"><img  className="contactimg"src="./linkedin.png"></img></a> 
                          </div>
                          <div>
                             <a target = "_blank" href = "https://github.com/notthattayo" rel="noopener noreferrer">  <img  className="contactimg"src="./github.png"></img></a>
                          </div>
                      </div>
                </div>
                </div>
                </div>
                
            </div>
        )
    }
}
