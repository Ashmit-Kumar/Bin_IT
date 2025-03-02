import React from 'react';
import HomeImageSlider from '../HomePage/HomePage-Components/home-imageSlider';
import HomeAboutUs from '../HomePage/HomePage-Components/about-us';
import Details from '../../ui/Details';
import Feature from './AboutPage-Components/feature';
import Journey from './AboutPage-Components/journey';
import MemberDetails from '../../ui/member-details';
import '../../css/about-us.css';
import Footer from '../Commen-Components/footer';
import Header from '../Commen-Components/header';

const About = () => {
    const images = [
        { src: '/img-slide-1.jpeg', alt: 'Image 4' },
        { src: '/img-slide-4.jpg', alt: 'Image 1' },
        { src: '/img-slide-3.jpg', alt: 'Image 2' },
        { src: '/img-slide-2.jpeg', alt: 'Image 3' },
    ];

    const captions = [
        'BinIT to Win It – A Cleaner World Starts with You!',
        'Trash the Waste, Treasure the Earth – BinIT Today!',
        'Turn Awareness into Action – BinIT for a Greener Tomorrow!',
        'Pollution Ends Where Responsibility Begins – BinIT Now!'
    ];

    const detailData = [
        {
            title: 'OPPORTUNITY STATEMENT',
            paragraph: "In today's world, pollution looms as an ever-growing menace, casting a shadow over communities and ecosystems globally. Yet, in many places, its presence has become so ingrained that residents feel resigned to its effects, unable to effectuate significant change. <br/><br/> This sense of helplessness fosters a culture of acceptance, perpetuating environmental degradation and impeding the pursuit of cleaner, healthier living environments for all. Amidst these challenges, the normalization of pollution poses a significant barrier to meaningful action and progress. As communities become accustomed to polluted surroundings, the urgency to address this pressing issue diminishes, resulting in a lack of concerted efforts towards mitigation and prevention. Consequently, the cycle of environmental degradation continues unabated, jeopardizing the well-being of both current and future generations.",
            imageSrc: '/content-pic1.png',
        },
        {
            title: 'SOLUTION STATEMENT',
            paragraph: "BinIT's solution involves a multifaceted approach aimed at revolutionizing pollution control and fostering greater environmental stewardship. At the core of our strategy is the enhancement of our platform into a comprehensive and centralized hub for addressing both land and water pollution. This revamped platform will serve as a user-friendly interface, empowering individuals and communities to report pollution incidents swiftly and accurately.<br/><br/>To achieve this, BinIT will leverage advanced technologies such as artificial intelligence and machine learning algorithms. These tools will enable automated analysis of pollution data, allowing for rapid identification and categorization of pollution incidents. Additionally, our platform will utilize geospatial mapping capabilities to pinpoint the precise location of pollution hotspots, facilitating targeted intervention strategies.<br/><br/> In addition to reporting capabilities, BinIT will provide users with access to a wealth of resources and insights aimed at supporting environmental conservation efforts. This includes educational materials on pollution prevention and mitigation strategies, as well as real-time updates on pollution trends and developments. By equipping users with the knowledge and tools they need to combat pollution effectively, BinIT aims to empower individuals and communities to take proactive steps towards a cleaner, greener world.<br/><br/>       Furthermore, BinIT will foster greater collaboration and collective action through its platform. Users will have the opportunity to connect with like-minded individuals and organizations, enabling the formation of partnerships and alliances dedicated to addressing environmental challenges. Through shared expertise and resources, these collaborative efforts will amplify the impact of pollution control initiatives, driving meaningful progress towards a more sustainable future.<br/><br/>Overall, BinIT's solution represents a pioneering approach to pollution control, harnessing the power of technology and community engagement to create positive environmental change. By providing a centralized platform for reporting, analysis, and collaboration, BinIT aims to empower individuals and communities to play an active role in protecting our planet for future generations.",
            imageSrc: '/content-pic2.png',
        },
        {
            title: 'OUR VISION',
            paragraph: "At the heart of our vision lies a world where pollution is minimized, and environmental stewardship takes center stage in our collective consciousness. We envision a future where every individual recognizes their role in pollution control, understanding the profound impact their actions have on the health of our planet. Through this heightened awareness and sense of responsibility, we aspire to cultivate a global community dedicated to sustainable living and environmental preservation.<br/><br/>In our envisioned future, environmental stewardship transcends borders and boundaries, uniting people from all walks of life in a shared commitment to safeguarding our planet. Together, we harness the power of collective action to implement innovative solutions and drive positive change on a global scale. By fostering collaboration and cooperation, we empower individuals to take ownership of their environmental footprint, catalyzing a shift towards more sustainable practices and behaviors.<br/><br/>Ultimately, our vision is one of hope and possibility, where the values of environmental responsibility and sustainable living are ingrained in our daily lives and embedded in the fabric of society. Through our collective efforts, we strive to create a world where the health of our planet is preserved for future generations to enjoy, ensuring a legacy of prosperity and well-being for all.",
            imageSrc: '/content-pic3.jpg',
        },
    ];

    const socialLinks = [
        { linkedin: 'https://www.linkedin.com/in/ayush-sharma-ba6a8324a/', github: 'https://github.com/ayushsharma-1', email: 'ayushsharma18001@gmail.com' },
        { linkedin: 'https://www.linkedin.com/in/ashmit-kumar-b7141b290/', github: 'https://github.com/Ashmit-Kumar', email: 'ashmitkumar1020@gmail.com' },
        { linkedin: 'https://www.linkedin.com/in/rudra-pratap-singh-cse/', github: 'https://github.com/RudraSingh05', email: 'er.rudra.singh05@gmail.com' },
        { linkedin: 'https://www.linkedin.com/in/divyansh-saxena-84985724a/', github: 'https://github.com/divyanshsaxena21', email: 'divyansh_saxena@yahoo.com' },
        { linkedin: 'https://www.linkedin.com/in/pragya-mishra-437314250/', github: 'https://github.com/Pragya123450', email: 'ipragyamishra2004@gmail.com' }
    ];

    const roles = [
        'Team Leader',
        'BackEnd-Developer',
        'FrontEnd-Developer',
        'ML Specialist',
        'Ui Designer'
    ];

    const names = [
        'Ayush Sharma',
        'Ashmit Kumar',
        'Rudra Singh',
        'Divyansh Saxena',
        'Pragya Mishra'
    ];

    // const descs = [
    //     'Working as Database Administrator, Backend Developer for Website and UX designer',
    //     'Working as both Front-end and Backend developer for Mobile Application.',
    //     'Working as Front-end Developer for Website.',
    //     'Working as ML specialist and Designer for Website and mobile application',
    //     'Working as Ux Designer for website and mobile application'
    // ];

    const imgs = [
        '/members-dp/ayush.png',
        '/members-dp/ashmit.jpg',
        '/members-dp/rudra.jpg',
        '/members-dp/divyansh.png',
        '/members-dp/pragya.jpg'
    ];

    return (
        <>
            <Header />
            <main>
                <HomeImageSlider images={images} captions={captions} />
                <HomeAboutUs />
                <Feature />
                {detailData.map((detail, index) => (
                    <Details
                        key={index}
                        title={detail.title}
                        paragraph={detail.paragraph}
                        imageSrc={detail.imageSrc}
                    />
                ))}
                {/* <Journey /> */}
                <div className="team-members">
                    <span className='team-title'>MEET THE TEAM</span>
                    <div className="team-members-details">
                        {socialLinks.map((links, index) => (
                            <MemberDetails
                                key={index}
                                img={imgs[index]}
                                role={roles[index]}
                                name={names[index]}
                                // desc={descs[index]}
                                links={links}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;