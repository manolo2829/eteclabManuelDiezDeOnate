import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div style={{ height: '90vh' }} className='container d-flex justify-content-center align-items-center'>
        <h1>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer