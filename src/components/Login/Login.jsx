import './Login.scss'
import logo from '../../../public/images/logo.svg'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <div className="login__wrapper">
                <img src={logo} alt="logo" width={160} />
                <h2 className='login__title'>Welcome back!</h2>
                <div className="login__icons">
                    <div className="icon">
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" />
                    </div>
                    <div className="icon">
                        <img width="30" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                    </div>
                    <div className="icon">
                        <img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    </div>
                    <div className="icon">
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/40C057/messaging-.png" alt="messaging-" />
                    </div>
                </div>
                <div className="login__lines">
                    <div className="line"></div>
                    OR
                    <div className="line"></div>
                </div>
                <form className='login__form'>
                    <label>Email address</label>
                    <br />
                    <input
                        type="email"
                        placeholder='Enter your email address'
                        required />
                    <br />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        placeholder='Enter a password'
                        required />
                    <br />
                    <br />
                    <p className='login__form-psw'>Forgot password?</p>
                    <br />
                    <button className='login__btn'>Log in</button>
                    <br />
                    <br />
                </form>
                <p className='login__text'>
                    Don't have an account? 
                    <Link to='/signup' className='login__text-link'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
