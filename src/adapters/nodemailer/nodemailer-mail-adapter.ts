import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cc26823a09a9b4",
      pass: "5ebb7655666d6c"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
     
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Luana Alves <lualvesdev@gmail.com>',
            subject,
            html: body,
        });
    }
}