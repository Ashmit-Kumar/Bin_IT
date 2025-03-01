// import React from 'react';
// import HomeImageSlider from './HomePage-Components/home-imageSlider';
// import HomeAboutUs from './HomePage-Components/about-us';
// import HomeNews from './HomePage-Components/home-news';
// import HomeLatestEvents from './HomePage-Components/home-events';
// import HomeCreateEvent from './HomePage-Components/home-createEvent';
// import HomeFeedback from './HomePage-Components/home-feedback';
// import HomeNewsSubs from './HomePage-Components/home-newsSubs';
// import Footer from '../Commen-Components/footer';
// import Header from '../Commen-Components/header';

// function Home() {
//     const images = [
//         { src: '/img-slide-4.jpg', alt: 'Image 1' },
//         { src: '/img-slide-3.jpg', alt: 'Image 2' },
//         { src: '/img-slide-2.jpeg', alt: 'Image 3' },
//         { src: '/img-slide-1.jpeg', alt: 'Image 4' },
//     ];

//     const captions = [
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//         'Yeah Finally Did this also'
//     ];

//     return (
//         <>
//             <Header />
//             <main>
//                 <HomeImageSlider images={images} captions={captions} />
//                 <HomeAboutUs />
//                 <HomeNews />
//                 <HomeLatestEvents />
//                 <HomeCreateEvent />
//                 <HomeFeedback />
//                 <HomeNewsSubs />
//             </main >
//             <Footer />
//         </>
//     );
// }

// export default Home;




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