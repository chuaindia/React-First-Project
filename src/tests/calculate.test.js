import calculate from '../logic/calculate';

describe('testcalculatorBtns', () => {
  test('AC checking properly or not', () => {
    const ACobject = {
      total: 5,
      next: null,
      operation: null,
    };
    expect(calculate(ACobject, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('checking of equal button', () => {
    const equalObject = {
      total: 2,
      next: 4,
      operation: '+',
    };

    expect(calculate(equalObject, '=')).toStrictEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });
});
