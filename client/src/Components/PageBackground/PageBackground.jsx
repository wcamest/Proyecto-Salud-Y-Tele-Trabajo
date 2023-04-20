import style from "./PageBackground.module.css";

const PageBackground = (props) => {
    const { hsl_color } = props;

    const get_color_stripe_style = () => {
        if (!hsl_color)
            return null;

        return {
            backgroundColor: `hsl(${hsl_color.hue},${hsl_color.saturation}%,${hsl_color.lightness}%)`
        }
    }

    return <div className={style.page_background}>
        <div style={get_color_stripe_style()} className={style.color_stripe}>

        </div>
    </div>
}

export default PageBackground;