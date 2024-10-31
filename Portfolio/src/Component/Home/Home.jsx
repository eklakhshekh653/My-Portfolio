import React from 'react'
import ak from '../Home/ak.png'
import '../Home/Home.css'
import { useState } from 'react'

const Home = () => {

  let [isloading, setIsloading]= useState(false);
  let handelDownload =()=>{
    setIsloading(true)
    let link = document.createElement('a')
    link.href="https://d.novoresume.com/images/doc/skill-based-resume-template.png"
    link.target="blank"
    setTimeout(() => {
      link.click()
      setIsloading(false)
    }, 2000);
  }
  return (
    <div className="home-container">
      <div className="home-box">

          <img className='image' src={ak} alt="Image" />
        <h2>I'm Shekh Eklakh</h2>

        <div className="resume">
          <h1>Java Full Stack Developer</h1>
          <p>Java Full Stack Development combines frontend and backend technologies using Java. It involves HTML/CSS for user interfaces, JavaScript for interactivity, and Spring Boot for backend services. Developers utilize databases for data management, Git for version control, and cloud platforms for deployment, scalable web applications efficiently.</p>
          <div className="res">
            <button onClick={handelDownload} disabled={isloading}>{isloading?"Downloading...":"Download Resume"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home