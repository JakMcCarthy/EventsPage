import React, {useState, useContext} from "react";
import '../Main.css';
import { GlobalContext } from '../../context/GlobalState';
import eventHelper from '../../utils/eventsFunctions'

const AddEvent = () => {
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);
    const { deleteEvent } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }

        addEvent(newEvent);
        console.log(newEvent)
        eventHelper.createEvent(event,description,time,0)

        // reset the form
        setEvent('');
        setTime('');
        setDescription('');
      }

    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    Events
                </div>
            </div>
            <div className="Body">
                <div className="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input className="eventField" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                        <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                        <br/>
                        <textarea className="eventDescription" value={description} type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                        <br/>
                        <button className="submitBtn">Create Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddEvent;
