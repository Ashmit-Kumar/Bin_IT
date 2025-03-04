import React from 'react';

const textboxLabel = {
    fontSize: '1.5rem',
    textAlign: 'left',
    color: 'white'
}

const textArea = {
    zIndex:'2',
    display: 'flex',
    flexDirection: 'column'
}

function Textbox({ label, type, value, onChange, className }) {
    return (
        <>
            <div style={textArea}>
                <label className='textbox-label' style={textboxLabel}>{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={className}
                />
            </div>
        </>
    );
};

export default Textbox;