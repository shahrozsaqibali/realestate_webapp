import React, { useEffect } from 'react'
import Header from '../component/Header'
import BannerTwo from '../component/BannerTwo'
import Footer from '../component/footer'
import { useParams } from 'react-router-dom'
import SearchCardList from '../component/SearchCardList'



export default function ProjectbySearch(){

    const {search} = useParams()



    React.useEffect(function(){    
        async function collectData(){       
            try{
                const Response = await fetch(`http://localhost:1337/api/projects?filters[$or][0][locations][location][$eqi]=${search}&filters[$or][1][developers][developer_name][$eqi]=${search}&filters[$or][2][occupancy][$eqi]=${search}&filters[$or][3][tag][name][$eqi]=${search}&filters[$or][4][propertytype][$eqi]=${search}&populate=*`)
                const data = await Response.json()
   

            }catch(Exception){
                console.log(Exception)
            }
        }

        collectData()
    
    },0)

    return (
        <div>
            <Header />
             <SearchCardList searchQuery={`http://localhost:1337/api/projects?filters[$or][0][locations][location][$eqi]=${search}&filters[$or][1][developers][developer_name][$eqi]=${search}&filters[$or][2][occupancy][$eqi]=${search}&filters[$or][3][tag][name][$eqi]=${search}&filters[$or][4][propertytype][$eqi]=${search}&&filters[$or][5][project_name][$eqi]=${search}&populate=*`}/>
            <BannerTwo />
            <Footer />
        </div>
    )
    

}