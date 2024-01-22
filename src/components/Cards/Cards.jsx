import './Cards.scss'
import tutor1 from '../../../public/images/tutor1.webp'
import tutor2 from '../../../public/images/tutor2.webp'
import tutor3 from '../../../public/images/tutor3.webp'
import tutor4 from '../../../public/images/tutor4.webp'

function Cards() {
    return (
        <div className='cards container'>
            <div className="cards__box">
                <img src={tutor1} alt="image" />
                <h3 className='cards__tutorName'>Joshua</h3>
                <p className='cards__country'>United States</p>
            </div>
            <div className="cards__box">
                <img src={tutor2} alt="image" />
                <h3 className='cards__tutorName'>Whitney</h3>
                <p className='cards__country'>Australia</p>
            </div>
            <div className="cards__box">
                <img src={tutor3} alt="image" />
                <h3 className='cards__tutorName'>Nikola</h3>
                <p className='cards__country'>United States</p>
            </div>
            <div className="cards__box">
                <img src={tutor4} alt="image" />
                <h3 className='cards__tutorName'>Alana</h3>
                <p className='cards__country'>United Kingdom</p>
            </div>
        </div>
    )
}

export default Cards
