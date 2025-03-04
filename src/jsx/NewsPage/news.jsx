import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/news-main.css';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import Header from '../Commen-Components/header';
import Footer from '../Commen-Components/footer';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;  
            const query = 'pollution of land and water';
            const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&language=en&pageSize=6`;

            if (!apiKey) {
                setError("API Key missing. Set VITE_GOOGLE_NEWS_API_KEY in .env file.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(url);
                if (response.data && response.data.articles) {
                    setArticles(response.data.articles);
                } else {
                    setError("No news articles found.");
                }
            } catch (err) {
                setError(`Error fetching news: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const timeSince = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval + ' days ago';
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return interval + ' hours ago';
        interval = Math.floor(seconds / 60);
        if (interval >= 1) return interval + ' minutes ago';
        return Math.floor(seconds) + ' seconds ago';
    };

    const getFirstName = (name) => (name ? name.split(' ')[0] : 'Unknown');

    const displayNews = () => {
        return articles.map((article, index) => (
            <div key={index} className="card-main">
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
                <div className="article-content">
                    <div className="article-title">{article.title}</div>
                    <div className="article-description">
                        {article.description || 'No description available'}
                    </div>
                    <div className="article-meta">
                        <span>{timeSince(article.publishedAt)}</span>
                        <span>{article.source ? `by ${getFirstName(article.source.name)}` : ''}</span>
                    </div>
                    <div className="article-actions">
                        <div className="action-item">
                            <FaHeart />
                        </div>
                        <div className="action-item">
                            <FaShareAlt />
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
            <Header />
            <main>
                <div className="news-main">
                    <div className="news-main-title">News</div>
                    <div className="trending-news-top">
                        {articles.length > 0 && articles[0].urlToImage && (
                            <div className="trending-news-img">
                                <img src={articles[0].urlToImage} alt={articles[0].title} className="article-image" />
                            </div>
                        )}
                        <div className="trending-news-right">
                            <div className="trending">
                                <span className="trending-news">Trending</span>
                                <div className="article-actions">
                                    <div className="action-item">
                                        <FaHeart />
                                    </div>
                                    <div className="action-item">
                                        <FaShareAlt />
                                    </div>
                                </div>
                            </div>
                            {articles.length > 0 && (
                                <>
                                    <span className="trending-news-title">{articles[0].title}</span>
                                    <span className="trending-news-description">{articles[0].description || 'No description available'}</span>
                                    <div className="trending-news-meta">
                                        <span>{timeSince(articles[0].publishedAt)}</span>
                                        <span>{articles[0].source ? `by ${getFirstName(articles[0].source.name)}` : ''}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="news-container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <div className="news-grid">{displayNews()}</div>
                    )}
                    <button className="btn-view-more">View More</button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default News;
