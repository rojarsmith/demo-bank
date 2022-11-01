cmake_minimum_required(VERSION 3.14)

project(demo)
set(CMAKE_BUILD_TYPE DEBUG)
set(SRC_LIST main.cpp)
add_executable(demo ${SRC_LIST})