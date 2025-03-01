import '../../../css/news-subs.css'

function HomeNewsSubs() {
    return (
        <>
            <div className="newsletter">
                <div className="info">
                    <h1 className="title">
                        Subscribe to our Newsletter
                    </h1>
                    <p className="content">
                        Receive our weekly newsletter & updates with new events and latest news about environment.
                    </p>
                </div>
                <div className="input-group">
                    <input type="email" className="input" id="Email" name="Email" placeholder="Enter your e-mail address" autoComplete="off" />
                    <input className="button--submit" value="Subscribe" type="submit" />
                </div>
            </div>
        </>
    )
}

export default HomeNewsSubs;