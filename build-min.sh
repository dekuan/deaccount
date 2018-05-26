#!/usr/bin/env bash


#	make a empty file
echo > dist/deaccount.js

#	assemble all js to one file
for f in js/*.js; do

	echo ">>>> read :: $f"
	cat $f >> dist/deaccount.js

done

#	build
echo 
echo "---- make :: dist/deaccount.js"
echo "---- make :: dist/deaccount-min.js"
echo "---- Done!"
echo 
echo 

java -jar "tools/yuicompressor-2.4.8.jar" "dist/deaccount.js" -o "dist/deaccount.min.js" --charset utf-8
