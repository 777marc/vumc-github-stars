<?php

namespace App\Http\Controllers;

use App\Models\GithubStar;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\Github;

class GithubStarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allStars = GithubStar::all();
        if (count($allStars) === 0) {
            $gitRepos = new Github();
            $gitRepos->init();
        }
        return Inertia::render('Stars', ['stars' => $allStars]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function refresh(Request $request)
    {
        $gitRepos = new Github();
        $gitRepos->init();
        $allStars = GithubStar::all();
        return Inertia::render('Stars', ['stars' => $allStars]);
    }
}
