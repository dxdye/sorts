#include "../../src/sorts/insertionSort.hpp"
#include "imports.test.hpp"

TEST_CASE("Insertion Sort", "[insertionSort]") {
  Int32Array array = generateArray(10000, 0, 100);
  Int32Array sortedArray = insertionSort(array);
  REQUIRE(isSortedCondition(sortedArray));
}
