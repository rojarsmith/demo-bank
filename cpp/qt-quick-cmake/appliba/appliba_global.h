#ifndef APPLIBA_GLOBAL_H
#define APPLIBA_GLOBAL_H

#include <QtCore/qglobal.h>

#if defined(APPLIBA_LIBRARY)
#  define APPLIBA_EXPORT Q_DECL_EXPORT
#else
#  define APPLIBA_EXPORT Q_DECL_IMPORT
#endif

#endif // APPLIBA_GLOBAL_H
