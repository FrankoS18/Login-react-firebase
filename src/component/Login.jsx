import React from 'react';


import {createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase'

const Login = () => {

    const [email, setEmail]=React.useState('');
    const [pass, setPass]=React.useState('');
    const [error, setError]=React.useState(null);
    const [esRegistro, setEsRegistro]=React.useState(true);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, pass)    
            console.log(user);
        } catch (error) {
            if(error.code === 'auth/invalid-email'){
                setError("Email Ingresado no es válido");
            }
            if(error.code === 'auth/email-already-in-use'){
                setError("Email Ingresado ya esta en uso");
            }
            /*console.log(error.code);
            console.log(error.message);*/
        }
        
    };

    const procesarDatos = e =>{
        e.preventDefault()
        if(!email.trim()){
            //console.log('Ingrese Email')
            setError('Ingrese Email')
            return
        }

        if(!pass.trim()){
            //console.log('Ingrese Pass')
            setError('Ingrese Pass')
            return
        }

        if (pass.length<6) {
            //console.log('Pass debe tener 6 o más carácteres')
            setError('Pass debe tener 6 o más carácteres')
            return
        }

        setError(null)

        if(esRegistro){
            
            register()
        }

    }


    return (
        <div className='mt-5'>
            <h3 className="text-center">
            {
                esRegistro ? 'Registro de Usuario' : 'Acceso de Usuario'
            }
            </h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input type="email" 
                        className="form-control my-1"
                        placeholder='Ingrese un email' 
                        onChange={e=>setEmail(e.target.value)}
                        value={email}/>

                        <input type="password" 
                        className="form-control my-1"
                        placeholder='Ingrese un pass' 
                        onChange={e=>setPass(e.target.value)}
                        value={pass}/>

                        <div className="d-grid gap-2">
                            <button className="btn btn-dark btn-lg my-1" type='submit'>
                            {
                                esRegistro ? 'Registrarse' : 'Ingresar'
                            }    
                            </button>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-info btn-sm my-1" type='button'
                            onClick={()=> setEsRegistro(!esRegistro)}>
                                {
                                    esRegistro ? 'Ya tienes Cuenta?' : 'No tienes cuenta?'
                                }
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
