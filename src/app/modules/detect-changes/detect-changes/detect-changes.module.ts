import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item/item.component';
import { DetectChangesRoutingModule } from './detect-changes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { DirtyCheckingComponent } from './pages/dirty-checking/dirty-checking.component';
import { OnPushStrategyComponent } from './pages/on-push-strategy/on-push-strategy.component';



@NgModule({
  declarations: [
    ItemComponent,
    LifecycleHooksComponent,
    DirtyCheckingComponent,
    OnPushStrategyComponent,
  ],
  imports: [
    CommonModule,
    DetectChangesRoutingModule,
    MatButtonModule
  ]
})
export class DetectChangesModule { }
