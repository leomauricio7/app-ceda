import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VouchesPage } from './vouches.page';

describe('VouchesPage', () => {
  let component: VouchesPage;
  let fixture: ComponentFixture<VouchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VouchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
