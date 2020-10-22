import React from 'react'
import {useHistory} from 'react-router-dom'

var rid = require('./dp3.jpg')


const Article = () => {

    const history = useHistory()

    function comment(){
        history.push("/comments")
    }

   document.body.style.backgroundColor = "#34495e"
    return (
         <div className="articles">
             <h2 className="main-project__info-title articles__title articles__container-but1" >Read Articles</h2>
            <div className="articles__container">
                    <a className="articles__container-button">Robotics in Banking</a>
                    <a className="articles__container-button">Accident Detector</a>
                    <a className="articles__container-button">Wearable Banking</a>
            </div>
            <a className="article-comment" onClick={()=>comment()}>Comment on articles</a>
         </div>
    )
}

export default Article