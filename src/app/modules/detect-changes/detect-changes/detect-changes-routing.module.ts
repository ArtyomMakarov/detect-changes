import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { DirtyCheckingComponent } from './pages/dirty-checking/dirty-checking.component';
import { OnPushStrategyComponent } from './pages/on-push-strategy/on-push-strategy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lifecycle-hooks',
  },
  {
    path: 'dirt-checking',
    component: DirtyCheckingComponent,
  },
  {
    path: 'onPush-strategy',
    component: OnPushStrategyComponent,
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetectChangesRoutingModule {}
