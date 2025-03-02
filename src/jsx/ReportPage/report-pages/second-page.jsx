import { useEffect, useState } from 'react';
import L from "leaflet";
import "../../../css/report-page.css"; 

function SecondPage() {
    const [mapInstance, setMapInstance] = useState(null);
    const [markerInstance, setMarkerInstance] = useState(null);
    const [location, setLocation] = useState("");

    useEffect(() => {
        if (!mapInstance) {
            initMap();
        }
    }, []);

    // ✅ Initialize the Map
    function initMap() {
        const map = L.map("map").setView([28.7041, 77.1025], 10);
        setMapInstance(map);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([28.7041, 77.1025], { draggable: true }).addTo(map);
        setMarkerInstance(marker);

        marker.on("dragend", function (event) {
            const latLng = event.target.getLatLng();
            reverseGeocode(latLng);
        });

        // ✅ Click to Place Marker & Get Location
        map.on("click", function (event) {
            marker.setLatLng(event.latlng);
            reverseGeocode(event.latlng);
        });

        // ✅ Ensure Proper Map Resizing
        setTimeout(() => {
            map.invalidateSize();
        }, 500);
    }

    // ✅ Reverse Geocode Function (LatLng → Address)
    function reverseGeocode(latLng) {
        const geocodeUrl = `https://us1.locationiq.com/v1/reverse.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&lat=${latLng.lat}&lon=${latLng.lng}&format=json`;

        fetch(geocodeUrl)
            .then((response) => response.json())
            .then((data) => {
                setLocation(data.display_name);
            })
            .catch((error) => console.error("Error fetching reverse geocoding data:", error));
    }

    // ✅ Geocode User Input & Show on Map
    function showLocationOnMap() {
        const geocodeUrl = `https://us1.locationiq.com/v1/search.php?key=pk.218d61e8d1c8e963e038327efa25f8e5&q=${location}&format=json`;

        fetch(geocodeUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    mapInstance.setView([lat, lon], 10);
                    markerInstance.setLatLng([lat, lon]);
                }
            })
            .catch((error) => console.error("Error fetching geocoding data:", error));
    }

    // ✅ Get User's Current Location
    function getCurrentLocation() {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                mapInstance.setView([lat, lon], 13);
                markerInstance.setLatLng([lat, lon]);
                reverseGeocode({ lat, lon });
            },
            () => {
                alert("Unable to retrieve your location.");
            }
        );
    }

    return (
        <>
            <div className="report-location">
                <h1>LOCATION OF POLLUTION</h1>
                <div className="report-textboxes">
                    <form className="report-page-2-form">
                        <input
                            type="text"
                            placeholder="Area, Colony, Locality"
                        />
                        <input
                            type="text"
                            placeholder="City, State"
                        />
                        <input
                            type="number"
                            placeholder="Pincode"
                        />
                        <input
                            type="text"
                            id="location-pollution"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <div id="map" className='second-page-map'></div>
                        <button type="button" onClick={showLocationOnMap}>
                            Show Location on Map
                        </button>
                        <button type="button" onClick={getCurrentLocation}>
                            Use My Location
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SecondPage;
