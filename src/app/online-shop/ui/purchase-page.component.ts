import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-purchase-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="purchase-page" *ngIf="kurs">
      <h1>Kaufabwicklung</h1>
      <div class="course-details">
        <h2>{{ kurs.titel }}</h2>
        <p>{{ kurs.beschreibung }}</p>
        <p><strong>Autor:</strong> {{ kurs.autor }}</p>
        <p><strong>Preis:</strong> {{ kurs.preis | currency:'EUR':'symbol' }}</p>
        <p><strong>Dauer:</strong> {{ kurs.dauer }}</p>
        <p><strong>Bewertung:</strong> {{ kurs.bewertung }} / 5</p>
      </div>
      <form (ngSubmit)="submitPayment()" class="payment-form">
        <label for="name">Name auf der Karte:</label>
        <input type="text" id="name" placeholder="z. B. Mustafa Yılmaz" required />

        <label for="card-number">Kreditkartennummer:</label>
        <input type="text" id="card-number" placeholder="**** **** **** 1234" required />

        <label for="expiry">Ablaufdatum:</label>
        <input type="text" id="expiry" placeholder="MM/JJ" required />

        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" placeholder="123" required />

        <div class="actions">
          <button type="submit">Bezahlen</button>
          <button type="button" (click)="cancel()">Abbrechen</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    /* Gleiche Styles wie zuvor */
  `],
  inputs: ['kurs'],
  outputs: ['onCancel'],
})
export class PurchasePageComponent {
  kurs: any;
  onCancel = new EventEmitter<void>();

  submitPayment() {
    alert('Zahlung erfolgreich abgeschlossen!');
  }

  cancel() {
    this.onCancel.emit(); // Hier wird der EventEmitter korrekt verwendet
  }
}