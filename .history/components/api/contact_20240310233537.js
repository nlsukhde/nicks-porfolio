// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process POST request
      const { name, email, message } = req.body;
  
      // Here, you would typically send the data to an email service or database
      console.log({ name, email, message });
  
      // Send a response back
      res.status(200).json({ status: 'Success', message: 'Message sent successfully.' });
    } else {
      // Handle any other HTTP methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  