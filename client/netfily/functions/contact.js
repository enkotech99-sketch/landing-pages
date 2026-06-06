const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { nombre, email, mensaje } = JSON.parse(event.body);

  if (!nombre || !email || !mensaje) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Faltan campos' }) };
  }

  // --------------------------
  // TRANSPORTER OUTLOOK
  // --------------------------
  const transporterOutlook = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,   // contacto@enko-tech.com
      pass: process.env.EMAIL_PASS,
    },
    requireTLS: true
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`
  };

  // --------------------------
  // 1) INTENTAR OUTLOOK
  // --------------------------
  try {
    await transporterOutlook.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ success: true, method: "outlook" }) };
  } catch (error) {
    console.error("❌ Error con Outlook:", error.message);
  }

  // --------------------------
  // 2) FALLBACK A GMAIL
  // --------------------------
  const transporterGmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,   // enkotech99@gmail.com
      pass: process.env.GMAIL_PASS    // contraseña de aplicación
    }
  });

  try {
    await transporterGmail.sendMail({
      ...mailOptions,
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER
    });

    return { statusCode: 200, body: JSON.stringify({ success: true, method: "gmail" }) };
  } catch (error) {
    console.error("❌ Error con Gmail:", error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error enviando correo con Outlook y Gmail",
        detalle: error.message
      })
    };
  }
};
