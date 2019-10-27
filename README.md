# MiurosEch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Test requirements

- Build an application using Angular 8.
- The application is a directory of pokemon and their abilities. Use https://pokeapi.co as a backend for the application.
- The application should work and be displayed correctly in the latest versions of Chrome browser on the desktop screen sizes.
- Choose the design to your liking, as long as the UX doesn't suffer (it's not a design test).
- The application should consist of a navigation bar and two pages described below:


## Navigation bar

Should be located at the top of the page and always stay there regardless the scroll position of the current page/sections. Should display navigation links (to 2 pages) and the number of pokemons currently added to the favourites list.

## Directory page (route: “/”)

The screen should be divided into two panels: main panel at the left, details panel at the right.

Main panel should display:
- the total number of pokemons in the database
- the list of pokemon in a paginated table (two columns: “name” and a column with “add to favourites” buttons). The number of entries on a page should be set according to user preferences (see “Settings” page) and default to 20. Pagination UI doesn't have to be too fancy (next/previous page buttons would be enough);

On clicking “add to favourites” button in a table row the respective pokemon should be added to the list of favourites. Favourite pokemons should be highlighted in the list and the button should change to “remove from favourites”.

On clicking the pokemon name in the list the details for selected pokemon should be displayed in the right panel.

The right panel should display:
- Picture (front_default)
- Name
- Height
- Weight
- List of abilities
    - Name
    - Effect description (in English)

## Settings page (route: “/settings”)

It’s the page for global application settings. All settings defined here should be persisted for the user between the application visits. Changes should be applied on clicking the “Save” button. User should be notified on leaving the page without saving changes (optional). 

- Theme. Should allow selection between light and dark themes.
- Default list page size. Allows entering of positive integer.

## Acceptance criteria (in descending priority order):

- Application allows to access the first page of pokemon list and their respective details;
- Pokemon list allows accessing all pages;
- Page size settings are persisted and applied to the list;
- User can mark pokemons as favourite and see the number of pokemon in the favourite list; favourite list is persisted across the app visits;
- User can select the theme and app is started with the selected theme on the next visit.