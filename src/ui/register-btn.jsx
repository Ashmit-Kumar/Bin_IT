function RegisterButton({ buttonName, margin, color, bgcolor, onClick }) {
    const registerBtn = {
        borderRadius: '5px',
        backgroundColor: `${bgcolor}`,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: `${color}`,
        border: 'none',
        padding: '10px 40px',
        marginLeft: `${margin}rem`,
        cursor: 'pointer',
    }

    return (
        <button
            type="submit"  // Set the button to submit the form
            className='register-btn'
            style={registerBtn}
            onClick={onClick}  // You can still pass onClick for additional functionality if needed
        >
            {buttonName}
        </button>
    )
}

export default RegisterButton;
