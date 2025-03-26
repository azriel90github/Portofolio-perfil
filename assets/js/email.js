document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os inputs do formulário
  const inputs = document.querySelectorAll('#contact-form input');
  
  // Adiciona os eventos para cada input
  inputs.forEach(input => {
      // Quando o input recebe foco (clicado)
      input.addEventListener('focus', function() {
          this.classList.add('input-focus');
          this.classList.remove('input-error');
          
          // Se estiver vazio, mostra a mensagem de campo obrigatório
          if (this.required && this.value.trim() === '') {
              showError(this, 'Este campo é obrigatório');
          }
      });
      
      // Quando começa a digitar
      input.addEventListener('input', function() {
          // Remove o estilo de foco
          this.classList.remove('input-focus');
          
          // Valida o campo conforme o tipo
          validateField(this);
      });
      
      // Quando perde o foco (sai do campo)
      input.addEventListener('blur', function() {
          this.classList.remove('input-focus');
          validateField(this);
      });
  });
  
  // Função para validar cada tipo de campo
  function validateField(input) {
      // Remove qualquer erro anterior
      removeError(input);
      
      // Verifica se o campo está vazio (se for obrigatório)
      if (input.required && input.value.trim() === '') {
          showError(input, 'Este campo é obrigatório');
          return false;
      }
      
      // Validações específicas para cada tipo de campo
      switch(input.id) {
          case 'name':
              if (input.value.trim().length < 3) {
                  showError(input, 'O nome deve ter pelo menos 3 caracteres');
                  return false; 
              }
              break;
              
          case 'number':
              if (!/^[0-9]{9}$/.test(input.value)) {
                  showError(input, 'O telefone deve ter 9 dígitos numéricos');
                  return false;
              }
              break;
              
          case 'email':
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                  showError(input, 'Por favor, insira um email válido');
                  return false;
              }
              break;
              
          case 'empresa':
              if (input.value.trim().length < 2) {
                  showError(input, 'O nome da empresa deve ter pelo menos 2 caracteres');
                  return false;
              }
              break;

          case 'empresaGPS':
              // Este campo é opcional, então só validamos se tiver conteúdo
              if (input.value.trim() !== '' && input.value.trim().length < 5) {
                  showError(input, 'A localização deve ter pelo menos 5 caracteres');
                  return false;
              }
            break;
              
          case 'campoFormulario':
              if (input.value.trim() === '') {
                  showError(input, 'Por favor, selecione um pacote');
                  return false;
              }
              break;
              
          // O campo empresaGPS é opcional, não precisa de validação
      }
      
      // Se passou por todas as validações
      return true;
  }
  
  // Função para mostrar erros (mantida como você definiu)
  function showError(input, message) {
      const errorElement = input.nextElementSibling;
      if (errorElement && errorElement.classList.contains('error-message')) {
          errorElement.textContent = message;
          errorElement.classList.add('active');
          input.classList.add('input-error');
      }
  }
  
  // Função para remover erros (mantida como você definiu)
  function removeError(input) {
      const errorElement = input.nextElementSibling;
      if (errorElement && errorElement.classList.contains('error-message')) {
          errorElement.textContent = '';
          errorElement.classList.remove('active');
          input.classList.remove('input-error');
      }
  }
  
  // Validação no envio do formulário
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let formIsValid = true;
    
    // Valida todos os campos
    inputs.forEach(input => {
        if (!validateField(input)) {
            formIsValid = false;
        }
    });
    
    // Se o formulário estiver válido, envia o email
    if (formIsValid) {
        // Mostra feedback de carregamento
        const submitBtn = document.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        // Prepara os dados do formulário
        const templateParams = {
            name: document.getElementById('name').value,
            phone: document.getElementById('number').value,
            email: document.getElementById('email').value,
            company: document.getElementById('empresa').value,
            location: document.getElementById('empresaGPS').value,
            service: document.getElementById('campoFormulario').value,
            submission_date: new Date().toLocaleString()
        };
        
        // Envia o email usando EmailJS
        emailjs.send('service_ypnwarg', 'template_xt23rn8', templateParams)
            .then(function(response) {
                // Sucesso - mostra modal
                showSuccessModal();
                // Reseta o formulário
                document.getElementById('contact-form').reset();
            }, function(error) {
                // Erro - mostra mensagem
                alert('Ocorreu um erro ao enviar: ' + JSON.stringify(error));
            })
            .finally(function() {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar';
            });
    }
});

// Função para mostrar modal de sucesso
function showSuccessModal() {
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
      <div class="modal-content">
          <h3>Enviado com sucesso</h3>
          <p>Obrigado por entrar em contato. Responderei sua mensagem em breve.</p>
          <p>Atenciosamente Suélio Armando/p>
          <button class="close-modal">OK</button>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Fecha o modal ao clicar
    modal.querySelector('.close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}
});