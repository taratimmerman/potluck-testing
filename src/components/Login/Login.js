import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { withRouter } from 'react-router';
import styled from "styled-components";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };
  }

  onChange = e => {
    console.log(e.target.value);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/dashboard'));
  };

  render() {
    return (
      <div className='base-container' ref={this.props.containerRef}>
        <div className='header'>Login</div>
        <div className='content'>
          <UserForm className='form' onSubmit={this.handleLogin}>
              <label htmlFor='username'>Username</label>
              <input
                placeholder='E-mail'
                type='text'
                name='email'
                value={this.state.username}
                onChange={this.onChange}
              />
              <label htmlFor='password'>Password</label>
              <input
                placeholder='Password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.onChange}
              />
              <button className='btn'>Login</button>
          </UserForm>
        </div>
      </div>
    );
  }
}
const LoginWithRouter = withRouter(Login);

export default connect(
  null,
  { login }
)(LoginWithRouter);

const UserForm=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 5rem;
    color: #ffcc29;

    select, input {
        margin: 1rem;
        border: 1rem ridge #ffcc29;
        border-radius: 1rem;
    };
    label {
        margin: 1rem;
        font-weight: bold;
    }
    p {
        font-weight: bold;
    }
`