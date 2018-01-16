#!/bin/bash
PROJECTDIR=$(pwd)
USER=$(whoami)
OSNAME=$(uname)
NOW=$(date +"%m-%d-%Y-%H-%M-%S");
COMPOSERFILE="composer.json";
DIRBIN='bin';
WWW_USER=`ps axo user,group,comm | egrep '(apache|httpd)' | grep -v ^root | uniq | cut -d\  -f 1`

DIRLOGS='logs';
DIRCACHE='cache';
DIRSTATIC='public/static'
DIRTMP='tmp';
DIRAPP='app';
DIRVENDOR='vendor'
DIRNODEMOD='node_modules'
COMPOSERLOCK='composer.lock'

SWOCONFIG="$DIRBIN/_config.sh";
SWOGBASHINSTALL="$DIRBIN/install.sh";
DIRSWOG='vendor/swotools/swog'
SWOG_COPY=( 'package.json' 'gruntfile.js' 'scss' 'js' )

ENVFILE='.env';
RESETFILES=("$DIRNODEMOD" "$DIRVENDOR" "$COMPOSERLOCK")
