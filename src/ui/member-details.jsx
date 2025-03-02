import React from 'react';
import './member-details.css';

function MemberDetails({ img, role, name, desc, links }) {
    return (
        <div className="member-details">
            <img src={img} alt={`${name}'s profile`} />
            <div className='bas-mobile-ke-liye'>
                <div className="member-dets">
                    <span className='member-role'>{role}</span>
                    <span className='member-name'>{name}</span>
                    {/* <span className='member-desc'>{desc}</span> */}
                </div>
                <div className="members-socials">
                    {links.linkedin && (
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src="/LinkedIn.png" alt="LinkedIn" />
                        </a>
                    )}
                    {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer">
                            <img src="/GitHub.png" alt="GitHub" />
                        </a>
                    )}
                    {links.email && (
                        <a href={`mailto:${links.email}`} target="_blank" rel="noopener noreferrer">
                            <img src="/Email.png" alt="Email" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MemberDetails;
