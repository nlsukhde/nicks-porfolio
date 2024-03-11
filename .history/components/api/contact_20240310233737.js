import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: "your-smtp-host", // For Gmail: smtp.gmail.com
      port: 587, // For secure connections: 465
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // your SMTP username
        pass: "your-password", // your SMTP password
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Your Name or App" <your-email@example.com>', // sender address
        to: "recipient@example.com", // list of receivers or use email from form
        subject: "New Contact Form Submission", // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
        html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`, // HTML body content
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ status: 'Success', message: 'Email sent successfully.' });
    } catch (error) {
      console.error("Error sending email", error);
      res.status(500).json({ status: 'Error', message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
