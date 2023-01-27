<?php

use App\Services\GithubService;
use Database\Seeders\DatabaseSeeder;

test('that the github service returns data', function () {
    $this->seed(DatabaseSeeder::class);
    $githubService = new GithubService();
    $repos = $githubService->getRepos();
    $this->assertCount(10, $repos->items);
});
