import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.nbItemsPerPage = 10;
    this.displayedColumns = ['name'];
    this.fetchAll(this.currentPage);
  }

  fetchAll(page) {
    this.pokemonsService.fetchAll(this.nbItemsPerPage, page).subscribe((data: any) => {
      this.pokemonsCount = data.count;
      this.pokemonsList = new MatTableDataSource(data.results);
      this.previous = data.previous;
      this.next = data.next;
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
}
