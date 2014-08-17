#!/bin/bash
#deploys perfume to a webserver
#$1 - Location of webserver
#$2 - Location of perfume
#$3 - Location of Synoptic
python Makefile.py
cp -fR $2 $1
cp -fR $3 $1
