import { betaOne, betaZero, computeY } from './linear-regression';

const data = {
  EstimatedProxySize: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
  PlanAddedAndModifiedSize: [
    163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130,
  ],
  ActualAddedAndModifiedSize: [
    186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601,
  ],
  ActualDevelopmentHours: [
    15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
  ],
};

describe('Linear Regression Test', () => {
  // Test 1
  it('Should return b1 equals to 1.72793 given "Estimated Proxy Size" and "Actual Added and Modified Size" as the two sets of data', () => {
    const b1 = betaOne(
      data.EstimatedProxySize,
      data.ActualAddedAndModifiedSize
    );
    expect(b1).toBe(1.72793);
  });

  it('Should return b0 equals to -22.55 when b1 is 1.72793 and the given sets of data are "Estimated Proxy Size" and "Actual Added and Modified Size"', () => {
    const b0 = betaZero(
      data.EstimatedProxySize,
      data.ActualAddedAndModifiedSize,
      1.72793
    );
    expect(b0).toBe(-22.55);
  });

  it('Should return y equals to 644.431 when b1 is 1.72793, b0 is -22.55 and x is 386', () => {
    const y = computeY(1.72793, -22.55, 386);
    expect(y).toBe(644.431);
  });

  // Test 2
  it('Should return b1 equals to 0.16813 given "Estimated Proxy Size" and "Actual Development Hours" as the two sets of data', () => {
    const b1 = betaOne(data.EstimatedProxySize, data.ActualDevelopmentHours);
    expect(b1).toBe(0.16813);
  });

  it('Should return b0 equals to -4.04 when b1 is 0.16813 and the given sets of data are "Estimated Proxy Size" and "Actual Development Hours"', () => {
    const b0 = betaZero(
      data.EstimatedProxySize,
      data.ActualDevelopmentHours,
      0.16813
    );
    expect(b0).toBe(-4.04);
  });

  it('Should return y equals to 60.858 when b1 is 0.16813, b0 is -4.04 and x is 386', () => {
    const y = computeY(0.16813, -4.04, 386);
    expect(y).toBe(60.858);
  });

  // Test 3
  it('Should return b1 equals to 1.43097 given "Plan Added and Modified Size" and "Actual Added and Modified Size" as the two sets of data', () => {
    const b1 = betaOne(
      data.PlanAddedAndModifiedSize,
      data.ActualAddedAndModifiedSize
    );
    expect(b1).toBe(1.43097);
  });

  it('Should return b0 equals to -23.93 when b1 is 1.43097 and the given sets of data are "Plan Added and Modified Size" and "Actual Added and Modified Size"', () => {
    const b0 = betaZero(
      data.PlanAddedAndModifiedSize,
      data.ActualAddedAndModifiedSize,
      1.43097
    );
    expect(b0).toBe(-23.93);
  });

  it('Should return y equals to 528.424 when b1 is 1.43097, b0 is -23.93 and x is 386', () => {
    const y = computeY(1.43097, -23.93, 386);
    expect(y).toBe(528.424);
  });

  // Test 4
  it('Should return b1 equals to 0.14016 given "Plan Added and Modified Size" and "Actual Development Hours" as the two sets of data', () => {
    const b1 = betaOne(
      data.PlanAddedAndModifiedSize,
      data.ActualDevelopmentHours
    );
    expect(b1).toBe(0.14016);
  });

  it('Should return b0 equals to -4.6 when b1 is 0.140164 and the given sets of data are "Plan Added and Modified Size" and "Actual Development Hours"', () => {
    const b0 = betaZero(
      data.PlanAddedAndModifiedSize,
      data.ActualDevelopmentHours,
      0.14016
    );
    expect(b0).toBe(-4.6);
  });

  it('Should return y equals to 49.502 when b1 is 0.14016 b0 is -4.6 and x is 386', () => {
    const y = computeY(0.14016, -4.6, 386);
    expect(y).toBe(49.502);
  });
});
