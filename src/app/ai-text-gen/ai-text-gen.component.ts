import { Component } from '@angular/core';
import { OpenAI } from 'openai';
import { keys } from '../../../vars';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-ai-text-gen',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  template: `
    <body>
      <div class="background-vinyl"></div>
      <div class="container">
        <div class="logo">Rapify</div>

        <div class="mat-form-field">
          <mat-label>Enter Keywords</mat-label>
          <input matInput type="text" placeholder="Generate Lyrics" />
          <div class="mat-form-field-underline"></div>
        </div>

        <button>Generate Lyrics</button>
      </div>
    </body>
  `,
})
export class AiTextGenComponent {
  response: any;

  openai = new OpenAI({ apiKey: keys.openai, dangerouslyAllowBrowser: true });

  async generateText() {
    const stream = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      stream: true,
    });
    this.response = ''; // Initialize the response
    for await (const chunk of stream) {
      this.response += chunk.choices[0]?.delta?.content || '';
    }
  }
}
