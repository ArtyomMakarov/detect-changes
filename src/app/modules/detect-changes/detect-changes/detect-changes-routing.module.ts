import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { OnPushStrategyComponent } from './pages/on-push-strategy/on-push-strategy.component';
import { DefaultStrategyComponent } from './pages/default-strategy/default-strategy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lifecycle-hooks',
  },
  {
    path: 'default-strategy',
    component: DefaultStrategyComponent,
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
