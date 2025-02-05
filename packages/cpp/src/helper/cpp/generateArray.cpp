#pragma once
#include "../header/types.hpp"
#include <cstdlib>

Int32Array generateArray(i32 length, i32 min, i32 max) {
  Int32Array array(length);
  for (i32 i = 0; i < length; i++) {
    array.set(i, min + ((rand() * i) % (max - min + 1)));
  }
  return array;
}
