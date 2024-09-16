// js/controllers/LoginController.js
class LoginController {
  constructor(view, model) {
      this.view = view;
      this.model = model;

      this.view.bindLogin(this.handleLogin.bind(this));
  }

  handleLogin(email, password) {
      const loginSuccess = this.model.validateLogin(email, password);
      
      if (loginSuccess) {
          this.view.showLoginMessage('¡Inicio de sesión exitoso!');
      } else {
          this.view.showLoginMessage('Usuario o contraseña incorrectos');
      }
  }
}

export default LoginController;
