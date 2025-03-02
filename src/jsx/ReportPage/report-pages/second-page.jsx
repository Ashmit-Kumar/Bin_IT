import { Link } from "react-router-dom";
import '../../../css/report-page.css';
import { useEffect, useState } from 'react';
import L from "leaflet"; // Import Leaflet

function SecondPage() {
    const [formData, setFormData] = useState({
        area: "",
        city: "",
        pincode: "",
        location: "",
    });

    useEffect(() => {
        if (!map) {
            initMap();
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <>
            <div className="report-location">
                <h1>LOCATION OF POLLUTION</h1>
                <div className="report-textboxes">
                    <form className="report-page-2-form">
                        <input type="text" name="area" placeholder="Area, Colony, Locality" value={formData.area} onChange={handleChange} />
                        <input type="text" name="city" placeholder="City, State" value={formData.city} onChange={handleChange} />
                        <input type="number" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
                        <input type="text" name="location" id="location-pollution" placeholder="Location" value={formData.location} onChange={handleChange} />
                        <div id="map"></div>
                        <button type="button" onClick={showLocationOnMap}>Show Location on Map</button>
                        <button type="button" onClick={getCurrentLocation}>Use My Location</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SecondPage;

let map = null;
let marker = null;

// ✅ Initialize the map correctly
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

        // ✅ Clicking on map places marker and fetches location
        map.on("click", function (event) {
            marker.setLatLng(event.latlng);
            reverseGeocode(event.latlng);
        });
    }
}

// ✅ Reverse Geocode function (Get Address from LatLng)
function reverseGeocode(latLng) {
    if (!latLng || !latLng.lat || !latLng.lng) return;

    const geocodeUrl = `https://us1.locationiq.com/v1/reverse.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&lat=${latLng.lat}&lon=${latLng.lng}&format=json`;

    fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.display_name) {
                document.getElementById("location-pollution").value = data.display_name;
            } else {
                document.getElementById("location-pollution").value = "Unknown Location";
            }
        })
        .catch((error) => console.error("Error fetching reverse geocoding data:", error));
}

// ✅ Geocode user input and show location on the map
function showLocationOnMap() {
    const location = document.getElementById("location-pollution").value;
    if (!location) {
        toast.error("Please enter a location!", { position: "top-right" });
        return;
    }

    const geocodeUrl = `https://us1.locationiq.com/v1/search.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&q=${location}&format=json`;

    fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);
                map.setView([lat, lon], 13);

                if (!marker) {
                    marker = L.marker([lat, lon], { draggable: true }).addTo(map);
                } else {
                    marker.setLatLng([lat, lon]);
                }
            }
        })
        .catch((error) => console.error("Error fetching geocoding data:", error));
}

// ✅ Get User's Current Location
function getCurrentLocation() {
    if (!navigator.geolocation) {
        toast.error("Geolocation is not supported by your browser.", { position: "top-right" });
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            map.setView([lat, lon], 13);

            if (!marker) {
                marker = L.marker([lat, lon], { draggable: true }).addTo(map);
            } else {
                marker.setLatLng([lat, lon]);
            }

            reverseGeocode({ lat, lon });
        },
        (error) => {
            toast.error("Unable to retrieve your location.", { position: "top-right" });
            console.error("Geolocation error:", error);
        }
    );
}
