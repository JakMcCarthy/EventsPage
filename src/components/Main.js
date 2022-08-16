import React from "react";
import './Main.css';
import Event from './Event/Event';
import { GlobalContext } from '../context/GlobalState';

const Main = () => {
    const [event, setEvent] = State('');
    const [time, setTime] = State('');

    const { addEvent } = Context(GlobalContext);
    const { events } = Context(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }

        addEvent(newEvent);

        // restet the form
        setEvent('');
        setTime('');
      }

    return (
        <div className="Content">
        <div className="Header">
            <div className="Layer">
                Events
            </div>
        </div>
        <div className="Body">
            <ul className="Events">
                {events.map(item => (<Event key={item.id} item={item} />))}
            </ul>
            <div className="AddEvent">
                <form onSubmit={onSubmit}>
                    <input className="eventFiled" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                    <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                    <button className="submitBtn">Add Event</button>
                </form>
            </div>
        </div>
    </div>


    );
}

export default Main;

function State(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
function Context(GlobalContext: React.Context<{ events: never[]; }>): { events: any; } {
    throw new Error("Function not implemented.");
}

