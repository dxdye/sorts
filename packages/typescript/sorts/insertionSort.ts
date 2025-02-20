export const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};
