#include "../../src/sorts/header/inplaceMergeSortN2.hpp"
#include "../imports.test.hpp"

TEST_CASE("it should sort the randomly generated array", "[inplaceMergeSort]") {
  Int32Array array = generateArray(10000, 0, 100);
  Int32Array sortedArray = inplaceMergeSortN2(array);
  REQUIRE(isSortedCondition(sortedArray));
}
