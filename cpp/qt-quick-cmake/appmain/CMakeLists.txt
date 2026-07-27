cmake_minimum_required(VERSION 3.16)

project(appmain VERSION 0.1 LANGUAGES CXX)

set(CMAKE_AUTOMOC ON)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 6.2 COMPONENTS Quick REQUIRED)

qt_add_executable(appappmain
    main.cpp
)

qt_add_qml_module(appappmain
    URI appmain
    VERSION 1.0
    QML_FILES main.qml 
)

message("Lib A name: ${LIB_A_NAME}")
message("Lib A path: ${LIB_A_PATH}")

if(DEFINED LIB_A_PATH)
    find_library(LIB_A appliba
        PATHS ${LIB_A_PATH}
        NO_DEFAULT_PATH)
    message("Lib A loaded with path: ${LIB_A}")
endif()

target_include_directories(appappmain PUBLIC ../${LIB_A_NAME})

target_link_libraries(appappmain PUBLIC ${LIB_A})

target_compile_definitions(appappmain
    PRIVATE $<$<OR:$<CONFIG:Debug>,$<CONFIG:RelWithDebInfo>>:QT_QML_DEBUG>)
target_link_libraries(appappmain
    PRIVATE Qt6::Quick)
