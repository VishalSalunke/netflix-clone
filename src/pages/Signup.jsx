import { useState } from 'react'
import styled from 'styled-components'

import Background from '../components/Background'
import Header from '../components/Header'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container showPassword={showPassword}>
      <Background />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4> Watch anywhere, cancel anytime</h4>
            <h6>
              Ready to watch? Enter you email to create or restart your
              membership
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email" name="email" />
            {showPassword && (
              <input type="password" placeholder="password" name="password" />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get started</button>
            )}
          </div>
          <button> Sign up </button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? '1fr 1fr' : '2fr 1fr'};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
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
    }
  }
`
