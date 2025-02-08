#pragma once

#include <chrono>
#include <iostream>
#include <unistd.h>

#include "sortProtoType.hpp"

class StopWatch {
private:
  std::chrono::time_point<std::chrono::high_resolution_clock> start;
  std::chrono::time_point<std::chrono::high_resolution_clock> end;
  const std::string message;

public:
  StopWatch(const std::string message);
  void stop();
  void reset();
  void print();
};
