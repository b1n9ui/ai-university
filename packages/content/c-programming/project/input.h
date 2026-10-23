#ifndef AU_INPUT_H
#define AU_INPUT_H
#include "records.h"

/* text must be terminated; out must point to a writable Student.
   Exact grammar: [A-Za-z]{1,20} SPACE [0-9]+, score <= 100.
   Success writes out; failure leaves it unchanged. */
GbStatus parse_student(const char *text, Student *out);
/* target must be initialized. Success replaces it, failure preserves it.
   error_line is optional: 0 for file-level errors, otherwise 1-based line.
   path and error_line must not alias the target's owned storage. */
GbStatus gb_load(Gradebook *target, const char *path, size_t *error_line);
#endif
