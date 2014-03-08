#Perfume#
***

**Perfume** is a tool for extracting performance models of systems from logs of the systems' behavior.

* [Try out the web deployment!](http://bestchai.bitbucket.org/perfume/)

* [Read more](http://cs.umass.edu/~ohmann/perfume/) about how Perfume works.

###Compiling perfume###
Perfume requires the cheetah python library. 

Run `$python Makefile.py` to generate the necessary web files.

Files are included in the templates to ease development and avoid repeating code.

For example,

`  #include "./template/css_template.html"` includes the css files into the template. The main template is index_template.html, which generates index.html. 


