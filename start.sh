echo "Введите http git репозитория"
read repo
echo "Введите имя базы данных"
read database
echo "Введите пользователя базы данных"
read db_username
echo "Введите пароль базы данных"
read db_password
echo "Введите название сайта"
read app_name
echo "Введите url сайта"
read app_url

rm -r public_html/

git config --global init.defaultBranch main
git config --global --add safe.directory "$PWD"
git init
git remote add origin https://github.com/Ji-Touch/Clean.git
git pull origin main
rm ./.git/ -r
git init
git remote add origin $repo
git add .
git commit -m "install"
git branch -M main
git push -u origin main

# ssh localhost -p 222

export PATH=/usr/local/php/cgi/8.1/bin/:$PATH
npm i
composer update
npm run build

ln -s public public_html
mv .envconfig .env


php artisan db:update $database $db_username $db_password


php artisan db:siteconfig $app_name $app_url

php artisan storage:link

php artisan migrate
php artisan db:seed


