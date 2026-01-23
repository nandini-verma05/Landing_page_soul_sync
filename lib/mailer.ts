import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendRegistrationEmail(
  email: string,
  name: string
) {
  const currentYear = new Date().getFullYear();

  await transporter.sendMail({
    from: `Lovitche Team <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Welcome to Lovitche! Registration Successful 🌟",
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
        
        <!-- Hero Image / Banner -->
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="/hero/img1.png" 
               alt="Lovitche Banner" 
               style="width: 100%; max-width: 600px; height: auto; border-radius: 12px; display: block;"
          />
        </div>

        <!-- Main Content -->
        <div style="text-align: center; padding: 0 20px;">
          <h1 style="color: #6B48FF; margin: 0; font-size: 32px;">Welcome, ${name}! 🎉</h1>
          <p style="font-size: 20px; color: #333333; margin: 12px 0 30px;">
            Your registration is <b>successfully completed</b>
          </p>

          <p style="font-size: 16px; color: #555555; line-height: 1.6; margin-bottom: 30px;">
            The stars have aligned and we're thrilled to have you join the Lovitche family!<br>
            <strong>Aligning stars, connecting people</strong> — and now you're part of this beautiful journey ✨
          </p>

         
        </div>

        <!-- Social Media Icons -->
        <div style="text-align: center; margin: 40px 0 30px;">
          <p style="color: #777777; margin-bottom: 20px; font-size: 15px;">
            Follow us and stay connected
          </p>
          <a href="https://instagram.com/lovitche" style="margin: 0 12px; text-decoration: none;">
            <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" width="36" height="36"/>
          </a>
          <a href="https://twitter.com/lovitche" style="margin: 0 12px; text-decoration: none;">
            <img src="https://img.icons8.com/fluency/48/twitter.png" alt="Twitter/X" width="36" height="36"/>
          </a>
          <a href="https://facebook.com/lovitche" style="margin: 0 12px; text-decoration: none;">
            <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" width="36" height="36"/>
          </a>
        </div>

        <!-- Footer -->
        <div style="text-align: center; color: #888888; font-size: 14px; margin-top: 40px; padding-top: 25px; border-top: 1px solid #eeeeee;">
          <p style="margin: 0;">With love from the Lovitche Team 💜</p>
          <p style="margin: 8px 0 0;">© ${currentYear} Lovitche • Company No: 9439747992</p>
        </div>
      </div>
    `,
  });
}