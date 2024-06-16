import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './wordbank/categories/categories.component';
import { CardsComponent } from './wordbank/cards/cards.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id/cards', component: CardsComponent },
];
