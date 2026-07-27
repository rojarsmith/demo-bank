cmake_minimum_required(VERSION 3.14)

project(demo)

set(CMAKE_BUILD_TYPE Debug)

set(SRC_LIST src/main.cpp)

include_directories(${CMAKE_CURRENT_LIST_DIR}/src/template/tmath.hpp)

add_executable(demo ${SRC_LIST})