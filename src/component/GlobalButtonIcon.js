import React from "react"

export default function GlobalButtonIcon(props){
    return (
        <button className={props.size}>{props.value}</button>
    )
}