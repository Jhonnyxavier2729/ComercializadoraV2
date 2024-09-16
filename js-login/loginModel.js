// js/models/LoginModel.js
class LoginModel {
  validateLogin(email, password) {
      // Lógica de validación simple (puedes reemplazarla con lógica real)
      const validEmail = "test@example.com";
      const validPassword = "123456";

      return email === validEmail && password === validPassword;
  }
}

export default LoginModel;
