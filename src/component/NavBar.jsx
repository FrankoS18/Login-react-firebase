import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const navBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AUTH</Link>
                <div className="d-flex">
                        <NavLink className="btn btn-dark mx-2" to="/" exact>Inicio</NavLink>
                        <NavLink className="btn btn-dark mx-2" to="/admin" >Administrador</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default navBar
