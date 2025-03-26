// Função para mostrar erros
function showError(input, message) {
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.textContent = message;
      errorElement.classList.add('active');
      input.classList.add('input-error');
  }
}

// Função para remover erros
function removeError(input) {
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.textContent = '';
      errorElement.classList.remove('active');
      input.classList.remove('input-error');
  }
}

// Exemplo de validação atualizada (para o campo nome)
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
  } else {
      removeError(name);
      return true;
  }
}

// Configurar validação ao focar (clicar) no campo
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', function() {
      // Valida imediatamente se o campo estiver vazio
      if (this.required && this.value.trim() === '') {
          // Chama a função de validação específica para cada campo
          if (this.id === 'name') validateName();
          if (this.id === 'number') validatePhone();
          // ... adicione as outras validações
      }
  });
});