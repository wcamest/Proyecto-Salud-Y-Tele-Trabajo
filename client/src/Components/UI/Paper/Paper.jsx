import paper_style from "./Paper.module.css";

const Paper = (props) => {
    const {className, inner_shadow} = props;

    return <div className={`${className ? className + " ": ""}${paper_style.paper}${inner_shadow ? " " + paper_style.inner_shadow : ""}`}>
        {props.children}
    </div>
}

export default Paper;