import { Component } from '@angular/core';
import { OpenAI } from 'openai';
import { keys } from '../../../vars';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-text-gen',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  template: `
    <body>
      <div class="background-vinyl"></div>
      <div class="container">
        <div class="logo">🎤 Rapify</div>

        <div class="funny-sidebar">
          <p>„Schreib keine Texte, lass die KI flexen!“</p>
          <p>„Worte sind Waffen, und ich bin der Schmied – oder KI ist's!“</p>
        </div>

        <div class="form-container">
          <mat-form-field appearance="outline" class="form-field">
            <mat-label>🎵 Deine Keywords</mat-label>
            <input
              matInput
              type="text"
              placeholder="Z. B. Straßen, Goldketten, Döner"
              [(ngModel)]="keywords"
            />
          </mat-form-field>

          <button mat-raised-button color="primary" (click)="generateText()">
            🔥 Generate Lyrics
          </button>
        </div>

        <div *ngIf="response" class="result-container">
          <h3>📝 Dein Text:</h3>
          <p>{{ response }}</p>
        </div>
      </div>
    </body>
  `,
  styles: [
    `
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #000;
        color: #fff;
      }

      .background-vinyl {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/assets/vinyl-bg.jpg') no-repeat center center fixed;
        background-size: cover;
        z-index: -1;
      }

      .container {
        max-width: 600px;
        margin: 40px auto;
        padding: 20px;
        background-color: #222;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
        position: relative;
      }

      .logo {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
        color: #4a90e2;
        margin-bottom: 20px;
      }

      .funny-sidebar {
        font-size: 0.9rem;
        color: #ccc;
        background: #333;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid #444;
        text-align: center;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .form-field {
        width: 100%;
      }

      button {
        align-self: center;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        background-color: #4a90e2;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #367bb7;
      }

      .result-container {
        margin-top: 20px;
        padding: 15px;
        background-color: #333;
        border-radius: 5px;
        border: 1px solid #444;
      }

      h3 {
        margin: 0 0 10px 0;
        color: #4a90e2;
      }
    `,
  ],
})
export class AiTextGenComponent {
  response: string = '';
  keywords: string = '';

  openai = new OpenAI({ apiKey: keys.openai, dangerouslyAllowBrowser: true });

  async generateText() {
    if (!this.keywords.trim()) {
      this.response = 'Gib bitte ein paar geile Keywords ein, Homie!';
      return;
    }

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a rap lyric generator.' },
          {
            role: 'user',
            content: `Generate rap lyrics with these keywords: ${this.keywords}`,
          },
        ],
      });

      this.response =
        completion.choices[0]?.message?.content ||
        'Kein Text generiert, check die Keywords.';
    } catch (error) {
      this.response =
        'Fehler beim Generieren der Lyrics. Check deine Verbindung oder API-Schlüssel.';
      console.error('OpenAI API Error:', error);
    }
  }
}
