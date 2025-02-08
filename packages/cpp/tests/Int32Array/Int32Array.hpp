#include "../imports.test.hpp"
#include <catch2/catch_test_macros.hpp>
#define CATEGORY "[Int32Array]"

TEST_CASE("creates Int32Array with 10000 elements", CATEGORY) {
  Int32Array array = Int32Array(10000);
  for (int i = 0; i < array.length; ++i)
    array.set(i, i);
  SECTION("Should have a length of 10000") { CHECK(array.length == 10000); }
  SECTION("Should be sorted") { CHECK(isSortedConditionStrict(array)); }
}

TEST_CASE("utilizes the copy constructor in order to clone an array",
          CATEGORY) {
  Int32Array array = Int32Array(10000);
  for (int i = 0; i < array.length; ++i)
    array.set(i, i);
  Int32Array clone = Int32Array(array);
  SECTION("Should have a length of 10000") { CHECK(clone.length == 10000); }
  SECTION("Should be sorted") { CHECK(isSortedConditionStrict(clone)); }
}

TEST_CASE("uses copy assignement operator to copy array", CATEGORY) {
  Int32Array array = Int32Array(10000);
  for (int i = 0; i < array.length; ++i)
    array.set(i, i);
  Int32Array clone = array;
  SECTION("Should have a lenght of 10000") { CHECK(clone.length == 10000); }
  SECTION("Should be sorted") { CHECK(isSortedConditionStrict(clone)); }
}
