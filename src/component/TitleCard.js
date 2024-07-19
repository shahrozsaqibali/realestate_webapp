import React from 'react'
import TowerScaled from "../assets/imgs/Tower-scaled.avif"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function TitleCard(props) {

  AOS.init();
  const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url('${props.url}')`
  }



  return (

    <Link to={"/"} className='titleCard-root' style={divStyle} data-aos="zoom-in">
        <h2>{props.title}</h2>
    </Link>

  )
}

export default TitleCard