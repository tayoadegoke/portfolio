import React, { Component } from 'react'
import './nav.css';
import {Link} from 'react-router-dom'



export default class Nav extends Component {
    
    state = {
        about:"",
        projects:"",
        resume: "",
        contact:""
    }
    
   componentDidMount = () =>{
  if(this.props.active == "about"){
         this.setState({about:"active"})
       }else if(this.props.active == "projects"){
        this.setState({projects:"active"}) 
       }
       else if(this.props.active == "resume"){
        this.setState({resume:"active"}) 
       }
       else if(this.props.active == "contact"){
        this.setState({contact:"active"}) 
       }
   
   }
    render() {
        console.log(this.props.active)
        return (
           
                <div className='side-bar' style={this.props.navStyles}>
                    <img  src="./hamb.png" onClick={this.props.toggleNav}className={"hamb"}></img>
                   {/*<h1>Logo</h1>  */}
                   {<img className="profile-img" src="./gitav.jpeg"></img>}
                   <ul>
                      <Link to="/"><li className={this.state.about}>About</li></Link>
                      <Link to="/projects"><li className={this.state.projects}>Projects</li></Link>
                      <Link to="/resume" ><li className={this.state.resume} >Résumé</li></Link>
                      <Link to="/contact"><li className={this.state.contact}>Contact</li></Link>
                    
                   </ul>  
                </div>
                
                
            
        )
    }
}
