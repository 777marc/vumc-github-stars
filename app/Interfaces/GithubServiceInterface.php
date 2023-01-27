<?php

namespace App\Interfaces;

interface GithubServiceInterface 
{
    public function init();
    public function getRepos();
}