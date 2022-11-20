import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  
  constructor(){}
ngOnInit(): void {
  
}

public topics=[{name:'Template Driven Form'},{name:'ReactiveForm'},{name:'Binding'},{name:'Input and Output'}]
}
