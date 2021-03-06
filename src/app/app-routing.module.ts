import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent, ConfigComponent } from './components';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'config', component: ConfigComponent },
  { path: '', redirectTo: '/person', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
