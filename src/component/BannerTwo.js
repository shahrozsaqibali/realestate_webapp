import React from "react"
import GlobalButton from "./GlobalButton"
import GlobalButtonIcon from "./GlobalButtonIcon"
import style from "../assets/css/bannerTwo.module.css"


export default function BannerTwo(props){


    function toggleForm(){
        props.showPlatinumForm()
    }

    var telephoneNumber = ["tel:+16478921234", "+1-647-892-1234"]
    return (

        <div className={style.Bannertwo}>
            <div className={style.BannerTwoleftSide}>
                <div className={style.BannerTwoheading}>
                    <h1>Ready to get started?</h1>
                    <h2>Talk to us today</h2>
                </div>
                <div  className={style.BannerTwobtn} >
                    <a href={telephoneNumber[0]}><GlobalButtonIcon value={telephoneNumber[1]} size="global-button-icon-big"/></a>
                    <button className="global-button-big" onClick={toggleForm}>Get Platinum Access</button>
                </div>
            </div>


            <div className={style.BannerTworightSide}>
                <div className={style.BannerTwoheading}>
                 <h1>Ready to submit a Worksheet?</h1>
                 <h2>Secure a unit now</h2>
                 </div>
                 <GlobalButton value="Click for the Worksheet" size="global-button-big"/>
            </div>
        </div>


    )
}