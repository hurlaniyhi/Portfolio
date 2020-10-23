import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'


const Comment = () => {

    const [parameter, setParameter] = useState({user: "", comment: "", allComments: ""})

    useEffect(()=>{
        fetchComments()
    }, [])

    function fetchComments() {
        document.querySelector(".spin").style.display = "block"
        document.querySelector(".poster").style.display = "none"

        axios.get('https://analytics-app-backend.herokuapp.com/fetchComments').then((res)=>{
            if(res.data.message == "success"){
                setParameter({...parameter, allComments: res.data.info})
                
            }
            else {
                alert(res.data.message)
            }   

            document.querySelector(".spin").style.display = "none"
            document.querySelector(".poster").style.display = "block"

        }).catch((err)=>{
           
            document.querySelector(".spin").style.display = "none"
            document.querySelector(".poster").style.display = "block"
            alert("No Network Connection")
            
        })
    }
    
    function handleUser(e) {
        setParameter({...parameter, [e.target.name]: e.target.value})
    }

    function handlePost(e) {
        //e.preventDefault()

       

        const data = {
            user: parameter.user,
            comment: parameter.comment
        }


        if(parameter.user && parameter.comment){
            document.querySelector(".spin").style.display = "block"
            document.querySelector(".poster").style.display = "none"
            
            axios.post('https://analytics-app-backend.herokuapp.com/addComment', data).then(async(res)=>{

            
            if(res.data.message == "success"){
                    
                await fetchComments()
                alert("Comment successfully posted")
            }

            }).catch((err)=>{
               
                document.querySelector(".spin").style.display = "none"
                document.querySelector(".poster").style.display = "block"
                alert("No Network Connection")
                //console.log(err)
            })
        }
        else {
            alert("Kindly Provide all information")
        }
    }

    document.body.style.backgroundColor = "#34495e";

    var showComments;
    if(parameter.allComments) {
        showComments = parameter.allComments.map(function(all){
            return <div>
                        <div className="comment__all">
                            <p className="comment__all-text">{all.user}</p>
                            <p className="comment__all-text1">
                                {all.comment}
                            </p>  
                        </div> 
                    </div>
        })
    }
    else {
        showComments = <p style={{textAlign: "center", color: "white", fontSize: "1.8rem", paddingTop: "3rem"}}>No comments</p>
    }

    return (
        <div>
            <h2 className="main-project__info-title relate__title comment-title">Comment Section</h2>
            <div className="comment">
                <div className="comment__form">
                    <input className="comment__form-user" type="text" name="user" onChange={(e)=>handleUser(e)} placeholder="Your name" autoComplete={'' + Math.random()} />
                    <textarea className="comment__form-post" name="comment" onChange={(e)=>handleUser(e)} placeholder="Give comment"></textarea>
                    <a className="comment__form-send poster" onClick={()=>handlePost()}>Post</a>
                    <Loader className="spin"
                        type="Puff"
                        color="white"
                        height={70}
                        width={70}
                        // timeout={3000} //3 secs
                        style={{textAlign:"center", display: "none"}}
                        
 
                    />
                </div>
                <h2 className="comment__title">All Comments</h2>
                <div className="arrange">{showComments}</div>
            </div>
        </div>
    )
}

export default Comment