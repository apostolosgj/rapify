import { Routes } from '@angular/router';
import { LicenseGeneratorComponent } from './license-generator/license-generator.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';
import { PurchasePageComponent } from './online-shop/ui/purchase-page.component';

export const routes: Routes = [
    {
        path: 'license-generator',
        pathMatch: 'full',
        title: 'Lizenzgenerator',
        component: LicenseGeneratorComponent
    },
    {
        path: 'online-shop',
        pathMatch: 'full',
        title: 'Online-Shop',
        component: OnlineShopComponent
    },
    {
        path: 'purchase/:kursId',
        title: 'Kaufabwicklung',
        component: PurchasePageComponent
    }
];