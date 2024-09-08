import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
[x: string]: any;
youtubeLink = 'https://www.youtube.com/@SimangaMchunu'
emailLink = 'simacoder@hotmail.com'

  constructor(public router:Router){

  }
  onHome(){
    window.scrollTo({top:0, behavior: 'smooth'})
    /*this.router.navigate(['./portfolio-website/home'])*/

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
