import { useEffect, useState } from "react";
import axios from "axios";
import "../../../css/home-news.css";

function HomeNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiKey = "3376efcc74594e13b3c66f49229b5a89";
                const query = "pollution of land and water";
                const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
                const response = await axios.get(url);
                setNews(response.data.articles.slice(0, 5));
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
                            src={article.urlToImage || "/news-placeholder.png"}
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
                                    {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "N/A"}
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
                ))}
            </div>
        </div>
    );
}

export default HomeNews;