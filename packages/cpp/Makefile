CXX = g++
BUILD_DIR = ./build
SRC_HELPER = $(wildcared ./src/helper/cpp/*.cpp)
SRC_TESTS = ./tests/main.test.cpp

helper: $(SRC_HELPER)
	$(CXX) -c -fPIC ./src/helper/cpp/*.cpp
	ar rcs libhelper.a *.o
	g++ -shared -o libhelper.so *.o
	mv *.a *.so $(BUILD_DIR)

tests: clean helper $(SRC_TESTS)
	g++ -c $(SRC_TESTS)
	g++ -o tests.out *.o -L$(BUILD_DIR) -lhelper


clean:
	rm -f *.o *.a *.so
