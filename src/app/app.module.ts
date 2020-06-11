import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DynamicComponentService } from './common/DynamicComponentService';
import { DynamicComponentDirective } from './common/directive';
import { DemoMaterialModule } from './common/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    DynamicComponentDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule,
  ],
  providers: [DynamicComponentService],
  bootstrap: [AppComponent],
  entryComponents: [
    AComponent,
    BComponent,
    CComponent
  ],
})
export class AppModule { }
