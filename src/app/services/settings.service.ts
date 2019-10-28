import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  set(key, value) {
    window.localStorage.setItem(key, value);
  }

  get(key) {
    return window.localStorage.getItem(key);
  }

  getPageSize() {
    const stored = this.get('pageSize');
    return parseInt(stored) || 10;
  }
}
