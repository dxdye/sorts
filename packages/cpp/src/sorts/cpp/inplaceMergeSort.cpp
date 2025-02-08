#include "../header/inplaceMergeSort.hpp"
#include <bits/stdc++.h>

const sort inplaceMergeSort = [](Int32Array &array) {
  mergeSort(array, 0, array.length - 1);
  return array;
};

i32 nextGap(i32 gap) {
  if (gap <= 1)
    return 0;

  return (i32)std::ceil(gap / 2.0);
}

// Function for swapping
const void swap(Int32Array &arr, i32 i, i32 j) {
  i32 temp = arr[i];
  arr.set(i, arr[j]);
  arr.set(j, temp);
}

// Merging the subarrays using shell sorting
// Time Complexity: O(nlog n)
// Space Complexity: O(1)
const void inPlaceMerge(Int32Array &arr, i32 start, i32 end) {
  i32 gap = end - start + 1;

  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
    for (i32 i = start; i + gap <= end; i++) {
      i32 j = i + gap;
      if (arr[i] > arr[j])
        swap(arr, i, j);
    }
  }
}

// merge sort makes log n recursive calls
// and each time calls merge()
// which takes nlog n steps
// Time Complexity: O(n*log n + 2((n/2)*log(n/2)) +
// 4((n/4)*log(n/4)) +.....+ 1)
// Time Complexity: O(logn*(n*log n))
// i.e. O(n*(logn)^2)
// Space Complexity: O(1)
const void mergeSort(Int32Array &arr, i32 s, i32 e) {
  if (s == e)
    return;

  // Calculating mid to slice the
  // array in two halves
  i32 mid = (s + e) / 2;

  // Recursive calls to sort left
  // and right subarrays
  mergeSort(arr, s, mid);
  mergeSort(arr, mid + 1, e);

  inPlaceMerge(arr, s, e);
}
// This code is contributed by adityapande88 and edited by dxdye
