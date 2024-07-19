import React, { useCallback } from "react"
import AccordionTab from "./AccordionTab"
import GlobalButton from "./GlobalButton"


export default function AccordionList(props){

    const [data,setData] = React.useState([])

    React.useEffect(function(){

        fetch(props.url)
        .then(Response => Response.json())
        .then(Data => setData(Data.data) 
       
        )
    },[])

    return(
        <div className="AccordionList-root">
           {data.length > 0 && data.map((accordData) => {
                return ( <AccordionTab data={accordData} type={props.type}/>)
           })}
     
           <GlobalButton value="View More Projects" size="global-button-big" />
          
        </div>
    )
    
}