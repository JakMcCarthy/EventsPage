import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import EventDetails from '../EventDetails/EventDetails.js';

const Event = ({ item }) => {
    const { deleteEvent } = useContext(GlobalContext);


    return (

        <li>
            <EventDetails></EventDetails>
        </li>
    );
}


export default Event;