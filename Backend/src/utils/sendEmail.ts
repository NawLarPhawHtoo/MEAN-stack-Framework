import nodemailer from 'nodemailer';

export const sendEmail = async (email:any, subject:any, text:any) => {
  try {
    const transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: "larphawhtoo6@gmail.com",
        pass: "gbhgasqbwtuzccce",
      },
    });
    await transporter.sendMail({
      from: "larphawhtoo6@gmail.com",
      to: email,
      subject: subject,
      text: text
    })
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error, "Email not sent")
  }
};
