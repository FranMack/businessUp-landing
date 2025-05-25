import { envs } from "@/app/config";
import nodemailer, { Transporter } from "nodemailer";

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachement[];
}

export interface Attachement {
  filename: string;
  path: string;
  contentType: string;
}

export const sendEmail = async (options: SendMailOptions): Promise<boolean> => {
  const { to, subject, htmlBody, attachments: attachments = [] } = options;

  const transporter: Transporter = nodemailer.createTransport({
    // GmailSMTP server
    service: "Gmail",
    port: 465,
    secure: true,

    // Gmail's SMTP server
    //service: envs.MAILER_SERVICE,

    // Common configuration for both GoDaddy and Gmail
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: `Business Up <${envs.MAILER_EMAIL}>`,
      to: to,
      subject: subject,
      html: htmlBody,
      attachments: attachments,
    });

    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
