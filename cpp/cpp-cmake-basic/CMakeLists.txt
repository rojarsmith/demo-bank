cmake_minimum_required(VERSION 3.5.0)
project(Basic VERSION 0.1.0 LANGUAGES C CXX)

set(SRC_LIST src/main.cpp)

include(CTest)
enable_testing()

add_executable(Basic ${SRC_LIST})

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)
