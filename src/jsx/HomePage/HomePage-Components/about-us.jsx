import '../../../css/about-us.css'

function HomeAboutUs() {
    return (
        <>
            <div className="about-container">
                <div className="about-title">
                    ABOUT US
                </div>

                <div className="about-mid">
                    <p>
                        BinIT is a pioneering pollution control website dedicated to empowering users to report and combat pollution effectively. Our platform utilizes advanced technology to analyze pollution incidents and provides valuable insights for environmental conservation. We're committed to revolutionizing pollution control and fostering a greener, more sustainable future for all.
                    </p>
                    <h3>
                        Don't See It, Just BinIT
                    </h3>
                </div>

                <div className="about-bottom">
                    <div className="about-card">
                        <img src="/about-desposal.png" />
                        <figcaption>Report</figcaption>
                        <p>
                            Individuals can report incidents of land pollution through our platform, providing a space for them to alert others about polluted areas.
                        </p>
                    </div>
                    {/* <div className="about-card">
                        <img src="/about-people.png" />
                        <figcaption>Community</figcaption>
                        <p>
                            We believe that solving the problem of land pollution requires collective action. Therefore, we provide a space where like-minded individuals can come together, share ideas, and coordinate efforts.
                        </p>
                    </div> */}
                    <div className="about-card">
                        <img src="/about-news.png" />
                        <figcaption>News</figcaption>
                        <p>
                        We provide a central hub for the latest pollution news and updates, keeping you informed on environmental issues.                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAboutUs;