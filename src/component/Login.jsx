import React from 'react'

const Login = () => {

    const [email, setEmail]=React.useState('');
    const [pass, setPass]=React.useState('');

    const procesarDatos = e =>{
        e.preventDefault()
        if(!email.trim()){
            console.log('Ingrese Email')
            return
        }

        if(!pass.trim()){
            console.log('Ingrese Pass')
            return
        }

        if (pass.length<6) {
            console.log('Pass debe tener 6 o más carácteres')
            return
        }
    }

    return (
        <div className='mt-5'>
            <h3 className="text-center">Registro de usuario</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
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
                            <button className="btn btn-dark btn-lg my-1">Registrar</button>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-info btn-sm my-1">Ya tienes Cuenta?</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
