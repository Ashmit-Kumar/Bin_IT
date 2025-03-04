import { useEffect, useState, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

import "../../../css/report-page.css";

const NOMINATIM_REVERSE_URL = import.meta.env.VITE_NOMINATIM_REVERSE_URL;
const NOMINATIM_SEARCH_URL = import.meta.env.VITE_NOMINATIM_SEARCH_URL;

function SecondPage({ formData, handleFormDataChange }) {
    const [location, setLocation] = useState(formData.location || "");
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [pincodeError, setPincodeError] = useState("");

    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            initMap();
        }
    }, []);

    useEffect(() => {
        if (formData.area && formData.city && formData.pincode && location !== formData.location) {
            handleFormDataChange({ location });
        }
        validateForm();
    }, [formData, location]);

    function initMap() {
        const initialCenter = fromLonLat([77.1025, 28.7041]); // Default to Delhi

        const mapInstance = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: initialCenter,
                zoom: 10,
            }),
        });

        const marker = new Feature({
            geometry: new Point(initialCenter),
        });

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [marker],
            }),
            style: new Style({
                image: new Icon({
                    anchor: [0.5, 1],
                    src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                }),
            }),
        });

        mapInstance.addLayer(vectorLayer);

        mapInstance.on('singleclick', function (event) {
            const coords = toLonLat(event.coordinate);
            marker.getGeometry().setCoordinates(event.coordinate);
            reverseGeocode(coords[1], coords[0]);
        });

        markerRef.current = marker;
        mapRef.current = mapInstance;
    }

    function reverseGeocode(lat, lon) {
        fetch(`${NOMINATIM_REVERSE_URL}&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                const locationName = data.display_name || "Unknown Location";
                setLocation(locationName);
                handleFormDataChange({ location: locationName, latitude: lat, longitude: lon });
            })
            .catch(error => console.error("Error fetching reverse geocoding data:", error));
    }

    function showLocationOnMap() {
        fetch(`${NOMINATIM_SEARCH_URL}&q=${location}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    const coordinates = fromLonLat([lon, lat]);

                    mapRef.current.getView().setCenter(coordinates);
                    mapRef.current.getView().setZoom(12);
                    markerRef.current.getGeometry().setCoordinates(coordinates);

                    handleFormDataChange({ location, latitude: lat, longitude: lon });
                }
            })
            .catch(error => console.error("Error fetching geocoding data:", error));
    }

    function getCurrentLocation() {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const coordinates = fromLonLat([lon, lat]);

                mapRef.current.getView().setCenter(coordinates);
                mapRef.current.getView().setZoom(13);
                markerRef.current.getGeometry().setCoordinates(coordinates);

                reverseGeocode(lat, lon);
            },
            () => {
                alert("Unable to retrieve your location.");
            }
        );
    }

    function validateForm() {
        const isComplete = formData.area && formData.city && formData.pincode && location;
        setIsFormComplete(isComplete);
        handleFormDataChange({ isFormComplete: isComplete });
    }

    function handlePincodeChange(e) {
        const pincode = e.target.value;
        if (pincode < 0) {
            setPincodeError("Pincode cannot be negative.");
        } else {
            setPincodeError("");
            handleFormDataChange({ pincode });
        }
    }

    return (
        <div className="report-location">
            <h1>LOCATION OF POLLUTION</h1>
            <div className="report-textboxes">
                <form className="report-page-2-form">
                    <input
                        type="text"
                        placeholder="Area, Colony, Locality"
                        value={formData.area}
                        onChange={(e) => handleFormDataChange({ area: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleFormDataChange({ city: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handlePincodeChange}
                    />
                    {pincodeError && <p className="error">{pincodeError}</p>}
                    <input
                        type="text"
                        id="location-pollution"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                            handleFormDataChange({ location: e.target.value });
                        }}
                    />
                    <div id="map" className="second-page-map"></div>
                    <button type="button" onClick={showLocationOnMap}>
                        Show Location on Map
                    </button>
                    <button type="button" onClick={getCurrentLocation}>
                        Use My Location
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SecondPage;
