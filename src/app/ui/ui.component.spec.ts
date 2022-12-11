import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

import { By } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

describe('UiComponent Test Suite', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Linear Regression testing", () => {
    it("Should call 'computeLinearRegression' method", () => {
      // Arrange
      let resultOfB1: number | null = 0;
      component.array1 = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      component.array2 = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";

      // Act
      component.LinearRegression();
      resultOfB1 = component.beta1;

      // Assert
      expect(resultOfB1).toBeCloseTo(1.7279, 4);
    });

    it("Should set array1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="array1"]')
      ).nativeElement;

      // Act
      inputElement.value = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.array1).toEqual("130, 650, 99, 150, 128, 302, 95, 945, 368, 961");
    });

    it("Should set array2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="array2"]')
      ).nativeElement;

      // Act
      inputElement.value = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.array2).toEqual("186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601");
    });

    it("should add array1 and array2 when i click the linear-regression button ", () => {
      // Arrange
      component.array1 = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      component.array2 = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";
      let linearRegressionButton = fixture.debugElement.query(
        By.css(".linear-regression-button")
      );

      // Act
      linearRegressionButton.triggerEventHandler("click", null);

      // Assert
      expect(component.beta0).toBeCloseTo(-22.55, 2);
    });

    it("Should render Y in result div", () => {
      // Arrange
      component.array1 = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      component.array2 = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";

      // Act
      component.LinearRegression();
      fixture.detectChanges();

      // Arrange II
      component.xValue = 386;

      // Act II
      component.computeY();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".yResult"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("644.431");
    });
  });

  describe("Correlation Coefficients testing", () => {
    it("Should call 'computeCorrelationCoefficients' method", () => {
      // Arrange
      let resultOfR: number | null = 0;
      component.array1 = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      component.array2 = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";

      // Act
      component.CorrelationCoefficients();
      resultOfR = component.r;

      // Assert
      expect(resultOfR).toBe(0.9545);
    });

    it("Should set array1 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="array1"]')
      ).nativeElement;

      // Act
      inputElement.value = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.array1).toEqual("130, 650, 99, 150, 128, 302, 95, 945, 368, 961");
    });

    it("Should set array2 model through ngModel", async () => {
      // Arrange
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(
        By.css('input[name="array2"]')
      ).nativeElement;

      // Act
      inputElement.value = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";
      inputElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      // Assert
      expect(component.array2).toEqual("186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601");
    });

    it("should add array1 and array2 when i click the correlation-coefficients button ", () => {
      // Arrange
      component.array1 = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      component.array2 = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";
      let correlationButton = fixture.debugElement.query(
        By.css(".correlation-coefficients-button")
      );

      // Act
      correlationButton.triggerEventHandler("click", null);

      // Assert
      expect(component.r2).toBeCloseTo(0.9111);
    });

    it("Should render r in result div", () => {
      // Arrange
      component.array1 = "130, 650, 99, 150, 128, 302, 95, 945, 368, 961";
      component.array2 = "186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601";

      // Act
      component.CorrelationCoefficients();
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css(".coefficientR_result"));
      let el: HTMLElement = de.nativeElement;

      // Assert
      expect(el.innerText).toContain("0.9545");
    });
  });
});
