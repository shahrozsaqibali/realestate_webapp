import React from "react"
import GoogleRate from "../assets/imgs/google-rate.png"
import LogoCompany from "../assets/imgs/realtybulls-logo-1.webp"
import LogoFacebook from "../assets/imgs/icons8-facebook-50.png"
import LogoYoutube from "../assets/imgs/icons8-youtube-48.png"
import Logotiktok from "../assets/imgs/icons8-tiktok-48.png"
import Logolinkdin from "../assets/imgs/icons8-linkedin-48.png"
import LogoInstagram from "../assets/imgs/icons8-instagram-48.png"
import stlye from "../assets/css/footer.module.css"


export default function Footer(){


        return(
            <div className={stlye.footer}>
                    <div className={stlye.footerprimary}>
                        <ul>
                            <li><h2>Explore</h2></li>
                            <li><a href="#">About The Reality Bulls</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>

                        <ul>
                            <li><h2>Quick Links</h2></li>
                            <li><a href="#">Pre-Construction </a></li>
                            <li><a href="#">Assignment</a></li>
                            <li><a href="#">News & Events</a></li>
                            <li><a href="#">Book an Appointment</a></li>
                        </ul>
                        <ul>
                            <li><h2>Rate Us on Google</h2> </li>
                            <li><img src={GoogleRate} /></li>
                        </ul>

                        <ul>
                            <li><h2>Contact Us</h2></li>
                            <li><a href="#">+1-647-892-1234 </a></li>
                            <li><a href="#">therealitybulls@gmail.com</a></li>
                            <li><a href="#">145 Clarence St. Unit# 29, Brampton ON, L6W1T2</a></li>
                        </ul>

                    </div>
                    <div className={stlye.footersecondary}>
                            <div >
                                <img src={LogoCompany} />
                            </div>
                            <p>The Team Realty Bulls is a leader in Preconstruction in Ontario. *E.&O.E. Terms and Conditions Apply –
                                All information herein was gathered from sources both professional and 
                                lay deemed to be reliable. The Realty Bulls and Save Max Bulls Realty 
                                Team make no representation as to its accuracy and will not be held 
                                responsible for any discrepancies. Prospective purchasers are advised
                                 to verify all information herein. All renderings, pricing, incentives
                                  and other information are subject to change without notice. We do not
                                   represent the builder directly. </p>

                    </div>
                    <div className={stlye.footersocial}>
                        <img src={Logolinkdin}></img>
                        <img src={LogoInstagram}></img>
                        <img src={Logotiktok}></img>
                        <img src={LogoYoutube}></img>
                    </div>
            </div>
        )
}