// Send Email -  Node.Js 
const sendEmailModule = require('nodemailer');

async function serviceSendEmailHandler({smtpConfigId, email, var1, var2, var3, var4}) {
    console.log("Service executed", smtpConfigId, email, var1, var2, var3, var4)
    try {
        console.log("call smtp api")
        const rawEmailConfigs = await fetch(`http://192.168.2.214:8059/api/smtp/${smtpConfigId}`)
        const rawEmailConfigsJson = await rawEmailConfigs.json()

        const emailConfig = rawEmailConfigsJson[0]
        const {
            SERVER_HOST,
            SERVER_PORT,
            MAIL_SECURE,
            MAIL_USER,
            MAIL_PASS,
            FROM_ADDRESS,
            MESSAGE_SUBJECT,
            MESSAGE_BODY,
            REPLY_TO,
        } = emailConfig;

        // Load Var Data to MESSAGE_BODY
        const MESSAGE_BODY_VAR = MESSAGE_BODY.replace("{{NOME}}", var1)

        console.log(`${SERVER_HOST}:${SERVER_PORT}`) 
        // return "Email Sent successfully"

        const transporter = sendEmailModule.createTransport(
            {
                secure: true,
                host: SERVER_HOST,
                port: SERVER_PORT,
                auth: {
                    user: MAIL_USER,
                    pass: MAIL_PASS
                }
            }
        ); // End Transporter

        function serviceSendEmail(to, sub, msg) {
            transporter.sendMail({
                    from: '"GTI HEAA" <gti-noreply@fbpn-campos.com.br>',
                    to:to,
                    subject:sub,
                    html:msg });
                    console.log("email Sent!!")
        }

        serviceSendEmail(email, MESSAGE_SUBJECT, MESSAGE_BODY_VAR)
    } catch (error) {console.log(error)} // End catch
}; // End sendEmailHandler

module.exports = { serviceSendEmailHandler };