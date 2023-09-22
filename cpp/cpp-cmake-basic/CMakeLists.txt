cmake_minimum_required(VERSION 3.5.0)
project(Basic VERSION 0.1.0 LANGUAGES C CXX)

set(CMAKE_EXE_LINKER_FLAGS "-static-libstdc++")

set(CONFIG_FILE "config.cmake")
if(EXISTS ${CMAKE_SOURCE_DIR}/${CONFIG_FILE})
    include(${CMAKE_SOURCE_DIR}/${CONFIG_FILE})
    message("'${CMAKE_SOURCE_DIR}/${CONFIG_FILE}' included.")
else()
    message("'${CMAKE_SOURCE_DIR}/${CONFIG_FILE}' not found.")
endif()

if(FUNCTION)
    list(APPEND SRC_LIST src/${FUNCTION}/main.cpp)
    message("Function '${FUNCTION}' included.")
else()
    list(APPEND SRC_LIST src/hello/main.cpp)
    message("Default Function 'hello' included.")
endif()

include(CTest)
enable_testing()

add_executable(Basic ${SRC_LIST})

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)
