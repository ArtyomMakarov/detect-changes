import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectChangesRoutingModule } from './detect-changes-routing.module';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { OnPushStrategyComponent } from './pages/on-push-strategy/on-push-strategy.component';
import { HotelLifecycleComponent } from './components/hotel-lifecycle/hotel-lifecycle.component';
import { HotelTitleLifecycleComponent } from './components/hotel-title-lifecycle/hotel-title-lifecycle.component';
import { DefaultStrategyComponent } from './pages/default-strategy/default-strategy.component';
import { FormsModule } from '@angular/forms';
import { HotelDefaultComponent } from './components/hotel-default/hotel-default.component';
import { HotelTitleDefaultComponent } from './components/hotel-title-default/hotel-title-default.component';
import { HotelStarsDefaultComponent } from './components/hotel-stars-default/hotel-stars-default.component';
import { HotelOnpushComponent } from './components/hotel-onpush/hotel-onpush.component';
import { HotelTitleOnpushComponent } from './components/hotel-title-onpush/hotel-title-onpush.component';
import { HotelStarsOnpushComponent } from './components/hotel-stars-onpush/hotel-stars-onpush.component';



@NgModule({
  declarations: [
    LifecycleHooksComponent,
    OnPushStrategyComponent,
    HotelLifecycleComponent,
    HotelTitleLifecycleComponent,
    DefaultStrategyComponent,
    HotelDefaultComponent,
    HotelTitleDefaultComponent,
    HotelStarsDefaultComponent,
    HotelOnpushComponent,
    HotelTitleOnpushComponent,
    HotelStarsOnpushComponent,
  ],
  imports: [
    CommonModule,
    DetectChangesRoutingModule,
    FormsModule
  ]
})
export class DetectChangesModule { }
