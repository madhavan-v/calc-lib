import CalcLib from "../src/CalcLib";


describe('Check basic functionality', () => {
  it('Should perform add on any number of args', () => {
    expect(CalcLib.chainAdd(7,5,6,4)).toBe(22);
  });

  it('Should perform chain sub on any number of args', () => {
    expect(CalcLib.chainSub(7,5,6,4)).toBe(-8);
  });
});