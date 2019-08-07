import { NDArray } from './';

NDArray.get = <T extends NDArray>(x: T, ...indices: number[]): number => x.get(...indices);

NDArray.prototype.get = function<T extends NDArray>(this: T, ...indices: number[]): number {
  this.check(...indices);

  const { shape: s1 } = this;
  let index: number = indices[indices.length - 1];

  let i: number;
  for (i = 0; i < indices.length - 1; i += 1) {
    index += indices[i] * s1[i + 1];
  }

  return this.data[index];
};