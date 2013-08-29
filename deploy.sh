jekyll build
rsync -vr _site/* sa967st@cubing.net:sarah.cubing.net
ssh sa967st@cubing.net chmod -R 777 sarah.cubing.net/images/