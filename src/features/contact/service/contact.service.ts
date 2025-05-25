import { FormValues } from "../interface/contact.interfaces";


export class ContactService {
  static async sendMessage(consultInfo:FormValues) {
    try {
     return await fetch(`/api/consult`, {
        method: "POST",
        body: JSON.stringify(consultInfo),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      throw error;
    }
  }
}
