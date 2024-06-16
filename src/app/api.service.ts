import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, Category } from './models';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${BASE_URL}/categories`);
  }

  getCategory(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(
      `${BASE_URL}/categories/${categoryId}`
    );
  }

  addCategory(categoryName: string): Observable<Category> {
    return this.httpClient.post<Category>(`${BASE_URL}/categories`, {
      name: categoryName,
    });
  }

  removeCategory(categoryId: number): Observable<any> {
    return this.httpClient.delete(`${BASE_URL}/categories/${categoryId}`);
  }

  getCards(categoryId: number): Observable<Card[]> {
    return this.httpClient.get<Card[]>(
      `${BASE_URL}/categories/${categoryId}/cards`
    );
  }
}
