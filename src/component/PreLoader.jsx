import React from "react";
import Style from "../assets/css/preloader.module.css"

export default function PreLoader(){

    return(
            <div className={Style.block}> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}