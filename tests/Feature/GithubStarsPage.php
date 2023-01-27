<?php

use App\Models\GithubStar;
use Database\Seeders\DatabaseSeeder;

test('that the main page loads', function () {
    $this->seed(DatabaseSeeder::class);
    $response = $this->get('/');
    $response->assertStatus(200);
});
