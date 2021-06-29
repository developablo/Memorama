import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card', () => {
    const fixture = TestBed.createComponent(CardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-container')).toBeDefined();
  });

  it(
    'should reveal the card',
    waitForAsync(() => {
      component.card = { id: 0, revealed: false, imageUrl: '', cardName: '' };
      fixture.detectChanges();
      let buttonElement = fixture.debugElement.query(By.css('.card-body'));

      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.card.revealed).toBe(true);
      });
    })
  );

  it(
    'should not reveal the card',
    waitForAsync(() => {
      component.card = { id: 0, revealed: false, imageUrl: '', cardName: '' };
      component.disabled = true;
      fixture.detectChanges();
      let buttonElement = fixture.debugElement.query(By.css('.card-body'));

      buttonElement.triggerEventHandler('click', null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.card.revealed).toBe(false);
      });
    })
  );
});
