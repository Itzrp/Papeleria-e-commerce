import './NavBar.css'
import { Logo } from "./Logo"
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () =>{

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Logo width= "3.75rem" height= "3.75rem" filter= "drop-shadow(.25rem .25rem .625rem rgba(0,0,0,0.5))" />
                <div className="order-lg-last ms-auto">
                    <CartWidget/>   
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/ofertas" className="nav-link">🔥Ofertas🔥</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/papeleria-y-oficina" className="nav-link">Papelería y Oficina</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/servicios" className="nav-link">Servicios</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Complementos
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/category/tecnologia-y-soporte" className="nav-link">Tecnología y soporte</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/arte-y-merceria" className="nav-link">Arte y Mercería</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/snacks-y-bebidas" className="nav-link">Sancks y Bebidas</NavLink>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 nav-search" type="search" placeholder="¿Te falta algo más?" aria-label="Search"/>
                        <button className="btn btn-search" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}