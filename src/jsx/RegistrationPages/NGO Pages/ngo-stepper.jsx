import React, { useState } from "react";
import '../../../css/ngo.css';
import Header from '../../Commen-Components/header';


function NgoStepper({ componentList }) {
    const [step, setStep] = useState(0);
    const n = componentList.length;

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
            <div className="ngo-register">
                <h1>NGO Registration</h1>
                <div id="step-wrapper">
                    <StepElements currentStep={step} />
                    <div id="progress-container">
                        <div id="progress" style={{ width: `${(step / (n - 1)) * 100}%`, visibility: step === 0 ? 'hidden' : 'visible' }}></div>
                    </div>
                </div>
                <div id="component-container">{componentList[step]}</div>
                <div className="prev-next-btn">
                    <button onClick={onPrevious} disabled={step === 0}>Previous</button>
                    <button onClick={onNext} disabled={step === n - 1}>Next</button>
                </div>
            </div>
        </>
    )
}

export default NgoStepper;