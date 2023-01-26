<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;
use App\Models\GithubStar;

class GithubStarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = Faker::create();
        return [

            GithubStar::create([
                'repository_id' => $faker->randomNumber(5, true),
                'name' => $faker->word(),
                'url' => $faker->safeEmailDomain(),
                'created_date' => $faker->dateTime(),
                'last_publish_date' => $faker->dateTime(),
                'description' => $faker->sentence(3),
                'number_of_starts' => $faker->randomDigit(),
                'updated_at' => $faker->dateTime(),
                'created_at' => $faker->dateTime(),
            ])

            // DB::table('github_stars')->insert([
            //     'repository_id' => $faker->randomNumber(5, true),
            //     'name' => $faker->word(),
            //     'url' => $faker->safeEmailDomain(),
            //     'created_date' => $faker->dateTime(),
            //     'last_publish_date' => $faker->dateTime(),
            //     'description' => $faker->sentence(3),
            //     'number_of_starts' => $faker->randomDigit(),
            //     'updated_at' => $faker->dateTime(),
            //     'created_at' => $faker->dateTime(),
            // ])
        ];
    }
}

