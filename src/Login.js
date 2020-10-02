import React, { Component } from "react";
import dog from "./img/dog_nocopyright.jpg";

import ReactTooltip from "react-tooltip";

class Login extends Component {
  render() {
    return (
      <div>
        <img class="imageDog" src={dog} alt="dog photo"></img>

        <div class="loginContainer">
          <p class="letras"> Correo electrónico</p>
          <input class="input" type="text" onChange={this.myChangeHandler} />

          <p class="letras">Contraseña</p>
          <input class="input" type="text" onChange={this.myChangeHandler} />

          <button class="iniciarsesion">INICIAR SESIÓN</button>
          <a href="google.com"> He olvidado mi contraseña</a>
        </div>

        <div class="registerContainer">
          <p>¿Quieres registrarte?</p>
          <button class="contactabutton" data-tip data-for="registerTip">
            CONTACTA CON NOSOTROS
          </button>
          <ReactTooltip
            id="registerTip"
            place="bottom"
            effect="solid"
            multiline={true}
            className="tooltip"
          >
            + 34 636 8836 60 contacto@dinbeat.com dinbeat.com
          </ReactTooltip>
        </div>
      </div>
    );
  }
}

export default Login;
