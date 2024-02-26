const Headerbutton = ({type, text, onClick}) => {
    return(
        <div className="Headerbutton">
            <button className={`myBtn ${type}`} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

Headerbutton.defaultProps = {
    type : 'default'
}
export default Headerbutton;