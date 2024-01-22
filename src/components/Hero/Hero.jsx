import './Hero.scss'
import hero__person from '../../../public/images/hero-person.svg'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
                <div>
                    <h1>
                        Online English classes with native speakers
                    </h1>
                    <button className='hero__btn'>
                        <Link to='/signup' className='hero__btn-link'>
                            Get started
                            <i className='fa-solid fa-arrow-right'></i>
                        </Link>
                    </button>
                </div>
                <img src={hero__person} alt="person" />
            </div>
        </div>
    )
}

export default Hero
