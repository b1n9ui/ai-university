#ifndef AU_RECORDS_H
#define AU_RECORDS_H

#include <stddef.h>

#define GB_LIMIT 100
#define GB_NAME_LIMIT 20

typedef struct {
    char name[GB_NAME_LIMIT + 1];
    int score;
} Student;

/* Unique owner: do not copy an initialized Gradebook by value. */
typedef struct {
    Student *data;
    size_t size;
    size_t capacity;
} Gradebook;

typedef enum {
    GB_OK, GB_INVALID, GB_DUPLICATE, GB_FULL, GB_MEMORY, GB_IO
} GbStatus;

/* Call init once before use; destroy once after the last use. */
void gb_init(Gradebook *book);
void gb_destroy(Gradebook *book);
/* On failure, records, size and ownership are unchanged. */
GbStatus gb_add(Gradebook *book, const char *name, int score);
void gb_sort(Gradebook *book);
int gb_total(const Gradebook *book);
size_t gb_passed(const Gradebook *book);
const char *gb_status_text(GbStatus status);

#endif
