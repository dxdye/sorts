#include "../../src/sorts/header/inplaceMergeSort.hpp"
#include "../imports.test.hpp"

TEST_CASE("it should sort the randomly generated array [1M elements]",
          "[inplaceMergeSort]") {
  Int32Array array = generateArray(1000000, 0, 100);
  Int32Array sortedArray = inplaceMergeSort(array);
  REQUIRE(isSortedCondition(sortedArray));
}
