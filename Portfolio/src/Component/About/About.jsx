import React from 'react'
import '../About/About.css'
import about from '../Home/ak.png'

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <img src={about} alt="img" height={150} />
      </div>
      <div className="right">
        <div className="right-box">
        <h1>ABOUT ME</h1>
        <div className="para">
          <p>
          A Java Full Stack Developer is skilled in both backend and frontend technologies, building complete applications that manage both data and user interfaces. They use Core Java for foundational backend logic, Spring Boot for efficient API development, and Microservices to create scalable, loosely coupled services. Kafka supports real-time data streaming and inter-service communication, enhancing the application's responsiveness. On the frontend, they use HTML, CSS, and JavaScript for structuring, styling, and adding interactivity, and React for building dynamic, component-based user interfaces. This combination enables a seamless, full-stack approach to creating high-performance, user-centric applications.
          </p>
        </div>
        <div className="highlight">
          <h2>Highlight</h2>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MicroServices</li>
            <li>Spring Data Jpa</li>
            <li>React Js</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About