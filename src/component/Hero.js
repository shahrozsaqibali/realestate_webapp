import React from "react"
import HeroImage from "../assets/imgs/hero-image.webp"
import { useNavigate } from "react-router-dom"
import Style from "../assets/css/hero.module.css"

export default function (){

    const [searchedText,setsearchedText] = React.useState("")
    const navigate = useNavigate()

    function redirectToSearchPg(){
        
        if(searchedText.length > 0){
            navigate(`/projectbysearch/${searchedText}`)
        }else{
            
        }
    }

    function updateQuery(event){
    
        const {value} = event.target
        setsearchedText(value)
        console.log(searchedText)
    }


    return (
        <div className={Style.hero}> 
            <div className={Style.heroaction}>
                <h1 className={Style.herotitle}  >Pre-Construction Homes & Condo Expert in the <span>Greater Toronto Area & Outside GTA</span></h1>
                <main className={Style.herosearchbar}   >
                    <input 
                        name="searchedText"
                        type="text" 
                        placeholder="City, Development, Builder, Nieghborhood, Projects, etc.."
                        onChange={updateQuery}
                        value = {searchedText}
                        />
                     <button onClick={redirectToSearchPg}>Search Now</button>
                </main>
            </div>
        </div>
    )
}