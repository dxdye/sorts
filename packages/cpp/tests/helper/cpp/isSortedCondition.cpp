#include "../header/isSortedCondition.hpp"

bool isSortedCondition(Int32Array &array) {
  for (i32 i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

bool isSortedConditionStrict(Int32Array &array) {
  for (i32 i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
      return false;
    }
  }
  return true;
}
