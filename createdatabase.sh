#!/bin/bash
# Create database

sqlite3 sqlite.db "create table userId(id int primary key);"
