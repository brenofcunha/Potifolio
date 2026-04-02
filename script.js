// ========================================
// ENVIO VIA API (VERCEL FUNCTION)
// ========================================

// ========================================
// MANIPULADOR DO FORMULÁRIO
// ========================================
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', async function(event) {
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
  
  try {
    const response = await fetch('/api/send-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Falha ao enviar o email');
    }

    console.log('Email enviado com sucesso!', result);

    // Mostra mensagem de sucesso
    showMessage('Sugestão enviada com sucesso! Obrigado pelo feedback! 🎉', 'success');

    // Limpa o formulário
    feedbackForm.reset();
  } catch (error) {
    console.error('Erro ao enviar email:', error);

    // Mostra mensagem de erro
    showMessage('Erro ao enviar sugestão. Tente novamente mais tarde. ❌', 'error');
  } finally {
    // Restaura o botão
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
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
