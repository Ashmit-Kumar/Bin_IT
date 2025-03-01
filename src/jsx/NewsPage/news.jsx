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
            const apiKey = '3376efcc74594e13b3c66f49229b5a89';
            const query = 'pollution of land and water';
            const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

            try {
                const response = await axios.get(url);
                setArticles(response.data.articles);
            } catch (error) {
                setError('Error fetching news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const timeSince = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = Math.floor(seconds / 86400);

        if (interval >= 1) {
            return interval + ' days ago';
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + ' hours ago';
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + ' minutes ago';
        }
        return Math.floor(seconds) + ' seconds ago';
    };

    const getFirstName = (name) => {
        return name.split(' ')[0];
    };

    const displayNews = () => {
        return articles.slice(0, 6).map((article, index) => (
            <div key={index} className="card-main">
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
                <div className="article-content">
                    <div className="article-title">{article.title}</div>
                    <div className="article-description">
                        {article.description}
                    </div>
                    <div className="article-meta">
                        <span>{timeSince(article.publishedAt)}</span>
                        <span>{article.author ? `by ${getFirstName(article.author)}` : ''}</span>
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
                    <div className="news-main-title">
                        News
                    </div>
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
                                    <span className="trending-news-description">{articles[0].description}</span>
                                    <div className="trending-news-meta">
                                        <span>{timeSince(articles[0].publishedAt)}</span>
                                        <span>{articles[0].author ? `by ${getFirstName(articles[0].author)}` : ''}</span>
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