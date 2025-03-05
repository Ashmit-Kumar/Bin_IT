import { useEffect, useState } from "react";
import axios from "axios";
import "../../../css/home-news.css";

function HomeNews() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;
            const query = "health effects of water pollution";
            const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&language=en&pageSize=5`;

            if (!apiKey) {
                setError("API Key not found. Make sure the .env file is configured correctly.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(url);
                if (response.data && response.data.articles.length > 0) {
                    setNews(response.data.articles);
                } else {
                    setError("No news articles found.");
                }
            } catch (error) {
                setError(`Error fetching news: ${error.response?.data?.message || error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="home-news">
            <div className="home-news-title">NEWS UPDATE</div>
            <div className="news-grid">
                {loading ? (
                    <p>Loading latest news...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    news.map((article, index) => (
                        <div key={index} className={`news-card ${index === 0 ? "featured" : ""}`}>
                            <img
                                src={article.urlToImage || "/news-placeholder.png"}
                                alt="News"
                                className="news-image"
                                loading="lazy"
                                onError={(e) => (e.target.src = "/news-placeholder.png")}
                            />
                            <div className="news-content">
                                <h3 className="news-title">{article.title}</h3>
                                <p className="news-description">
                                    {article.description || "No description available."}
                                </p>
                                <div className="news-footer">
                                    <span className="news-date">
                                        {article.publishedAt
                                            ? new Intl.DateTimeFormat("en-US", {
                                                  year: "numeric",
                                                  month: "short",
                                                  day: "numeric",
                                              }).format(new Date(article.publishedAt))
                                            : "N/A"}
                                    </span>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="news-btn"
                                    >
                                        Read More &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default HomeNews;
