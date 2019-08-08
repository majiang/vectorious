import { NDArray } from './';

NDArray.log2 = <T extends NDArray>(x: T): T => x.copy().log2();

NDArray.prototype.log2 = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log2(d1[i]);
  }

  return this;
};
