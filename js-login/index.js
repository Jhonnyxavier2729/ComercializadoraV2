// js/index.js
import LoginView from './loginView.js';
import LoginModel from './loginModel.js';
import LoginController from './loginController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new LoginModel();
    const view = new LoginView();
    const controller = new LoginController(view,model);
});
