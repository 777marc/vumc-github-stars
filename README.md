## prerequisite:

-   docker composer (v2.15.1)
-   docker (20.10.22)
-   node (v18.13.0)

(this solution was built using these version but lower versions are suitable)

## Setup

1. From the project root, install dependancies by running: `$ composer install`

2. create a new .env file and copy contents of .env.example into it

3. Next, run `./vendor/bin/sail up -d`
4. Next, run `./vendor/bin/sail php artisan migrate` to created the database (this may fail the first time, just run it again if it does)

5. Install client dependencies: `./vendor/bin/sail npm i`

6. Build client: `./vendor/bin/sail npm run build`

7. Run the client: `./vendor/bin/sail npm run dev`

8. Run Test: `php artisan test` (this will seed the db using the GithubStars Factory)

## Notes

-   services
    I created a service provider for the Github api calls to make it easier and cleaner to use in the controller. I stopped short of build a repository for the results since the interaction with the data was minimal.
-   stack (laravel, react)
    This solution was built on Laravel 9 with a React front end. I was able to leverage their Sail package to easily containerize the solution.
-   db (migrations, seeders)
    The db is pretty straight forward as it only has one table. I created a migration for its inital creation and a seeder class to populate it for testing.
-   test (2 simple feature tests)
    There's a test to make sure that the main page loads with a 200 status and another to test that we're recieving data from the service.
