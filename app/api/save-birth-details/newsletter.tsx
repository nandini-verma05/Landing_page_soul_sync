import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendNewsletterWelcomeEmail(email: string) {
  const html = `
  <div style="font-family: Arial, sans-serif; background:#0f0f0f; padding:40px;">
    <div style="max-width:600px; margin:auto; background:#111; border-radius:16px; overflow:hidden;">
      
      <!-- Poster -->
      <img 
        src="https://drive.google.com/file/d/1phDc_XTBaE3qnZnUTiqnSGBYXTqFBdcl/view?usp=sharing" 
        alt="Newsletter Poster"
        style="width:100%; display:block;"
      />

      <!-- Content -->
      <div style="padding:24px; color:#fff;">
        <h2 style="margin:0 0 12px;">🎉 Thank you for subscribing!</h2>

        <p style="color:#ccc; font-size:15px; line-height:1.6;">
          You’re officially on the list 🚀  
          <br /><br />
          You’ll now receive exclusive updates, announcements, and insights directly in your inbox.
        </p>

        <p style="margin-top:24px; color:#aaa; font-size:13px;">
          If you didn’t subscribe, you can safely ignore this email.
        </p>
      </div>
    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `"Your Brand" <no-reply@yourdomain.com>`,
    to: email,
    subject: "Welcome to our Newsletter 🎉",
    html,
  });
}
