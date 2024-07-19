import React from 'react'
import Header from '../component/Header'
import BannerTwo from '../component/BannerTwo'
import Footer from '../component/footer'
import ContactForm from '../component/ContactForm'


function Contact() {
  return (
   
    <div><Header />
    <div className="pagecontact-root">
      <h1>Contact Us</h1>
      
      <div className="pagecontact-cards">
          <div className="pagecontact-card">
            <div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.955 27.495c0 .54-.12 1.095-.375 1.635a6.19 6.19 0 0 1-1.02 1.53c-.735.81-1.545 1.395-2.46 1.77-.9.375-1.875.57-2.925.57-1.53 0-3.165-.36-4.89-1.095-1.725-.735-3.45-1.725-5.16-2.97a43.12 43.12 0 0 1-4.92-4.2A42.624 42.624 0 0 1 7.02 19.83c-1.23-1.71-2.22-3.42-2.94-5.115C3.36 13.005 3 11.37 3 9.81c0-1.02.18-1.995.54-2.895C3.9 6 4.47 5.16 5.265 4.41 6.225 3.465 7.275 3 8.385 3c.42 0 .84.09 1.215.27.39.18.735.45 1.005.84l3.48 4.905c.27.375.465.72.6 1.05.135.315.21.63.21.915 0 .36-.105.72-.315 1.065-.195.345-.48.705-.84 1.065l-1.14 1.185a.803.803 0 0 0-.24.6c0 .12.015.225.045.345.045.12.09.21.12.3.27.495.735 1.14 1.395 1.92.675.78 1.395 1.575 2.175 2.37.81.795 1.59 1.53 2.385 2.205.78.66 1.425 1.11 1.935 1.38.075.03.165.075.27.12.12.045.24.06.375.06.255 0 .45-.09.615-.255l1.14-1.125c.375-.375.735-.66 1.08-.84.345-.21.69-.315 1.065-.315.285 0 .585.06.915.195.33.135.675.33 1.05.585l4.965 3.525c.39.27.66.585.825.96.15.375.24.75.24 1.17Z" stroke="#000" stroke-width="2.5" stroke-miterlimit="10"></path>
<path d="M27.75 13.5c0-.9-.705-2.28-1.755-3.405C25.035 9.06 23.76 8.25 22.5 8.25M33 13.5C33 7.695 28.305 3 22.5 3" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
            </div>

            <a href='tel:+16478921234'>+1-647-892-1234</a>
          </div>

          <div className="pagecontact-card">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 30.75h-15C6 30.75 3 28.5 3 23.25v-10.5c0-5.25 3-7.5 7.5-7.5h15c4.5 0 7.5 2.25 7.5 7.5v10.5c0 5.25-3 7.5-7.5 7.5Z" stroke="#000" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="m25.5 13.5-4.695 3.75c-1.545 1.23-4.08 1.23-5.625 0L10.5 13.5" stroke="#000" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
            <a href='mail:therealtybulls@gmail.com'>therealtybulls@gmail.com</a>
          </div>
          
          <div className="pagecontact-card">
            <div></div>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 33h33m-4.83.015v-6.69M3.15 33V9.045c0-3.015 1.5-4.53 4.485-4.53h9.345c2.985 0 4.47 1.515 4.47 4.53V33M8.7 12.375h7.425M8.7 18h7.425m-3.75 15v-5.625M29.7 16.335a3.29 3.29 0 0 0-3.3 3.3v3.405c0 1.83 1.47 3.3 3.3 3.3 1.83 0 3.3-1.47 3.3-3.3v-3.405c0-1.83-1.47-3.3-3.3-3.3Z" stroke="#000" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
            <a href='mail:therealtybulls@gmail.com'>145 Clarence St. Unit # 29,
            Brampton, ON, L6W 1T2</a>
          </div>

      </div>

      <div className="pagecontact-form-map">
        <div><iframe className='pagecontact-map-frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11540.369696053775!2d-79.7409076!3d43.6878419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1516981a6ce5%3A0xb35b4ac5b76efa6c!2sThe%20Realty%20Bulls%20(Real%20Estate%20Experts)!5e0!3m2!1sen!2sbd!4v1710680200928!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div><ContactForm /></div>
      </div>
    </div>
    <BannerTwo />
    <Footer />
    </div>
 
  )
}

export default Contact