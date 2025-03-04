import './faqs-ques-template.css'
import { Link } from 'react-router-dom';

function FaqQues({no, ques}){
    return(
        <>
            <div className="ques-bar">
                <div className="num-round-bg">
                    <span>{no}.</span>
                </div>
                <Link to='#'><div className="ques-rect-bg"><span>{ques}</span></div></Link>
            </div>
        </>
    )
}

export default FaqQues;