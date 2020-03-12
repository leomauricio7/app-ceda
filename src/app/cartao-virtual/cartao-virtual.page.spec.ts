import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartaoVirtualPage } from './cartao-virtual.page';

describe('CartaoVirtualPage', () => {
  let component: CartaoVirtualPage;
  let fixture: ComponentFixture<CartaoVirtualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoVirtualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoVirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
