import React from "react"


export default function BlogCard(props){

    var [bloglist,setBloglist] = React.useState([])



    React.useEffect(function(){
        console.log("Blog List Fetching...")
        fetch(props.url)
        .then(Response => Response.json())
        .then(list => setBloglist(list.data))   
        .catch(error => {
            console.log(error)
        })
    }, [])

    
    return(
        <>
        

            {bloglist.length > 0 && (
                bloglist.map((blog) => {
                    return (
                        <div className="blogCard" key={blog.id}>
                        <img src={"http://localhost:1337" + blog.attributes.image.data.attributes.formats.small.url} alt="Blog Image" />
                        <div className="blogCard-text">
                            <h2>{bloglist[0].attributes.title}</h2>
                            <a href="">Read More</a>
                        </div>
                     </div>
                    )
                })
            )}
        </>
    )

}