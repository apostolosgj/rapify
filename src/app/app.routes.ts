import { Routes } from '@angular/router';
import { AiTextGenComponent } from './ai-text-gen/ai-text-gen.component';
import { QuizComponent } from './quiz/quiz.component';
import { SuccesFactorsComponent } from './success-factors/success-factors.component';
import { LicenseGeneratorComponent } from './license-generator/license-generator.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';
import HomeComponent from './home/home.component';

export const routes: Routes = [
  { path: 'ki-text', component: AiTextGenComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'success', component: SuccesFactorsComponent },
  { path: 'license-gen', component: LicenseGeneratorComponent },
  { path: 'shop', component: OnlineShopComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
