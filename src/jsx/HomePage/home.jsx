import React from 'react';
import HomeImageSlider from './HomePage-Components/home-imageSlider';
import HomeAboutUs from './HomePage-Components/about-us';
import HomeNews from './HomePage-Components/home-news';
import HomeNewsSubs from './HomePage-Components/home-newsSubs';
import Footer from '../Commen-Components/footer';
import Header from '../Commen-Components/header';

function Home() {
    const images = [
        { src: '/img-slide-1.jpeg', alt: 'Image 4' },
        { src: '/img-slide-4.jpg', alt: 'Image 1' },
        { src: '/img-slide-3.jpg', alt: 'Image 2' },
        { src: '/img-slide-2.jpeg', alt: 'Image 3' },
    ];

    const captions = [
        'Small Actions, Big Impact – BinIT for a Sustainable Future!',
        'Together, We Can – BinIT for a Cleaner Planet!',
        'Don’t Let Trash Define Our Future – BinIT and Take a Stand!',
        'Join the Movement, Be the Change – BinIT and Save the Earth!'
    ];

    return (
        <>
            <Header />
            <main>
                <HomeImageSlider images={images} captions={captions} />
                <HomeAboutUs />
                <HomeNews />
                <HomeNewsSubs />
            </main >
            <Footer />
        </>
    );
}

export default Home;