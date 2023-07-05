import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'login', component: LoginComponent },
  { path: 'moderator/:name', component: ModeratorComponent },
 // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'contact', component: ContactComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
