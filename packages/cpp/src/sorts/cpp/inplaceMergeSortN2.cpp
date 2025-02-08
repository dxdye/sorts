#include "../header/inplaceMergeSortN2.hpp"

const sort inplaceMergeSortN2 = [](Int32Array &array) {
  mergeSortN2(array, 0, array.length - 1);
  return array;
};

const void mergeN2(Int32Array &arr, i32 start, i32 mid, i32 end) {
  int start2 = mid + 1;
  if (arr[mid] <= arr[start2])
    return;
  // insertion sort
  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2])
      start++;
    else {
      int value = arr[start2];
      int index = start2;
      while (index != start) {
        arr.set(index, arr[index - 1]);
        index--;
      }
      arr.set(start, value);
      ++start;
      ++mid;
      ++start2;
    }
  }
}

const void mergeSortN2(Int32Array &arr, i32 l, i32 r) {
  if (l < r) {
    // Same as (l + r) / 2, but avoids overflow for
    // large l and r
    i32 m = l + (r - l) / 2;
    mergeSortN2(arr, l, m);
    mergeSortN2(arr, m + 1, r);
    mergeN2(arr, l, m, r);
  }
}
