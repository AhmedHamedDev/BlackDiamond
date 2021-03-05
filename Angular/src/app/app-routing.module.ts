import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotAuthorizedComponent } from './shared/components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';


const routes: Routes = [
  { path:'notAuthorized', component: NotAuthorizedComponent},
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'products', component: ProductsComponent},
  { path:'contact-us', component: ContactUsComponent},
  { path:'404', component: NotFoundComponent},
  { path:'**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
