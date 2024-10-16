import { Routes } from '@angular/router';
import { PortfolioWebsiteModule } from './portfolio-website/portfolio-website.module';

export const routes: Routes = [
    { path: '', redirectTo: '/portfolio-website/home', pathMatch: 'full' },
    {path: 'portfolio-website', loadChildren: () => import('./portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)}
];
