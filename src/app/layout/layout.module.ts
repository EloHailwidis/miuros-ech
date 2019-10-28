import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { layoutRouter } from './layout.router';
import { LayoutComponent } from './layout.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    layoutRouter,
    ToolbarModule,
    HomeModule,
    SettingsModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
