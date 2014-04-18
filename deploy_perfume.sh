#!/bin/bash
#deploys perfume to a webserver
#$1 - Location of webserver
#$2 - Location of perfume
#$3 - Location of Synoptic
python Makefile.py
cp -R $2 $1
cp -R $3 $1
