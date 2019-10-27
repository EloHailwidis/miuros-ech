import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { MatTableDataSource } from '@angular/material/table';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonsList: any;
  pokemonsCount: number;
  displayedColumns: string[];
  currentPage: number;
  nbItemsPerPage: number;
  previous: string;
  next: string;
  currentPokemon: any;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.nbItemsPerPage = 20;
    this.displayedColumns = ['name'];
    this.fetchAll(this.currentPage);
  }

  fetchAll(page) {
    this.pokemonsService.fetchAll(this.nbItemsPerPage, page).subscribe((data: any) => {
      this.pokemonsCount = data.count;
      this.pokemonsList = new MatTableDataSource(data.results);
      this.previous = data.previous || false;
      this.next = data.next || false;
    });
  }

  onPageChange(event, direction) {
    if (direction === 'next' && this.next) {
      this.currentPage++;
    } else if (direction === 'previous' && this.previous) {
      this.currentPage--;
    }

    this.fetchAll(this.currentPage);
  }

  async onPokemonClick(event, pokemon) {
    this.currentPokemon = await this.pokemonsService.fetchOne(pokemon.url);

    _.each(this.currentPokemon.abilities, async (ability, index) => {
      this.currentPokemon.abilities[index] = await this.pokemonsService.fetchAbility(ability.ability.url);
    });
  }
}
