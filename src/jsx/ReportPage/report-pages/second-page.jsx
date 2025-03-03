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

function SecondPage() {
    const [map, setMap] = useState(null);
    const [location, setLocation] = useState("");
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            initMap();
        }
    }, []);

    // ✅ Initialize Map
    function initMap() {
        const initialCenter = fromLonLat([77.1025, 28.7041]); // Delhi
        
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

        setMap(mapInstance);
        markerRef.current = marker;
        mapRef.current = mapInstance;
    }

    // ✅ Reverse Geocoding using OpenStreetMap
    function reverseGeocode(lat, lon) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                setLocation(data.display_name || "Unknown Location");
            })
            .catch(error => console.error("Error fetching reverse geocoding data:", error));
    }

    // ✅ Show Location Based on User Input
    function showLocationOnMap() {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    const coordinates = fromLonLat([lon, lat]);

                    mapRef.current.getView().setCenter(coordinates);
                    mapRef.current.getView().setZoom(12);
                    markerRef.current.getGeometry().setCoordinates(coordinates);
                }
            })
            .catch(error => console.error("Error fetching geocoding data:", error));
    }

    // ✅ Get User’s Current Location
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

    return (
        <>
            <div className="report-location">
                <h1>LOCATION OF POLLUTION</h1>
                <div className="report-textboxes">
                    <form className="report-page-2-form">
                        <input type="text" placeholder="Area, Colony, Locality" />
                        <input type="text" placeholder="City, State" />
                        <input type="number" placeholder="Pincode" />
                        <input
                            type="text"
                            id="location-pollution"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
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
        </>
    );
}

export default SecondPage;
