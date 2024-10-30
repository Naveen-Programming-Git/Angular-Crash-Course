import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateAssigmentComponent } from './angular-template-assigment.component';

describe('AngularTemplateAssigmentComponent', () => {
  let component: AngularTemplateAssigmentComponent;
  let fixture: ComponentFixture<AngularTemplateAssigmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTemplateAssigmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularTemplateAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
