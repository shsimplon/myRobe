import { CreateUser } from "../modules/User/dto";
export interface IMailerService {
  sendMail(user: CreateUser): Promise<void>;
}

class MailerService implements IMailerService {
  private nodemailer;
  constructor(nodemailer: any) {
    this.nodemailer = nodemailer;
  }

  async sendMail(user: CreateUser) {
    try {
      let testAccount = await this.nodemailer.createTestAccount();

      let transporter = this.nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        // send mail with defined transport object
        from: '"samira Name 👻" <mily0742009@outlouk.fr>', // sender address
        to: user.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", this.nodemailer.getTestMessageUrl(info));
    } catch (err) {
      throw new Error("Unable to send the email verification");
    }
  }
}

export default MailerService;
