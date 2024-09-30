const nodemailer = require("nodemailer");
const config = require("../config/config");

const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  secure: false,
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS
  }
});

exports.sendEmail = async (eventType, studentId, details) => {
  const mailOptions = {
    from: config.SMTP_USER,
    to: "instructor@example.com",
    subject: `Notification: ${eventType}`,
    text: `Student ID: ${studentId}\nDetails: ${details}`
  };

  await transporter.sendMail(mailOptions);
};
