import React from 'react'
import {withRouter } from 'react-router';
import { auth } from "../firebase";

const Admin = (props) => {

    const [user, setUser] = React.useState(null);

    React.useEffect(()=>{
        if (auth.currentUser) {
            console.log('existe usuario');
            setUser(auth.currentUser)
            console.log(user);
        } else {
            props.history.push('/login')
            console.log('No existe usuario');
        }
    }, [props.history, user])
    
    return (
        <div className='mt-5'>
            <h1 className='mb-3'>Administración aquí</h1>
            
            {
                user && (
                    <h3>
                        {user.email}
                    </h3>  
                )
            }
        </div>
    )
}

export default withRouter(Admin)
