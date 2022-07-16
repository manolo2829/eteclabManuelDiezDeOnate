import React from 'react'
import {useParams} from 'react-router-dom'
import CalendarContainer from '../components/Items/CalendarContainer';

const Item = () => {
    let params = useParams();
    return (
        <div>{params.id}

            <button className='btn btn-primary'>Reservar</button>
            <CalendarContainer></CalendarContainer>
        </div>
    )
}

export default Item