import React from "react";
import NgoStepper from './NGO Pages/ngo-stepper'
import NgoPage1 from './NGO Pages/ngopage1';
import NgoPage2 from './NGO Pages/ngopage2';
import NgoPage3 from './NGO Pages/ngopage3';
import NgoPage4 from './NGO Pages/ngopage4';
import NgoPage5 from './NGO Pages/ngopage5';

import "../../css/ngo.css"

function Ngo() {
    const componentList = [
        <NgoPage1 key='first'/>,
        <NgoPage2 key='second'/>,
        <NgoPage3 key='third'/>,
        <NgoPage4 key='fourth'/>,
        <NgoPage5 key='fifth'/>
    ];

    return (
        <NgoStepper componentList={componentList} />
    );
}

export default Ngo;