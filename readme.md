# README #

Test Backend

### Install and Setup ###

**Docker**

install docker from https://www.docker.com
and run docker compose up

`docker compose up`

docker sets up mysql, installs wordpress and plugins

some plugins will be manually installed from the /plugins-collection
copy the zips into the /wordpress/wp-content/plugins folder and unzip them

**Gulp**

run 
`npm install`

and
`npm start`

in a separate window


### Wordpress ###

https://localhost:8020

activate the wp db migrate plugin with the key in the .env file
migrate DB from live and gooooooooooo