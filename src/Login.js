import React, { Component } from "react";
import dog from "./img/dog_nocopyright.jpg";

class Login extends Component {
  render() {
    return (
      <div>
        <img class="imageDog" src={dog} alt="dog photo"></img>

        <div class="login">

          <div class="loginContainer">

            <div class="inputsContainer">
              <p class="letras"> Correo electrónico</p>
              <input
                class="input"
                type="text"
                onChange={this.myChangeHandler}
              />
            </div>

            <div class="inputsContainer">
              <p class="letras">Contraseña</p>
              <input
                class="input"
                type="text"
                onChange={this.myChangeHandler}
              />
            </div>
            
            <div>
            <button class="iniciarsesion">
                INICIAR SESIÓN
            </button>
            </div>
     
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
