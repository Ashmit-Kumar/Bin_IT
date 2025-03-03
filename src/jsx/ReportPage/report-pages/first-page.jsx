
import React from 'react';

function FirstPage({ formData, handleFormDataChange }) {
  const handleChange = (event) => {
    handleFormDataChange({ [event.target.name]: event.target.value });
  };

  return (
    <div className="reports-area">
      <form className="report-page-1-form">
        <select
          name="areaType"
          value={formData.areaType}
          onChange={handleChange}
        >
          <option value="" disabled hidden>Area</option>
          <option value="land">Land</option>
          <option value="water">Water</option>
        </select>

        {formData.areaType === "land" && (
          <>
            <select
              name="pollutionPlace"
              value={formData.pollutionPlace}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Pollution Place</option>
              <option value="Street">Street</option>
              <option value="Landfill site">Landfill site</option>
              <option value="Forest and Park">Forest and Park</option>
              <option value="Others">Others</option>
            </select>
            <select
              name="pollutionType"
              value={formData.pollutionType}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Pollution Type</option>
              <option value="Regular home waste">Regular home waste</option>
              <option value="Agricultural Runoff">Agricultural Runoff</option>
              <option value="Oil and Chemical">Oil and Chemical</option>
              <option value="Other">Other</option>
            </select>
          </>
        )}

        {formData.areaType === "water" && (
          <>
            <select
              name="pollutionPlace"
              value={formData.pollutionPlace}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Pollution Place</option>
              <option value="River Banks">River Banks</option>
              <option value="Seashore">Seashore</option>
              <option value="Littoral Zone">Littoral Zone</option>
              <option value="Others">Others</option>
            </select>
            <select
              name="pollutionType"
              value={formData.pollutionType}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Pollution Type</option>
              <option value="MicroPlastic">MicroPlastic</option>
              <option value="Organic waste">Organic waste</option>
              <option value="Invasive Aquatic Plants">Invasive Aquatic Plants</option>
              <option value="Other">Other</option>
            </select>
          </>
        )}
      </form>
    </div>
  );
}

export default FirstPage;
