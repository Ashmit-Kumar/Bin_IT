import '../../css/report-page.css';
import React from "react";
import FirstPage from './report-pages/first-page';
import SecondPage from './report-pages/second-page';
import ThirdPage from './report-pages/third-page';
import Stepper from './report2';

function ReportPage() {
  const componentList = [
    <FirstPage key="first" />,
    <SecondPage key="second" />,
    <ThirdPage key="third" />
  ];

  return (
    <Stepper componentList={componentList} />
  );
}

export default ReportPage;