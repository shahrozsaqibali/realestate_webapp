import React from "react"
import MobileCloseIcon from "../assets/imgs/close_menu_icon.svg"
import { Link } from "react-router-dom"
import style from "../assets/css/style.module.css"


export default function(props){

    function toggleOffMenu(){

        var menu = document.getElementById("menu") 
        menu.style.transform =  'translate(100%)'
           
    }



    return(
        <nav id="menu" className={style.headertopsidenav}>
                <div className={style.headertopsidenavmobcloseicon}>
                    <img onClick={toggleOffMenu} src={MobileCloseIcon} />
                </div>
                <ul className={style.headertopsidenavmain}>
                                <li className={style.preconstruction}>
                                    <a href="#">Pre-Construction</a>
                                    <div className={style.headernavpreconstructionsubmenu}>
                                         <ul>
                                            
                                            {props.citiesList.length > 0 && props.citiesList.map(city => {
                                                return (<li><Link to={`/projectsbycity/${city.id}`}>{city.attributes.location}</Link></li>)
                                            })}

                                        </ul>
                                    </div>    
                                </li>
                                <li><Link to={`/assignments`}>Assignment</Link></li>
                                <li><Link to={`/resources`}>Resources</Link></li>
                                <li><Link to={`/blogs`}>Blog</Link></li>
                                <li><Link to={`/contact`}>Contact</Link></li>
          </ul>
        </nav>
    )
}