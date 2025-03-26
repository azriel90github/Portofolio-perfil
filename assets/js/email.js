document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('successModal');
  const closeModal = document.querySelector('.close');

  // Função para mostrar erros de validação
  function showError(input, message) {
      const formControl = input.parentElement;
      
      // Remove erros anteriores
      removeError(input);
      
      // Cria elemento de erro
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      
      // Insere depois do input
      input.insertAdjacentElement('afterend', errorElement);
      input.classList.add('input-error');
  }

  // Função para remover erros
  function removeError(input) {
      const errorElement = input.nextElementSibling;
      if (errorElement && errorElement.classList.contains('error-message')) {
          errorElement.remove();
      }
      input.classList.remove('input-error');
  }

  // Validações individuais
  function validateName() {
      const name = document.getElementById('name');
      const maxLength = name.getAttribute('maxlength');
      const value = name.value.trim();
      
      if (name.required && value === '') {
          showError(name, 'Por favor, insira seu nome completo');
          return false;
      } else if (value.length < 3) {
          showError(name, 'O nome deve ter pelo menos 3 caracteres');
          return false;
      } else if (value.length > maxLength) {
          showError(name, `O nome não pode exceder ${maxLength} caracteres`);
          return false;
      } else {
          removeError(name);
          return true;
      }
  }

  function validatePhone() {
      const phone = document.getElementById('number');
      const maxLength = phone.getAttribute('maxlength');
      const value = phone.value.trim();
      
      if (phone.required && value === '') {
          showError(phone, 'Por favor, insira seu número de telefone');
          return false;
      } else if (value.length !== maxLength) {
          showError(phone, `O telefone deve ter exatamente ${maxLength} dígitos`);
          return false;
      } else if (!/^[0-9]+$/.test(value)) {
          showError(phone, 'O telefone deve conter apenas números');
          return false;
      } else {
          removeError(phone);
          return true;
      }
  }

  // ... (mantenha as outras funções de validação como validateEmail, validateCompany, validateService)

  // Configurar validação para todos os campos
  function setupFieldValidation(inputId, validationFn) {
      const input = document.getElementById(inputId);
      
      // Mostrar erro ao focar no campo (se estiver vazio)
      input.addEventListener('focus', function() {
          if (input.required && input.value.trim() === '') {
              validationFn();
          }
      });
      
      // Validar durante a digitação
      input.addEventListener('input', function() {
          if (input.value.trim() !== '') {
              validationFn();
          }
      });
      
      // Validar ao sair do campo
      input.addEventListener('blur', validationFn);
  }

  // Aplicar a todos os campos
  setupFieldValidation('name', validateName);
  setupFieldValidation('number', validatePhone);
  setupFieldValidation('email', validateEmail);
  setupFieldValidation('empresa', validateCompany);
  setupFieldValidation('campoFormulario', validateService);

  // Fechar modal
  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Envio do formulário (mantenha o mesmo código de antes)
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validar todos os campos
      const isNameValid = validateName();
      const isPhoneValid = validatePhone();
      const isEmailValid = validateEmail();
      const isCompanyValid = validateCompany();
      const isServiceValid = validateService();
      
      if (isNameValid && isPhoneValid && isEmailValid && isCompanyValid && isServiceValid) {
          // Código de envio do formulário...
      }
  });
});