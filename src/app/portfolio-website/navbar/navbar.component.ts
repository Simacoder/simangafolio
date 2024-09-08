import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router:Router){

  }
  onHome(){
    this.router.navigate(['./portfolio-website/home'])

  }
  onProjects(){
    const skillSelection=document.getElementById('skills-section')
    if(skillSelection){
      skillSelection.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
    /*this.router.navigate(['./portfolio-website/project'])*/

  }

  onAbout(){
    this.router.navigate(['./portfolio-website/about'])

  }
  onContact(){
    this.router.navigate(['./portfolio-website/contact'])
  }

}
