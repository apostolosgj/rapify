import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PurchasePageComponent } from './ui/purchase-page.component';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, PurchasePageComponent],
  template: `
    <div *ngIf="!ausgewaehlterKurs" class="sales-page">
      <h1>Online-Kurse</h1>
      <div class="courses-container">
        <div class="course-card" *ngFor="let kurs of kurse">
          <img [src]="kurs.thumbnail_url" [alt]="kurs.titel" class="thumbnail" />
          <div class="course-details">
            <h2>{{ kurs.titel }}</h2>
            <p>{{ kurs.beschreibung }}</p>
            <p><strong>Autor:</strong> {{ kurs.autor }}</p>
            <p><strong>Preis:</strong> {{ kurs.preis | currency:'EUR':'symbol' }}</p>
            <p><strong>Bewertung:</strong> {{ kurs.bewertung }} / 5</p>
            <p><strong>Dauer:</strong> {{ kurs.dauer }}</p>
            <p><strong>Verkäufe:</strong> {{ kurs.anzahl_verkaeufe }}</p>
            <button class="buy-button" (click)="kaufeKurs(kurs)">Jetzt kaufen</button>
          </div>
        </div>
      </div>
    </div>
    <app-purchase-page
      *ngIf="ausgewaehlterKurs"
      [kurs]="ausgewaehlterKurs"
      (cancel)="abbrechen()">
    </app-purchase-page>
  `,
  styles: [`
    /* Bestehende Styles */
  `]
})
export class OnlineShopComponent {
  kurse = [
    {
      kurs_id: 1,
      titel: 'Rap-Lyrik für Straßenpoeten',
      beschreibung: 'Lerne die Kunst des Straßenflows – von Reimketten bis hin zu Storytelling mit Herz.',
      preis: 39.99,
      bewertung: 4.7,
      dauer: '2 Stunden',
      autor: 'MC Straßensohn',
      thumbnail_url: 'https://beispiel.de/thumbnails/rapkurs.jpg',
      anzahl_verkaeufe: 180
    },
    {
      kurs_id: 2,
      titel: 'Beats bauen für die Hood',
      beschreibung: 'Schaffe Beats, die in jedem Block pumpen – von Basic bis Banger.',
      preis: 49.99,
      bewertung: 4.6,
      dauer: '3 Stunden',
      autor: 'BeatBaba',
      thumbnail_url: 'https://beispiel.de/thumbnails/beatskurs.jpg',
      anzahl_verkaeufe: 240
    },
    {
      kurs_id: 3,
      titel: 'Fortgeschrittene Taktik im Battle-Rap',
      beschreibung: 'Zeig allen, wer die Straßen regiert. Punchlines, Konter und Style für Battle-Kings.',
      preis: 69.99,
      bewertung: 4.9,
      dauer: '2,5 Stunden',
      autor: 'Battleboss Hakim',
      thumbnail_url: 'https://beispiel.de/thumbnails/battlerapkurs.jpg',
      anzahl_verkaeufe: 95
    }
  ];

  ausgewaehlterKurs: any = null;

  kaufeKurs(kurs: any) {
    this.ausgewaehlterKurs = kurs;
  }

  abbrechen() {
    this.ausgewaehlterKurs = null;
  }
}
