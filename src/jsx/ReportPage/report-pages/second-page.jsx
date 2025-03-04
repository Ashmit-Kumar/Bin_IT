import { Link } from "react-router-dom";
import '../../../css/report-page.css';

function SecondPage() {
    return (
        <>
            <div className="report-location">
                <h1>LOCATION OF POLLUTION</h1>
                <div className="report-textboxes">
                    <form action="" className="report-page-2-form">
                        <input type="text" placeholder="Area, Colony, Localty" />
                        <input type="text" placeholder="City, State" />
                        <input type="number" placeholder="Pincode" />
                        <Link>Locate Your Location On Map</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SecondPage;