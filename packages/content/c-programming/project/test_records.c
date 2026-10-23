#include "input.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    Gradebook book;
    gb_init(&book);
    assert(gb_total(&book) == 0 && gb_passed(&book) == 0);
    gb_sort(&book);
    GbStatus status = gb_add(&book, "Lin", 88);
    assert(status == GB_OK);
    status = gb_add(&book, "Bo", 59);
    assert(status == GB_OK);
    status = gb_add(&book, "Ada", 100);
    assert(status == GB_OK);
    status = gb_add(&book, "Ada", 0);
    assert(status == GB_DUPLICATE && book.size == 3);
    status = gb_add(&book, "Invalid1", 90);
    assert(status == GB_INVALID && book.size == 3);
    status = gb_add(&book, "Zero", -1);
    assert(status == GB_INVALID && book.size == 3);
    assert(gb_total(&book) == 247 && gb_passed(&book) == 2);
    gb_sort(&book);
    assert(strcmp(book.data[0].name, "Ada") == 0 && book.data[0].score == 100);
    assert(strcmp(book.data[1].name, "Lin") == 0 && book.data[1].score == 88);
    assert(strcmp(book.data[2].name, "Bo") == 0 && book.data[2].score == 59);
    gb_destroy(&book);
    assert(book.data == NULL && book.size == 0 && book.capacity == 0);
    gb_destroy(&book); /* The reset state is safe to destroy again. */

    Student item = {"Keep", 42};
    status = parse_student("Ada 0", &item);
    assert(status == GB_OK && item.score == 0);
    status = parse_student("Ada 100", &item);
    assert(status == GB_OK && item.score == 100);
    const char *bad[] = {"", " 90", "Ada", "Ada ", "Ada  90", "Ada -1", "Ada +1",
                         "Ada 101", "Ada 90x", "Ada 90 ", "Ada\t90", "A1 9",
                         "ABCDEFGHIJKLMNOPQRSTU 9", "Ada 99999999999999999999999999999"};
    for (size_t i = 0; i < sizeof bad / sizeof bad[0]; i++) {
        item.score = 42;
        strcpy(item.name, "Keep");
        status = parse_student(bad[i], &item);
        assert(status == GB_INVALID && item.score == 42 && strcmp(item.name, "Keep") == 0);
    }
    status = parse_student("ABCDEFGHIJKLMNOPQRST 100", &item);
    assert(status == GB_OK && strlen(item.name) == 20);

    gb_init(&book);
    for (size_t i = 0; i < GB_LIMIT; i++) {
        char name[4] = {'S', (char)('A' + i / 26), (char)('A' + i % 26), '\0'};
        status = gb_add(&book, name, 100);
        assert(status == GB_OK);
    }
    assert(book.size == GB_LIMIT && book.capacity == GB_LIMIT && gb_total(&book) == 10000);
    status = gb_add(&book, "Extra", 1);
    assert(status == GB_FULL && book.size == GB_LIMIT);
    gb_destroy(&book);
    puts("records and parser: ok");
    return 0;
}
