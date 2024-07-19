import React from "react"

export default function GlobalButton(props){
    
    return (
        <button className={props.size} onClick={props.onClicked} >{props.value}</button>
    )
}