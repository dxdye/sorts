#include "../../src/sorts/insertionSort.hpp"
#include "imports.test.hpp"
#include <catch2/benchmark/catch_benchmark.hpp>
#include <catch2/catch_all.hpp>
#include <catch2/catch_test_macros.hpp>
#include <iostream>

TEST_CASE("Insertion Sort", "[insertionSort]") {
  SECTION("Should sort the array") {
    Int32Array array = generateArray(10000, 0, 100);
    Int32Array sortedArray = insertionSort(array);
    BENCHMARK("insertion sort of 10000 elements") {
      return insertionSort(array);
    };
    std::cerr << "Insertion Sort: " << std::endl;
    REQUIRE(isSortedCondition(sortedArray));
  }
}
