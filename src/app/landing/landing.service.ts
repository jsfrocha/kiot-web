import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class LandingService {

  private API_URL = 'http://api.kiot.co/api';

  constructor(
    private _http: Http
  ) {

  }

  sendIndicationOfInterests(contactInfo) {
    return this._http.post(`${this.API_URL}/IndicationOfInterests`, contactInfo);
  }

}
