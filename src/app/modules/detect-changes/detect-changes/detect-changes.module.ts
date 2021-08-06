import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item/item.component';
import { DetectChangesRoutingModule } from './detect-changes-routing.module';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { DirtyCheckingComponent } from './pages/dirty-checking/dirty-checking.component';
import { OnPushStrategyComponent } from './pages/on-push-strategy/on-push-strategy.component';
import { HotelLifecycleComponent } from './components/hotel-lifecycle/hotel-lifecycle.component';
import { HotelTitleLifecycleComponent } from './components/hotel-title-lifecycle/hotel-title-lifecycle.component';



@NgModule({
  declarations: [
    ItemComponent,
    LifecycleHooksComponent,
    DirtyCheckingComponent,
    OnPushStrategyComponent,
    HotelLifecycleComponent,
    HotelTitleLifecycleComponent,
  ],
  imports: [
    CommonModule,
    DetectChangesRoutingModule
  ]
})
export class DetectChangesModule { }
