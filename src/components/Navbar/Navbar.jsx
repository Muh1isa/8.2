import React from 'react'
import { Link } from 'react-router-dom'
import nav__logo from '../../../public/images/nav-logo.svg'
import './Navbar.scss'
import { useGlobalContext } from '../../context'

function Navbar() {
    const { login, setLogin } = useGlobalContext()
    return (
        <nav className="nav">
            <div className="nav__logo">
                <Link to='/'>
                    <img src={nav__logo} alt="logo" width={130} />
                </Link>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item">
                    <Link
                        to='/tutors'
                        className='nav__list-item-link'>
                        Tutors
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link
                        to='/courses'
                        className='nav__list-item-link'>
                        Courses
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link
                        to='/groups'
                        className='nav__list-item-link'>
                        Group Lessons
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link
                        to='/resources'
                        className='nav__list-item-link'>
                        Resources
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link
                        to='kids'
                        className='nav__list-item-link'>
                        Kids
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link
                        to='/business'
                        className='nav__list-item-link'>
                        Business
                    </Link>
                </li>
            </ul>
            <div className="nav__box">
                <button className='nav__box-lang'>English</button>
                <Link to='/login'>
                    <button
                        className='nav__box-login'
                        onClick={() => setLogin(!login)}>
                        Log in
                    </button>
                </Link>
                <button className='nav__box-signup'>Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar
