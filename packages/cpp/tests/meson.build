# meson.build
sources = [
  'test.cpp',
  '../src/helper/cpp/generateArray.cpp',
  '../src/helper/cpp/types.cpp',
  '../src/helper/cpp/stopWatch.cpp',
  '../src/sorts/cpp/insertionSort.cpp',
  '../src/sorts/cpp/inplaceMergeSortN2.cpp',
  '../src/sorts/cpp/inplaceMergeSort.cpp',
  'helper/cpp/isSortedCondition.cpp',
]
catch2 = dependency('catch2', version: '>=2.13.0')
test_sort = executable(
  'test_sort',
  sources,
  dependencies: catch2,
)
test('test_sort', test_sort)
