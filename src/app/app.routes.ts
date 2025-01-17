import { Routes } from '@angular/router';
import { AiTextGenComponent } from './ai-text-gen/ai-text-gen.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: 'ki-text', component: AiTextGenComponent },
  { path: 'quiz', component: QuizComponent },
];
