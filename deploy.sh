bundle exec jekyll build
rsync -vr _site/* sa967st@cubing.net:sarah.cubing.net
ssh sa967st@cubing.net <<'END'
chmod -R 777 sarah.cubing.net/images/
rm sarah.cubing.net/robots.txt
END
