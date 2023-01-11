import nodemailer from 'nodemailer';

export const sendEmail = async (email:any, subject:any, text:any) => {
  try {
    const transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
            user:process.env.USER,
            pass:process.env.PASSWORD
          }
    });
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text
    })
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error, "Email not sent")
  }
};
