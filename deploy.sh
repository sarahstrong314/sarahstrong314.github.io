bundle exec jekyll build
rsync -vr _site/* sa967st@towns.dreamhost.com:sarah.cubing.net
ssh sa967st@towns.dreamhost.com <<'END'
chmod -R 777 sarah.cubing.net/images/
rm sarah.cubing.net/robots.txt
END
