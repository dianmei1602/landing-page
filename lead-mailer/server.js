require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi SMTP Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gunakan email Anda
    pass: process.env.EMAIL_PASS, // Gunakan App Password
  },
});

// Route untuk mengirim email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Email Anda sendiri
    subject: "Pesan Baru dari Landing Page",
    text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email berhasil dikirim" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Gagal mengirim email" });
  }
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
