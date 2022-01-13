import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from './component/Admin';
import Login from './component/Login';
import NavBar from './component/NavBar'
import { auth } from "./firebase";
import {onAuthStateChanged  } from 'firebase/auth';

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setFirebaseUser(user)
        console.log(firebaseUser)
        // ...
      } else {
        setFirebaseUser(null);
      }
    });

  }, [firebaseUser])

  return firebaseUser !== false ?(
    <Router>
      <div className="container">
        <NavBar firebaseUser={firebaseUser}/>
        <Switch>
          <Route exact path="/" >
            Inicio...
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/admin">
            <Admin/>
            
          </Route>
          
        </Switch>
      </div>
    </Router>
    
  ): (
    <p>Cargando...</p>
  )
}

export default App;
