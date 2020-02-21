import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './about.css'
import Nav from '../../components/Nav/Nav'
export default class About extends Component {
    
    state = {
        nav:null
    }

   navStyles={
        display:"block",
        width:"100%",
    }

     toggleNav = ( )=>{
         if(this.state.nav==null || this.state.nav.display=="none"){
        this.setState({nav:this.navStyles})
         }else{
             this.setState({nav:{display:"none"}})
         }
    }
    render() {

        

      
       
        return (
            <div className='page-wrapper'>
               <Nav navStyles={this.state.nav} toggleNav={this.toggleNav}></Nav>
                <div className='main-content'> 
                <img  src="./hamb.png" onClick={this.toggleNav}className={"hamb"}></img>
                    <div className="bio-heading">
                     
                        <h1>Hello my name is <span className="highlight">Tayo Adegoke</span>, I am a <span className={"highlight"}>full stack developer</span> from Lagos, Nigeria. </h1>
                        <Link to="/projects"><button className="btn">View My Projects</button></Link>
                    </div>
                </div>

                
            </div>
        )
    }
}
