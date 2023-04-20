import paper_style from "./Paper.module.css";

const Paper = (props) => {
    const {style, inner_shadow} = props;

    return <div style={style} className={`${paper_style.paper} ${inner_shadow ? paper_style.inner_shadow : ""}`}>
        {props.children}
    </div>
}

export default Paper;