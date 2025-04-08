interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

export const generateEmailHtml = (data: FormData) => {
  return `
  <!DOCTYPE html>
  <html>
    <body style="font-family:Arial,sans-serif;padding:20px;margin:0;background:#f4f4f4">
      <div style="max-width:600px;background:#fff;padding:20px;margin:auto;border-radius:6px">
        <h2 style="color:#333">Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Telefone:</strong> ${data.phoneNumber}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> Solicitação de Orçamento | ${data.name}</p>
        <p><strong>Mensagem:</strong> Solicitação feita pelo site</p>
      </div>
    </body>
  </html>
  `;
};
