import React from 'react'
import '../Project/Project.css'
import quiz from '../assets/quiz.png'

const Project = () => {
  return (
    <div className="project-section">
      <div className="project1">
        <img src={quiz} alt="" height='310px' />
        <h1 className='pr-name'>Quiz Application</h1>
        <div className="app">
        <a className='app-btn1' href="https://github.com/eklakhshekh653/quiz" target='blank'><button>Github</button></a>
        <a className='app-btn2' href="https://quiz-beta-ten-85.vercel.app/" target='blank'><button>Application</button></a>
        </div>
      </div>
      <div className="project2">
        <img src={quiz} alt="" height='310px' />
        <h1 className='pr-name'>Quiz Application</h1>
       <div className="app">
       <a className='app-btn1' href="https://github.com/eklakhshekh653/quiz" target='blank'><button>Github</button></a>
       <a className='app-btn2' href="https://quiz-beta-ten-85.vercel.app/" target='blank'><button>Application</button></a>
       </div>
      </div>
    </div>
  )
}

export default Project