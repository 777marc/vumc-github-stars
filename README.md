### prerequisite: composer, docker, node

### 1. From the project root, install dependancies by running: `$ composer install`

### 2. create a new .env file and copy contents of .env.example into it

### 3. Next, run `./vendor/bin/sail up -d`

### 4. Next, run `./vendor/bin/sail php artisan migrate` to created the database (this may fail the first time, just run it again if it does)

### 5. Install client dependencies: `./vendor/bin/sail npm i`

### 5. Build client: `./vendor/bin/sail npm run build`

### 6. Run the client: `./vendor/bin/sail npm run dev`

### 7. Run Test: `php artisan test` (this will seed the db using the GithubStars Factory)
