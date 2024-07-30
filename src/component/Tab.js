import React from "react"
import Card from "./card"
import GlobalButton from "./GlobalButton"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Tab(props) {

    AOS.init();

    const [data, setData] = React.useState(null);

    React.useEffect(function () {
        async function collectData() {
            try {
                const response = await fetch(props.url);

                if (!response.ok) {
                    throw new Error("Unable to fetch Tabs Data");
                }
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        collectData();
    }, [props.url]);

    /*Switch Between Tabs*/
    function toggleContent(event) {
        //Fetching Click Tab Title
        const tab = event.target.closest("a");
        if (!tab) return;

        //Fetching All Tab Panel
        const tabwindow = document.getElementById(props.id);
        const tablist = tabwindow.querySelectorAll(".tab----nav > li > a");
        const tabPanelList = tabwindow.querySelectorAll(".tab-body > div");
        const tabPanel = tabwindow.querySelector(".tab-body");

        event.preventDefault();

        const tabPanelID = tab.getAttribute('href');
        const activePanel = tabPanel.querySelector(tabPanelID);

        tablist.forEach((eachtab) => {
            eachtab.removeAttribute("aria-selected");
        });

        tabPanelList.forEach((content) => {
            content.setAttribute("hidden", true);
        });

        tab.setAttribute("aria-selected", true);
        activePanel.removeAttribute("hidden");
    }

    function byHighlight() {
        return (
            <div className="tab" id={props.id} data-aos="fade-up">
                <div className="tab--component">
                    <div className="tab---header">
                        <ul id="tab-nav" className="tab----nav" onClick={toggleContent}>
                            {data.map((tab) => {
                                if (tab.attributes.projects.data.length > 0) {
                                    return (
                                        <li key={tab.id}>
                                            <a href={"#" + tab.attributes.in.split(' ').join('').trim()} className="tab-----links" aria-selected={tab.id === 1}>
                                                {tab.attributes.in}
                                            </a>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>

                    <div className="tab-body">
                        {data.map((tab) => (
                            <div key={tab.id} id={tab.attributes.in.split(' ').join('').trim()} className="tab-content" hidden={tab.id > 1}>
                                {tab.attributes.projects.data.map((project) => (
                                    <Link key={project.id} to={`/projectinformation/${project.id}`} className="LinkText">
                                        <Card
                                            id={project.id}
                                            state={project.attributes.tag.data.attributes.name}
                                            imageUrl={ project.attributes.project_image.data.attributes.formats.small.url}
                                            title={project.attributes.project_name}
                                            location={project.attributes.locations.data.map((location) => location.attributes.location + " ").join(", ")}
                                            developer={""}/*{project.attributes.developers.data.map((developer) => developer.attributes.developer_name + " ").join(", ")}*/
                                            occupancy={project.attributes.occupancy}
                                        />
                                    </Link>
                                ))}

                                <div className="tab-footer">
                                    <GlobalButton value="View More Projects" size="global-button-big" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    function byCity() {
        return (
            <div className="tab" id={props.id}>
                <div className="tab--component">
                    <div className="tab---header">
                        <ul id="tab-nav" className="tab----nav" onClick={toggleContent}>
                            {data.map((tab) => {
                                if (tab.attributes.projects.data.length > 0) {
                                    return (
                                        <li key={tab.id}>
                                            <a href={"#" + tab.attributes.location.replace(/[ #.,]/g, "")} className="tab-----links" aria-selected={tab.id === 1}>
                                                {tab.attributes.location}
                                            </a>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>

                    <div className="tab-body">
                        {data.map((tab) => (
                            <div key={tab.id} id={tab.attributes.location.replace(/[ #.,]/g, "")} className="tab-content" hidden={tab.id > 1}>
                                {tab.attributes.projects.data.map((project) => (
                                    <Link key={project.id} to={`/projectinformation/${project.id}`} className="LinkText">
                                        <Card
                                            id={project.id}
                                            state={project.attributes.tag.data.attributes.name}
                                            imageUrl={project.attributes.project_image.data.attributes.formats.small.url}
                                            title={project.attributes.project_name}
                                            location={project.attributes.locations.data.map((location) => location.attributes.location + " ").join(", ")}
                                            developer={""}/*{project.attributes.developers.data.map((developer) => developer.attributes.developer_name + " ").join(", ")}*/
                                            occupancy={project.attributes.occupancy}
                                        />
                                    </Link>
                                ))}

                                <div className="tab-footer">
                                    <GlobalButton value="View More Projects" size="global-button-big" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (props.type === "highlight") {
        if (data) {
            return byHighlight();
        } else {
            return <div></div>;
        }
    }

    if (props.type === "city") {
        if (data) {
            return byCity();
        } else {
            return <div></div>;
        }
    }
}
