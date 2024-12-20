import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  ...appConfig,
providers: [...appConfig.providers, importProvidersFrom(BrowserAnimationsModule), provideRouter([])]
}).catch((err) => console.error(err));