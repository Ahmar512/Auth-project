
import {MailtrapClient} from "mailtrap";
import dotenv from 'dotenv'

dotenv.config();

export const mailtrapClient = new MailtrapClient({
    // endpoint:'https://send.api.mailtrap.io',
    token: process.env.MAILTRAP_TOKEN,
  
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};


