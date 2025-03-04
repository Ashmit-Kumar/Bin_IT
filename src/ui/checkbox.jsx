const tickBox={
    display:'flex',
    fontSize:'1.15rem',
    gap:'0.5rem',
    zIndex:'3',
    color:'#fff'
}

const checkbox={
    transform:'scale(1.15)'
}

function Checkbox({ label }){
    return(
        <>
        <div style={tickBox}>
            <input type="checkbox" style={checkbox}/>
            <label>{label}</label>
        </div>
        </>
    )
}

export default Checkbox;