import React, {useReducer} from 'react'

const StateContext = React.createContext()

const stateReducer = (state, action) => {

    switch (action.type){

        case "change": return {...state, src: action.payload.image, color: action.payload.color}
    }

}



export const StateProvider = (props) => {


    const [state, dispatch] = useReducer(stateReducer,{src: "", color: ""})


    const NavigateMe = async(history, image, color) => {

        const variab = image.map(function(run)
        {
           return <img className="image-items" src={run}/>
        })
       await dispatch({type: "change", payload: {image: variab, color}})
        history.push("/apk")
    }

    const Home = (history) => {
        history.push("/")
    }


    const boundActions = {
        NavigateMe,
        Home
    }


    return (
        <StateContext.Provider value={{state: state, ...boundActions}}>
            {props.children}
        </StateContext.Provider>
        )

}

export default StateContext