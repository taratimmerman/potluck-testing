import React from 'react';
import { connect } from 'react-redux';
import PotluckCard from '../Potluck/PotLuckCard';
import CreatePotluck from '../Potluck/CreatePotluck';

import { getPotlucks, addPotluck } from '../../actions/index';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogOut = () => {
    window.alert('Loggin out');
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };


  componentDidMount() {
    this.props.getPotlucks();
    this.props.history.push('/protected/potlucks');
  }

  render() {
    if (this.props.fetchingPotlucks) {
      return <h2>Getting your potlucks</h2>;
    } else {
      return (
        <div className='container'>
          <div className='header'>
            <button onClick={this.onLogOut}>Log out</button>
            <Link to='/protected/create-potlucks'>Create Potluck</Link>
          </div>
          <div className='potlucks'>
            <div>{console.log(this.props)}</div>
            <Route path='/protected/potlucks' component={PotluckCard} />

            <Route
              exact
              path='/protected/create-potlucks'
              render={props => (
                <CreatePotluck addPotluck={this.props.addPotluck} {...props} />
              )}
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  potlucks: state.reducer.potlucks,
  error: state.reducer.error,
  fetchingPotlucks: state.reducer.fetchingPotlucks
});
const SignOutWithRouter = withRouter(UserDashboard);

export default connect(
  mapStateToProps,
  {
    getPotlucks,
    addPotluck
  }
)(SignOutWithRouter);
