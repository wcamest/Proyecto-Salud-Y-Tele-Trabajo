import PageBackground from "../../Components/PageBackground/PageBackground";
import Button from "../../Components/UI/Button/Button";
import InputBox from "../../Components/UI/InputBox/InputBox";
import Paper from "../../Components/UI/Paper/Paper";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <PageBackground hsl_color={{ hue: 220, saturation: 100, lightness: 90 }} />
      <div style={{ display: "flex", flexDirection: "column", padding: "50px", width: "300px" }}>
        <Button hsl_color={{ hue: 360, saturation: 100, lightness: 90 }} dark_text={true}>Click Me</Button>
        <Button style={{marginTop: "10px"}} hsl_color={{ hue: 25, saturation: 100, lightness: 90 }} dark_text={true}>Click Me</Button>
        <Button style={{marginTop: "10px"}} hsl_color={{ hue: 220, saturation: 100, lightness: 90 }}>Click Me</Button>
        <Button style={{marginTop: "10px"}} hsl_color={{ hue: 260, saturation: 100, lightness: 90 }}>Click Me</Button>
        <InputBox style={{marginTop: "10px"}} type="text" />
        <InputBox style={{marginTop: "10px"}} type="password" />
        <InputBox style={{marginTop: "10px"}} type="file" />
        <InputBox style={{marginTop: "10px"}} type="email" />
        <InputBox style={{marginTop: "10px"}} type="date" />
        <Paper style={{marginTop: "10px"}}>
          paper::Hola Mundo
        </Paper>
        <Paper style={{marginTop: "10px"}} inner_shadow={true}>
          paper::Hola Mundo
        </Paper>
      </div>
    </div>
  );
}

export default App
