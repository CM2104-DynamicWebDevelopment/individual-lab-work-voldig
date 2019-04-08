#!/bin/bash
#you need to change permission to run this file - chmod 0700 nameOfThisFile
for file in *.html 
do 
	mv "$file" "${file%.html}.ejs" 
done
