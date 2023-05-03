

const Input = (props) => {

    const handleOnChange = (event) => {
        if(props.type === 'file'){
            props.onChange(event.target.files, 'file')
        }
    }

    return (
            <label>
                {props.children}
                <input style={props.style} onChange={handleOnChange} type={props.type}/>
            </label>      
    )
}

export default Input