import React, { useState } from "react";
import FirstPage from './report-pages/first-page';
import SecondPage from './report-pages/second-page';
import ThirdPage from './report-pages/third-page';
import Stepper from './report2';
import '../../css/report-page.css';

function ReportPage() {
  const [formData, setFormData] = useState({
    areaType: "",
    pollutionPlace: "",
    pollutionType: "",
    area:"",
    city: "",
    pincode: "",
    latitude: null,
    longitude: null,
    image: null,
  });

  const handleFormDataChange = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleSubmit = () => {
        // Prepare FormData for submission
        const formDataToSubmit = new FormData();
    
        // Append the form data to FormData
        for (const key in formData) {
            if (formData[key]) {
                formDataToSubmit.append(key, formData[key]);
            }
        }
    
    // Send form data to the backend
    const api=import.meta.env.VITE_API_KEY
    fetch(`${api}/reports`, {
      method: 'POST',
      body: formDataToSubmit,
    })
      .then(response => response.json())
      .then(data => console.log('Report submitted successfully', data))
      .catch(error => console.error('Error submitting report', error));
  };

  const componentList = [
    <FirstPage key="first" formData={formData} handleFormDataChange={handleFormDataChange} />,
    <SecondPage key="second" formData={formData} handleFormDataChange={handleFormDataChange} />,
    <ThirdPage key="third" formData={formData} handleFormDataChange={handleFormDataChange} />,
  ];

  return (
    <div>
      <Stepper
        componentList={componentList}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ReportPage;

