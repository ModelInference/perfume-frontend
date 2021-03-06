#!/usr/bin/python

'''
Purpose:
=========

This script packages and deploys the perfume project to:
http://bestchai.bitbucket.org/perfume/


Usage:
=======

- This script must be run from within the top level perfume source directory.

- This script:

  1. Adds google analytics tracking.

  2. Copies over the entire d3/ source tree over to a destination that
     is assumed to be the http://bestchai.bitbucket.org/perfume/ repo.
  
  3. Commits and pushes the http://bestchai.bitbucket.org/perfume/ repo.
'''


import sys
import os
import subprocess


def get_cmd_output(cmd, args):
    '''
    Returns the standard output from running:
    $ cmd args[0] args[1] .. args[n]

    Where cmd is the command name (e.g., 'svn') and args is a list of
    arguments to the command (e.g., ['help', 'log']).
    '''
    return subprocess.Popen([cmd] + args,
                            stdout=subprocess.PIPE, 
                            stderr=subprocess.STDOUT).communicate()[0]


def runcmd(s):
    '''
    Logs and runs a shell command.
    '''
    print "os.system: " + s
    os.system(s)
    

def main():
    '''
    Workhorse method to execute all the of the steps described in the file header.
    '''
    
    src_dir = "./"
    dist_dir = "../bestchai.bitbucket.org/perfume/"

    print "Deploying to: " + dist_dir
    print "from: " + src_dir

    # Remove previously deployed version of perfume.
    if (os.path.exists(dist_dir)):
        runcmd("rm " + dist_dir + "*")
    else:
        print "Error: deployment dir is not where it is expected."
        sys.exit(-1)

    # Copy over the source.
    if (os.path.exists(src_dir)):
        runcmd("cp -R " + src_dir + "* " + dist_dir)
    else:
        print "Error: source dir is not where it is expected."
        sys.exit(-1)

    # Remove the unnecessary dev.js that was copied over.
    runcmd("rm " + dist_dir + "dev.js")

    # Replace reference to dev.js with deployed.js in deployed version
    # of index.html.
    runcmd("sed -i '' 's/dev.js/deployed.js/g' " + dist_dir + "index.html")

    # Find out the current revision id:
    revid = get_cmd_output('hg', ['id', '-i']);
    revid = revid.rstrip()

    print "Revid is : " + revid;

    # Replace the place-holder revision with the actual revision id:
    runcmd("sed -i '' 's/revision: ZZZ/revision: " + revid
           + "/g' " + dist_dir + "deployed.js")

    # Remove any files ending with ~
    runcmd("cd " + dist_dir + " && rm -f *~")

    # Remove this script:
    runcmd("cd " + dist_dir + " && rm deploy_perfume.py")

    # Add any files that are new.
    runcmd("cd " + dist_dir + " && hg add *")

    # Commit the deployed dir.
    runcmd("cd " + dist_dir + " && hg commit -m 'auto-deployment'")
    
    # Push the deployed dir.
    runcmd("cd " + dist_dir + " && hg push")

    print
    print "Done."
    return


if __name__ == "__main__":
    main()

