import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, NgIcon, NgForOf, NgIf, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories: string[] = [];
  showNewCategory = false;
  newCategory = '';

  addCategory() {
    this.categories.push(this.newCategory);
    this.newCategory = '';
    this.showNewCategory = false;
  }

  removeCategory(i: number) {
    this.categories.splice(i, 1);
  }
}
