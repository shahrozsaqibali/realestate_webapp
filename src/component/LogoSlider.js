import React from "react";


export default function LogoSlider(){


    var apiUrl = "http://localhost:1337/api/developers?populate=image"    

    var [developerImage,setDeveloperImage] = React.useState([])

    React.useEffect(function(){
        
        async function collectData(){

            try{
                const data = await fetch(apiUrl)
                if(!data.ok){
                    throw new Error(console.log("Unable to fetch developer image data"))
                }
    
                const imageData = await data.json()
                setDeveloperImage(imageData.data)

            }catch(error) {
                console.error(error)
            }
        }

        collectData()

    },[])

  


    return (


      
          <div className="slider-container" >

            {developerImage.length > 0 && (
                 <div className="slider-container-heading">
                 <h1>Developers</h1>
                 </div>
            )}


           



            <div className="slider" data-animated = {true}>
                    <div class="inner-slider">
                        {/*We need this code two time to duplication image list*/ }
                        {developerImage.length > 0 && (
                                developerImage.map((image) => {
                                    return ( <img src={"http://localhost:1337" + image.attributes.image.data.attributes.formats.thumbnail.url} id={image.id}/> )
                            })
                        )
                        }

                        {developerImage.length > 0 && (
                                developerImage.map((image) => {
                                    return ( <img src={"http://localhost:1337" + image.attributes.image.data.attributes.formats.thumbnail.url} id={image.id}/> )
                            })
                        )
                        }
                    </div>
            </div>
        </div>

    )
}
