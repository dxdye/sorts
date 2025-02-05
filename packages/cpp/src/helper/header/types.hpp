#pragma once
#include <cstdint>
#define i32 int32_t

class Int32Array {
public:
  i32 length;
  Int32Array(i32 length);

  void set(i32 index, i32 value);
  void reset();

  i32 get(i32 index);
  i32 operator[](i32 index);
  i32 operator=(Int32Array other);
  Int32Array operator=(Int32Array &other);
  bool operator==(Int32Array &other);

  ~Int32Array();

private:
  i32 *data;
  Int32Array();
};
