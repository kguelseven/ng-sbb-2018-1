import { Injectable } from '@angular/core';

@Injectable()
export class ProviderService {

  private message = 'Hello from Service!';

  constructor() {
    console.log('Instantiating the service ...');
  }

  getMessage() {
    return this.message;
  }

}
