import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'footer', component:FooterComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },// Handle unknown routes
  { path: '* *', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }
