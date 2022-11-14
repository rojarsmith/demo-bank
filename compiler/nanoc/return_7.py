# Just concept, not work

import sys, os, re
from pathlib import Path

#expected form of a C program, without line breaks
source_re = r"int main\s*\(\s*\)\s*{\s*return\s+(?P<ret>[0-9]+)\s*;\s*}" 

# Use 'main' instead of '_main' if not on OS X
assembly_format = """    
    .globl _main
main:
    movl    ${}, %eax
    ret
"""

file_name = os.path.splitext(Path(__file__).name)[0]
source_file = file_name + ".c"
assembly_file = file_name + ".s"

with open(source_file, 'r') as infile, open(assembly_file, 'w') as outfile:
    source = infile.read().replace('\n', '')
    match = re.search(source_re, source)

    # extract the named "ret" group, containing the return value
    retval = match.group('ret') 
    outfile.write(assembly_format.format(retval))