import { NDArray } from './';

NDArray.pow = <T extends NDArray>(x: T, exponent: number): T => x.copy().pow(exponent);

NDArray.prototype.pow = function<T extends NDArray>(this: T, exponent: number): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.pow(d1[i], exponent);
  }

  return this;
};
