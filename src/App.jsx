import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './component/Login';
import NavBar from './component/NavBar'

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <Switch>
          <Route path="/login">
            <Login/>

          </Route>
          <Route path="/admin">
            admin...
            
          </Route>
          <Route path="/">
            Inicio...
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
