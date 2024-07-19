import React from "react"
import Card from "./card"
import GlobalButton from "./GlobalButton"
import Lottie from "lottie-react"
import noDataAnimation from "../assets/animations/noData.json"

export default function CardList(){

    var apiUrl = "http://localhost:1337/api/locations?fields=location"
  

    //List of Cities
    var [location,setlocation] = React.useState(["Mississauga"])

    //Selected City
    var [selectedCity, setSelectedCity] = React.useState("Mississauga")

    //Cards related to city
    var [properties,setProperties] = React.useState([])


    function updateSelectedCity(event){
       setSelectedCity(event.target.value)
    }

    function getRecentProjects(){
        
        if(properties.length){
            
            return(
              
                properties.map((property) => {
                    return (

                        
                        <Card 
                            key = {property.id}
                            id = {property.id}
                            state = {property.attributes.tag.data.attributes.name}
                            imageUrl = {"http://localhost:1337"+ property.attributes.project_image.data.attributes.formats.small.url}
                            title = {property.attributes.project_name}
                            location = {property.attributes.locations.data.map((city) => {
                                return city.attributes.location + " "
                            })}
                            developer = {property.attributes.developers.data.map((developer) => {
                                return developer.attributes.developer_name + " "
                            })}
                            occupancy = {property.attributes.occupancy}
                        />

                        
                    
                    )
                })

          
          
            )

        }else{
            return(<Lottie className="nodataanimation" animationData={noDataAnimation} loop={true}/>)
        }

    }

    React.useEffect(() => {
        let LocationList = [];
        fetch(apiUrl)
        .then(Response => Response.json())
        .then(Data => {
            LocationList = Data.data.map((Obj) => {
                return Obj.attributes.location
            }) 
            setlocation(LocationList)   
        })
        .catch(error => {
            console.log(error)
        })
        console.log("useEffect: City List")
    },[])

    React.useEffect(() => {
        if(selectedCity != ""){
            var apicityurl = "http://localhost:1337/api/projects?filters[locations][location][$contains]="+selectedCity+"&populate=locations,developers,tag,project_image"
            fetch(apicityurl)
            .then(Response => Response.json())
            .then(Data => setProperties(Data.data))
            .catch(error => {
                console.log(error)
            })
        }
        console.log("useEffect: City Projects of " + selectedCity)

    },[selectedCity]) 


    return(
        <div className="cardlist">
            <div className="cardlist-head">
                <h2>Recent Projects</h2>    
                <select className="cardlist--select" id="cardoption" onChange={updateSelectedCity}>
                    {location.map((city ) => {
                         return (
                            <option key={city}>{city}</option>
                         )    
                    }  
                    )}
                </select>
            </div>

            <div className="cardlist-body">
                 {getRecentProjects()}
               
            </div>
            
            <GlobalButton size="global-button-big" value="View More Projects"/>
           

        </div>
    )
}