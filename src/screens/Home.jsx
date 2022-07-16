import React from 'react'
import styled from 'styled-components'
/* ------------------------------- COMPONENTES ------------------------------ */
import BodyContainer from '../components/Items/BodyContainer'
import CubeSwiper from '../components/Items/CubeSwiper'
/* -------------------------------- IMAGENES -------------------------------- */
import logoEtec from '../img/etec.png'
import logoUm from '../img/um.png'
import logo from '../img/eteclabLogo.png'
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <HomeContainer>
      
      <div className="row justify-content-center align-items-start">
        <div className="col-12 col-md-7 row p-0 home__main__container">
          <BodyContainer class='col-12 p-4'>
            <div className="home__title">
              <h1 className='text-secondary'><strong>Eteclab </strong> es una aplicacion web para realizar reservas de los distintos laboratorios y herramientas del colegio tecnico Etec de la Universidad de Mendoza. La aplicaion tiene la funcion de facilitar y hacer mas facil dichas reservas.</h1>
            </div>
          </BodyContainer>
          <BodyContainer class='col-12 my-4 p-4'>
            <div className="home__organizations">
              <p className='text-secondary text-center py-4 m-0'>Instituciones relacionadas</p>
              <div className="row justify-content-center ">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                  <img src={logoEtec} alt="" />
                  <h2 className='text-secondary text-center my-3'>Colegio tecnico de la universdida de mendoza</h2>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                  <img src={logoUm} alt="" />
                  <h2 className='text-secondary text-center my-3'>Universidad de Mendoza</h2>
                </div>
              </div>  
            </div>
          </BodyContainer>
        </div>
        <div className="row col-12 col-md-4 ">
          <BodyContainer class="p-0">
            <div className="home__logo d-flex justify-content-center align-items-center">
              <img src={logo} alt="" />
            </div>
          </BodyContainer>
          <BodyContainer class='p-0 my-4'>
            <button className='w-100 btn home__btn'>Realizar una reseva</button>
          </BodyContainer>
          <BodyContainer class='p-0'>
            <button className='w-100 btn home__btn'>Iniciar sesión</button>
          </BodyContainer>
          <BodyContainer class='p-0 my-4'>
            <button className='w-100 btn home__btn'>Contactarnos</button>
          </BodyContainer>
        </div>
      </div>
      
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.section`

  width: 100%;

  .home__main__container{
    @media (min-width: 768px){
      margin-right: 20px;
    }

  }
  
  .home__title{
    h1{
      font-size: 17px;
      font-weight: 400;
    }
  }

  .home__organizations{

    .row{
      align-items: center;
      @media (min-width: 768px){
        align-items: flex-start;
      }
    }

    p{
      font-size: 18px;
    }

    h2{
      font-size: 16px;
      font-weight: 400;
    }

    img{
      width: 100%;
      max-width: 300px;
      text-align: center;
    }

  }

  .home__logo{
    img{
      border-radius: 25px;
      width: 100%;
      max-width: 450px;
      
    }
  }
  
  .home__btn{
    background-color: #034d64;
    border-radius: 25px;
    color: #fff;

    &:hover{
      background-color: #007a9f;
    }
  }


  
`
