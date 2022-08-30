import React, {useState, useContext} from "react";
import './Main.css';

import { GlobalContext } from '../context/GlobalState';

const AddEvent = () => {
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }

        addEvent(newEvent);

        // reset the form
        setEvent('');
        setTime('');
      }

    return (
        
        <div className="AddEvent">
            <form onSubmit={onSubmit}>
                <input className="eventField" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                <button className="submitBtn">Add Event</button>
            </form>
        </div>
    );
}


export default AddEvent;
