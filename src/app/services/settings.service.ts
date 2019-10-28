import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  _set(key, value) {
    window.localStorage.setItem(key, value);
  }

  _get(key) {
    return window.localStorage.getItem(key);
  }

  getPageSize() {
    const stored = this._get('pageSize');
    return parseInt(stored) || 20;
  }

  setPageSize(value) {
    this._set('pageSize', value);
  }

  setFavorites(value) {
    this._set('favorites', JSON.stringify(value));
  }

  getFavorites() {
    const stored = JSON.parse(this._get('favorites'));
    return Array.isArray(stored) ? stored : [];
  }
}
