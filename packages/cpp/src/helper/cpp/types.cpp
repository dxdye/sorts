#include "../header/types.hpp"

void Int32Array::set(i32 index, i32 value) {
  if (index < 0 || index >= this->length) {
    throw "Index out of bounds";
  }
  this->data[index] = value;
}
i32 Int32Array::get(i32 index) {
  if (index < 0 || index >= this->length) {
    throw "Index out of bounds";
  }
  return this->data[index];
}
bool Int32Array::operator==(Int32Array &other) {
  if (this->length != other.length) {
    return false;
  }
  for (i32 i = 0; i < this->length; i++) {
    if (this->data[i] != other.data[i]) {
      return false;
    }
  }
  return true;
}

i32 Int32Array::operator[](i32 index) { return this->get(index); }

Int32Array Int32Array::operator=(Int32Array &other) {
  if (this->length != other.length) {
    throw "Arrays must be of equal length";
  }
  for (i32 i = 0; i < this->length; i++) {
    this->data[i] = other.data[i];
  }
  return *this;
}

Int32Array::Int32Array() {
  this->data = nullptr;
  this->length = 0;
}
Int32Array::Int32Array(i32 length) {
  this->data = new i32[length];
  this->length = length;
}
Int32Array::~Int32Array() { delete[] this->data; }

void Int32Array::reset() {
  for (i32 i = 0; i < this->length; ++i) {
    this->data[i] = 0;
  }
}
