import React from 'react'
import Header from '../component/Header'
import BannerTwo from '../component/BannerTwo'
import Footer from '../component/footer'
import TitleCard from "../component/TitleCard"



function Resources() {




  return (

    <div>
      <Header />
      <div className='resources-root'>
        <h1>Resources</h1>
        <div className='resources-root-title-card'  >
        <TitleCard title="Platinum Benefits" url="https://therealtybulls.com/wp-content/uploads/2022/03/EX3_Tower-scaled.jpg"/>
        <TitleCard title="Buyer & Seller Guide" url="https://therealtybulls.com/wp-content/uploads/2022/05/CItyPointeHeights_Terrace-1.jpg"/>
        <TitleCard title="FAQ's" url="https://therealtybulls.com/wp-content/uploads/2022/05/SPO-C2-CloseUp-210816-FINAL01_HR-scaled.jpg"/>
        <TitleCard title="Rebates and Financing" url="https://therealtybulls.com/wp-content/uploads/2022/05/SPO-C6-Lounge-210805-FINAL01_HR-scaled.jpg"/>
        <TitleCard title="Ontario Mortgage Affordability Calculator" url="https://therealtybulls.com/wp-content/uploads/2022/03/EX3_PedestrianPiazza-scaled.jpg"/>
        <TitleCard title="Ontario Mortgage Payment Calculator" url="https://therealtybulls.com/wp-content/uploads/2022/01/252-Church-Condos-Dundas-Square-View.jpg"/>

        </div>

      </div>
      <BannerTwo />
      <Footer />
    </div>
 
  )
}

export default Resources