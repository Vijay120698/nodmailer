const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vijaydemo122412@gmail.com',
    pass: 'vqgh zxyj vaem snyq' // Replace with your actual password or app-specific password if you have 2FA enabled
  }
});

// Function to generate OTP
function generateOTP() {
  return crypto.randomInt(100000, 999999).toString();
}

// Route to send OTP
// app.post('/send-otp', (req, res) => {
//   const { email } = req.body; // Get email from request body
//   if (!email) {
//     return res.status(400).send('Email is required');
//   }


// });

const otp = generateOTP();

const mailOptions = {
  from: 'vijaydemo122412@gmail.com',
  to: 'vijayvincent12@gmail.com', //email
  subject: 'Your OTP Code',
  text: `Your OTP code is ${otp}`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return res.status(500).send(error.toString());
  }
  res.status(200).send('OTP sent: ' + info.response);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
