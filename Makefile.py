
from Cheetah.Template import Template

def compile_templates():
    with open('./template/index_template.html', 'r') as templatefile:
        template = templatefile.read()
    compiled_template = Template(template).__str__()
    with open('index.html', 'w') as postfile:
        postfile.write(compiled_template) 

compile_templates()
