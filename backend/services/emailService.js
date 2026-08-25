const nodemailer = require("nodemailer");

async function sendVerificationEmail(email, otp) {
    // ALWAYS print OTP to the terminal for easy testing!
    console.log(`\n\n=== VERIFICATION OTP GENERATED ===\nTo: ${email}\nOTP: ${otp}\n==================================\n`);

    let transporter;

    // Use Ethereal test account if credentials are not provided
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.log("⚠️  Missing EMAIL_USER or EMAIL_PASSWORD in .env. Using Ethereal Email for testing...");
        let testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            auth: {
                user: testAccount.user, 
                pass: testAccount.pass, 
            },
        });
    } else {
        transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
    }

    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER || '"Portfolio Builder Test" <test@portfoliobuilder.com>',
        to: email,
        subject: "Verify your Portfolio Builder account",
        html: `
            <h2>Welcome to Portfolio Builder!</h2>
            <p>Please verify your email address by entering the following OTP:</p>
            <h1>${otp}</h1>
            <p>This OTP expires in 15 minutes.</p>
        `
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.log(`📧 Test Email sent! View it here: ${nodemailer.getTestMessageUrl(info)}\n`);
    }
}

module.exports = sendVerificationEmail;
