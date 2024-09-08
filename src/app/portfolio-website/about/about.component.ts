import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'Spaza-shop', description: 'Spaza shops are informal convenience stores that play a vital role in South African communities, providing affordable and accessible goods. As ecommerce transforms the retail landscape, integrating digital solutions can unlock new opportunities for these small businesses.' },
    { name: 'Forest fire data analysis in R', description: "In this beginner-level data analysis project in R, youll analyze a dataset on forest fires in Portugal to uncover patterns in fire occurrence and severity. Using R and powerful data visualization techniques, you'll explore factors such as temperature, humidity, and wind speed to understand their relationship with fire spread. You'll create engaging visualizations, including bar charts, box plots, and scatter plots, to reveal trends over time and across different variables. By completing this project, you'll gain valuable insights into the ecological impact of forest fires while strengthening your skills in data manipulation, exploratory data analysis, and creating meaningful visualizations using R and ggplot2." },
    { name: 'Memory Game', description: 'The Memory Game is a simple browser-based game where the player must match pairs of cards. Each card has a letter on its back, and the objective is to find all matching pairs by flipping two cards at a time.' },
  ];
}
