import React from  "react"
import BlogCard from "./BlogCard"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function BlogList(){
    AOS.init();
    


    return(
        
        <div className="bloglistcontainer" data-aos="fade-up" data-aos-duration="1000"> 
            <div className="bloglist-title">
                <h1>Blog & Latest News</h1>
                <p>Blogs & Latest News regarding real estate properties in GTA</p>
            </div>
            <div className="bloglist-card-container">
              <BlogCard url="http://localhost:1337/api/blogs?populate=image&pagination[page]=1&pagination[pageSize]=4" />
            </div>

        </div>

    )

}