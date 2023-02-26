#!/bin/sh

for file in $(ls | grep ".md"); do
    file=${file%.md}
    rm $file.html
    pandoc $file.md -f markdown -t html -s -o $file.html
fi
