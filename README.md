﻿# SINF
Sistemas de Informação - FEUP


### Instructables for HOST PC (WINDOWS 10):

1. Setup an Apache/XAMPP server: https://www.apachefriends.org/index.html
2. Install 'Composer' on your computer: https://getcomposer.org/
	- When asks for php path: 'C/Xampp/php/php.exe'
3. Git clone'SINF/360Dashboard' to on XAMPP/htdocs
4. Go to '...htdocs/SINF/360dashboard' and run command 'composer install' 
5. [Only if you having 500 error] Go to '...htdocs/SINF/360dashboard' and run command 'cp .env.example .env' and 'php artisan key:generate'
6. In order to run database:
Go to http://localhost/phpmyadmin/ and create database called "360dashboard"
- Verify inside .env file these settings (change them if not):
- DB_DATABASE=360dashboard
- DB_USERNAME=root
- DB_PASSWORD=
- Type on the sheel: php artisan migrate
7. Go to 'http://localhost/SINF/360dashboard/public/index'


### Instructables for GUEST PC - Enable Port Forwarding (VBOX WINDOWS 7 with Primavera):

1. Go to "Settings" on your virtual machine
2. Go to "Network" -> Advanced -> Port Forwarding
3. Add a Port with this settings: Host Port is 4001 and Guest Port is 2018
4. This way we can work on our HOST pc and make API CALLS from Host to Guest


### Instructables for sharing our Company Info through our VMBOXs (VBOX WINDOWS 7 with Primavera):

#### -Create File-
1. Open Primavera Admin
2. Right-Click on Company Name and then "Manuntenção"  -> "Cópia de Segurança"
3. This option will create a file called "xxx.bak" and that .bak file can be shared through our VMBoxs

#### -Restore File-
1. Open Primavera Admin
2. Right-Click on "Nova" and then "Manuntenção"  -> "Reposição de Cópia de Segurança"
3. This option will allow to restore that file created above called "xxx.bak"
