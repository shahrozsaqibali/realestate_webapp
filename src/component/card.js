import React from "react";
import GlobalButton from "./GlobalButton"
import Image from "../assets/imgs/card-photo.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import style from "../assets/css/card.module.css"


export default function card(props){
    AOS.init();
    function ViewDetails(){
        console.log(props.id)
    }




    return(
        <div className={style.card} key={props.key} data-aos="zoom-in"> 
            
            <label className={style.cardstateflag}>{props.state}</label>

            <div className={style.cardimg}>
                <img src = {props.imageUrl}/>
            </div>

            <div className={style.carddetail}>
                <h1>{props.title}</h1>
                <ul>
                    <li>{props.location}</li>
                    <li>{props.developer + " "} </li>
                    <li>{"Occupancy " + props.occupancy}</li>
                </ul>
                <GlobalButton  size="global-button-smallar" value="View Details" id={props.key} onClicked = {ViewDetails}  />
            </div>

        
        </div>
    )
}