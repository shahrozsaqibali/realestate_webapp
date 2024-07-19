import React from "react"
import GlobalButton from "./GlobalButton"
import GlobalButtonIcon from "./GlobalButtonIcon"


export default function BannerOne(props){


    
    function toggleForm(){
        props.showPlatinumForm()
    }



    return(
        <div className="banner-section" >
            <div className="banner">
                <div className="banner-title">
                    <h2>Platinum Access Benefits</h2>
                    <p>What it means and What it can do for.</p>
                </div>

                <div className="banner-action">
                    <GlobalButtonIcon value="Watch Now" size="global-button-icon-big"/>
                    <button  className="global-button-big" onClick={toggleForm}>Subscribe Now</button>
                </div>

            </div>
        </div>
    )
}