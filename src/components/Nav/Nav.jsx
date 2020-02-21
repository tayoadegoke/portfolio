import React, { Component } from 'react'
import './nav.css';
import {Link} from 'react-router-dom'
export default class Nav extends Component {
    
   
    render() {
        console.log(this.props.navStyles)
        return (
           
                <div className='side-bar' style={this.props.navStyles}>
                    <img  src="./hamb.png" onClick={this.props.toggleNav}className={"hamb"}></img>
                   {/*<h1>Logo</h1>  */}
                   {<img className="profile-img" src="./gitav.jpeg"></img>}
                   <ul>
                      <Link to="/"><li className="active">About</li></Link>
                      <Link to="/projects"><li>Projects</li></Link>
                      <Link to="/resume"><li>Résumé</li></Link>
                      <Link to="/"><li>Contact</li></Link>
                    
                   </ul>  
                </div>
                
                
            
        )
    }
}
