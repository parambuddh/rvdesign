import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ status: 'error', message: 'Method not allowed' });

  const { name, email, phone, message, source_url } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ status: 'error', message: 'Name, email, and phone are required.' });
  }

  const smtpUser = process.env.SMTP_USER || 'parambuddh26@gmail.com';
  const smtpPass = process.env.SMTP_PASS || '';
  const logoUrl = 'https://www.relationshipvista.com/logo.webp';
  const recipient = 'parambuddh26@gmail.com';

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: smtpUser, pass: smtpPass.replace(/\s/g, '') },
  });

  const salesHTML = `<!DOCTYPE html><html><head><title>Inquiry</title></head><body>
    <table width="650" align="center" cellpadding="0" cellspacing="0" style="border:1px solid #e2e2e2;font-family:Arial,sans-serif;font-size:12px;color:#333;">
      <tr><td align="center" bgcolor="#f4f9fb" style="padding:10px 0;border-bottom:1px solid #e2e2e2;">
        <img src="${logoUrl}" width="200" style="display:block;" />
      </td></tr>
      <tr><td align="center" style="padding:20px 10px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td align="left" style="padding-bottom:10px;"><strong style="font-size:18px;">Following message received via contact us form</strong></td></tr>
          <tr><td>
            <table width="100%" cellpadding="0" cellspacing="0" border="1" style="border-collapse:collapse;border:1px solid #ccc;">
              <tr><td style="padding:10px;width:34%;"><strong>Name:</strong></td><td style="padding:10px;">${name}</td></tr>
              <tr><td style="padding:10px;"><strong>Email:</strong></td><td style="padding:10px;">${email}</td></tr>
              <tr><td style="padding:10px;"><strong>Contact Number:</strong></td><td style="padding:10px;">${phone}</td></tr>
              <tr><td style="padding:10px;"><strong>Message:</strong></td><td style="padding:10px;">${(message || '').replace(/\n/g, '<br/>')}</td></tr>
              <tr><td style="padding:10px;"><strong>Form Submitted From:</strong></td><td style="padding:10px;">${source_url || 'Direct'}</td></tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
      <tr><td bgcolor="#f4f9fb" style="padding:10px;border-top:1px solid #e2e2e2;">
        <strong>Thanks &amp; Regards</strong><br/> RelationshipVista Team<br/>
        <strong>Address: </strong>2040 Martin Ave Santa Clara, CA 95050 United States<br/>
        <strong>Phone: </strong> 1.669.777.6838
      </td></tr>
    </table></body></html>`;

  const prospectHTML = `<!DOCTYPE html><html><head><title>Thank You</title></head><body>
    <table width="650" align="center" cellpadding="0" cellspacing="0" style="border:1px solid #e2e2e2;font-family:Arial,sans-serif;font-size:12px;color:#333;">
      <tr><td align="center" bgcolor="#f4f9fb" style="padding:10px 0;border-bottom:1px solid #e2e2e2;">
        <img src="${logoUrl}" width="200" style="display:block;" />
      </td></tr>
      <tr><td align="center" style="padding:20px 10px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td align="left" style="padding-bottom:10px;"><strong style="font-size:18px;">We have received your details, one of our representatives will get in touch with you shortly.</strong></td></tr>
          <tr><td>
            <table width="100%" cellpadding="0" cellspacing="0" border="1" style="border-collapse:collapse;border:1px solid #ccc;">
              <tr><td style="padding:10px;width:34%;"><strong>Name:</strong></td><td style="padding:10px;">${name}</td></tr>
              <tr><td style="padding:10px;"><strong>Email:</strong></td><td style="padding:10px;">${email}</td></tr>
              <tr><td style="padding:10px;"><strong>Contact Number:</strong></td><td style="padding:10px;">${phone}</td></tr>
              <tr><td style="padding:10px;"><strong>Message:</strong></td><td style="padding:10px;">${(message || '').replace(/\n/g, '<br/>')}</td></tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
      <tr><td bgcolor="#f4f9fb" style="padding:10px;border-top:1px solid #e2e2e2;">
        <strong>Thanks &amp; Regards</strong><br/> RelationshipVista Team<br/>
        <strong>Address: </strong>2040 Martin Ave Santa Clara, CA 95050 United States<br/>
        <strong>Phone: </strong> 1.669.777.6838
      </td></tr>
    </table></body></html>`;

  const errors = [];

  try {
    // 1. Send internal copy to sales (no CC)
    await transporter.sendMail({
      from: `"RelationshipVista" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: 'New Inquiry from RelationshipVista website',
      html: salesHTML,
    });
  } catch (e) {
    errors.push('Sales email failed: ' + e.message);
  }

  try {
    // 2. Auto-responder to prospect
    await transporter.sendMail({
      from: `"RelationshipVista" <${smtpUser}>`,
      to: email,
      subject: 'Thank You for contacting RelationshipVista',
      html: prospectHTML,
    });
  } catch (e) {
    errors.push('Prospect email failed: ' + e.message);
  }

  if (errors.length) {
    return res.status(500).json({ status: 'error', message: 'Partial or total mail failure.', errors });
  }

  return res.status(200).json({ status: 'success', message: 'Your message has been sent successfully!' });
}
