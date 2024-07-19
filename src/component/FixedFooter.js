import React from "react"

export default function FixedFooter(props){

    function togglestate(){
        props.showPlatinumForm()
    }






    return (<div className="fixedfooter-root">
            <button className="fixedfooter-btnplat" onClick={togglestate}>Platinium Access</button>
            <button className="fixedfooter-btncontact"><a href="" className="fixedfooter-btncontact-link"> Contact Us </a></button>
        </div>)
}