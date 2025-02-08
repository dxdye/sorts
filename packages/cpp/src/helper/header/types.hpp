#pragma once
#include <cstdint>
#define i32 int32_t

class Int32Array {
public:
  Int32Array(i32 length);
  Int32Array(const Int32Array &other);

  i32 get(i32 index);
  void set(i32 index, i32 value);

  i32 length;

  i32 operator[](i32 index);
  Int32Array operator=(const Int32Array &other);
  bool operator==(const Int32Array &other);

  ~Int32Array();

private:
  i32 *data;
  Int32Array();
  void reset();
};
