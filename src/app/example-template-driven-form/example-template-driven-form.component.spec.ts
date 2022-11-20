import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTemplateDrivenFormComponent } from './example-template-driven-form.component';

describe('ExampleTemplateDrivenFormComponent', () => {
  let component: ExampleTemplateDrivenFormComponent;
  let fixture: ComponentFixture<ExampleTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTemplateDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
