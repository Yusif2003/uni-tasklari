import React from 'react'
import style from "./index.module.css"
const Home = () => {
  return (
    <>
      <section id={style.hero}>
        <div className={style.body}>
          <h6 style={{color:'white'}}>OPENNING ON 21ST FEBRUARY, 2018</h6>
          <h1 style={{color:'white'}}>Exhibition on Modern Era</h1>
          <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt..</p>
       <button>GET STARTED</button>
        </div>
      </section>
    </>
  )
}

export default Home