import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-template-driven-form',
  templateUrl: './example-template-driven-form.component.html',
  styleUrls: ['./example-template-driven-form.component.less']
})
export class ExampleTemplateDrivenFormComponent implements OnInit {
  isSave:boolean=false;
  isEdit:boolean=false;
  constructor(){}
ngOnInit(): void {
  
}

onSave(tdform){
  if(!this.isSave){
    this.isSave=true
    console.log(tdform.value)
    tdform.reset();
    console.log(this.isSave);
  }
}



}
