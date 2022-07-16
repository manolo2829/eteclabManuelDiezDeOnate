import React from 'react'
/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- COMPONENTES ------------------------------ */
import BodyContainer from '../components/Items/BodyContainer'
import bgImage from '../img/bg.png'
const User = () => {
  return (
    <Container className='row justify-content-center align-items-center'>

      <div className='user__container'>
        <div className="row my-5">
          <h3>Iniciar sesion</h3>
        </div>
        <div className="row px-3">
          <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">Para registrarse comuniquese con el director de la plataforma</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check"/>
                <label className="form-check-label" htmlFor="check">Check me out</label>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>

    </Container>
  )
}

export default User

const Container = styled.section`
  
  width: 100%;
  height: 100%;

  .user__container{

    box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
    border-radius: 25px;  

    background-image: url(${bgImage});

    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 500px;

    h3{
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #034d64;
    }

    button{
      background-color: #034d64;
      color: #fff;

      &:hover{
        background-color: #007a9f;
      }
    }

    input{
      background-color: transparent;
      border: 2px solid #034d64
    }

  }


`