import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('QUEUE_SERVICE') private readonly client: ClientProxy) {}

  async getHello() {
    return this.client.send('send-message', {
      sender: 'sathapana-qms',
      room: 'qms',
      message: 'Hello World!',
    });
  }
}
