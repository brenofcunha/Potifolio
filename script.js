// ========================================
// CONFIGURAÇÃO EmailJS
// ========================================
// 1. Acesse: https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Adicione um serviço de email (Gmail, Outlook, etc)
// 4. Crie um template de email
// 5. Substitua os valores abaixo com suas credenciais:

const EMAILJS_CONFIG = {
  serviceID: 'service_1d4sodm',      // Ex: 'service_abc123'
  templateID: 'template_cn05b7v',    // Ex: 'template_xyz456'
  publicKey: 'sxvU1mCzyGYxfeB9j'       // Ex: 'abc123xyz456'
};

// ========================================
// INICIALIZAÇÃO
// ========================================
(function() {
  emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// ========================================
// MANIPULADOR DO FORMULÁRIO
// ========================================
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const submitBtn = this.querySelector('.submit-btn');
  const originalBtnText = submitBtn.textContent;
  
  // Desabilita botão e mostra loading
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  
  // Coleta os dados do formulário
  const formData = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('comment').value,
    to_email: 'brenofcunha@gmail.com' // Meu email
  };
  
  // Envia o email via EmailJS
  emailjs.send(
    EMAILJS_CONFIG.serviceID,
    EMAILJS_CONFIG.templateID,
    formData
  )
  .then(function(response) {
    console.log('Email enviado com sucesso!', response.status, response.text);
    
    // Mostra mensagem de sucesso
    showMessage('Sugestão enviada com sucesso! Obrigado pelo feedback! 🎉', 'success');
    
    // Limpa o formulário
    feedbackForm.reset();
    
    // Restaura o botão
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  })
  .catch(function(error) {
    console.error('Erro ao enviar email:', error);
    
    // Mostra mensagem de erro
    showMessage('Erro ao enviar sugestão. Tente novamente mais tarde. ❌', 'error');
    
    // Restaura o botão
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  });
});

// ========================================
// FUNÇÃO AUXILIAR - MENSAGENS
// ========================================
function showMessage(text, type) {
  // Remove mensagem existente, se houver
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Cria nova mensagem
  const message = document.createElement('div');
  message.className = `form-message ${type}`;
  message.textContent = text;
  
  // Adiciona após o formulário
  feedbackForm.parentNode.insertBefore(message, feedbackForm.nextSibling);
  
  // Remove a mensagem após 5 segundos
  setTimeout(() => {
    message.style.opacity = '0';
    setTimeout(() => message.remove(), 300);
  }, 5000);
}
