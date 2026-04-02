module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Metodo nao permitido' });
  }

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PRIVATE_KEY, FEEDBACK_TO_EMAIL } = process.env;

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PRIVATE_KEY || !FEEDBACK_TO_EMAIL) {
    return res.status(500).json({
      error: 'Variaveis de ambiente nao configuradas no servidor'
    });
  }

  const { from_name, from_email, message } = req.body || {};

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ error: 'Campos obrigatorios ausentes' });
  }

  try {
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name,
          from_email,
          message,
          to_email: FEEDBACK_TO_EMAIL
        }
      })
    });

    if (!emailjsResponse.ok) {
      const details = await emailjsResponse.text();
      return res.status(502).json({
        error: 'Falha ao enviar email pelo provedor',
        details
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: 'Erro interno ao processar envio',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
};
