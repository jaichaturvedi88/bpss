import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bhagwan Parshuram Sewa Samiti';

  constructor(private titleService: Title){
    // this.titleService.setTitle('bpss ng');
    this.titleService.setTitle($localize`${this.title}`);
  }
}
