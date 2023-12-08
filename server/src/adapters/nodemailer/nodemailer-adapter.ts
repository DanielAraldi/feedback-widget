import { Transporter, createTransport } from 'nodemailer';
import { MailAdapter, SendMailData } from '../@types';
import { envs } from '../../config';

export class NodemailerAdapter implements MailAdapter {
  #transport?: Transporter;

  #createTransport(): void {
    const { hostMail, passwordMail, portMail, userMail } = envs;
    this.#transport = createTransport({
      host: hostMail,
      port: portMail,
      auth: {
        user: userMail,
        pass: passwordMail,
      },
    });
  }

  async sendMail(data: SendMailData): Promise<void> {
    this.#createTransport();

    const { body, subject } = data;
    const { toMail } = envs;
    await this.#transport?.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: `Daniel Sansão Araldi <${toMail}>`,
      html: body,
      subject,
    });
  }
}
