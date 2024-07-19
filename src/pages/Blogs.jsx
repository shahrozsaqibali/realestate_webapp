import React from 'react'
import Header from '../component/Header'
import BannerTwo from '../component/BannerTwo'
import Footer from '../component/footer'
import BlogCard from '../component/BlogCard'

function Blogs() {
  return (
    
    <div><Header />

     <div className='pgblogs-root'>
          <div><h1>Blogs</h1></div>
          <div className='pgblogs-cardlist'>
            <BlogCard url="http://localhost:1337/api/blogs?populate=image&pagination[page]=1&pagination[pageSize]=30" />
          </div>
      </div>

    <BannerTwo />
    <Footer />
    </div>
 
  )
}

export default Blogs