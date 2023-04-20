import input_box_style from "./InputBox.module.css";

const InputBox = (props) => {
    const {name, id, type, placeholder, value, style} = props;
    const {onChange} = props;

    const get_style = () => {
        return {
            ...style
        }
    }

    return <input style={get_style()} className={input_box_style.input} name={name} id={id} type={type} placeholder={placeholder} value={value} />
}

export default InputBox;