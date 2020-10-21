import React, {useState} from 'react'
import axios from 'axios'
import {FaUser} from 'react-icons/fa'
import Loader from 'react-loader-spinner'


const Message = () => {
    const [message, setMessage] = useState({sender: "", email: "", subject: "", content: ""})

    function handleChange(e) {
        setMessage({...message, [e.target.name]: e.target.value})
    }

    function handlePost(){
       
        const data = {
            sender: message.sender,
            content: message.content,
            subject: message.subject,
            email: message.email
        }

        if(!message.sender || !message.content || !message.email){
            alert("Please provide all required information")
        }
        else {
            document.querySelector(".sms__container-items").style.paddingBottom = "5rem"
            document.querySelector(".loads").style.display = "block"
            document.querySelector(".mail-button").style.display = "none"

            axios.post('https://analytics-app-backend.herokuapp.com/mailMe', data).then(async(res)=>{
            
            if(res.data.message == "success"){
                    
                alert("Mail successfully sent")
            }
            else {
                alert("Something went wrong")
            }

            document.querySelector(".sms__container-items").style.paddingBottom = "13rem"
            document.querySelector(".loads").style.display = "none"
            document.querySelector(".mail-button").style.display = "block"
           

            }).catch((err)=>{
                document.querySelector(".sms__container-items").style.paddingBottom = "13rem"
                document.querySelector(".loads").style.display = "none"
                document.querySelector(".mail-button").style.display = "block"
                alert("No Network Connection")
                //console.log(err)
            })
        }

    }

    document.body.style.backgroundColor = "#34495e"

    return (
        <div className="sms">
            <div className="sms__container">
                <h2 className="main-project__info-title email-title">Send a mail</h2>
                <div className="sms__container-items">
                    {/* <FaUser className="sms-icon" size={25}/> */}
                    <input type="text" className="sms__container-name" name="sender" onChange={(e)=>handleChange(e)} placeholder="Full Name" id="username" autoComplete="off" required />
                    <label for="username" className="sms__container-label">Full name</label>
                    
                    <input type="email" className="sms__container-name" name="email" onChange={(e)=>handleChange(e)} placeholder="Email address" id="myemail" autoComplete="off" required />
                    <label for="myemail" className="sms__container-label">Email address</label>

                    <input type="text" className="sms__container-subject" name="subject" onChange={(e)=>handleChange(e)} placeholder="Email Subject" autoComplete="off" required />

                    <textarea className="sms__container-content" name="content" onChange={(e)=>handleChange(e)} placeholder="Email Content" autoComplete="off" required></textarea>
                    <a className="mail-button" onClick={()=>handlePost()}>Send Mail</a>
                    <Loader className="loads"
                        type="Puff"
                        color="#00BFFF"
                        height={70}
                        width={70}
                        // timeout={3000} //3 secs
                        style={{textAlign:"center", display: "none", marginTop: "1rem"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Message;