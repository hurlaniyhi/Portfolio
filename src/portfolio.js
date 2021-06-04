import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './style.css'
import {FaDownload, FaArrowLeft, FaArrowRight, FaBars, FaHome, FaLinkedinIn,
    FaInstagram, FaFacebookF, FaTwitter, FaGithub} from 'react-icons/fa'
import StateContext from "./context/StateContext"
//import {History} from 'react-router-dom'
var profile = require("./dp3.jpg")
var GTAccount = require("./assets/shopwyse/shopwyse1.jpg")
var AutoResponse = require("./assets/shopwyse/shopwyse8.jpg")
var video1 = require("./assets/video.mp4")
var video2 = require("./assets/video.webm")



const Portfolio = () => { 


    const {state, NavigateMe} = useContext(StateContext)

    const [info, setInfo] = useState({project: 0, total: 3})
    const history = useHistory()

    function article(){
        history.push("/articles")
    }

    function message(){
        history.push("/message")
    }

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
            <img src={require("./assets/shopwyse/shopwyse1.jpg")} alt="" className="content__info--project-image"/>
            <div className="content__info--project-text">
                <a href="https://drive.google.com/file/d/1KQqhHzfJttZCk23h_-BqibATsFUXthpr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Shopwyse</a>
                    <p className="content__info--project-text-note">
                        Shopwyse is an e-commerce mobile app that makes buying and selling easy for both 
                        sellers and buyers. 
                    </p>
            </div>
        </div>

        <div id="good" className="content__info--project">
            <img src={require("./assets/auto/auto3.jpg")} alt="" className="content__info--project-image"/>
            <div className="content__info--project-text">
                <a href="#" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">APIC's Auto Response Mail Platform</a>
                    <p className="content__info--project-text-note">
                        This platform allows GTBank staff to personalize and send already written mails to developers 
                        registered on GTBank developers' portal.
                    </p>
            </div>
        </div>

        <div id="good" className="content__info--project">
            <img src={require("./assets/gtworld.jpg")} alt="" className="content__info--project-image"/>
            <div className="content__info--project-text">
                <a href="https://play.google.com/store/search?q=gtword&c=apps" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">GTWorld</a>
                    
                    <p className="content__info--project-text-note">
                        This is a mobile app used by GTBank's customers to carry out all banking activities
                    </p>
            </div>
        </div>
    </div>,

<div>
    <div className="content__info--project">
        <img src={require("./assets/homepage.png")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://check-d-deck.herokuapp.com" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Staff Manager App</a>
                <p className="content__info--project-text-note">
                    This is an internal web app used by HR/Admin to manage departments, staff, activities, documents e.t.c.
                </p>
        </div>
    </div>

    <div id="good" className="content__info--project">
        <img src={require("./assets/oToolBox.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://play.google.com/store/apps/details?id=com.gtbank.appdev.orangetoolboxv1" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Orange Tool Box</a>
                <p className="content__info--project-text-note">
                    This is mobile app used by the GTBank's staff majorly marketers to ease banking and solving customers' issues outside the bank.
                </p>
        </div>
    </div>

    {/* href="https://cbtquiz.netlify.app" */}

    <div id="good" className="content__info--project">
        <img src={require("./assets/vSprouts.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://virtuous-sprout.herokuapp.com" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Virtuous Sprouts Academy</a>
                <p className="content__info--project-text-note">
                    Virtuous Sprouts Academy school/result portal
                </p>
        </div>
    </div>

    {/* href="https://tourandsmile.herokuapp.com" */}
</div>,

<div>
    <div className="content__info--project">
        <img src={require("./assets/thinklex/Thinklex1.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://drive.google.com/file/d/1KRUZLoBuwCXuVtVi5oxua56ho2KLxck0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Thinklex</a>
                <p className="content__info--project-text-note">
                    Thinklex is a mobile app built for Engineering students. The app contains a scientific calculator, 
                    four equations with four unknowns solver and Engineering formulas with how they are used.
                </p>
        </div>
    </div>

    <div id="good" className="content__info--project">
        <img src={require("./assets/dashboard/Dashboard1.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://gtdashboard.herokuapp.com" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Server Monitoring Dashboard</a>
                
                <p className="content__info--project-text-note">
                    This is an internal web app for monitoring servers with auto-notification and server uptime and 
                    downtime analysis.
                </p>
        </div>
    </div>

    <div className="content__info--project">
        <img src={require("./assets/encryption/encryption.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://fintechdataencryption.herokuapp.com" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Encryption Engine</a>
                <p className="content__info--project-text-note">
                    This is a web app that allows users to encrypt their data when consuming an API.
                </p>
        </div>
    </div>
</div>,

<div>
    <div id="good" className="content__info--project">
        <img src={require("./assets/path-tracker/tracker2.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://drive.google.com/file/d/1KQW0QtfZ3T0-Du18eb2y-VKrOdshukad/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Tour Tracker</a>
                <p className="content__info--project-text-note">
                    This is a mobile app that allows users to track and save the path they follow on map as they tour 
                    around the world.
                </p>
        </div>
    </div>

    <div id="good" className="content__info--project">
        <img src={require("./assets/request/request1.jpg")} alt="" className="content__info--project-image"/>
        <div className="content__info--project-text">
            <a href="https://ui-ux-request.herokuapp.com" target="_blank" rel="noopener noreferrer" className="content__info--project-text-link">Request App</a>
                
                <p className="content__info--project-text-note">
                    It is a web app which can be used by any organization to request for any service 
                    of the organization that owns the app.
                </p>
        </div>
    </div>
</div>
    
    ]
    var used = projectArray[info.project]

    const image1 = [require("./assets/shopwyse/shopwyse1.jpg"), require("./assets/shopwyse/shopwyse2.jpg"), require("./assets/shopwyse/shopwyse3.jpg"),
    require("./assets/shopwyse/shopwyse4.jpg"), require("./assets/shopwyse/shopwyse5.jpg"), require("./assets/shopwyse/shopwyse6.jpg"),
    require("./assets/shopwyse/shopwyse7.jpg"), require("./assets/shopwyse/shopwyse8.jpg"), require("./assets/shopwyse/shopwyse9.jpg"),
    require("./assets/shopwyse/shopwyse10.jpg"), require("./assets/shopwyse/shopwyse11.jpg"), require("./assets/shopwyse/shopwyse12.jpg"),
    require("./assets/shopwyse/shopwyse13.jpg"), require("./assets/shopwyse/shopwyse14.jpg"), require("./assets/shopwyse/shopwyse15.jpg"),
    require("./assets/shopwyse/shopwyse16.jpg"), require("./assets/shopwyse/shopwyse17.jpg"), require("./assets/shopwyse/shopwyse18.jpg"),]
    
    const image2 = [require("./assets/auto/auto1.jpg"), require("./assets/auto/auto2.jpg"), require("./assets/auto/auto3.jpg"),
    require("./assets/auto/auto4.jpg"), require("./assets/auto/auto5.jpg"), require("./assets/auto/auto6.jpg")]
    
    const image3 = [require("./assets/gtaccount/account1.jpg"), require("./assets/gtaccount/account2.jpg"), require("./assets/gtaccount/account3.jpg"),
    require("./assets/gtaccount/account4.jpg"), require("./assets/gtaccount/account5.jpg"), require("./assets/gtaccount/account6.jpg"),
    require("./assets/gtaccount/account7.jpg"), require("./assets/gtaccount/account8.jpg"), require("./assets/gtaccount/account9.jpg"),]
    
    const image4 = [require("./assets/thinklex/Thinklex1.jpg"), require("./assets/thinklex/Thinklex2.jpg"), require("./assets/thinklex/Thinklex3.jpg"),
    require("./assets/thinklex/Thinklex4.jpg"), require("./assets/thinklex/Thinklex5.jpg"), require("./assets/thinklex/Thinklex6.jpg"),
    require("./assets/thinklex/Thinklex7.jpg")]

    const image5 = [require("./assets/natours/natours1.jpg"), require("./assets/natours/natours2.jpg"), require("./assets/natours/natours3.jpg"),
    require("./assets/natours/natours4.jpg"), require("./assets/natours/natours5.jpg"), require("./assets/natours/natours6.jpg"),
    require("./assets/natours/natours7.jpg"), require("./assets/natours/natours8.jpg")]
    
    const image6 = [require("./assets/dashboard/Dashboard1.jpg"), require("./assets/dashboard/Dashboard2.jpg"),
    require("./assets/dashboard/Dashboard3.jpg"), require("./assets/dashboard/Dashboard4.jpg")]

    const image7 = [require("./assets/encryption/encryption.jpg")]

    const image8 = [require("./assets/path-tracker/tracker1.jpg"), require("./assets/path-tracker/tracker2.jpg"),
    require("./assets/path-tracker/tracker3.jpg"), require("./assets/path-tracker/tracker4.jpg"),
    require("./assets/path-tracker/tracker5.jpg"), require("./assets/path-tracker/tracker6.jpg")]

    const image9 = [require("./assets/request/request1.jpg"), require("./assets/request/request2.jpg"), require("./assets/request/request3.jpg"),
    require("./assets/request/request4.jpg"), require("./assets/request/request5.jpg"), require("./assets/request/request6.jpg"),
    require("./assets/request/request7.jpg"), require("./assets/request/request8.jpg")]

    const image10 = [require("./assets/manager/manager2.png"), require("./assets/manager/manager2.png"), require("./assets/manager/manager3.png"),
    require("./assets/manager/manager4.png"), require("./assets/manager/manager5.png"), require("./assets/manager/manager6.png"),
    require("./assets/manager/manager7.png"), require("./assets/manager/manager8.png")]

    const image11 = [require("./assets/cbt/cbt1.png"), require("./assets/cbt/cbt2.png"), require("./assets/cbt/cbt3.png"),
    require("./assets/cbt/cbt4.png")]


    const shopwyse = "green"
    const autoresponse = "#D94F00"
    const account = "#E04406"
    const thinklex = "#F3DC40"
    const natour = "green"
    const dashboard = "black"
    const engine = "#000"
    const tracker = "#9263CD"
    const request = "#F3DC40"
    const manager = "#081B46"
    const cbt = "#C582D5"

    document.body.style.backgroundColor = "white";


    return (
        <div className="container">
            <div className="header">
                <div className="header__logo"><p>RK</p></div>
                <div className="header__button">
                    <a href="#aboutme" className="header__button--btn" >ABOUT</a>
                    <a href="#good" className="header__button--btn">PROJECTS</a>
                    <a className="header__button--btn">BLOG</a>
                    <a href="#contacts" className="header__button--btn">CONTACT</a>
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
                            <li class="navigation__item"><a href="#aboutme" class="navigation__link">About</a></li>
                            <li class="navigation__item"><a href="#good" class="navigation__link">Project</a></li>
                            <li class="navigation__item"><a href="#" class="navigation__link">Blog</a></li>
                            <li class="navigation__item"><a href="#contacts" class="navigation__link">Contact</a></li>
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
            <div className="content" id="aboutme">    
                <div className="content__info content__info--left">
                    <h2 className="content__info-subtitle">Briefly about me</h2>
                    <ul className="content__info--list">
                        <li>A <span style={{fontWeight: "700", color: "#34495E"}}>Software Engineer</span> that enjoys making a positive contribution to the technological future.</li>
                        <li>A <span style={{fontWeight: "700", color: "#34495E"}}>First-class</span> graduate in Electrical and Electronics Engineering.</li>
                        <li>2+ years of professional expertise in the IT industry.</li>
                        <li>Experienced front-end and back-end developer.</li>
                        <li>Experience in React.js and Node.js scripting languages.</li>
                        <li>Solid experience in Javascript, C++, C, R and Python programming languages. </li>
                        <li>Rich expertise in <span style={{fontWeight: "700", color: "#34495E"}}>Mobile App Development</span>: React-Native, Node and MongoDb</li>
                        <li>Rich expertise in <span style={{fontWeight: "700", color: "#34495E"}}>Web App Development</span>: React.js, Vue.js, Node.js, Handlebars, MongoDb, HTML, CSS, SASS, Javascript.</li>
                    </ul>
                    <div className="content__info--download"><FaDownload style={{marginRight: "1rem"}}/><a href="https://drive.google.com/file/d/1LrJkSjzHSbpl2MQMcU2ekEijWZXFPpmP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="content__info--download-link">Download CV</a></div>
                </div>
                <div className="content__info content__info--right">
                    <h2 className="content__info-subtitle">Projects</h2>
                    
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
                    <h2 className="main-project__info-title" id="good">Project Details</h2>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://drive.google.com/file/d/1KQqhHzfJttZCk23h_-BqibATsFUXthpr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Shopwyse</a></h2>
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
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self Owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native, Node.js, Web Socket, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image1,shopwyse,"Shopwyse")}>Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://gtautoresponse.herokuapp.com" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Email Servive Platform</a></h2>
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

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image2,autoresponse,"Email Service Platform")}>Project Screnshoots</a>
                      </div>
                    </div>


                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://play.google.com/store/search?q=gtword&c=apps" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">GTWorld</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                    GTWorld is one of GTBank mobile apps used by customers to carry out all banking
                                     activities including account opening and transactions.
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
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;GTBank
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;Ionic angular, Asp.net, SQL
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" >Project Screnshoots</a> 
                        {/* onClick={()=>NavigateMe(history,image3,account,"GTAccount")} */}
                      </div>
                    </div>

                    {/* href="https://gtaccount.herokuapp.com" */}

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://check-d-deck.herokuapp.com" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Staff Manager App</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        This is a web application used by HR/Admin to manage their company departments, Staff,
                                        activities, documents e.t.c.
                                    </p>
                                    <p> The admin can easily monitor work done by each departments and staff.</p> 
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end and backened developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp; Check D'Deck Homes Admin/Staff
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp; Check D'Deck Homes
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React.js, Node.js, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image10,manager,"Staff Manager App")}>Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://play.google.com/store/apps/details?id=com.gtbank.appdev.orangetoolboxv1" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Orange Tool Box</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                    This is a mobile app used by the GTBank's staff majorly marketers to ease banking and solving customers' issues outside the bank
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end and back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp; Available to GTBank's staff
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp; GTBank
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp; Ionic angular, Asp.net, SQL
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots">Project Screnshoots</a>
                        {/* onClick={()=>NavigateMe(history,image11,cbt,"CBT Test")} */}
                      </div>
                    </div>


                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://virtuous-sprout.herokuapp.com" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Virtuous Sprouts Academy</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        Virtuous Sprouts Academy school/result portal.
                                    </p>
                                    <p>
                                        It also has the onboarding feature.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end and Back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Virtuous Sprouts Students and Staff
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Virtuous Sprouts Academy
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React.js, Node.js, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots">Project Screnshoots</a>
                        {/* onClick={()=>NavigateMe(history,image7,engine,"Encryption Engine")} */}
                      </div>
                    </div>


                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://drive.google.com/file/d/1KRUZLoBuwCXuVtVi5oxua56ho2KLxck0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Thinklex</a></h2>
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

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image4,thinklex,"Thinklex")}>Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://tourandsmile.herokuapp.com" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Tour and Smile</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                   
                                    <p>
                                       This is a website that allows people to book for a tour from different categories of tours available.
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
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self Owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;HTML, CSS, SASS
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image5,natour,"Tour and Smile")}>Project Screnshoots</a>
                      </div>
                    </div>

                    <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://gtdashboard.herokuapp.com" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Server Monitoring Dashboard</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        This is an internal web app for monitoring servers with auto-notification and 
                                        server uptime and downtime analysis.
                                    </p>
                                    <p>
                                        It notifies the team by sending them an email whenever a server is down. The team can also view the
                                        table and graphical representation of the server analysis on the platform.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;GTBank's Fintech Memebers
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;GTBank's Fintech
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React.js, Node.js, Websocket, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image6,dashboard,"Server Monitoring Dashboard")}>Project Screnshoots</a>
                      </div>
                    </div>

                    
                    {/* <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://drive.google.com/file/d/1KQW0QtfZ3T0-Du18eb2y-VKrOdshukad/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Path Tracker</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                   
                                    <p>
                                        This is a mobile app that allows users to track and save the path they follow on 
                                        map as they tour around the world.
                                    </p>
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end and Back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self Owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;React Native, Node.js, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image8,tracker,"Tour Tracker")}>Project Screnshoots</a>
                      </div>
                    </div> */}

                    {/* <div className="main-project__info-story">
                      <div className="main-project__info-story-project-title">
                       <h2 className="heading-secondary"><a href="https://ui-ux-request.herokuapp.com" target="_blank" rel="noopener noreferrer" className="main-project__info-story-project-title-name">Request App</a></h2>
                        <div className="main-project__info-story-block">
                            <div className="main-project__info-story-block-1">
                                <p className="heading-tertiary list-title">About</p>
                                <div className="text-secondary">
                                    <p>
                                        It is a web app which can be used by any organization to request for any 
                                        service of the organization that owns the app. It has the feature of tracking the status of the request made.
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="main-project__info-story-block-2">
                                
                                <p className="text-secondary">
                                    <span className="list-title">Role:</span> &nbsp; &nbsp;Front-end and Back-end developer
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Users:</span> &nbsp; &nbsp;Available to anybody
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Client:</span> &nbsp; &nbsp;Self Owned
                                </p>
                                <p className="text-secondary">
                                    <span className="list-title">Tools:</span> &nbsp; &nbsp;Node.js, Handlebars, CSS, MongoDB
                                </p>
                               
                            </div>
                        </div>

                        <a className="main-project__info-story-screenshots" onClick={()=>NavigateMe(history,image9,request,"Request App")}>Project Screnshoots</a>
                      </div>
                    </div> */}

                </div>
            </section>

            <section className="relate">
                <h2 className="main-project__info-title relate__title" id="good">Relate with me</h2>
                <div className="relate__info">
                    <a onClick={()=> message()} className="relate__info-button">Send a message</a>
                    <a onClick={()=> article()} className="relate__info-button">View articles</a>
                </div>
            </section>

            <section className="footer">
                <div className="footer-brand">
                    <img src={require("./assets/rhydhur-logo.png")} className="footer-brand-logo" />
                    {/* <a href="#" className="footer-brand-link"><p className="footer-brand-link-text">rhydhur-tech.herokuapp.com</p></a> */}
                </div>
                <div className="footer__connect" id="contacts">
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
                            <a href="https://www.linkedin.com/in/ridwan-kolawole-7b4931184/?originalSubdomain=ng" target="_blank" rel="noopener noreferrer" className="footer__connect-two-info-linkedin">
                                <FaLinkedinIn className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="https://www.instagram.com/hurlaniyhi/" target="_blank" rel="noopener noreferrer" className="footer__connect-two-info-instagram">
                                <FaInstagram className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="https://www.facebook.com/hurlaniyhi/" target="_blank" rel="noopener noreferrer" className="footer__connect-two-info-facebook">
                                <FaFacebookF className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="https://twitter.com/MisterJS" target="_blank" rel="noopener noreferrer" className="footer__connect-two-info-twitter">
                                <FaTwitter className="footer__connect-two-info-icon" size={25}/>
                            </a>

                            <a href="https://github.com/hurlaniyhi" target="_blank" rel="noopener noreferrer" className="footer__connect-two-info-github">
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