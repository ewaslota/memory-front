import { Component, inject, OnInit } from '@angular/core';
import { BackLinkComponent } from '../../back-link/back-link.component';
import { NgIcon } from '@ng-icons/core';
import { Card } from '../../models';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BackLinkComponent, NgIcon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  cardsList: Card[] = [];

  ngOnInit() {
    this.route.params
      .pipe(concatMap((params) => this.apiService.getCards(params['id'])))
      .subscribe((cards) => (this.cardsList = cards));
  }
}
