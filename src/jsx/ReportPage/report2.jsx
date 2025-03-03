import React, { useState } from "react";
import Header from '../Commen-Components/header';
import '../../css/report-page.css';

function Stepper({ componentList, formData, handleSubmit, handleFormDataChange }) {
  const [step, setStep] = useState(0);
  const n = componentList.length;

  // Check if all required fields are filled for the current step
  const isStepComplete = () => {
    // console.log("Form Data in Stepper:", formData);
    const currentStepData = componentList[step].props.formData;
    if (step === 0) {
      return currentStepData.areaType && currentStepData.pollutionPlace && currentStepData.pollutionType;
    } else if (step === 1) {
      // Ensure city, state, and pincode are filled for step 1
    return currentStepData.city && currentStepData.pincode && currentStepData.location;
    } else if (step === 2) {
      return currentStepData.latitude && currentStepData.longitude;
    }
    return false;
  };

  const onPrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  const onNext = () => {
    if (step < n - 1) setStep(step + 1);
  };

  const StepElements = ({ currentStep }) => {
    const elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(
        <span key={i} className={currentStep >= i ? "active" : "deactive"}>
          {i + 1}
        </span>
      );
    }
    return elements;
  };

  return (
    <>
      <Header />
      <div className="report-submit">
        <div id="step-wrapper">
          <StepElements currentStep={step} />
          <div id="progress-container">
            <div id="progress" style={{ width: `${(step / (n - 1)) * 100}%`, visibility: step === 0 ? 'hidden' : 'visible' }}></div>
          </div>
        </div>
        <div id="component-container">{componentList[step]}</div>
        <div className="prev-next-btn">
          <button onClick={onPrevious} disabled={step === 0}>
            Previous
          </button>
          {step === n - 1 ? (
            <button onClick={handleSubmit} disabled={!isStepComplete()}>
              Submit Report
            </button>
          ) : (
            <button onClick={onNext} disabled={!isStepComplete()}>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Stepper;
