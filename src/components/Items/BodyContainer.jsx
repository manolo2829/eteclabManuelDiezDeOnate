import React from 'react'
import styled from 'styled-components'

const BodyContainer = (props) => {
  return (
    <Container className={props.class}>
        {props.children}
    </Container>
  )
}

export default BodyContainer

const Container = styled.div`

  box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
  -webkit-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 2px 2px 15px 0px rgba(0,0,0,0.25);
  border-radius: 25px;

  &.selectable{
    transition-duration: .4s;
    &:hover{
      transform: scale(1.05);
    }
  }
`;