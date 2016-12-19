#!/bin/bash
# Exit script on error
# **********************
# Installazione di SWOG con bootstrap 3
# **********************
set -e
SWOG_COPY=( "package.json" "gruntfile.js" "grunt" "scss" "js" )
SWOG_NODEMODULES = 'node_modules'

# TOD
# Copiare anche il file bin/bash/install.sh
# per includere, a seconda della versione di swog scaricata, la relativa
# istruzione di assemblaggio e startup


# SE E SOLO SE, NON TROVO i file di SWOG COPY
if [ ! -f 'package.json' ];then
  echo "SWOG installing .."
  for i in "${SWOG_COPY[@]}"
  do
     if cp -R $DIRSWOG/$i $PROJECTDIR
     then echo "$i OK"
  else
     echo "$i FAILED!"
  fi
  done
  sleep 1
fi


# Run Grunt tasks
if [ ! -d $DIRNODEMOD ];then
  echo "NPM installing ..."
  npm install --quiet --silent
  sleep 1
#else
  #rm -rf node_modules
fi
