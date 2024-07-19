import React from "react"
import Card from "./card"
import GlobalButton from "./GlobalButton"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Tab(props) {

    AOS.init();


    var [data, setdata] = React.useState(null)

    React.useEffect(function () {
        
        async function collectData(){
           try{
                const data = await fetch(props.url)

                if(!data.ok){
                    throw new Error("Unable to fetch Tabs Data")
                }
                const Response = await data.json()
                setdata(Response.data)
           } catch(error){
                console.error(error)
           }
        }

        collectData()

        // fetch(props.url)
        //     .then(Response => Response.json())
        //     .then(Data => setdata(Data.data))
        //     .catch(error => {
        //         console.log(error)
        //     })
    }, [])

    /*Switch Between Tabs*/
    function toggleContent(event) {

        //Fetching Click Tab Title
        const tab = event.target.closest("a")
        if (!tab) return

        //Fetching All Tab Panel
        var tabwindow = document.getElementById(props.id)
        var tablist = tabwindow.querySelectorAll(".tab----nav > li > a")
        var tabPanelList = tabwindow.querySelectorAll(".tab-body > div")
        var tabPanel = tabwindow.querySelector(".tab-body")


        event.preventDefault()

        const tabPanelID = tab.getAttribute('href')
        const activePanel = tabPanel.querySelector(tabPanelID)


        tablist.forEach((eachtab) => {
            eachtab.removeAttribute("aria-selected")
        })

        tabPanelList.forEach((content) => {
            content.setAttribute("hidden", true)
        })

        tab.setAttribute("aria-selected", true)
        activePanel.removeAttribute("hidden")

    }


    function byHighlight(){
        return (
            <div className="tab" id={props.id} data-aos="fade-up">
            <div className="tab--component">

                <div className="tab---header">

                    {
                        (
                            <ul id="tab-nav" className="tab----nav" onClick={toggleContent}>

                                {data.map((tab) => {

                                        if (tab.attributes.projects.data.length > 0) {
                                            return (<li key={"tab" + tab.id}><a href={"#" + tab.attributes.in.split(' ').join('').trim()} className="tab-----links" aria-selected={tab.id == 1}>{tab.attributes.in}</a></li>)
                                        }                                    
                                })}

                            </ul>
                        )

                    }



                </div>

                <div className="tab-body">

                    {data.map((tab) => {
                     
                        return (

                               <div key={tab.id} id={tab.attributes.in.split(' ').join('').trim()} className="tab-content" hidden={tab.id > 1}>

                                {tab.attributes.projects.data.map((project) => {
                                    return (

                                        <Link to={`/projectinformation/${project.id}`} className="LinkText">
                                            <Card
                                                key={project.id}
                                                id={project.id}
                                                state={project.attributes.tag.data.attributes.name}
                                                imageUrl={"http://localhost:1337" + project.attributes.project_image.data.attributes.formats.small.url}
                                                title={project.attributes.project_name}
                                                location={project.attributes.locations.data.map((location) => {
                                                    return location.attributes.location + " "
                                                })}
                                                developer={project.attributes.developers.data.map((developer) => {
                                                    return developer.attributes.developer_name + " "
                                                })}
                                                occupancy={project.attributes.occupancy}
                                            />
                                        </Link>
                                    )
                                })}

                                <div className="tab-footer">
                                    <GlobalButton value="View More Projects" size="global-button-big" />
                                </div>

                            </div>
                        )
                    })
                    }

                </div>

            </div>
        </div>
        )
    }
    
    function byCity(){
        return (
            <div className="tab" id={props.id}>
            <div className="tab--component">

                <div className="tab---header">

                    {
                        (
                            <ul id="tab-nav" className="tab----nav" onClick={toggleContent}>

                                {data.map((tab) => {

                                        if (tab.attributes.projects.data.length > 0) {
                                            return (<li key={"tab" + tab.id}><a href={"#" + tab.attributes.location.replace(/[ #.,]/g,"")} className="tab-----links" aria-selected={tab.id == 1}>{tab.attributes.location}</a></li>)
                                        }                                    
                                })}

                            </ul>
                        )

                    }



                </div>

                <div className="tab-body">

                     {data.map((tab) => {
                     
                        return (

                               <div key={tab.id} id={tab.attributes.location.replace(/[ #.,]/g,"")} className="tab-content" hidden={tab.id > 1}>

                                {tab.attributes.projects.data.map((project) => {
                                    return (
                                        <Link to={`/projectinformation/${project.id}`} className="LinkText">
                                        <Card
                                            key={project.id}
                                            id={project.id}
                                            state={project.attributes.tag.data.attributes.name}
                                            imageUrl={"http://localhost:1337" + project.attributes.project_image.data.attributes.formats.small.url}
                                            title={project.attributes.project_name}
                                            location={project.attributes.locations.data.map((location) => {
                                                return location.attributes.location + " "
                                            })}
                                            developer={project.attributes.developers.data.map((developer) => {
                                                return developer.attributes.developer_name + " "
                                            })}
                                            occupancy={project.attributes.occupancy}
                                        />
                                        </Link>
                                    )
                                })}

                                <div className="tab-footer">
                                    <GlobalButton value="View More Projects" size="global-button-big" />
                                </div>

                            </div>
                        )
                    })
                    } 

                </div>

            </div>
        </div>
        )
    }

    if(props.type === "highlight"){
        if(data){
            return (byHighlight())
        }else{
            return (<div></div>)
        }
    }

    if(props.type === "city"){
         if(data){
              return (byCity())
        }else{
            return (<div></div>)
        }
    }
   
    
  
} 