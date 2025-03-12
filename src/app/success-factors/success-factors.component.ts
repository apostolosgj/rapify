import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-succes-factors',
  standalone: true,
  imports: [],
  styles: `/* General page background */
  body {
    background-color: #000; /* Black background */
    color: #fff; /* White text */
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  /* Title and subtitle */
  .title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 20px 0;
  }
  
  .subtitle {
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
    color: #aaa; /* Slightly muted white for subtitle */
  }
  
  /* Cards container */
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
  }
  
  /* Individual card */
  .card {
    background-color: #222; /* Dark card background */
    border-radius: 10px;
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
  }
  
  /* Card title */
  .card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #4a90e2; /* Light blue for titles */
  }
  
  /* Card content */
  .card-content {
    font-size: 14px;
    line-height: 1.6;
    color: #ddd; /* Muted white for readability */
  }
  `,
  template: `
    <div class="success-stories">
      <h1 class="title">Erfolgsgeschichten aus der Hood</h1>
      <p class="subtitle">
        Wie es echte Legenden vom Bordstein zur Skyline geschafft haben!
      </p>

      <div class="cards">
        <!-- Story 1 -->
        <div class="card">
          <h2 class="card-title">
            🎤 Xatar: Vom Käseklau zur Goldenen Schallplatte
          </h2>
          <p class="card-content">
            Einst berüchtigt für seinen Käseklau, heute einer der
            erfolgreichsten Rapper und Unternehmer Deutschlands. Sein Geheimnis?
            „Man muss das Leben greifen, wie einen Döner nach dem Club: Mit
            beiden Händen!“
          </p>
        </div>

        <!-- Story 2 -->
        <div class="card">
          <h2 class="card-title">💸 SSIO: Vom Dispo ins Business</h2>
          <p class="card-content">
            „Finanziell stabil? Niemals!“ – dachte sich SSIO, bevor er den Dispo
            zur Kunstform erhob. Heute gibt er Business-Coachings für Leute, die
            mit 0 Euro anfangen und noch weniger haben wollen.
          </p>
        </div>

        <!-- Story 3 -->
        <div class="card">
          <h2 class="card-title">
            🍗 Der Imbiss-King: Der erste Döner-Millionär
          </h2>
          <p class="card-content">
            Angefangen als Grillmeister mit einem klapprigen Imbisswagen, heute
            Besitzer einer Kette mit dem Namen „Döner der Götter“. Sein Motto:
            „Soße über alles, sogar über Probleme!“
          </p>
        </div>

        <!-- Story 4 -->
        <div class="card">
          <h2 class="card-title">🧠 Der Professor der Straße</h2>
          <p class="card-content">
            Früher Dealer, jetzt Dozent für "Strategisches Hustling 101". Seine
            Vorlesung beginnt immer mit den Worten: „Leute, das Leben ist ein
            Feature, kein Diss-Track.“
          </p>
        </div>
      </div>
    </div>
  `,
})
export class SuccesFactorsComponent {}
