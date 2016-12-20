#!/bin/bash

# **********************
# Installazione di SWOG con bootstrap 3
# **********************
set -e # Exit script on error
# inlcudo il file di config che trova a destinazione
if [ -f ./bin/bash/config.sh ];then
  source ./bin/bash/config.sh
fi
if [ -f ./bin/bash/swogconfig.sh ];then
  source ./bin/bash/swogconfig.sh
fi


# SE E SOLO SE, NON TROVO i file di SWOG COPY
if [ ! -f 'package.json' ];then
  echo "SWOG installing .."
  for fsobject in "${SWOG_COPY[@]}";do
    if cp -R "$DIRSWOG/$fsobject" $PROJECTDIR;then
      echo "$DIRSWOG/$fsobject OK"
    else
      echo "$DIRSWOG/$fsobject FAILED!"
    fi
  done
  sleep 1
fi

# Run Grunt tasks
if [ ! -d 'node_modules' ];then
  echo "NPM installing ..."
  npm install --quiet --silent
  # sleep 1
else
  echo "Updating NPM ..."
  #rm -rf node_modules
fi
