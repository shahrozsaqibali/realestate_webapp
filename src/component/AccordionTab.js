import React, { useState } from "react"
import Arrow from "../assets/imgs/arrow.png"
import Card from "./card"
import card from "./card"
import { Link } from "react-router-dom";

export default function AccordionTab(props){

    const [ isActive, setActive] = useState(false)


    function byHighlight(){

        if(props.data.attributes.projects.data.length){
            return (  
                <div className="AccordionTab-panel" onClick={() => setActive(!isActive)}>
                     <div className={isActive? "AccordionTab-title AccordionTab-title-active" : "AccordionTab-title"}>
                         <p>{props.data.attributes.in}</p>
                         <img className={isActive? "AccordionTab-imgActive" : "AccordionTab-imgInActive"} src={Arrow} />
                     </div>
                     <div className={isActive? "AccordionTab-content-Active" : "AccordionTab-content"}>
                            {props.data.attributes.projects.data.length > 0 &&  props.data.attributes.projects.data.map((cardData) => {
                                return (
                                    <Link to={`/projectinformation/${cardData.id}`} className="LinkText">
                                    <Card 
                                        ket = {cardData.id}
                                        state = {cardData.attributes.tag.data.attributes.name}
                                        title = {cardData.attributes.project_name}
                                        location = {cardData.attributes.locations.data.map((city) => {
                                               return city.attributes.location + " "
                                        })}
                                        
                                        developer = {cardData.attributes.developers.data.map((developer) => {
                                            return developer.attributes.developer_name + " "
                                        })}
                                        
                                        occupancy = {cardData.attributes.occupancy}
        
                                        imageUrl = {"http://localhost:1337" + cardData.attributes.project_image.data.attributes.formats.small.url}
                                    
                                    />
                                    </Link>
                                )
                            })}
        
            
                     </div>
                </div>)
        }
        
    }

    function byCity(){
        if(props.data.attributes.projects.data.length){
        return (  
            <div className="AccordionTab-panel" onClick={() => setActive(!isActive)}>
                 <div className={isActive? "AccordionTab-title AccordionTab-title-active" : "AccordionTab-title"}>
                     <p>{props.data.attributes.location}</p>
                     <img className={isActive? "AccordionTab-imgActive" : "AccordionTab-imgInActive"} src={Arrow} />
                 </div>
                 <div className={isActive? "AccordionTab-content-Active" : "AccordionTab-content"}>
                        {props.data.attributes.projects.data.length > 0 &&  props.data.attributes.projects.data.map((cardData) => {
                            return (
                                    
                                <Card 
                                    ket = {cardData.id}
                                    state = {cardData.attributes.tag.data.attributes.name}
                                    title = {cardData.attributes.project_name}
                                    location = {cardData.attributes.locations.data.map((city) => {
                                           return city.attributes.location + " "
                                    })}
                                    
                                    developer = {cardData.attributes.developers.data.map((developer) => {
                                        return developer.attributes.developer_name + " "
                                    })}
                                    
                                    occupancy = {cardData.attributes.occupancy}
    
                                    imageUrl = {"http://localhost:1337" + cardData.attributes.project_image.data.attributes.formats.small.url}
                                
                                />
                            )
                        })}
    
        
                 </div>
            </div>)
        }
    }

    return(
    <div className="AccordionTab-root"> 
      
        {props.type === "highlight" && byHighlight()}
        {props.type === "city"  && byCity()}

    </div>
    
)
}