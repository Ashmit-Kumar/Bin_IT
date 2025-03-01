import '../../css/events.css'
import EventCards from './CommunityPages-components/events-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../Commen-Components/header'

function Events() {
    const eventsData = [
        { imgUrl: "/content-pic1.png", title: "Butterfly Beach Cleaning", date: "28June - 2July", status: "Ongoing" },
        { imgUrl: "/content-pic2.png", title: "XYZ Street Cleaning", date: "18June - 23June", status: "4days left" },
        { imgUrl: "/content-pic2.png", title: "Uwu Park Cleaning", date: "5July - 15July", status: "18days left" },
        { imgUrl: "/content-pic1.png", title: "Ooo River Bank Cleaning", date: "10July - 12July", status: "ended" },
        { imgUrl: "/content-pic1.png", title: "BC Road Cleaning", date: "30June - 2July", status: "nhi krna" },
        { imgUrl: "/content-pic2.png", title: "Yeah Beach Cleaning", date: "24June - 1July", status: "bhk" }
    ];


    return (
        <>
        <Header />
            <main>
                <div className="event">
                    <form action="" className="event-sidebar">
                        <div className="clear">
                            <span>Clear filters</span>
                            <div>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <div class="slider"></div>
                                </label> Match my eligibilty
                            </div>
                            <span><input type="checkbox" /> Managed by BinIT</span>
                        </div>
                        <div className="location">
                            <span>Location</span>
                            <label>
                                <input type="checkbox" /> Beach Cleaning
                            </label>
                            <label>
                                <input type="checkbox" /> Walkways
                            </label>
                            <label>
                                <input type="checkbox" /> Streets
                            </label>
                            <label>
                                <input type="checkbox" /> Parks & Ground
                            </label>
                            <label>
                                <input type="checkbox" /> Others
                            </label>
                        </div>
                        <div className="status">
                            <span>Status</span>
                            <label>
                                <input type="checkbox" /> Upcoming
                            </label>
                            <label>
                                <input type="checkbox" /> Open
                            </label>
                            <label>
                                <input type="checkbox" /> Ended
                            </label>
                        </div>
                        <div className="length">
                            <span>Length</span>
                            <label>
                                <input type="checkbox" /> 1-6 days
                            </label>
                            <label>
                                <input type="checkbox" /> 2-3 weeks
                            </label>
                            <label>
                                <input type="checkbox" /> 1+ month
                            </label>
                        </div>
                        <div className="host">
                            <span>Host</span>
                            <div class="custom-select">
                                <select>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className="event-main">
                        <div className="searchbar">
                            <input type="text" />
                            <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        </div>
                        <div className="event-main-title">EVENTS</div>
                        <div className="event-card-grid">
                            {eventsData.map((event, index) => (
                                <EventCards
                                    key={index}
                                    imgUrl={event.imgUrl}
                                    title={event.title}
                                    date={event.date}
                                    status={event.status}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Events;