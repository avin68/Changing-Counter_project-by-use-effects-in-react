import "./Button.css"

function Button({text, clickHandler}){
    return(
        <button className={text} onClick={clickHandler}>{text}</button>
    )
}
export default Button