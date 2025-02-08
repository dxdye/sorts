#include "../header/stopWatch.hpp"

StopWatch::StopWatch(const std::string message) : message(message) {
  this->reset();
}

void StopWatch::stop() {
  this->end = std::chrono::high_resolution_clock::now();
}
void StopWatch::reset() {
  this->end = this->start = std::chrono::high_resolution_clock::now();
}
void StopWatch::print() {
  std::chrono::duration<double> elapsed_seconds = end - start;
  std::cout << message << " " << elapsed_seconds.count() << "s\n";
}
