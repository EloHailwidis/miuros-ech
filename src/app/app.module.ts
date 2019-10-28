import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { PokemonsService } from './services/pokemons.service';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [PokemonsService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
