import { useEffect, useState } from "react";
import axios from "axios";
import "../../../css/home-news.css";

function HomeNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiKey = import.meta.env.VITE_NEWS_API_KEY;
                const query = 'health effects water pollution';
                const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${encodeURIComponent(query)}&language=en`;

                const response = await axios.get(url);
                if (response.data.results) {
                    setNews(response.data.results.slice(0, 5));
                }
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="home-news">
            <div className="home-news-title">NEWS UPDATE</div>
            <div className="news-grid">
                {news.map((article, index) => (
                    <div key={index} className={`news-card ${index === 0 ? "featured" : ""}`}>
                        <img
                            src={article.image_url || "/news-placeholder.png"}
                            alt="News"
                            className="news-image"
                            loading="lazy"
                        />
                        <div className="news-content">
                            <h3 className="news-title">{article.title}</h3>
                            <p className="news-description">
                                {article.description ? article.description : "No description available."}
                            </p>
                            <div className="news-footer">
                                <span className="news-date">
                                    {article.pubDate ? new Date(article.pubDate).toLocaleDateString() : "N/A"}
                                </span>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="news-btn"
                                >
                                    Read More &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeNews;
