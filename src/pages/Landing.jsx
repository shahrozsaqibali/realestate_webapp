import React from "react"
import Header from "../component/Header"
import Hero from "../component/Hero" 
import BannerOne from "../component/BannerOne"
import Tab from "../component/Tab"
import CardList from "../component/CardList"
import BlogList from "../component/BlogList"
import LogoSlider from "../component/LogoSlider"
import Footer from "../component/footer"
import BannerTwo from "../component/BannerTwo"
import AccordionList from "../component/AccordionList"
import PlatiniumForm from "../component/PlatiniumForm"
import FixedFooter from "../component/FixedFooter"

export default function Landing(){

    const [isPlatniumForm, setPlatniumForm] = React.useState(false)
  

    function togglePlatniumForm(){
        setPlatniumForm(!isPlatniumForm)
    }



    return(

        <div>
               {isPlatniumForm && <PlatiniumForm closePlatniumForm = {togglePlatniumForm}/>}
            <Header  showPlatniumForm = {togglePlatniumForm} />
            <Hero />
            <BannerOne  data-aos="fade-up" showPlatinumForm={togglePlatniumForm}/>

            <Tab id="tab1" type="highlight"  url = "http://localhost:1337/api/highlights?fields=in&populate=projects.locations,projects.developers,projects.tag,projects.project_image" />
            <Tab id="tab2" type="city"  url = "http://localhost:1337/api/locations?fields=location&populate=projects.locations,projects.developers,projects.tag,projects.project_image" />

            <AccordionList type="highlight" url = "http://localhost:1337/api/highlights?fields=in&populate=projects.locations,projects.developers,projects.tag,projects.project_image"/>
            <AccordionList type="city" url = "http://localhost:1337/api/locations?fields=location&populate=projects.locations,projects.developers,projects.tag,projects.project_image"/>
            
            <CardList />
            <BlogList  />
            <LogoSlider />
            <BannerTwo  showPlatinumForm={togglePlatniumForm}/>
            <FixedFooter  showPlatinumForm = {togglePlatniumForm}/> 
            <Footer />
        </div>


    )



}