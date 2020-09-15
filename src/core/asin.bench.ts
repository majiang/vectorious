import { asin } from './asin';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'asin',
  (n: number) => [random(n)],
  (x): void => {
    x.asin();
  },
  (x): void => {
    asin(x);
  }
);
