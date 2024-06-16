import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Category } from '../../models';
import { BackLinkComponent } from '../../back-link/back-link.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink, NgIcon, NgForOf, NgIf, FormsModule, BackLinkComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  ngOnInit(): void {
    this.fetchCategories();
  }

  private readonly apiService = inject(ApiService);

  categoriesList: Category[] = [];
  showNewCategory = false;
  newCategory = '';

  addCategory() {
    this.apiService
      .addCategory(this.newCategory)
      .subscribe((category) => this.categoriesList.push(category));
    this.newCategory = '';
    this.showNewCategory = false;
  }

  removeCategory(category: Category) {
    this.apiService
      .removeCategory(category.id)
      .subscribe(() => this.fetchCategories());

    // this.categoriesList.splice(i, 1);
  }

  fetchCategories() {
    this.apiService
      .getCategories()
      .subscribe((categories) => (this.categoriesList = categories));
  }
}
