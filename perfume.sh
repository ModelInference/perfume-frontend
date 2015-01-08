#!/bin/sh

# Runs Perfume from the compiled JAR file, passing all command
# line argument directly to main().

java -ea -cp ./syn-bin/synoptic.jar synoptic.main.PerfumeMain $*
