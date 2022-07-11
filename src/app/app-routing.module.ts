import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// CLI imports router
import { CategoryComponent } from './Admin/category/category.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ListingComponent } from './Admin/listing/listing.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'CategoryComponent', component: CategoryComponent },
  { path: 'ListingComponent', component: ListingComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }
