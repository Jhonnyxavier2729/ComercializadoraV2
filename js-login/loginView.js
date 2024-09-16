// js/views/LoginView.js
class LoginView {
  constructor() {
      this.loginForm = document.querySelector('#loginForm');
      this.emailInput = document.querySelector('#usuario');
      this.passwordInput = document.querySelector('#password');
      this.loginMessage = document.querySelector('#loginMessage');
  }

  bindLogin(handler) {
      this.loginForm.addEventListener('submit', event => {
          event.preventDefault();
          const email = this.emailInput.value;
          const password = this.passwordInput.value;
          handler(email, password);
      });
  }

  showLoginMessage(message) {
      this.loginMessage.textContent = message;
      this.loginMessage.style.display = 'block';
  }
}

export default LoginView;
