import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import AddEvent from '../AddEvent/AddEvent';
import EventDetails from '../EventDetails/EventDetails.js';

const Event = ({ item }) => {
    const { deleteEvent } = useContext(GlobalContext);

    // map out list of all events
    // I think Chris might be working on a page that does this same thing in the component/cards branch
    return (
        <div>
            <li>
                <EventDetails></EventDetails>
            </li>
            {/* conditionally render this so it only shows up for people who are logged in */}
            <AddEvent></AddEvent>
        </div>
    );
}


export default Event;