import React, { useState } from "react";
import '../../../css/report-page.css';

function FirstPage() {
    const [selectedArea, setSelectedArea] = useState("");

    const handleChange = (event) => {
        setSelectedArea(event.target.value);
    };

    return (
        <>
            <div className="reports-area">
                <form action="" className="report-page-1-form">
                    <select name="area" id="area" value={selectedArea} onChange={handleChange}>
                        <option value="" disabled hidden>
                            Area
                        </option>
                        <option value="Land">Land</option>
                        <option value="Water">Water</option>
                    </select>

                    {selectedArea === "Land" && (
                        <>
                            <select name="pollution-place" id="land-pollution-place" defaultValue="">
                                <option value="" disabled hidden>
                                    Pollution Place
                                </option>
                                <option value="Street">Street</option>
                                <option value="Landfill site">Landfill site</option>
                                <option value="Forest and Park">Forest and Park</option>
                                <option value="Others">Others</option>
                            </select>
                            <select name="pollution-type" id="land-pollution-type" defaultValue="">
                                <option value="" disabled hidden>
                                    Pollution Type
                                </option>
                                <option value="Regular home waste">Regular home waste</option>
                                <option value="Agricultural Runoff">Agricultural Runoff</option>
                                <option value="Oil and Chemical">Oil and Chemical</option>
                                <option value="Other">Other</option>
                            </select>
                        </>
                    )}

                    {selectedArea === "Water" && (
                        <>
                            <select name="pollution-place" id="water-pollution-place" defaultValue="">
                                <option value="" disabled hidden>
                                    Pollution Place
                                </option>
                                <option value="River Banks">River Banks</option>
                                <option value="Seashore">Seashore</option>
                                <option value="Littoral Zone">Littoral Zone</option>
                                <option value="Others">Others</option>
                            </select>
                            <select name="pollution-type" id="water-pollution-type" defaultValue="">
                                <option value="" disabled hidden>
                                    Pollution Type
                                </option>
                                <option value="Microplastics">Microplastics</option>
                                <option value="Organic waste">Organic waste</option>
                                <option value="Invasive Aquatic Plants">Invasive Aquatic Plants</option>
                                <option value="Other">Other</option>
                            </select>
                        </>
                    )}
                </form>
            </div>
        </>
    );
}

export default FirstPage;
