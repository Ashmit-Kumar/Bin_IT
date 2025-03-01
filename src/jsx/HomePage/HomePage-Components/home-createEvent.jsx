import React from 'react';
import '../../../css/create-event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function HomeCreateEvent() {
    return (
        <div className="createEvent">
            <div className="left">
                <h1>Create an event with BinIT</h1>
                <p>
                    Got a Cleanup Drive, event, activity or a great experience? Partner with us and get listed on BinIT.
                </p>
            </div>
            <div className="right">
                <Link to="/create-event">
                    <button className='btn'><FontAwesomeIcon icon={faCalendar} className='calendar' />Create Event</button>
                </Link>
            </div>
        </div>
    );
}

export default HomeCreateEvent;