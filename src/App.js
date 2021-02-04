import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDashboard from './components/DashBoard/UserDashboard';
import PrivateRoute from './components/Login/PrivateRoute';
import FrontPage from './components/FrontPage';
import CreatePotluck from './components/Potluck/CreatePotluck';
import Login from './components/Login/Login';
import './App.css'

const WithAuth = PrivateRoute(UserDashboard);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/home' component={FrontPage} />
        <Route path='/login' component={FrontPage} />
        {/* <Route
          exact
          to='/protected'
          render={props => <WithAuth {...props} />}
        /> */}
        <Route path='/protected' component={UserDashboard} />
      </Router>
    );
  }
}

export default App;