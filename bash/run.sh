#!/bin/bash

# relative path
echo `dirname $0`

echo `pwd`

## for

for i in `seq 5 10`;
do
    echo $i
done

str="this example 
demonstrates the for loop"

for line in "$str"
do
   echo "$line"
done

for i in $str
do
   echo "$i"
done
