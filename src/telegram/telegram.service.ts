import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TelegramService {
  private readonly botToken = process.env.TELEGRAM_BOT_TOKEN;
  private readonly chatId = process.env.TELEGRAM_CHAT_ID;

  async sendMessage(text: string) {
    if (!this.botToken || !this.chatId) {
      console.error('❌ TELEGRAM_BOT_TOKEN or CHAT_ID not set in .env');
      return;
    }

    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: this.chatId,
        text,
        parse_mode: 'HTML',
      });
    } catch (error) {
      console.error('❌ Telegramga xabar yuborishda xato:', error.message);
    }
  }
}
