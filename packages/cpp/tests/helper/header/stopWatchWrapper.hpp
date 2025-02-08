#pragma once
#include "../../../src/helper/header/sortProtoType.hpp"
#include "../../../src/helper/header/stopWatch.hpp"

const auto stopWatchWrapper = [](sort sortingAlgo, std::string message) {
  return [sortingAlgo, message](Int32Array &array) {
    StopWatch watch(message);
    watch.reset();
    Int32Array result = sortingAlgo(array);
    watch.stop();
    watch.print();
    return result;
  };
};
