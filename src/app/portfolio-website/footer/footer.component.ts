import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Corrected to styleUrls (array)
})
export class FooterComponent {
  youtubeLink = 'https://www.youtube.com/@SimangaMchunu';
  emailLink = 'simacoder@hotmail.com';
  githubLink = 'https://github.com/Simacoder';
  twitterLink = 'https://twitter.com/Simacoder';
  linkedinLink = 'https://www.linkedin.com/in/simanga-mchunu-7570078a/';

  constructor(public router: Router) {}

  onHome() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    // You can uncomment the line below if you want to route to a specific page
    // this.router.navigate(['./portfolio-website/home']);
  }

  onProjects() {
    const skillSection = document.getElementById('skills-section');
    if (skillSection) {
      skillSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    // You can uncomment the line below if you want to route to a specific project page
    // this.router.navigate(['./portfolio-website/project']);
  }

  onAbout() {
    this.router.navigate(['./portfolio-website/about']);
  }

  onContact() {
    this.router.navigate(['./portfolio-website/contact']);
  }
}
