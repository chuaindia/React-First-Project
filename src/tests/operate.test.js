import operate from '../logic/operate';

describe('Calculator Operations', () => {
  test('check 1 adds 2 is equal to 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('check 5 subtracts 1 is equal to 4', () => {
    expect(operate(5, 1, '-')).toBe('4');
  });

  test('check 4 multiplied by 8 is equal to 32', () => {
    expect(operate(4, 8, 'x')).toBe('32');
  });

  test('check 4 divided by 2 is equal 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('check 5 modulo 2 is equal to 2', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });
});
