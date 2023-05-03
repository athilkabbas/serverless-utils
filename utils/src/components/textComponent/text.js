import './text.css'

const Text = (props) => {
    return (
        <span className="textDecorationText">
            {props.children}
        </span>
    )
}

export default Text