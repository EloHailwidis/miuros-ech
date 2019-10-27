import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonsService {
  url: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  fetchAll(limit, offset) {
    return this.http.get(`${this.url}/pokemon?limit=${limit}&offset=${offset}`);
  }

  async fetchOne(url) {
    return this.http.get(url).toPromise();
  }

  async fetchAbility(url) {
    return this.http.get(url).toPromise();
  }
}
