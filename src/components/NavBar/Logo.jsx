import { Link } from 'react-router-dom'
import logo from '../../assets/logo-lwo.png'

export const Logo = ({width, height, filter}) =>{

    return (
        <Link to="/" className='navbar-brand'>
            <img src={logo} alt="Logo papelería La Web-On" style={{width, height, filter}}/>
        </Link>
    )
}
