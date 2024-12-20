import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-license-generator',
  imports: [CommonModule],
  styles: `
    .loading-bar {
      width: 100%;
      height: 10px;
      background-color: #e0e0e0;
      position: relative;
      overflow: hidden;
      margin: 10px 0;
    }

    .loading-bar-inner {
      height: 100%;
      background-color: #76c7c0;
      position: absolute;
      width: 0;
      animation: loading 2s linear forwards;
    }

    @keyframes loading {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    .result {
      margin-top: 15px;
      font-size: 18px;
      font-weight: bold;
    }
  `,
  template: `
    <h1>Lizenzgenerator</h1>
    <button (click)="generateLicense()" [disabled]="isLoading()">Lizenz generieren</button>
    <div *ngIf="isLoading()" class="loading-bar">
      <div class="loading-bar-inner"></div>
    </div>
    <div *ngIf="licenseKey()" class="result">Generierter Lizenzschlüssel: {{ licenseKey() }}</div>
  `
})
export class LicenseGeneratorComponent {
  isLoading = signal(false);
  licenseKey = signal<string | null>(null);

  generateLicense(): void {
    this.isLoading.set(true);
    this.licenseKey.set(null);

    // Simuliere einen Ladeprozess von 2 Sekunden
    setTimeout(() => {
      this.licenseKey.set(this.generateRandomKey());
      this.isLoading.set(false);
    }, 2000);
  }

  private generateRandomKey(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 16 }, (_, i) => {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      return (i + 1) % 4 === 0 && i !== 15 ? `${char}-` : char;
    }).join('');
  }
}