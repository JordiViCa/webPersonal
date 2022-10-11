import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MemoryComponent } from './pages/memory/memory.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'memory',
    component: MemoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
