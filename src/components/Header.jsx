import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logo.png'

Header.propTypes = {
  login: PropTypes.bool,
}

export default function Header({ login }) {
  const navigate = useNavigate()

  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(login ? '/login' : '/signup')}>
        {login ? 'Log In' : 'Sign up'}
      </button>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }r
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }

`
