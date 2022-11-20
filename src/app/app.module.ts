import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RouterModule } from '@angular/router';
import { ExampleTemplateDrivenFormComponent } from './example-template-driven-form/example-template-driven-form.component';
import { ExampleReactiveFormComponent } from './example-reactive-form/example-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TemplateDrivenFormComponent,
    ExampleTemplateDrivenFormComponent,
    ExampleReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
