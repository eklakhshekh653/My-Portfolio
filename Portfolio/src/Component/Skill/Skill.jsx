import React from 'react'
import '../Skill/Skill.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import java from '../assets/java.png'
import spring from '../assets/spring.png'
import kafka from '../assets/kafka.png'
import sql from '../assets/sql.png'


const Skill = () => {
  return (
    <div className="skill">
      <h1>My Skill</h1>
      <div className="skill-box">
      <div className="line-1">
        <div className="box1"><img src={html} alt="" height='180px' /></div>
        <div className="box1"><img src={css} alt="" height='180px' /></div>
        <div className="box1"><img src={js} alt="" height='180px' /></div>
        <div className="box1"><img src={react} alt="" height='180px' /></div>
      </div>

      <div className="line-2">
        <div className={"box2"}><img src={java} alt="" height='180px' /></div>
        <div className="box2"><img src={spring} alt="" height='180px' /></div>
        <div className="box2"><img src={kafka} alt="" height='180px' /></div>
        <div className="box2"><img src={sql} alt="" height='180px' /></div>
      </div>
    </div>
      </div>
  )
}

export default Skill