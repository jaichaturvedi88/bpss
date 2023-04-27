import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public isAboutUsPage: boolean = false;

  constructor(private router: Router) {
    this.isAboutUsPage = this.router.url === '/about' ? true : false;

  }
}
