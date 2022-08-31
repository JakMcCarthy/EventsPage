import React from 'react';

const EventDetails = ({ onClose, currentEvent }) => {
  const { name, description, ticketPrice, ticketsSold, time, creator, creationTimestamp } = currentEvent;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">
            {name} 
        </h3>
        <ul className="eventDetails">
            <li className="eventTime">
                Date: {time}
            </li>
            <li className='eventCreator'>
                Created by: {creator} at {creationTimestamp}
            </li>
            <li className="eventPrice">
                Ticket Price: {ticketPrice}
            </li>
            <li className="eventAttendees">
                Tickets sold: {ticketsSold}
            </li>
        </ul>
        <div class='event-description'>
          <p>
              {description}
          </p>
        </div>
        <button type="button" class="eventSignup">
          Sign Me Up!
        </button>

        <button type="button" onClick={onClose}>
          Close this event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;