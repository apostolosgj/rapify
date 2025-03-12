import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule],
  styles: `/* Quiz container with black background */
  .quiz-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #000; /* Black background */
    color: #fff; /* White text */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Quiz questions list styling */
  .quiz-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  
  /* Question styling */
  .quiz-form label {
    font-size: 16px;
    font-weight: 600;
    color: #fff; /* White text for labels */
    margin-bottom: 8px;
    display: block;
  }
  
  /* Style for each question select */
  .quiz-form select {
    padding: 12px 15px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 5px;
    background-color: #222; /* Dark background for selects */
    color: #fff; /* White text */
    transition: all 0.3s ease;
    width: 100%;
  }
  
  /* Focus effect for each question select */
  .quiz-form select:focus {
    border-color: #4a90e2; /* Blue color on focus */
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); /* Light blue shadow */
  }
  
  /* Adjust button at the bottom */
  .quiz-form button {
    background-color: #4a90e2;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }
  
  /* Hover effect on the button */
  .quiz-form button:hover {
    background-color: #357ABD;
  }
  
  `,
  template: `
    <div class="container">
      <a href="/home"> <div class="logo">Rapify</div></a>

      <div class="quiz-container">
        <h1 class="quiz-title">
          🔥 Willst du Produzent oder Rapper werden? 🔥
        </h1>
        <p class="quiz-subtitle">
          Finde deinen Platz im Game – klick weise, Homie!
        </p>

        <div class="quiz-options">
          <button
            (click)="chooseRole('producer')"
            class="quiz-btn quiz-btn-producer"
          >
            🎛️ Ich produziere Beats, die knallen! 🎶
          </button>

          <button
            (click)="chooseRole('rapper')"
            class="quiz-btn quiz-btn-rapper"
          >
            🎤 Ich spitte Bars, die Köpfe verdrehen! 💥
          </button>
        </div>
        <form
          (ngSubmit)="predictRole(quizForm)"
          #quizForm="ngForm"
          class="quiz-form"
        >
          <h2>Yo Talahon, zeig uns, wer du bist:</h2>

          <label for="question1"
            >1. Was isst du morgens, um ready fürs Game zu sein?</label
          >
          <select id="question1" name="question1" ngModel required>
            <option value="producer">
              Kaffee und die Playlist von gestern
            </option>
            <option value="rapper">
              Cornflakes und Inspiration aus der Hood
            </option>
          </select>

          <label for="question2">2. Dein Fit für den Tag?</label>
          <select id="question2" name="question2" ngModel required>
            <option value="producer">
              Schlicht und comfy – ready für 12 Stunden Studio
            </option>
            <option value="rapper">
              Full Drip – man muss mich sehen und hören
            </option>
          </select>

          <label for="question3">3. Wenn du beef hörst, was machst du?</label>
          <select id="question3" name="question3" ngModel required>
            <option value="producer">
              Splice durchforsten für Sounds, die knallen
            </option>
            <option value="rapper">
              Mein Notizbuch holen und zurückfeuern
            </option>
          </select>

          <button type="submit" class="quiz-btn">💡 Check deinen Style!</button>
        </form>

        @if (chosenRole === 'producer') {
        <div class="result">
          <h2 class="result-title">
            🛠️ Respekt! Du bist der Typ, der aus Sound Magie macht! 🌌
          </h2>
          <p class="result-subtext">
            Teile dein Ergebnis und bring deine Homies ins Spiel! 🚀
          </p>
        </div>
        } @else if (chosenRole === 'rapper') {
        <div class="result">
          <h2 class="result-title">
            🎙️ Yo! Bühne frei für den nächsten King oder die nächste Queen der
            Szene! 👑
          </h2>
          <p class="result-subtext">
            Teile dein Ergebnis und bring deine Homies ins Spiel! 🚀
          </p>
        </div>
        }
      </div>
    </div>
  `,
})
export class QuizComponent {
  chosenRole: string | null = null;

  // Method triggered by button click for immediate role choice
  chooseRole(role: string): void {
    this.chosenRole = role;
  }

  // Method for form submission to predict role based on answers
  predictRole(quizForm: any): void {
    const answers = quizForm.value;
    const scores: { producer: number; rapper: number } = {
      producer: 0,
      rapper: 0,
    };

    // Scoring based on selected answers
    Object.values(answers).forEach((answer) => {
      // Type assertion to ensure TypeScript knows that answer is either 'producer' or 'rapper'
      const role = answer as 'producer' | 'rapper';
      scores[role]++; // Now TypeScript knows that role is valid
    });

    // Decide role based on highest score
    this.chosenRole = scores.producer > scores.rapper ? 'producer' : 'rapper';
  }
}
