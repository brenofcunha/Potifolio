# Potifolio
inspirado em um exercício do curso de front-end do senai.

# link
https://potifolio-bice.vercel.app/

# envio de feedback com vercel functions

O envio do formulario agora acontece no servidor, pela rota `/api/send-feedback`.
As chaves do EmailJS ficam em variaveis de ambiente e nao no front-end.

## variaveis necessarias

Use o arquivo `.env.example` como referencia:

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PRIVATE_KEY`
- `FEEDBACK_TO_EMAIL`

## configurar no vercel

No terminal, dentro do projeto, execute:

```bash
vercel env add EMAILJS_SERVICE_ID
vercel env add EMAILJS_TEMPLATE_ID
vercel env add EMAILJS_PRIVATE_KEY
vercel env add FEEDBACK_TO_EMAIL
```

Depois, redeploy:

```bash
vercel --prod
```