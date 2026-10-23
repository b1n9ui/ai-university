#include "input.h"
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

GbStatus parse_student(const char *text, Student *out)
{
    if (text == NULL || out == NULL) { return GB_INVALID; }
    Student item = {"", 0};
    size_t length = 0;
    while (text[length] != '\0' && text[length] != ' ') {
        unsigned char ch = (unsigned char)text[length];
        if (!((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))) {
            return GB_INVALID;
        }
        if (length == GB_NAME_LIMIT) { return GB_INVALID; }
        item.name[length] = (char)ch;
        length++;
    }
    if (length == 0 || text[length] != ' ') { return GB_INVALID; }
    const char *digits = text + length + 1;
    if (*digits == '\0') { return GB_INVALID; }
    for (const char *p = digits; *p != '\0'; p++) {
        if (*p < '0' || *p > '9') { return GB_INVALID; }
    }
    char *end;
    errno = 0;
    long value = strtol(digits, &end, 10);
    if (errno == ERANGE || end == digits || *end != '\0' || value > 100) {
        return GB_INVALID;
    }
    item.score = (int)value;
    *out = item;
    return GB_OK;
}

/* 1=line, 0=clean EOF, -1=I/O, -2=invalid/too long.
   cap is a fixed 64 in the caller, at least 2. */
static int read_line(FILE *stream, char *line, size_t cap)
{
    size_t used = 0;
    int ch;
    while ((ch = fgetc(stream)) != EOF) {
        if (ch == '\n') {
            if (used > 0 && line[used - 1] == '\r') { used--; }
            line[used] = '\0';
            return 1;
        }
        if (ch == 0 || used == cap - 1) { return -2; }
        line[used++] = (char)ch;
    }
    if (ferror(stream)) { return -1; }
    if (used == 0) { return 0; }
    line[used] = '\0';
    return 1;
}

GbStatus gb_load(Gradebook *target, const char *path, size_t *error_line)
{
    if (error_line != NULL) { *error_line = 0; }
    FILE *stream = fopen(path, "rb"); /* Preserve CRLF and NUL for validation. */
    if (stream == NULL) { return GB_IO; }
    Gradebook staging;
    gb_init(&staging);
    GbStatus status = GB_OK;
    size_t line_number = 0;
    char line[64];
    int result;
    while ((result = read_line(stream, line, sizeof line)) != 0) {
        line_number++;
        if (result < 0) {
            status = result == -1 ? GB_IO : GB_INVALID;
            break;
        }
        Student item;
        status = parse_student(line, &item);
        if (status != GB_OK) { break; }
        status = gb_add(&staging, item.name, item.score);
        if (status != GB_OK) { break; }
    }
    if (fclose(stream) != 0 && status == GB_OK) { status = GB_IO; line_number = 0; }
    if (status != GB_OK) {
        if (error_line != NULL) { *error_line = line_number; }
        gb_destroy(&staging);
        return status;
    }
    gb_destroy(target);
    *target = staging; /* Intentional ownership transfer; do not destroy staging. */
    return GB_OK;
}
