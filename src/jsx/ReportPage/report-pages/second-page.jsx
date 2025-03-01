// import { Link } from "react-router-dom";
// import '../../../css/report-page.css';

// function SecondPage() {
//     return (
//         <>
//             <div className="report-location">
//                 <h1>LOCATION OF POLLUTION</h1>
//                 <div className="report-textboxes">
//                     <form action="" className="report-page-2-form">
//                         <input type="text" placeholder="Area, Colony, Localty" />
//                         <input type="text" placeholder="City, State" />
//                         <input type="number" placeholder="Pincode" />
//                         <Link>Locate Your Location On Map</Link>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SecondPage;


import { Link } from "react-router-dom";
import '../../../css/report-page.css';
import { useEffect } from 'react';
import L from "leaflet"; // Import Leaflet

function SecondPage() {
    useEffect(() => {
        if (!map) {
            initMap();
        }
    }, []);

    return (
        <>
            <div className="report-location">
                <h1>LOCATION OF POLLUTION</h1>
                <div className="report-textboxes">
                    <form className="report-page-2-form">
                        <input type="text" placeholder="Area, Colony, Locality" />
                        <input type="text" placeholder="City, State" />
                        <input type="number" placeholder="Pincode" />
                        <input type="text" id="location-pollution" placeholder="Location" />
                        <div id="map"></div>
                        <button type="button" onClick={showLocationOnMap}>
                            Show Location on Map
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SecondPage;

let map = null;
let marker = null;

// Initialize the map
function initMap() {
    if (!map) {
        map = L.map("map").setView([28.7041, 77.1025], 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        marker = L.marker([28.7041, 77.1025], { draggable: true }).addTo(map);

        marker.on("dragend", function (event) {
            const latLng = event.target.getLatLng();
            reverseGeocode(latLng);
        });
    }
}

function reverseGeocode(latLng) {
    const geocodeUrl = `https://us1.locationiq.com/v1/reverse.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&lat=${latLng.lat}&lon=${latLng.lng}&format=json`;

    fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("location-pollution").value = data.display_name;
        })
        .catch((error) => console.error("Error fetching reverse geocoding data:", error));
}

// Geocode user input and show location on the map
function showLocationOnMap() {
    const location = document.getElementById("location-pollution").value;
    const geocodeUrl = `https://us1.locationiq.com/v1/search.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&q=${location}&format=json`;

    fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                map.setView([lat, lon], 10);
                marker.setLatLng([lat, lon]);
            }
        })
        .catch((error) => console.error("Error fetching geocoding data:", error));
}