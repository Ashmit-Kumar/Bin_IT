import '../../../css/journey.css'

function Journey() {
    return (
        <>
            <div className="journey">
                <div className="journey-title">
                    JOURNEY
                </div>
                <div className="journey-chart">
                    <div className="above-circle">
                        <div className="text-box">
                            <h3>2023</h3>
                            <h5>Started</h5>
                        </div>
                        <div className="text-box">
                            <h3>2024</h3>
                            <h5>Launched</h5>
                        </div>
                        <div className="text-box">
                            <h3>2025</h3>
                            <h5>100MT Ton Plastic <br />Disposal</h5>
                        </div>
                    </div>
                    <div className="above-stick">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="above-line">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="below-line">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="below-stick">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="below-circle">
                        <div className="text-box">
                            <h3>BinIT Completed</h3>
                            <h5>2024</h5>
                        </div>
                        <div className="text-box">
                            <h3>Commencement of <br /> cleaning events</h3>
                            <h5>2024</h5>
                        </div>
                    </div>
                </div>
                <div className="orgs-slider">
                    <div className="orgs-slider-title">
                        Organization Works With Us
                    </div>
                        <marquee>
                            <img src="/ngos-img/ngo-1-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-2-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-3-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-4-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-5-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-6-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-7-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-8-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-9-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-10-removebg-preview.png" alt="" />
                            <img src="/ngos-img/ngo-11-removebg-preview.png" alt="" />
                    </marquee>
                </div>
            </div>
        </>
    )
}

export default Journey;