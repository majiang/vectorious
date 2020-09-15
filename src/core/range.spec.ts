import { equals } from './equals';
import { range } from './range';
import { array } from './array';

describe('(v) range', () => {
  it('should work as expected', () => {
    const x = array([0, 1, 2]);

    equals(x, range(0, 3));
  });

  it('should work as expected', () => {
    const x = array([2, 1, 0]);

    equals(x, range(2, -1));
  });

  it('should work as expected', () => {
    const x = array([0, 0.5, 1, 1.5]);

    equals(x, range(0, 0.5, 2));
  });
});
