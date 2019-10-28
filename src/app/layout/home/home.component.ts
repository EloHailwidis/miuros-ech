import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { MatTableDataSource } from '@angular/material/table';
import _ from 'lodash';
import { SettingsService } from 'src/app/services/settings.service';

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
  favorites: any;

  constructor(private pokemonsService: PokemonsService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.favorites = this.settingsService.getFavorites();
    this.currentPage = 0;
    this.nbItemsPerPage = this.settingsService.getPageSize();
    this.displayedColumns = ['name', 'favorites'];
    this.fetchAll(this.currentPage);
  }

  fetchAll(page) {
    this.pokemonsService.fetchAll(this.nbItemsPerPage, page).subscribe((data: any) => {

      // Set flag isFavorite to favorites pokemons
      _.each(this.favorites, pokemon => {
        const index = _.findIndex(data.results, { name: pokemon.name });
        if (index !== -1) {
          data.results[index].isFavorite = true;
        }
      });

      this.pokemonsList = new MatTableDataSource(data.results);
      this.pokemonsCount = data.count;
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

  onAddFavoritesClick(event, pokemon) {
    pokemon.isFavorite = !pokemon.isFavorite;
    if (!pokemon.isFavorite) {
      _.remove(this.favorites, favorite => favorite.name === pokemon.name);
    } else {
      this.favorites.push(pokemon);
    }
    this.settingsService.setFavorites(this.favorites);
  }
}
