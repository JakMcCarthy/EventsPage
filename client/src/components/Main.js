import React, {useState, useContext} from "react";
import './Main.css';
//import Event from './Event/Event';
import { GlobalContext } from '../context/GlobalState';

const Main = () => {
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
        <div className="Content">
        <div className="Header">
            <div className="Layer">
                Events
            </div>
        </div>
        <div className="Body">
            <ul className="Events">
                {/* {events.map(item => (<Event key={item.id} item={item} />))} */}
            </ul>
        </div>
    </div>


    );
}



// function State(arg0: string): [any, any] {
//     throw new Error("Function not implemented.");
// }
// function Context(GlobalContext: React.Context<{ events }>): { events } {
//     throw new Error("Function not implemented.");
// }

export default Main;
