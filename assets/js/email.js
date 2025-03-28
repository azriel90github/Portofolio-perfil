document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#contact-form input');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (!this.classList.contains('input-success')) {
                this.classList.add('input-error'); // Sempre fica vermelho ao clicar
            }
        });

        input.addEventListener('input', function() {
            validateField(this);
        });

        input.addEventListener('blur', function() {
            validateField(this);
        });
    });

    function validateField(input) {
        removeError(input);
        
        let isValid = true;

        if (input.required && input.value.trim() === '') {
            showError(input, 'Este campo é obrigatório');
            isValid = false;
        }

        switch(input.id) {
            case 'name':
            case 'empresa':
            case 'empresaGPS': // Localização agora é obrigatória!
                if (input.value.trim().length < 8) {
                    showError(input, 'Deve ter pelo menos 8 caracteres');
                    isValid = false;
                }
                break;

            case 'number':
                // Remove qualquer caractere que não seja número
                input.value = input.value.replace(/\D/g, '');
            
                // Limita a 9 caracteres numéricos
                if (input.value.length > 9) {
                    input.value = input.value.slice(0, 9);
                }
            
                // Validação do número com 9 dígitos exatos
                if (!/^\d{9}$/.test(input.value)) {
                    showError(input, 'O telefone deve ter exatamente 9 dígitos numéricos');
                    isValid = false;
                }
            break;

            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                    showError(input, 'Por favor, insira um email válido');
                    isValid = false;
                }
                break;

            case 'campoFormulario':
                if (input.value.trim() === '') {
                    showError(input, 'Por favor, selecione um pacote');
                    isValid = false;
                }
                break;
        }

        if (isValid) {
            input.classList.add('input-success'); // Mantém verde se válido
            input.classList.remove('input-error'); // Remove borda vermelha
        } else {
            input.classList.add('input-error'); // Mantém borda vermelha se inválido
            input.classList.remove('input-success');
        }

        return isValid;
    }
    
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
            errorElement.classList.add('active');
            input.classList.add('input-error');
            input.classList.remove('input-success'); // Remove borda verde ao erro
        }
    }
    
    function removeError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = '';
            errorElement.classList.remove('active');
        }
    }

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let formIsValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            const submitBtn = document.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            startLoadingAnimation(submitBtn);
            
            const templateParams = {
                subject: `Novo contato de ${document.getElementById('name').value}`,
                name: document.getElementById('name').value,
                phone: document.getElementById('number').value,
                email: document.getElementById('email').value,
                company: document.getElementById('empresa').value,
                location: document.getElementById('empresaGPS').value,
                service: document.getElementById('campoFormulario').value,
                submission_date: new Date().toLocaleString()
            };
            
            let timeout = setTimeout(() => {
                stopLoadingAnimation(submitBtn);
                showFailureModal();
                submitBtn.disabled = false;
            }, 5000);

            emailjs.send('service_ypnwarg', 'template_xt23rn8', templateParams)
                .then(function(response) {
                    clearTimeout(timeout);
                    stopLoadingAnimation(submitBtn);
                    showSuccessModal();
                    document.getElementById('contact-form').reset();
                    resetFieldStyles();
                }, function(error) {
                    clearTimeout(timeout);
                    stopLoadingAnimation(submitBtn);
                    showFailureModal();
                })
                .finally(() => {
                    submitBtn.disabled = false;
                });
        }
    });

    function startLoadingAnimation(button) {
        let dots = 0;
        button.textContent = 'Enviando';
        button.loadingInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            button.textContent = 'Enviando' + '.'.repeat(dots);
        }, 500);
    }

    function stopLoadingAnimation(button) {
        clearInterval(button.loadingInterval);
        button.textContent = 'Enviar';
    }

    function showSuccessModal() {
        showModal('Enviado com sucesso', 'OK', 'success');
    }
    
    function showFailureModal() {
        showModal('Falha ao enviar', 'Fechar', 'error');
    }
    
    function showModal(message, buttonText, type) {
        const modal = document.createElement('div');
        modal.className = `success-modal ${type}`;
        modal.innerHTML = `
            <div class="modal-content">
                <h3>
                    ${message}
                    ${type === 'success' 
                        ? "<i class='bx bx-mail-send bx-tada'></i>" 
                        : "<i class='bx bx-mail-send bx-tada'></i>"}
                </h3>
                <button class="close-modal">${buttonText}</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    }
    
    function resetFieldStyles() {
        inputs.forEach(input => {
            input.classList.remove('input-success', 'input-error');
        });
    }
});

  
  