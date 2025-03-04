import '../../../css/feature.css'

function Feature() {
    return (
        <>
            <div className="feature">
                <div className="feature-img">
                    <img src="/feature-img.jpg" alt="" />
                </div>
                <div className="feature-content">
                    <div className="feature-title">
                        Sustainability is More Than a Goal - It’s our Mission
                    </div>
                    <div className="feature-detail">
                        At our core, we're devoted to revolutionizing how we preserve our planet's cleanliness. Driven by an unyielding commitment to a greener future, we relentlessly innovate to offer sustainable solutions that surpass expectations. Join us in our quest for a cleaner, more vibrant world
                    </div>
                    <div className="feature-panel">
                        <div className="panel">
                            <h3>234</h3>
                            <h5>Events Organized</h5>

                        </div>
                        <div className="panel">
                            <h3>1000+</h3>
                            <h5>Users</h5>
                        </div>
                        <div className="panel">
                            <h3>100MT</h3>
                            <h5>Water Disposed</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature;