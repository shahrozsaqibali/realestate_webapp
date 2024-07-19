import React from "react"
import Landing from "./pages/Landing"
import ProjectInformation from "./pages/ProjectInformation"
import ProjectByCity from "./pages/ProjectsbyCity"
import Blogs from "./pages/Blogs"
import Assignments from "./pages/Assignments"
import Resources from "./pages/Resources"
import Contact from "./pages/Contact"
import ProjectbySearch from "./pages/ProjectbySearch"


import {BrowserRouter, Routes, Route} from "react-router-dom"



export default function (){

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projectinformation/:id" element={<ProjectInformation />}/>
            <Route path="/projectsbycity/:id" element={<ProjectByCity />}/>

            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/assignments" element={<Assignments />}/>
            <Route path="/resources" element={<Resources />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/projectbysearch/:search" element={<ProjectbySearch />} />

        </Routes>
    </BrowserRouter>
    )
}