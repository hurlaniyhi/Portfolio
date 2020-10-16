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
    // https://drive.google.com/file/d/1ZqWcFUOT6EtEtPCL3aawAq_a8G-7h2Yv/view?usp=sharing

    document.body.style.backgroundColor = "#34495e";

    return(
        <div>
        {state.src ? 
        <div className="image-body">
            
            <div className="image-container">
                <div className="screenshots-heading" style={{backgroundColor: state.color}}>
                    <a className="home-button" onClick={()=>Home(history)} style={{color: state.color}}><FaHome className="home-logo" size={23}/><p className="span-text">Home</p></a>
                    <h2 className="image-text">Project Screenshots</h2>
                </div>
                <p style={{textAlign: "center", fontSize: "2.2rem", color: state.color, fontWeight: "bold"}}>{state.projectName}</p>
                <div className="project-images">
                {state.src}
                </div>
            </div>
                
            
        </div>
        : <div>
            <p className="message">No Screenshot to display as no Project is Selected</p>
            <a className="gohome" onClick={()=>Home(history)}><FaHome className="home-logo" size={23}/><p className="span-text">Home</p></a>
          </div>}
        
        </div>
    )
}

export default Apk
