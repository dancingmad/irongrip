import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  env = 'test';

  setEnvironment(env:string) {
    this.env = env;
  }

  getEnvironment() {
    return this.env;
  }

}
