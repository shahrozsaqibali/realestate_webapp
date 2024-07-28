import React from "react";
import Style from "../assets/css/preloader.module.css"

export default function PreLoader(){

    return(
            <div className={Style.block} key={25}> 
            <span key={1}></span>
            <span key={2}></span>
            <span key={3}></span>
            <span key={4}></span>
            <span key={5}></span>
            <span key={6}></span>
            <span key={7}></span>
            <span key={8}></span>
        </div>
    )
}