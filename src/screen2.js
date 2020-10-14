import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import StateContext from "./context/StateContext"
import {FaHome} from 'react-icons/fa'
import './style.css'


const Apk = () => {
    
    const {state, Home} = useContext(StateContext)

    const history = useHistory()
    
    
   // "start": "react-scripts start"
   
    // function handleNav(){
    //     history.push("/")
    // }
    return(
        <div className="image-body">
            
            {state.src ? 
            <div className="image-container">
                <div className="screenshots-heading">
                    <a className="home-button" onClick={()=>Home(history)}><FaHome className="home-logo" size={23}/><p className="span-text">Home</p></a>
                    <h2 className="image-text">Project Screenshots</h2>
                </div>
                <div className="project-images">
                {state.src}
                </div>
            </div>
                : null}
            
        </div>
    )
}

export default Apk
