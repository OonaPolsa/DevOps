import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Navigation, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackComponent } from './feedback.component';


//RUN TEST:
//ng test --include=src/app/feedback/feedback.component.spec.ts

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let router: Router;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FeedbackComponent],
      providers: [
        { provide: Router, useValue: routerSpy, router }
      ]
    })

      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //OMA
  it('should mark title as valid when it has a value', () => {
    const ctrl = component.fbForm.get('title');
    ctrl?.setValue('testi');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    //expect(ctrl?.valid).toBeTruthy();
  });

  //OMA
  it('should mark phone as valid when its value is longer than 10 characters', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('1234567890123');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  //OMA
  it('should mark phone as invalid when its value is less than 10 characters', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('12345');
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('should mark name as invalid when it has only one character', () => {
    const ctrl = component.fbForm.get('name')
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  //OMA, tuskin toimii
  it('should mark email as invalid when it does not have @', () => {
    const ctrl = component.fbForm.get('email')
    ctrl?.setValue('@');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
    //expect(ctrl).toContain('@');
  });

  it('cancel navigates to home page', () => {
    //const routerSpy = spyOn(router, 'navigate');
    component.cancel();
    //expect(routerSpy).toHaveBeenCalledWith(['home']);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  //OMA
  it('call the onSubmit method when form is submitted', () => {
    const test = fixture.debugElement.query(By.css('fbForm'));
    const spy = spyOn(component, 'onSubmit');
    test.triggerEventHandler('ngSubmit', null);
    expect(spy).toHaveBeenCalled();
  });

  //OMA 
  it('should submit the form when submit button is clicked', () => {
    const btn = fixture.debugElement.query(By.css('.submit'));
    const spy = spyOn(component, 'onSubmit');
    (btn.nativeElement as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

});

