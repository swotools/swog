#!/bin/sh
set -e
source vendor/swotools/tools/bin/_config.sh
# Controllo SWOG
# 17-7-17 riduco funzioni lasciando solo il reset di swog

for i in "${SWOG_COPY[@]}"
do
  echo "Elimino $i ..."
  if [ -d $i ] || [ -f $i ];then
      rm -rf $i
  fi
done
