# Perfume #
***

**Perfume** is a tool for extracting performance models of systems from logs of the systems' behavior.

* [Read the paper](https://www.cs.ubc.ca/~bestchai/papers/ase14_perfume.pdf) that describes Perfume.

* [See slides for the paper](https://www.cs.ubc.ca/~bestchai/papers/ase14_perfume_slides.pdf).

### Compiling and deploying Perfume ###
Perfume requires the cheetah python library. 

Install with `$pip install cheetah`
You can get pip [here](http://pip.readthedocs.org/en/latest/installing.html).

Files are included in the templates to ease development and avoid repeating code.

For example,

`  #include "./template/css_template.html"` includes the css files into the template. The main template is index_template.html, which generates index.html.

To deploy, see [how to deploy Perfume](https://github.com/ModelInference/perfume-frontend/wiki/HowtodeployPerfume).

This project is distributed under the MIT license. For more info, see LICENSE.md.
