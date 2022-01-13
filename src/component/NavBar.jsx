import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import {withRouter } from 'react-router';


const navBar = (props) => {

    const logOut = () => {
        signOut(auth).then(() => {
            props.history.push('/login')
          }).catch((error) => {
            console.log('Error al cerrar sesion: '+ error)
          }); 
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AUTH</Link>
                <div className="d-flex">
                        <NavLink className="btn btn-dark mx-2" to="/" exact>Inicio</NavLink>
                        {
                            props.firebaseUser !== null ? (
                                <NavLink className="btn btn-dark mx-2" to="/admin" >Administrador</NavLink>
                            ):null
                        }
                        
                        {
                            props.firebaseUser !== null ? (
                                <button className='btn btn-dark'
                                onClick={()=>logOut()}>Cerrar Sesion</button>
                            ):(
                                <NavLink className="btn btn-dark mx-2" to="/login" >Login</NavLink>
                            )
                        }
                        
                </div>
            </div>
        </nav>
    )
}

export default withRouter(navBar)
