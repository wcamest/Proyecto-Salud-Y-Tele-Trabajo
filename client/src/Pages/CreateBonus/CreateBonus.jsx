import React from 'react'
import PageBackground from '../../Components/PageBackground/PageBackground'
import style from "./CreateBonus.module.css";
import Paper from '../../Components/UI/Paper/Paper';
import Button from '../../Components/UI/Button/Button';
import printer_icon from "../../assets/icons/printer.svg";
import whatsapp_icon from "../../assets/icons/whatsapp.svg";
import bonus_header from "../../assets/icons/Bono Social Salud.svg";

function CreateBonus() {
  return (
    <div>
      <PageBackground hsl_color={{ hue: 360, saturation: 100, lightness: 90 }} />
      <div className={style.create_bonus_content}>
        <Paper className={style.content_paper}>
          <Paper className={style.preview_container} inner_shadow={true}>
            <span className={style.preview_label}>Vista Previa</span>
            <Paper className={style.bonus_preview}>
              <div className={style.bonus_inner}>
                  <img src={bonus_header} />
              </div>
            </Paper>
          </Paper>
          <Paper className={style.controls_container}>
            <h1 className={style.create_bonus_header}>Generar Bono</h1>
            <Button hsl_color={{ hue: 360, saturation: 100, lightness: 90 }} dark_text={true}>Crear Codigo</Button>
            <hr />
            <div className={style.action_buttons_container}>
              <div className={style.action_button_with_label}>
                <Button className={style.action_button} hsl_color={{ hue: 0, saturation: 0, lightness: 100 }}>
                  <img src={printer_icon} width={55} height={55} />
                </Button>
                <span>Imprimir</span>
              </div>
              <div className={style.action_button_with_label}>
                <Button className={style.action_button} hsl_color={{ hue: 0, saturation: 0, lightness: 100 }}>
                  <img src={whatsapp_icon} width={55} height={55} />
                </Button>
                <span>Compartir por WhatsApp</span>
              </div>
            </div>
          </Paper>
        </Paper>
      </div>
    </div>
  )
}

export default CreateBonus