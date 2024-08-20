import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='bannerimage'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Quinn McKenna, an army sniper, along with some fugitives and a scientist, 
            sets out to kill the Predator and save Rory, his son, who was abducted as his autism reflects advancement 
            in human evolution.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More</button>
            </div>
            <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbusters"} category={"top_rated"}/>
        <TitleCards title={"Only on Nextflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home