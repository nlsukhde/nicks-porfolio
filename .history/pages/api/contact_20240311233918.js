import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Destructure form data from the request body
    const { name, email, message } = req.body;

    // Create transporter object using Gmail SMTP server settings
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address from environment variables
        pass: process.env.EMAIL_PASSWORD // App password from environment variables
      },
    });

    try {
      // Send mail with specified transport object
      let info = await transporter.sendMail({
        from: `"Your Name" <${process.env.EMAIL_USER}>`, // Sender address
        to: "recipient@example.com", // List of recipients
        subject: "New Contact Form Submission", // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
        html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`, // HTML body
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ status: 'Success', message: 'Email sent successfully.' });
    } catch (error) {
      console.error("Failed to send email", error);
      res.status(500).json({ status: 'Error', message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

