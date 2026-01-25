import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});


transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail server error:", error);
  } else {
    console.log("✅ Mail server ready");
  }
});


export async function sendRegistrationEmail(
  email: string,
  name: string
): Promise<void> {
  const currentYear = new Date().getFullYear();

  await transporter.sendMail({
    from: `Lovitche Team <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Welcome to Lovitche! Registration Successful 🌟",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: auto; padding: 24px; background: #ffffff; border-radius: 12px;">
        
        <div style="text-align:center; margin-bottom: 24px;">
          <img
            src="https://your-cdn.com/lovitche-banner.png"
            alt="Lovitche"
            style="width:100%; max-width:600px; border-radius:12px;"
          />
        </div>

        <h1 style="color:#6B48FF; text-align:center;">
          Welcome, ${name}! 🎉
        </h1>

        <p style="font-size:16px; color:#333; text-align:center;">
          Your registration has been <b>successfully completed</b>.
        </p>

        <p style="font-size:15px; color:#555; line-height:1.6; text-align:center;">
          Aligning stars, connecting people ✨<br/>
          We’re thrilled to have you in the Lovitche family.
        </p>

        <div style="text-align:center; margin-top:40px;">
          <p style="color:#888;">With love from the Lovitche Team 💜</p>
          <p style="color:#aaa;">© ${currentYear} Lovitche</p>
        </div>
      </div>
    `,
  });
}

/**
 * -----------------------------------------------------
 * NEWSLETTER WELCOME EMAIL
 * -----------------------------------------------------
 */
export async function sendNewsletterWelcomeEmail(
  email: string,
): Promise<void> {
  const currentYear = new Date().getFullYear();

  await transporter.sendMail({
    from: `Lovitche Team <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Welcome to the Lovitche Newsletter 📰",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: auto; padding: 24px; background:#ffffff; border-radius:12px;">
        
        <div style="text-align:center; margin-bottom: 24px;">
          <img
            src="https://www.xn--lovitch-hya.com/mailimg.jpeg"
            alt="Lovitche Logo"
            width="96"
            style="border-radius:12px;"
          />
        </div>

        

        <p style="font-size:16px; color:#333; text-align:center;">
          You're now subscribed to the <b>Lovitche Newsletter</b>.
        </p>

        <p style="font-size:15px; color:#555; line-height:1.6; text-align:center;">
          Get cosmic updates, astrology insights, and exclusive content
          delivered straight to your inbox 🌠
        </p>

        <div style="text-align:center; margin-top:40px;">
          <p style="color:#888;">With love from the Lovitche Team 💜</p>
          <p style="color:#aaa;">© ${currentYear} Lovitche</p>
        </div>
      </div>
    `,
  });
}
