import './button.css'
const Button = (props) => {
    return (
            <button onClick={props.onClick} className='buttonContainerBtn'>{props.children}</button>
    )
}

export default Button