import React from 'react'
import Header from '../component/Header'
import BannerTwo from '../component/BannerTwo'
import Footer from '../component/footer'
import TagCardList from '../component/TagCardList'

function Assignments() {
  return (
  



    
    <div>
        <Header />

        <div  className="assignment-root"> 
            <h1>Assignments</h1>
            <TagCardList />
        </div>

      <BannerTwo />
      <Footer />
    </div>
 
  )
}

export default Assignments