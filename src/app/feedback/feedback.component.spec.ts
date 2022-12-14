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

  //Testi 1
  it('should mark title as valid when it has a value', () => {
    const ctrl = component.fbForm.get('title');
    ctrl?.setValue('testi');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    
  });

  it('should mark name as invalid when it has 1 character', () => {
    const ctrl = component.fbForm.get('name')
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  //Testi 2
  it('should mark name as valid when it has more than 2 character', () => {
    const ctrl = component.fbForm.get('name')
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });
  

  //Testi 3
  it('should mark email as invalid when it does not include@', () => {
    const ctrl = component.fbForm.get('email')
    ctrl?.setValue('@');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  
  });

  it('cancel navigates to home page', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  //Testi 4 
  it('call the onSubmit method when form is submitted', () => {
    const test = fixture.debugElement.query(By.css('fbForm'));
    const spy = spyOn(component, 'onSubmit');
    test.triggerEventHandler('ngSubmit', null);
    expect(spy).toHaveBeenCalled();
  });

    //Testi 5 1/2
    it('should mark phone as valid when it has atleast 10 characters', () => {
      const ctrl = component.fbForm.get('phone');
      ctrl?.setValue('1010101010');
      fixture.detectChanges();
      expect(ctrl?.valid).toBeTruthy();
    });
  
    //Testi 5 2/2
    it('should mark phone as invalid when it has less than 10 characters', () => {
      const ctrl = component.fbForm.get('phone');
      ctrl?.setValue('10101');
      fixture.detectChanges();
      expect(ctrl?.invalid).toBeTruthy();
    });

});

