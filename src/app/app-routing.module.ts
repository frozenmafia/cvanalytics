import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TriComponent } from './tri/tri.component';

const routes: Routes = [
  {path:"validate_reportrdsfgjiygvdsa2V0Y1dlWWtlNjRNbUxUbWVybUpZRUNhRkxLUjZDRVV4aVYzMHN6NzM0Zz0",component: HomeComponent },
  {path:"validate_reportrdsfgjiygvdsa2V0Y1dlWWtlNjRNbUxUbWVybUpZRUNhRkxLUjZDRVV4aVYzMHN6NzM0Zz1", component: TriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
