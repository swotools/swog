#!/bin/bash
# **********************
# Installazione di SWOG
# **********************
set -e # Exit script on error
# SWOG è installato in vendor/fvoxlab/swog
VENDORDIR='vendor/fvoxlab/swog'
BASEDIR=$1
# i file da copiare nella root del progetto
SWOG_COPY=( "package.json" "gruntfile.js" "grunt" "scss" "js" )
# if [ -f ./bin/bash/swogconfig.sh ];then
#   source ./bin/bash/swogconfig.sh
# fi
if [ -z $BASEDIR ]; then
   echo "SWOG base dir is Empty"
   exit
fi
# SE E SOLO SE, NON TROVO i file di SWOG COPY nella root del progetto
if [ ! -f "$BASEDIR/package.json" ];then
  echo "SWOG installing .."
  for fsobject in "${SWOG_COPY[@]}";do
    if cp -R "$VENDORDIR/$fsobject" $BASEDIR;then
      echo "$fsobject OK"
    else
      echo "$fsobject FAILED!"
    fi
  done
  sleep 1
else
  echo "SWOG is installed"
fi

# # Run Grunt tasks
# if [ ! -d 'node_modules' ];then
#   echo "NPM installing ..."
#   npm install --quiet --silent
#   # sleep 1
# else
#   echo "Updating NPM ..."
#   #rm -rf node_modules
# fi
