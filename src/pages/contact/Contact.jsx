import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Nav from '../../components/Nav/Nav'
export default class About extends Component {
    
    state = {
        nav:null
    }

   navStyles={
        display:"block",
        left: "0",
        transition: "all 0.5s",
        width: "100%"
       
    }

    navStylesclose = {
        left:"-600px",
        transition:"all 0.5s"
    }

     toggleNav = ( )=>{
         if(this.state.nav==null || this.state.nav==this.navStylesclose){
        this.setState({nav:this.navStyles})
         }else if(this.state.nav == this.navStyles){
             this.setState({nav:this.navStylesclose})
         }
    }
    render() {

        

      
       
        return (
            <div className='page-wrapper'>
               <Nav navStyles={this.state.nav} toggleNav={this.toggleNav}active={"contact"}></Nav>
                <div className='main-content'> 
                <img  src="./hamb.png" onClick={this.toggleNav}className={"hamb"}></img>
                    <div className="bio-heading">
                     
                        <h1>Got something Interesting? <span className="highlight">Let's Chat</span></h1>
                      
                        <div style={{marginLeft:"10%", display:"flex"}}>
                            <div>
                                <a href= "mailto: omotayoadegoke19@gmail.com"><img  className="contactimg"src="./mail.png"></img></a>
                            </div>
                            <div>
                               <a target = "_blank" href = "https://ng.linkedin.com/in/omotayo-adegoke-33a3a3120"><img  className="contactimg"src="./linkedin.png"></img></a> 
                            </div>
                            <div>
                               <a target = "_blank" href = "https://github.com/notthattayo"> </a> <img  className="contactimg"src="./github.png"></img>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}
