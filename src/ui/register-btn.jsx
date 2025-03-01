import { Link } from "react-router-dom";

function RegisterButton({ buttonName, margin, color, bgcolor, path }) {
    const registerBtn = {
        borderRadius: '5px',
        backgroundColor: `${bgcolor}`,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: `${color}`,
        border: 'none',
        padding: '10px 40px',
        marginLeft: `${margin}rem`
    }

    return (
        <>
            <Link to={path}>
                <button className='register-btn' style={registerBtn}>
                    {buttonName}
                </button>
            </Link>
        </>
    )
}

export default RegisterButton;