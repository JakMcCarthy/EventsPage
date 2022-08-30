// import React, { useContext } from 'react';
// import { GlobalContext } from '../../context/GlobalState';
// import EventDetails from '../EventDetails/EventDetails.js';

// const Event = ({ item }) => {
//     const { deleteEvent } = useContext(GlobalContext);


//     const toggleModal = (item, i) => {
//         setCurrentEvent({ ...item, index: i });
//         setIsModalOpen(!isModalOpen);
//     };

//     return (

//         <li onClick={() => toggleModal(item, i)}>
//             {isModalOpen ? <EventDetails onClose={toggleModal} currentEvent={currentEvent} /> : <div></div>}
//             <span className="Category">{item.category}</span>
//             <span className="Event">{item.event}</span>
//             <span className="Time">{item.time}</span>
//             <span className="Action" onClick={() => deleteEvent(item.id)}>&#10007;</span>
//         </li>
//     );
// }


// export default Event;