import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

// const Event = ({ item }) => {
//     const { deleteEvent } = useContext(GlobalContext);

//     // modal for event details
//     const toggleModal = (item, i) => {
//         setCurrentEvent({ ...item, index: i });
//         setIsModalOpen(!isModalOpen);
//       };

//     // event list view  
//     return (
//         <li onClick={() => toggleModal(item, i)}>
//             {isModalOpen && (
//                 <EventDetails onClose={toggleModal} currentEvent={currentEvent} />
//             )}
//             <span className="Category">{item.category}</span>
//             <span className="Event">{item.event}</span>
//             <span className="Time">{item.time}</span>
//             <span className="Action" onClick={() => deleteEvent(item.id)}>&#10007;</span>
//         </li>
//     );
// }

export default Event;