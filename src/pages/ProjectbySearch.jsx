import React, { useEffect } from 'react'
import Header from '../component/Header'
import BannerTwo from '../component/BannerTwo'
import Footer from '../component/footer'
import { useParams } from 'react-router-dom'
import SearchCardList from '../component/SearchCardList'



export default function ProjectbySearch(){

    const {search} = useParams()




    return (
        <div>
            <Header />
             <SearchCardList searchQuery={`https://faithful-friend-82e10ab5d1.strapiapp.com/api/projects?filters[$or][0][locations][location][$eqi]=${search}&filters[$or][1][developers][developer_name][$eqi]=${search}&filters[$or][2][occupancy][$eqi]=${search}&filters[$or][3][tag][name][$eqi]=${search}&filters[$or][4][propertytype][$eqi]=${search}&&filters[$or][5][project_name][$eqi]=${search}&populate=*`}/>
            <BannerTwo />
            <Footer />
        </div>
    )
    

}