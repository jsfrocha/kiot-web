import { Injectable } from '@angular/core';

export interface User {
  username: string
}

@Injectable()
export class UserService {

  public currentUser: User;

  constructor() { }

}
