# PREN-boilerplate
Boilerplate code for Postgres, React, Express, Node

## Setup

From the terminal while in the project folder use these commands to add the postgres databases:

```
psql
create database pren_boilerplate_dev;
create database pren_boilerplate_dev;
\q
touch .env
open .env
```

Your .env file should look like this with ```USERNAME``` replaced with the name that appears before the ```=#``` when you do ```psql```
```
DATABASE_URL=postgres://USERNAME:@localhost:5432/pren_boilerplate_dev
TEST_DATABASE_URL=postgres://USERNAME:@localhost:5432/pren_boilerplate_dev
```

save and close the .env file


## Run & Test

(assumes you have node, npm, and psql installed)

```npm install```

```npm run dev``` to run on a dev environment

```npm run watch``` in another terminal window to build and watch your client files

Point your browser to ```Localhost:8080```

#### For testing: 

```npm test``` to run the tests