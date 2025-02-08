#include "../header/insertionSort.hpp"

const sort insertionSort = [](Int32Array &array) {
  for (i32 i = 1; i < array.length; i++) {
    i32 key = array[i];
    i32 j = i - 1;

    while (j >= 0 && array[j] > key) {
      // move elements of array[0..i-1], that are greater than key, to one
      // position ahead of their current position
      array.set(j + 1, array[j]);
      j = j - 1;
    }
    array.set(j + 1, key);
  }
  return array;
};
