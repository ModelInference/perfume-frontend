#Perfume#
***

**Perfume** is a tool for extracting performance models of systems from logs of the systems' behavior.

* [Try out the web deployment!](http://kramer.nss.cs.ubc.ca/perfume/)

* [Read more](http://cs.umass.edu/~ohmann/perfume/) about how Perfume works.

###Compiling Perfume###
Perfume requires the cheetah python library. 

Install with `$pip install cheetah`
You can get pip [here](http://pip.readthedocs.org/en/latest/installing.html).

Run `$python Makefile.py` to generate the necessary web files.

Files are included in the templates to ease development and avoid repeating code.

For example,

`  #include "./template/css_template.html"` includes the css files into the template. The main template is index_template.html, which generates index.html. 


###Deploying Perfume###
See [how to deploy Perfume](https://bitbucket.org/bestchai/perfume-frontend/wiki/How%20to%20deploy%20Perfume).