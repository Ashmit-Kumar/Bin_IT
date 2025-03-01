import { Link } from 'react-router-dom';
import './events-cards.css'

function EventCards({ imgUrl, title, date, status}) {
    return(
        <>
            <div className="event-card">
                <img src={imgUrl} alt="" className="event-img"/>
                <div className="event-details">
                    <div className="event-title">{title}</div>
                    <div className="event-date">{date}</div>
                    <div className="event-status">{status}</div>
                    <div className="event-people">
                        <img src="/dp1.jpg" alt="" className="avatar-img"/>
                        <img src="/dp2.jpg" alt="" className="avatar-img"/>
                        <img src="/pfp.jpg" alt="" className="avatar-img"/>
                        <img src="/BinIT-logo.png" alt="" className="avatar-img"/>
                    </div>
                    <Link to="/event-participation"><button className='event-register'>Register Now</button></Link>
                </div>
            </div>
        </>
    )
}

export default EventCards;