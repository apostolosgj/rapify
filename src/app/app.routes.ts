import { Routes } from '@angular/router';
import { LicenseGeneratorComponent } from './license-generator/license-generator.component';

export const routes: Routes = [
    {
        path: 'license-generator',
        pathMatch: 'full',
        title: 'Lizenzgenerator',
        component: LicenseGeneratorComponent
    }
];
