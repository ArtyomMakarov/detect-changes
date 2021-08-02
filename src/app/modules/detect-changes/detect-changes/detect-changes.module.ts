import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page/list-page.component';
import { ItemComponent } from './components/item/item/item.component';
import { DetectChangesRoutingModule } from './detect-changes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListPageComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    DetectChangesRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class DetectChangesModule { }
