import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleReactiveFormComponent } from './example-reactive-form/example-reactive-form.component';
import { ExampleTemplateDrivenFormComponent } from './example-template-driven-form/example-template-driven-form.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'templateDrivenForm',component:TemplateDrivenFormComponent},
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path:'eg-tdf',component:ExampleTemplateDrivenFormComponent},
  {path:'eg-reactiveform',component:ExampleReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
