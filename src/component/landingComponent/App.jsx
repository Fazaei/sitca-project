import { useState } from 'react'
import './index.css'
import data from '../../assets/Landing/db/data.json'

function App() {
  return (
    <>
      {
        data.people.map((person,index)=>(

          <div data-aos="fade-up" data-aos-duration="900">
            <div key={index} className="m-auto students box-border relative flex items-center flex-col justify-around mt-10">
            
            <div className="imgs mt-3"><img src="./src/assets/Landing/images/nik.png" alt=""/></div>
            <div className="names text-xl tracking-wider">{person.name}</div>
            <div id='personSkill' className="skills relative -top-3 text-lg tracking-widest">(Junior <span className="bg-gradient-to-br from-blue-700 from-10% to-purple-700 to-100%0% text-transparent bg-clip-text">{person.skill}</span> {person.title})</div>

            </div>
          </div>

        ))
      }

    </>
  )
}

export default App
