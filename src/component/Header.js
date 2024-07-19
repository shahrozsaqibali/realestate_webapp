import React, { useEffect } from "react"
import BurgerMenuIcon from "../assets/imgs/burger-menu-icon.svg"
import Logo from "../assets/imgs/Logo.png"
import Navbar from "../component/Nav"
import PlatiniumForm from "./PlatiniumForm"
import { Link, useNavigate  } from "react-router-dom"
import style from "../assets/css/style.module.css"



export default function Header(props){



    const [cities,setCities] = React.useState([])
    const [searchedTextmob,setsearchedTextmob] = React.useState("")
    const navigate = useNavigate()


    var mediaMatch = window.matchMedia("(min-width: 900px)")
    mediaMatch.addEventListener("change",resetMenu)
 
    function resetMenu(){
        var menu = document.getElementById("menu")
        if(!mediaMatch.matches){
            menu.style.opacity = "0"
            menu.style.transform = "translate(100%)" 
        }else{
            menu.style.opacity = "1"
            menu.style.transform = "translate(0%)"
        }
    }
 
    function toggleMobileMenuOn(){
       var menu = document.getElementById("menu")
        menu.style.opacity = "1"
        menu.style.transform = "translate(0%)"
    }



    React.useEffect(()=>{

        async function collectData(){
            
            try{
                const data = await fetch("http://localhost:1337/api/locations?fields=location")
                if(!data.ok){
                    throw new Error("Bhai kuch masla hai")
                }
                const objCities = await(data.json())
                setCities(objCities.data)
            }catch(error){
                console.log(error)
            }
            
            
        }

        collectData()

    }, [])


    var telephoneNumber = ["tel:+16478921234", "+1-647-892-1234"]
    var PlatinumAccess = "Platinum Access"


    function showForm(event){
        event.preventDefault()
        props.showPlatniumForm()
    }


    function redirectToSearchPg(){
        navigate(`/projectbysearch/${searchedTextmob}`)
    }


    function updateQuery(event){
    
        const {value} = event.target
        setsearchedTextmob(value)
        console.log(searchedTextmob)
    }





    return (
        <div>

            <div className={style.headercontainer}>

               <div className={style.posSticky}> 
                    <div className={style.headertopSide}>
                    
                        <div className={style.headertopsidemenuburger}>
                            <img src={BurgerMenuIcon}  onClick={toggleMobileMenuOn}  />
                        </div>

                        <div className={style.headertopsidelogo}>
                            <Link to="/"><img src={Logo} /></Link>
                        </div>

                        <Navbar citiesList={cities} />
    
                        <div className={style.headerrightside}>
                            <div className={style.headertelephonebtn}><a href={telephoneNumber[0]}>{telephoneNumber[1]}</a></div>
                            <div className={style.headerPlatinumAccess} onClick={showForm}><a href="#">{PlatinumAccess}</a> </div>
                        </div>
                    
                    </div>

                    <div className={style.headermiddleside}>
                        <main className={style.headermobilesearchbox}>
                            <input          
                             name="searchedTextmob"
                             onChange={updateQuery}
                             type="text" 
                             placeholder="Search Project" 
                             />
                            <button onClick={redirectToSearchPg}>Search</button>
                        </main>
                    </div>
                </div>
                <div className={style.headerbanner}>
                    <p>Welcome to Canada's PreConstruction Homes Experts Your Gateway to your dream home</p>
                </div>

            </div>
    
        </div>
    )
}
