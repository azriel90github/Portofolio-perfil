(function() {
  emailjs.init("cIfVxjtg8rCNgYV7J"); // Substitua pela sua chave pública
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Dados do formulário
  var templateParams = {
      name: document.getElementById('name').value,
      number: document.getElementById('number').value,
      email: document.getElementById('email').value,
      morada: document.getElementById('morada').value,
      empresa: document.getElementById('empresa').value,
      empresaGPS: document.getElementById('empresaGPS').value,
      servico: document.getElementById('servico').value,
      duracaoContrato: document.getElementById('duracaoContrato'),
      message: document.getElementById('message')

      
  };

  // Envio do e-mail
  emailjs.send('service_v63056u', 'SEU_ID_DE_TEMPLATE', templateParams)
      .then(function(response) {
          console.log('E-mail enviado com sucesso!', response.status, response.text);
      }, function(error) {
          console.error('Erro ao enviar e-mail:', error);
      });
});