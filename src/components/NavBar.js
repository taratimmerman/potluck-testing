import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function NavBar(props) {
  return (
    <HomepageDiv>
      <h1 className='logo'>Potluck Planner</h1>
      <nav>
        <button ref={props.containerRef} onClick={props.onClick}>
          <Link to='/register'>Register</Link>
        </button>

        <button ref={props.containerRef} onClick={props.onClick}>
          <Link to='/login'>Login</Link>
        </button>
      </nav>
    </HomepageDiv>
  );
}

export default NavBar;

//Styled Components
const HomepageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  h1 {
    color: #ffcc29;
  }
  h4 {
    font-size: 1.5rem;
    position: relative;
    bottom: 4rem;
    color: #ffcc29;
    border-bottom: 0.75rem ridge #ffcc29;
    border-radius: 1rem;
    padding: 0.5rem;
  }
  button {
    border: 1rem ridge #ffcc29;
    color: #00af91;
    font-weight: bold;
  }
`;