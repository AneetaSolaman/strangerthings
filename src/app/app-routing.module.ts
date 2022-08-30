import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuoteComponent } from './quote/quote.component';
import { TrailerComponent } from './trailer/trailer.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'addprofile',component:AddprofileComponent},
  {path:'home',component:HomeComponent},
  {path:'quote',component:QuoteComponent},
  {path:'trailer',component:TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
