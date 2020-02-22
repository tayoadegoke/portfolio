import React, { Component } from 'react'
import './work.css'
import Nav from '../../components/Nav/Nav'
import {Link} from 'react-router-dom';
export default class Work extends Component {

    state = {
        nav:null
    }

   navStyles={
        display:"block",
        left: "0",
        transition: "all 0.5s",
        width:"100%",
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
             <Nav navStyles={this.state.nav} toggleNav={this.toggleNav} active={"projects"}></Nav>
            <div className='main-content'> 
            <img  src="./hamb.png" onClick={this.toggleNav}className={"hamb"}></img>
                <div>
                    <h1 style={{textAlign:"center", fontSize:"42px", }}><span>Projects</span>
                    </h1>
                   
                </div>
               {/*} <div className ="project">
                   <div className={"project-description"}>
                        <h3 className="project-headings"> 
                           Mi Casa - <span style={{fontSize:"0.8em"}}>(2020)</span>
                           
                        </h3>
                        <p>A real estate app that allows users buy or rent apartments</p>

                        <h3>Technologies</h3>
                        <ul>
                            <li>React</li>
                            <li>Ant Design</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Graph Ql</li>
                            
                        </ul>
                   </div>
                    <div className={"project-img"}>
                        <img className={"project-pic"}src="./loanchiefscreen.png"></img>
                    </div>
                </div>
                <div className ="project">
                   <div className={"project-description"}>
                        <h3 className="project-headings"> 
                           Mi Casa - <span style={{fontSize:"0.8em"}}>(2020)</span>
                           
                        </h3>
                        <p>A real estate app that allows users buy or rent apartments</p>

                        <h3>Technologies</h3>
                        <ul>
                            <li>React</li>
                            <li>Ant Design</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Graph Ql</li>
                            
                        </ul>
                   </div>
                    <div className={"project-img"}>
                        <img className={"project-pic"}src="./loanchiefscreen.png"></img>
                    </div>
                </div>*/}
                
                <div className ="project">
                   <div className={"project-description"}>
                        <h3 className="project-headings"> 
                           Loanchief - <span style={{fontSize:"0.8em"}}>(2019)</span>
                           
                        </h3>
                        <p>An app that allows users apply for loans and pay back over a period</p>

                        <h3>Technologies</h3>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Ant Design</li>
                            <li>Sass</li>
                            <li>Formelo</li>
                           
                        </ul>
                        <a  target="_blank" href="https://www.loanchief.com.ng" ><button className={"demo-btn"}>View Demo</button></a>
                   </div>
                    <div className={"project-img"}>
                        <img className={"project-pic"}src="./loanchiefscreen.png"></img>
                    </div>
                </div>
                <div className ="project">
                   <div className={"project-description"}>
                        <h3 className="project-headings"> 
                           Instacare - <span style={{fontSize:"0.8em"}}>(2019)</span>
                           
                        </h3>
                        <p>An app that allows users find and compare health plans. I worked on this project along with two other developers.</p>

                        <h3>Technologies</h3>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Ant Design</li>
                            <li>Sass</li>
                           
                            
                        </ul>
                        <a target="_blank" href="https://www.useinstacare.com" ><button className={"demo-btn"}>View Demo</button></a>
                   </div>
                    <div className={"project-img"}>
                        <img className={"project-pic"}src="./insta-page.png"></img>
                    </div>
                </div>
            </div>

            
        </div>
        )
    }
}
