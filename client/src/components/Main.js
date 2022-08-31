import React, {useState, useContext} from "react";
import './Main.css';
import Event from './Event/Event';
import { GlobalContext } from '../context/GlobalState';

const Main = () => {
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    return (
        <div className="Content">
        <div className="Body">
            {/* conditional statement : depending on which page the user wants to visit (tickets, events, login) render one of those*/}
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
