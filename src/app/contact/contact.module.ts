import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './contact.routing';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
