#include "input.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc != 2) {
        fprintf(stderr, "usage: gradebook INPUT.txt\n");
        return EXIT_FAILURE;
    }
    Gradebook book;
    gb_init(&book);
    size_t error_line = 0;
    GbStatus status = gb_load(&book, argv[1], &error_line);
    if (status != GB_OK) {
        if (error_line != 0) { fprintf(stderr, "line %zu: ", error_line); }
        fprintf(stderr, "%s\n", gb_status_text(status));
        gb_destroy(&book);
        return EXIT_FAILURE;
    }
    gb_sort(&book);
    int total = gb_total(&book);
    int failed = printf("count: %zu\ntotal: %d\n", book.size, total) < 0;
    if (book.size == 0) {
        if (puts("mean: n/a") == EOF) { failed = 1; }
    } else if (printf("mean: %.2f\n", total / (double)book.size) < 0) {
        failed = 1;
    }
    if (printf("passed: %zu\n", gb_passed(&book)) < 0) { failed = 1; }
    for (size_t i = 0; i < book.size; i++) {
        if (printf("%s %d\n", book.data[i].name, book.data[i].score) < 0) { failed = 1; }
    }
    gb_destroy(&book);
    if (fflush(stdout) == EOF) { failed = 1; }
    if (failed) { fprintf(stderr, "output failed\n"); return EXIT_FAILURE; }
    return EXIT_SUCCESS;
}
