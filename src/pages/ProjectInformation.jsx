import React from 'react'
import Header from "../component/Header"
import Footer from "../component/footer"
import Banner from "../component/BannerTwo"
import {Link, useParams} from "react-router-dom"
import style from "../assets/css/projectinfo.module.css"
import { BlocksRenderer,  BlocksContent } from '@strapi/blocks-react-renderer';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PreLoader from '../component/PreLoader'


function ProjectInformation() {

    AOS.init();
    const { id } = useParams()
    const [ProjectInfo, setProjectInfo] = React.useState(null)

    
    
    console.log(ProjectInfo)


    React.useEffect(function(){

        async function collectData(){

            try{
                const Response = await fetch(`http://localhost:1337/api/projects/${id}?populate[1]=buyingreason.image,projectassets.image,projectassets.assets&populate[0]=keydetail,furtherdetail&populate=locations,developers,tag,highlight,project_image,imageslideshow`)
                const data = await Response.json()
                setProjectInfo(data.data)
            }catch(Exception){
                console.log(Exception)
            }
        
        }
        collectData()

    },[0])

    if (ProjectInfo == null) {
        return <div>
                  <Header />
                  <PreLoader />
        <Banner />
        <Footer />      
        </div>
    }


    const background = {
        'background-image': `url(http://localhost:1337${ProjectInfo.attributes.project_image.data.attributes.url})`
    }


    //Display's Key Reasons
    function displayKeyDetails(){

        if(ProjectInfo.attributes.keydetail != null) {
            return(
                <div className={style.keydetailsroot} data-aos="fade-up">
    
                    <div className={style.keydetailMap}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1443.21647001582!2d-79.73821300000002!3d43.659965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3fd891a3aad7%3A0x4db7cf7b011188f7!2s245%20Steeles%20Ave%20W%2C%20Brampton%2C%20ON%20L6Y%200B5%2C%20Canada!5e0!3m2!1sen!2sus!4v1716719404945!5m2!1sen!2sus" 
                        
                            className={style.keyreasonfield} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
    
                    <div className={style.keydetailInfo}>
                        <div className={style.keydetailinfoheadingroot}>
                            <h2 className={style.keydetailInfoheading}>Key Details</h2>
                        </div>
                        <div> 
                                <BlocksRenderer
                                   content={ProjectInfo.attributes.keydetail.details} />
                        </div>
                    </div>
                </div>
            )
        }
    }


   //Display's Reason to Buy
    function displayReasontoBuy(){

        if(ProjectInfo.attributes.buyingreason != null){
                

        return(
            <div className={style.keydetailsroot} data-aos="fade-up"> 

                <div className={style.keydetailMap}>
                    <img  className={style.InfoImage} src={"http://localhost:1337" + ProjectInfo.attributes.buyingreason.image.data.attributes.formats.medium.url} />
                </div>
                <div className={style.keydetailInfo}>
                    <div className={style.keydetailinfoheadingroot}>
                        <h2 className={style.ReasonToBuy}>Reason To Buy</h2>
                    </div>
                    <div> 
                        <BlocksRenderer 
                            content={ProjectInfo.attributes.buyingreason.details}
                         />
                    </div>
                </div>
            </div>
        )
       }
    }


    function displayFurtherDetails(){
        if(ProjectInfo.attributes.furtherdetail.length > 0){
           return(<BlocksRenderer content={ProjectInfo.attributes.furtherdetail[0].details} />)
        }
    }

      //Display's Key Reasons
      function displaydownloadableAssets(){

        if(ProjectInfo.attributes.projectassets != null){
            return(
                <div className={style.keydetailsroot} data-aos="fade-up">
    
                    <div className={style.keydetailMap}>
                    <img  className={style.InfoImage} src={"http://Localhost:1337" + ProjectInfo.attributes.projectassets.image.data.attributes.formats.large.url} />
                    </div>
                    <div className={style.keydetailInfo}>
                        <div className={style.keydetailinfoheadingroot}>
                            <h2 className={style.DownloadAssetsHeading}>Download Assets (PDF)</h2>
                        </div>
                        <div> 
                            <ul className={style.downloadAssetsLink}>
                                {ProjectInfo.attributes.projectassets.assets.data.map((asset) => {
                                    return(
                                        <li><a href={"http://Localhost:1337"+ asset.attributes.url} target="_blank">{asset.attributes.name}</a></li>
                                    )
                                })}

                        
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }       
    }


    //Display Project Image
    function displayprojectslideshow(){

        if(ProjectInfo.attributes.imageslideshow.data != null){

            //temp populating image array
            const images = []

            ProjectInfo.attributes.imageslideshow.data.forEach((element) => {
                images.push({
                    original: "http://localhost:1337" + element.attributes.formats.large.url,
                    thumbnail: "http://localhost:1337" + element.attributes.formats.medium.url
                })
            })
            


            return( 
                <ImageGallery items={images}  lazyLoad={true} data-aos="fade-up"/>
             )
        }
    }


   




return (


    <div>

        <Header />
        <div className={style.projectinforoot} >
            <h1>{ProjectInfo.attributes.project_name}</h1>
            <div className={style.projectinfohero} style={background}>
                <div className={style.projectinforherodetails}>
                    <p> {ProjectInfo.attributes.locations.data.map(city => {
                        return city.attributes.location + " "
                    })} </p>
                    <p>{ProjectInfo.attributes.developers.data.map(devname => {
                        return devname.attributes.developer_name + " "
                    })}</p>
                    <p>{`occupancy ${ProjectInfo.attributes.occupancy}`} </p>
               
                </div>
                     
                <div className={style.projectinfoherotag}>
                         <p>{ProjectInfo.attributes.tag.data.attributes.name}</p>
                    </div>
            </div>

                        

            {displayKeyDetails()}

            {displayReasontoBuy()}

            {displayFurtherDetails()}

            {displaydownloadableAssets()}

            {displayprojectslideshow()}

         


        </div>  
        <Banner />
        <Footer />

    </div>
  )
}

export default ProjectInformation