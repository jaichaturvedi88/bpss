import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UpdatesComponent } from './updates/updates.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'gallery', component: UpdatesComponent },
  // {path:'', component: LandingPageComponent },
  // {path:'', component: LandingPageComponent },
  // {path:'', component: LandingPageComponent },
  // {path:'', component: LandingPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
