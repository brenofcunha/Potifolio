# 📧 Como Configurar o Envio de Emails

Este guia explica como configurar o EmailJS para receber sugestões do formulário no seu email.

## Passo 1: Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **Sign Up** (criar conta gratuita)
3. Faça login na sua conta

## Passo 2: Adicionar Serviço de Email

1. No painel do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, Yahoo, etc.)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** (exemplo: `service_abc123`)

## Passo 3: Criar Template de Email

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template assim:

**Assunto do email:**
```
Nova Sugestão do Portfólio - {{from_name}}
```

**Corpo do email:**
```
Você recebeu uma nova sugestão!

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado via formulário do portfólio
```

4. Clique em **Save**
5. Anote o **Template ID** (exemplo: `template_xyz456`)

## Passo 4: Obter Public Key

1. Vá em **Account** (ícone de usuário no canto superior direito)
2. Clique em **General**
3. Copie a **Public Key** (exemplo: `abc123xyz456`)

## Passo 5: Atualizar o Código

Abra o arquivo `script.js` e atualize as seguintes linhas:

```javascript
const EMAILJS_CONFIG = {
  serviceID: 'SEU_SERVICE_ID',      // Substitua pelo Service ID
  templateID: 'SEU_TEMPLATE_ID',    // Substitua pelo Template ID
  publicKey: 'SUA_PUBLIC_KEY'       // Substitua pela Public Key
};
```

E também atualize seu email na linha:
```javascript
to_email: 'seu-email@example.com' // Substitua pelo seu email
```

## Passo 6: Testar

1. Abra o arquivo `index.html` no navegador
2. Preencha o formulário de sugestões
3. Clique em **Enviar Sugestão**
4. Verifique seu email!

## 💡 Dicas

- A conta gratuita do EmailJS permite **200 emails por mês**
- Configure filtros no seu email para organizar as sugestões
- Você pode personalizar o template a qualquer momento no painel do EmailJS

## ❌ Problemas Comuns

**Erro ao enviar:**
- Verifique se copiou corretamente o Service ID, Template ID e Public Key
- Certifique-se de que o serviço de email está ativo no EmailJS
- Abra o Console do navegador (F12) para ver erros detalhados

**Email não chega:**
- Verifique sua pasta de spam
- Confirme que o template está configurado corretamente
- Verifique se o serviço de email foi aprovado no EmailJS

## 🔒 Segurança

- A Public Key é segura para usar no código do cliente
- Nunca compartilhe sua Private Key
- Configure rate limiting no painel do EmailJS para evitar spam

---

Pronto! Agora você receberá todas as sugestões diretamente no seu email! 📬
