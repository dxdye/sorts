#include "../../src/helper/header/types.hpp"

bool inline isSortedCondition(Int32Array &array) {
  for (i32 i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

bool inline isSortedConditionStrict(Int32Array &array) {
  for (i32 i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
      return false;
    }
  }
  return true;
}
