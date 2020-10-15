import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './style.css'
import {FaDownload, FaArrowLeft, FaArrowRight, FaBars, FaHome, FaLinkedinIn,
    FaInstagram, FaFacebookF, FaTwitter, FaGithub} from 'react-icons/fa'
import StateContext from "./context/StateContext"
var profile = require("./dp.jpg")
var GTAccount = require("./assets/shopwyse/shopwyse1.jpg")
var AutoResponse = require("./assets/shopwyse/shopwyse8.jpg")
var video1 = require("./assets/video.mp4")
var video2 = require("./assets/video.webm")







const Portfolio = () => { 

    const {state, NavigateMe} = useContext(StateContext)

    const [info, setInfo] = useState({project: 0, total: 2})
    const history = useHistory()

    function nextProjects() {
        setInfo({...info, project: info.project + 1})
        if(info.project + 1 === info.total){
            document.querySelector(".more").style.display = "none"
            document.querySelector(".back").style.display = "inline-block"
        }
        else{
            document.querySelector(".back").style.display = "inline-block"
        }
    }

    function prevProjects() {
        
        setInfo({...info, project: info.project - 1})
        if (info.project - 1 === 0){
            document.querySelector(".back").style.display = "none"
            document.querySelector(".more").style.display = "inline-block"
        }
        else{
            document.querySelector(".back").style.display = "inline-block"
            document.querySelector(".more").style.display = "inline-block"
        }
    }

    
    let projectArray = [
    <div>
        <div className="content__info--project">
            <img src={GTAccount} alt="" className="content__info--project-image"/>
            <div className="content__info--project-text">
                <a href="https://gtaccount.herokuapp.com" target="_blank" className="content__info--project-text-link">GT Account Opening App</a>
                    <p className="content__info--project-text-note">
                        This is a web application designed for prospective GTBank's customers to open 
                        an account in less than 3 minutes.
                    </p>
            </div>
        </div>

        <div id="good" className="content__info--project">
            <img src={AutoResponse} alt="" className="content__info--project-image"/>
            <div className="content__info--project-text">
                <a href="https://gtautoresponse.herokuapp.com" target="_blank" className="content__info--project-text-link">APIC's Auto Response Mail Platform</a>
                    <p className="content__info--project-text-note">
                        This platform allows GTBank staff to personalize and send already written mails to developers 
                        registered on GTBank developers' portal.
                    </p>
            </div>
        </div>

        <div id="good" className="content__info--project">
            <img src={AutoResponse} alt="" className="content__info--project-image"/>
            <div className="content__info--project-text">
                <a href="https://fintechdataencryption.herokuapp.com" target="_blank" className="content__info--project-text-link">Encryption Engine</a>
                    
                    <p className="content__info--project-text-note">
                        This is a web app that allows users to encrypt their data when consuming an API.
                    </p>
            </div>
        </div>
    </div>,

<div>
<div className="content__info--project">
    <img src={GTAccount} alt="" className="content__info--project-image"/>
    <div className="content__info--project-text">
        <a href="https://gtaccount.herokuapp.com" target="_blank" className="content__info--project-text-link">GT Account Opening App</a>
            <p className="content__info--project-text-note">
                This is a web application designed for prospective GTBank's customers to open 
                an account in less than 3 minutes.
            </p>
    </div>
</div>

<div id="good" className="content__info--project">
    <img src={AutoResponse} alt="" className="content__info--project-image"/>
    <div className="content__info--project-text">
        <a href="https://gtautoresponse.herokuapp.com" target="_blank" className="content__info--project-text-link">APIC's Auto Response Mail Platform</a>
            <p className="content__info--project-text-note">
                This platform allows GTBank staff to personalize and send already written mails to developers 
                registered on GTBank developers' portal.
            </p>
    </div>
</div>

<div id="good" className="content__info--project">
    <img src={AutoResponse} alt="" className="content__info--project-image"/>
    <div className="content__info--project-text">
        <a href="https://fintechdataencryption.herokuapp.com" target="_blank" className="content__info--project-text-link">Encryption Engine2</a>
            
            <p className="content__info--project-text-note">
                This is a web app that allows users to encrypt their data when consuming an API.
            </p>
    </div>
</div>
</div>,

<div>
<div className="content__info--project">
    <img src={GTAccount} alt="" className="content__info--project-image"/>
    <div className="content__info--project-text">
        <a href="https://gtaccount.herokuapp.com" target="_blank" className="content__info--project-text-link">GT Account Opening App</a>
            <p className="content__info--project-text-note">
                This is a web application designed for prospective GTBank's customers to open 
                an account in less than 3 minutes.
            </p>
    </div>
</div>

<div id="good" className="content__info--project">
    <img src={AutoResponse} alt="" className="content__info--project-image"/>
    <div className="content__info--project-text">
        <a href="https://gtautoresponse.herokuapp.com" target="_blank" className="content__info--project-text-link">APIC's Auto Response Mail Platform</a>
            <p className="content__info--project-text-note">
                This platform allows GTBank staff to personalize and send already written mails to developers 
                registered on GTBank developers' portal.
            </p>
    </div>
</div>

<div id="good" className="content__info--project">
    <img src={AutoResponse} alt="" className="content__info--project-image"/>
    <div className="content__info--project-text">
        <a href="https://fintechdataencryption.herokuapp.com" target="_blank" className="content__info--project-text-link">Encryption Engine3</a>
            
            <p className="content__info--project-text-note">
                This is a web app that allows users to encrypt their data when consuming an API.
            </p>
    </div>
</div>
</div>
    
    ]
    var used = projectArray[info.project]

    const image = [require("./assets/shopwyse/shopwyse1.jpg"), require("./assets/shopwyse/shopwyse2.jpg"), require("./assets/shopwyse/shopwyse3.jpg"),
    require("./assets/shopwyse/shopwyse4.jpg"), require("./assets/shopwyse/shopwyse5.jpg"), require("./assets/shopwyse/shopwyse6.jpg"),
    require("./assets/shopwyse/shopwyse7.jpg"), require("./assets/shopwyse/shopwyse8.jpg"), require("./assets/shopwyse/shopwyse9.jpg"),
    require("./assets/shopwyse/shopwyse10.jpg"), require("./assets/shopwyse/shopwyse11.jpg"), require("./assets/shopwyse/shopwyse12.jpg"),
    require("./assets/shopwyse/shopwyse13.jpg"), require("./assets/shopwyse/shopwyse14.jpg"), require("./assets/shopwyse/shopwyse15.jpg"),
    require("./assets/shopwyse/shopwyse16.jpg"), require("./assets/shopwyse/shopwyse17.jpg"), require("./assets/shopwyse/shopwyse18.jpg"),]
    
    return (
        <div className="container">
            <div className="header">
                <div className="header__logo"><p onClick={()=>history.push("/Apk")}>RK</p></div>
                <div className="header__button">
                    <a className="header__button--btn" >ABOUT</a>
                    <a href="#good" className="header__button--btn">PROJECTS</a>
                    <a className="header__button--btn">BLOG</a>
                    <a className="header__button--btn">CONTACT</a>
                </div>
                
                <div class="navigation">
                    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
                    <label for="navi-toggle" class="navigation__button">
                        {/* <span class="navigation__icon navigation__move-1">&nbsp;</span>
                        <span class="navigation__icon navigation__move-2">&nbsp;</span> */}
                        
                        <a href="#navi-toggle" className="navigation__move-1"><FaBars size={30} /></a>
                        <a href="#" className="navigation__move-2"><FaHome size={30}/></a>
                       
                    </label>

                    <div class="navigation__background">&nbsp;</div>
                    <nav class="navigation__nav">
                        <ul class="navigation__list">
                            <li class="navigation__item"><a href="#" class="navigation__link">About</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Project</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Blog</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            
            <div className="header_container">
                <p className="header_container--name">Ridwan Kolawole</p>
                <i className="header_container--profession">Software Engineer</i>
                <img src={profile} alt="profile photo" className="header_container--image"/>
                <div className="header_container--message">
                    <p className="header_container--info">Hi, this site is my online portfolio.</p>
                    <p className="header_container--info">
                        I am a specialist in web application development and mobile application development.
                    </p>
                    <p className="header_container--info">
                        I have passion for science, knowledge, working on projects and i love coding.
                    </p>
                </div>
            </div>

            <section className="content-body">
            <div className="content">    
                <div className="content__info content__info--left">
                    <h2 className="content__info-subtitle">Briefly about me</h2>
                    <ul className="content__info--list">
                        <li>1+ years of professional expertise in the IT industry</li>
                        <li>Experience in React.js and Node.js scripting languages</li>
                        <li>Solid experience in Javascript, C++, C and Python programming languages </li>
                        <li>Rich expertise in Mobile App Development: React-Native, Node and Mongodb</li>
                        <li>Rich expertise in Web development: React, Node, template(handlebars), Mongodb</li>
                    </ul>
                    <div className="content__info--download"><FaDownload style={{marginRight: "1rem"}}/><a >Download CV</a></div>
                </div>
                <div className="content__info content__info--right">
                    <h2 className="content__info-subtitle">Projects</h2>
                    {/* <div className="content__info--project">
                        <img src={GTAccount} alt="" className="content__info--project-image"/>
                        <div className="content__info--project-text">
                            <a href="https://gtaccount.herokuapp.com" target="_blank" className="content__info--project-text-link">GT Account Opening App</a>
                            <ul style={{listStyle: "none"}} className="content__info--project-text-list2">
                            <li className="content__info--project-text-note">This is a web application designed for prospective GTBank's customers </li>
                            <li className="content__info--project-text-note">to open an account in less than 3 minutes.</li>
                            </ul>
                        </div>
                    </div>

                    <div id="good" className="content__info--project">
                        <img src={AutoResponse} alt="" className="content__info--project-image"/>
                        <div className="content__info--project-text">
                            <a href="https://gtautoresponse.herokuapp.com" target="_blank" className="content__info--project-text-link">APIC's Auto Response Mail Platform</a>
                            <ul style={{listStyle: "none"}} className="content__info--project-text-list2">
                            <li className="content__info--project-text-note">This platform allows GTBank staff to personalize and send already </li>
                            <li className="content__info--project-text-note">written mails to developers registered on GTBank developers' </li>
                            <li className="content__info--project-text-note">portal.</li>
                            </ul>
                        </div>
                    </div>

                    <div id="good" className="content__info--project">
                        <img src={AutoResponse} alt="" className="content__info--project-image"/>
                        <div className="content__info--project-text">
                            <a href="https://fintechdataencryption.herokuapp.com" target="_blank" className="content__info--project-text-link">Encryption Engine</a>
                            <ul style={{listStyle: "none"}} className="content__info--project-text-list2">
                            <li className="content__info--project-text-note">This is a web app that allows users to encrypt their data</li>
                            <li className="content__info--project-text-note">when consuming an API.</li>
                            </ul>
                        </div>
                    </div> */}
                    {used}

                    <div className="content__info--more_projects back" style={{marginRight: "20px", display: "none"}} onClick={()=>prevProjects()}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <FaArrowLeft size={11} style={{marginRight: ".5rem"}}/>
                            <a>Back</a>
                        </div>
                    </div>
                    <div className="content__info--more_projects more" style={{display: info.more}} onClick={()=>nextProjects()}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <a>More Projects</a>
                            <FaArrowRight size={11} style={{marginLeft: ".5rem"}}/>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>

            <section className="main-project">
                <div class="bg-video">
                    <video class="bg-video__content" autoPlay={true} muted loop>
                        <source src={video1} type="video/mp4"/>
                        <source src={video2} type="video/webm"/>
                            Your browser is not supported!
                    </video>
                </div>

                <div className="main-project__info">
                    <h2 className="main-project__info-title">Project Details</h2>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a>Shopwyse</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        Shopwyse is an e-commerce mobile app that makes buying and selling easy for both 
                                        sellers and buyers.  
                                    </p>
                                    <p>
                                        Buyers can order and add goods to their cart, they can see all orders made, 
                                        the status of their orders and they can also call and chat with the
                                        seller in-app.
                                    </p>
                                    <p>
                                        Sellers can see all orders made by buyers, they can see and edit their 
                                        uploaded goods, and they can also call and chat with buyersin-app. 
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end and back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native, Node.js, Web Socket, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <div><a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image)}>Project Screnshoots</a></div>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a>Email Servive Platform</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                       This is a web application that allows GTBank staff to personalize and 
                                       send already written mails to developers registered on GTBank developers' portal.
                                    </p>
                                    <p>
                                        The written mails are Invitation mail, Auto-response mail, API price list mail
                                        and Approval mail.
                                    </p>
                                   
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;GTBank Staff only
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;GTBank
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React.js, Node.js, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a href="#" className="main-project__info-story-screenshots">Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a>Thinklex</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        Thinklex is a mobile app built for Engineering students.
                                    </p>
                                    <p>
                                        The app contains a scientific calculator, four equations with four unknowns 
                                        solver S.I units, prefixes and Engineering formulas and how they are used.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native
                                </p>
                               
                            </div>
                        </div>

                        <a href="#" className="main-project__info-story-screenshots">Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a>Thinklex</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        Thinklex is a mobile app built for Engineering students.
                                    </p>
                                    <p>
                                        The app contains a scientific calculator, four equations with four unknowns 
                                        solver S.I units, prefixes and Engineering formulas and how they are used.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native
                                </p>
                               
                            </div>
                        </div>

                        <a href="#" className="main-project__info-story-screenshots">Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a>Thinklex</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        Thinklex is a mobile app built for Engineering students.
                                    </p>
                                    <p>
                                        The app contains a scientific calculator, four equations with four unknowns 
                                        solver S.I units, prefixes and Engineering formulas and how they are used.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native
                                </p>
                               
                            </div>
                        </div>

                        <a href="#" className="main-project__info-story-screenshots">Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a>Thinklex</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        Thinklex is a mobile app built for Engineering students.
                                    </p>
                                    <p>
                                        The app contains a scientific calculator, four equations with four unknowns 
                                        solver S.I units, prefixes and Engineering formulas and how they are used.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native
                                </p>
                               
                            </div>
                        </div>

                        <a href="#" className="main-project__info-story-screenshots">Project Screnshoots</a>
                      </div>
                    </div>

                </div>
            </section>

            {/* <section>
                <p className="contact-me"><span className="childish">My name</span></p>
            </section> */}

            <section className="footer">
                <div className="footer-brand">
                    <img src={require("./assets/rhydhur-logo.png")} className="footer-brand-logo" />
                    {/* <a href="#" className="footer-brand-link"><p className="footer-brand-link-text">rhydhur-tech.herokuapp.com</p></a> */}
                </div>
                <div className="footer__connect">
                    <div className="footer__connect-one">
                        <p className="footer__connect-one-heading">Contacts</p>
                        <ul className="footer__connect-one-info">
                            <li><a href="#" className="footer__connect-one-info-link">Email: olaniyi.jibola152@gmail.com</a></li>
                            <li><a href="#" className="footer__connect-one-info-link">Mobile: 07087994127</a></li>
                            <li><a href="#" className="footer__connect-one-info-link">Phone No: 08156170991</a></li>
                        </ul>
                    </div>

                    <div className="footer__connect-two">
                        <p className="footer__connect-one-heading">Social</p>
                        <div className="footer__connect-two-info">
                            <a href="#" className="footer__connect-two-info-linkedin">
                                <FaLinkedinIn className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="#" className="footer__connect-two-info-instagram">
                                <FaInstagram className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="#" className="footer__connect-two-info-facebook">
                                <FaFacebookF className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="#" className="footer__connect-two-info-twitter">
                                <FaTwitter className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="#" className="footer__connect-two-info-github">
                                <FaGithub className="footer__connect-two-info-icon" size={25}/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer__copywrite">
                    <p className="footer__copywrite-text">&copy; Ridwan Kolawole</p>
                </div>
            </section>
        </div>
    )
}

export default Portfolio