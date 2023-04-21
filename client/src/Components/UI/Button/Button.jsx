import { useState } from "react";
import button_style from "./Button.module.css";

const Button = (props) => {

    const { className, style, hsl_color, dark_text } = props;
    const { onClick } = props;

    const [mouse_mode, set_mouse_mode] = useState(null);

    const get_button_style = () => {
        if (!hsl_color)
            return null;

        const get_hue_sat_and_light_diff = () => {
            return (mouse_mode ?
                (mouse_mode === "hover" ?
                    20 :
                    (mouse_mode === "active" ?
                        30 :
                        10
                    )
                ) :
                10
            )
        }

        const get_dark_text_diff = () => {
            if(dark_text)
                return 35;
            else return 100;
        }

        return {
            ...style,
            backgroundColor: `hsl(${hsl_color.hue},${hsl_color.saturation - get_hue_sat_and_light_diff()}%,${hsl_color.lightness - get_hue_sat_and_light_diff()}%)`,
            color: `hsl(${hsl_color.hue},${get_dark_text_diff()}%,${get_dark_text_diff()}%)`
        }
    }

    return <button
        onMouseEnter={() => set_mouse_mode("hover")}
        onMouseLeave={() => set_mouse_mode("null")}
        onMouseDown={() => { set_mouse_mode("active") }}
        onMouseUp={() => { set_mouse_mode("hover") }}
        onClick={onClick}
        style={get_button_style()}
        className={(className ? className + " " : "") + button_style.button}>
        {props.children}
    </button>
}

export default Button;