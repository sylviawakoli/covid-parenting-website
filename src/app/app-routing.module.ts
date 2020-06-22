import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { TipsComponent } from './tips/tips.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "tips",
    component: TipsComponent
  },
  {
    path: "contributors",
    component: ContributorsComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
