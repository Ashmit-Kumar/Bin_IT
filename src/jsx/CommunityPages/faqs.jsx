import '../../css/faqs.css'
import FaqQues from './CommunityPages-components/faqs-ques-template';
import RegisterButton from '../../ui/register-btn';
import Header from '../Commen-Components/header';
import Footer from '../Commen-Components/footer';

function Faqs() {
    return (
        <>
        <Header />
            <div className="faqs">
                <div className="faqs-header">
                    <h1 className="faq-titles">Do You Have Questions?</h1>
                    <h2 className="faq-co-title">We have answers (well, most of the time 😜)</h2>
                    <h3 className="faq-here-u-go">Below you’ll find answers to the most common questions you may have on BinIT. Also, please feel free to check out our <a href="">Facebook</a> & <a href="">Twitter</a> Pages. If you still can’t find the answer you’re looking for, just <a href="#contact-area">Contact us!</a></h3>
                    <img src="/faqs-img/faq-img-1.png" alt="Confused-Image" />
                </div>
                <div className="faqs-main">
                    {/* <div className="faq-main-bg"><img src="/faqs-img/faqs-bg.png" className='faq-main-img' /></div> */}
                    <div className="faqs-ques">
                        <h1 className="faq-titles">Frequently Asked Questions(FAQs)</h1>
                        <div className="faqs-ques-link">
                            <FaqQues no='1' ques="How to register as a User?" />
                            <FaqQues no='2' ques="How to Login?" />
                            <FaqQues no='3' ques="How you can dinate?" />
                            <FaqQues no='4' ques="How to register as a NGO?" />
                            <FaqQues no='5' ques="Thank u(yeh hoga nhi bas koi ques nhi smjh aya to likh diya?" />
                        </div>
                    </div>
                </div>
                <div className="contact" id='contact-area'>
                    <div className="contact-top">
                        <h1 className="contact-titles">CONTACT US</h1>
                        <h3 className="contact-here-u-go">You can contact with us through the contact form on this page, or by email, or social media. We’re here to help and would love to hear from you, whether you have a question, comment, or just want to chat. We’ll respond to you as soon as possible. </h3>
                    </div>
                    <div className="contact-bottom">
                        <form action="" className="contact-form">
                            <div className="contact-input">
                                <label htmlFor="">Name</label>
                                <input type="text" />
                            </div>
                            <div className="contact-input">
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="contact-input">
                                <label htmlFor="">Text</label>
                                <textarea placeholder='Write your quere here'></textarea>
                            </div>
                            <div className="submit-btns" >
                                <RegisterButton buttonName='Submit' bgcolor='#000000' color='white' path='#'/>
                                <RegisterButton buttonName='Reset' bgcolor='#000000' color='white' path='#'/>
                            </div>
                        </form>
                        <img src="/faqs-img/faq-img-2.png" alt="Contact-Image" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faqs;