#include "records.h"
#include <stdlib.h>
#include <string.h>

void gb_init(Gradebook *book)
{
    book->data = NULL;
    book->size = 0;
    book->capacity = 0;
}

void gb_destroy(Gradebook *book)
{
    free(book->data);
    gb_init(book);
}

static int valid_name(const char *name)
{
    if (name == NULL) { return 0; }
    size_t length = 0;
    while (name[length] != '\0') {
        unsigned char ch = (unsigned char)name[length];
        if (!((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))) {
            return 0;
        }
        length++;
        if (length > GB_NAME_LIMIT) { return 0; }
    }
    return length > 0;
}

GbStatus gb_add(Gradebook *book, const char *name, int score)
{
    if (!valid_name(name) || score < 0 || score > 100) { return GB_INVALID; }
    /* Save before realloc: name may point into the current book. */
    Student item = {"", score};
    strcpy(item.name, name); /* valid_name proved room for the terminator. */
    for (size_t i = 0; i < book->size; i++) {
        if (strcmp(book->data[i].name, item.name) == 0) { return GB_DUPLICATE; }
    }
    if (book->size == GB_LIMIT) { return GB_FULL; }
    if (book->size == book->capacity) {
        size_t next = book->capacity == 0 ? 4 : book->capacity * 2;
        if (next > GB_LIMIT) { next = GB_LIMIT; }
        /* next <= 100; sizeof(Student) is fixed and tiny in this project. */
        if (next > (size_t)-1 / sizeof *book->data) { return GB_MEMORY; }
        Student *tmp = realloc(book->data, next * sizeof *tmp);
        if (tmp == NULL) { return GB_MEMORY; }
        book->data = tmp;
        book->capacity = next;
    }
    book->data[book->size] = item;
    book->size++;
    return GB_OK;
}

static int comes_before(const Student *a, const Student *b)
{
    if (a->score != b->score) { return a->score > b->score; }
    return strcmp(a->name, b->name) < 0;
}

void gb_sort(Gradebook *book)
{
    for (size_t i = 1; i < book->size; i++) {
        Student key = book->data[i];
        size_t j = i;
        while (j > 0 && comes_before(&key, &book->data[j - 1])) {
            book->data[j] = book->data[j - 1];
            j--;
        }
        book->data[j] = key;
    }
}

int gb_total(const Gradebook *book)
{
    int total = 0;
    for (size_t i = 0; i < book->size; i++) { total += book->data[i].score; }
    return total; /* <= 10000, within the minimum guaranteed int range. */
}

size_t gb_passed(const Gradebook *book)
{
    size_t count = 0;
    for (size_t i = 0; i < book->size; i++) {
        if (book->data[i].score >= 60) { count++; }
    }
    return count;
}

const char *gb_status_text(GbStatus status)
{
    switch (status) {
    case GB_OK: return "ok";
    case GB_INVALID: return "invalid record";
    case GB_DUPLICATE: return "duplicate name";
    case GB_FULL: return "too many records (maximum 100)";
    case GB_MEMORY: return "allocation failed";
    case GB_IO: return "file I/O failed";
    }
    return "unknown error";
}
