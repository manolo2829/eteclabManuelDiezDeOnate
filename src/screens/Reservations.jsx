import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
/* ------------------------------- COMPONENTS ------------------------------- */
import BodyContainer from '../components/Items/BodyContainer'
/* ------------------------------ REACT SELECT ------------------------------ */
import Select from 'react-select'
/* ---------------------------------- DATA ---------------------------------- */   
import { Labs } from '../data/Labs'
/* ---------------------------- REACT ROUTRER DOM --------------------------- */
import { useNavigate } from "react-router-dom";



const Reservations = () => {
    const [laboratoriosTabla, setLaboratoriosTabla] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [laboratorios, setLaboratorios] = useState([]);

    const navigate = useNavigate()

    useEffect(()=>{
        setLaboratorios(Labs)
        setLaboratoriosTabla(Labs)
    },[])

    const moveToItem = (id) => {
        console.log(id)
        navigate(`/item/${id}`);
    }

    const handleChange=e=>{
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) =>{
        let resultadoBusqueda = laboratoriosTabla.filter((elemento)=>{
            if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setLaboratorios(resultadoBusqueda)
    }
    

    return (
        <Container className='row justify-content-center align-items-center'>
            <h4>Reservar un laboratorio</h4>

            <div className="row resevation__select__container my-5">
                <div className="resevation__select">
                    {/* <Select options={Labs.map(item => ({value:item.title, label:item.title}))} onChange={(e)=> {console.log(e)}} isClearable />     */}
                    <input type="text"
                        className='form-control'
                        value={busqueda}
                        placeholder='Busqueda por nombre'
                        onChange={handleChange}
                    />
                </div>
            </div>

            {
                laboratorios.map(item => (
                    <BodyContainer key={Labs.indexOf(item)} class='col-12 col-md-5 col-lg-3 p-0 m-3 selectable'>
                        <div className='reservation__container p-3' onClick={()=> moveToItem(Labs.indexOf(item))}>
                            <h5 className='my-4'>{item.title}</h5>
                            <div>
                                <p>Clase: <span>{item.clase}</span></p>
                                <p>Tipo: <span>{item.tipo}</span></p>
                            </div>
                        </div>  
                    </BodyContainer>
                ))
            }
  
        </Container>
    )
}

export default Reservations

const Container = styled.section`
.resevation__select__container{
    display: flex; 
    justify-content: center;
    align-items: center;
    .resevation__select{
        width: 100%;
        max-width: 500px;   
    }
}
    
    .reservation__container{

        h5{
            font-size: 16px;
            color: #034d64;
        }

        P{
            font-size: 14px;
            font-weight: 600;
            span{
                color: #007a9f;
            }
        }
    }

    input{
        box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
        -webkit-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
        border-radius: 25px;
        background-color: #fff;
    }


`