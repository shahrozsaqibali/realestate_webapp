import React from "react"
import Card from "./card"
import GlobalButton from "./GlobalButton"
import Lottie from "lottie-react"
import noDataAnimation from "../assets/animations/noData.json"

export default function CardList(){

    var apiUrl = "https://faithful-friend-82e10ab5d1.strapiapp.com/api/locations?fields=location"
  

    //List of Cities
    var [location,setlocation] = React.useState(["Dubai"])

    //Selected City
    var [selectedCity, setSelectedCity] = React.useState("Dubai")

    //Cards related to city
    var [properties,setProperties] = React.useState([])


    function updateSelectedCity(event){
       setSelectedCity(event.target.value)
    }

    function getRecentProjects(){
        
        if(properties.length){
            
            return(
              
                properties.map((property,index) => {

        
                    return (
                        <div key = {index}>

                        <Card 
                            id = {property.id}
                            state = {property.attributes.tag.data.attributes.name}
                            imageUrl = {property.attributes.project_image.data.attributes.formats.small.url}
                            title = {property.attributes.project_name}
                            location = {property.attributes.locations.data.map((city) => {
                                return city.attributes.location + " "
                            })}
                            developer = {property.attributes.developers.data.map((developer) => {
                                return developer.attributes.developer_name + " "
                            })} 
                            occupancy = {property.attributes.occupancy}
                        />
                        </div>


                        
                    
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

    },[])

    React.useEffect(() => {
        if(selectedCity != ""){
            var apicityurl = "https://faithful-friend-82e10ab5d1.strapiapp.com/api/projects?filters[locations][location][$contains]="+selectedCity+"&populate=locations,developers,tag,project_image"
            fetch(apicityurl)
            .then(Response => Response.json())
            .then(Data => setProperties(Data.data))
            .catch(error => {
                console.log(error)
            })
        }
  

    },[selectedCity]) 


    return (
        <div className="cardlist">
            <div className="cardlist-head">
                <h2>Recent Projects</h2>
                <select className="cardlist--select" id="cardoption" onChange={updateSelectedCity}>
                    {location.map((city, index) => (
                        <option key={`${city}-${index}`}>{city}</option>
                    ))}
                </select>
            </div>
    
            <div className="cardlist-body">
                {getRecentProjects()}
            </div>
    
         {/*{ <GlobalButton size="global-button-big" value="View} More Projects" /> */}
        </div>
    );
    
}