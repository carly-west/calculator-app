import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TippingComponent } from './tipping/tipping.component';
import { CalculatorComponent } from './calculator/calculator.component';

const appRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'tipping', component: TippingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TippingComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
