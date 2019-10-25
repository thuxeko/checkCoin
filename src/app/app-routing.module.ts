import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckEthComponent } from './check-eth/check-eth.component';

const routes: Routes = [
  { path: 'checketh', component: CheckEthComponent }
  // { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
