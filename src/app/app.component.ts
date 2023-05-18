import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Game } from './models';
import { GamesService } from './games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  // variables 
  currentPage: number = 1;
  gamesPerPage: number = 8;

  // services
  gamesSvc = inject(GamesService);

  // observers
  games$!: Observable<Game[]>;

  ngOnInit(): void {
    this.updateGames(null, null);
  }

  goToNextPage(): void {
    this.currentPage++;
    this.updateGames(null, null);
  }

  goToPreviousPage(): void {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.updateGames(null, null);
    }
  }

  updateGames(newPage: number | null, newLimit: number | null): void {
    if(!!newPage) {
      this.currentPage = newPage;
    }
    if(!!newLimit) {
      this.gamesPerPage = newLimit;
    }
    this.games$ = this.gamesSvc.getGames(this.currentPage, this.gamesPerPage);
  }
}
