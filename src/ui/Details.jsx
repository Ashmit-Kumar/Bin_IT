// src/components/ui/Details.jsx
import React from 'react';
import './details.css'

const Details = ({ title, paragraph, imageSrc }) => {
    return (
        <>
            <div className="about-content">
                <div className="content-title">
                    {title}
                </div>
                <div className='content-detail'>
                    <div className="details" dangerouslySetInnerHTML={{ __html: paragraph }}>
                    </div>
                    <div className="content-pic">
                        <img src={imageSrc} alt={title} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
