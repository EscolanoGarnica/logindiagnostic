import React, { Component } from "react";
import dog from "./img/dog_nocopyright.jpg";

import ReactTooltip from "react-tooltip";

class Login extends Component {
  render() {
    return (
      <div>
        <img class="imageDog" src={dog} alt="dog photo"></img>

        <div class="loginContainer">
          <form>
            <label>
              Correo electrónico
              <input
                class="input"
                type="text"
                onChange={this.myChangeHandler}
              />
            </label>
            <br/>
            <label>
              Contraseña
              <input
                class="input"
                type="password"
                onChange={this.myChangeHandler}
              />
            </label>
          </form>

          
          <a href="google.com"> He olvidado mi contraseña</a>
          <div class='divIniciarSesion'>
          <button class="iniciarsesion">INICIAR SESIÓN</button>
          </div>
          
          
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
