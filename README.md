### prerequisite: composer, docker

### 1. From the project root, install dependancies by running: `$ composer install`

### 2. create a new .env file and copy contents of .env.example into it

### 3. Next, run `./vendor/bin/sail up -d`

### 4. Next, run `./vendor/bin/sail php artisan migrate:fresh --seed` to created the database and seed the Github Stars table with initial dummy data.

### 5. Install client dependencies: `./vendor/bin/sail npm i`

### 5. Build client: `./vendor/bin/sail npm run build`

### 6. Run the client: `./vendor/bin/sail npm run dev`
