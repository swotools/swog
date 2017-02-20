#!/bin/bash
# **********************
# Aggiornamento di SWOG
# **********************
set -e # Exit script on error
# SWOG è installato in vendor/fvoxlab/swog
VENDORDIR='vendor/fvoxlab/swog'
BASEDIR=$1
# i file da aggiornare nella root del progetto.
# Escludo options perchè ogni singolo progetto può modificare parametri
# es. Concat, esclude js di carousel etc..
SWOG_COPY=( "package.json" "gruntfile.js" "grunt/tasks" "grunt/postcss.js" )

if [ -z $BASEDIR ]; then
   echo "SWOG base dir is Empty"
   exit
fi
# se esiste il file package, allora procedo
if [ -f "$BASEDIR/package.json" ];then
  echo "SWOG updating ..."
  for fsobject in "${SWOG_COPY[@]}";do
    if cp -R "$VENDORDIR/$fsobject" $BASEDIR;then
      echo "$fsobject Updated"
    else
      echo "$fsobject FAILED!"
    fi
  done
  sleep 1
else
  echo "SWOG is updated"
fi
