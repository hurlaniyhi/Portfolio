import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import StateContext from "./context/StateContext"
import {FaHome} from 'react-icons/fa'
import './style.css'


const Apk = () => {
    
    const {state, Home} = useContext(StateContext)

    const history = useHistory()
    
    
   // "start": "react-scripts start",
   // "start": "serve -s build",
    // function handleNav(){
    //     history.push("/")
    // }
    return(
        <div>
        {state.src ? 
        <div className="image-body">
            
            <div className="image-container">
                <div className="screenshots-heading" style={{backgroundColor: state.color}}>
                    <a className="home-button" onClick={()=>Home(history)} style={{color: state.color}}><FaHome className="home-logo" size={23}/><p className="span-text">Home</p></a>
                    <h2 className="image-text">Project Screenshots</h2>
                </div>
                <div className="project-images">
                {state.src}
                </div>
            </div>
                
            
        </div>
        : <p style={{fontSize: "3.5rem", textAlign: "center", textTransform: "uppercase", marginTop: "25rem", fontWeight: "500"}}>No Screechots to display as no Project is Selected</p>}
        </div>
    )
}

export default Apk
