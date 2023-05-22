import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

const Navbar = () => {
  return (
    <>
    <header className={style.header}>
        <nav className={style.nav}>
            <div className={style.img}>
                <img src="https://preview.colorlib.com/theme/security/img/logo.png.webp" alt="" />
            </div>
            <ul className={style.ul}>
                <li className={style.li}><Link className={style.link} to='/'>Home</Link></li>
                <li className={style.li}><Link className={style.link} to='/pages'>Pages</Link></li>
                <li className={style.li}><Link className={style.link} to='/contact'>Contact</Link></li>
                <li className={style.li}><Link className={style.link} to='/services'>Service</Link></li>
                <li className={style.li}><Link className={style.link} to='/team'>Team</Link></li>
                <li className={style.li}><Link className={style.link} to='/price'>Price</Link></li>
                <li className={style.li}><Link className={style.link} to='/blog'>Blog</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar