#pragma once
#include "../../src/sorts/header/insertionSort.hpp"
#include "../imports.test.hpp"

TEST_CASE("it should sort the randomly generated array", "[insertionSort]") {
  Int32Array array = generateArray(10000, 0, 100);
  Int32Array sortedArray = insertionSort(array);
  REQUIRE(isSortedCondition(sortedArray));
}
