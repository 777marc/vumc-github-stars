<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGitHubStarRequest;
use App\Http\Requests\UpdateGitHubStarRequest;
use App\Models\GitHubStar;

class GitHubStarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGitHubStarRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGitHubStarRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GitHubStar  $gitHubStar
     * @return \Illuminate\Http\Response
     */
    public function show(GitHubStar $gitHubStar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GitHubStar  $gitHubStar
     * @return \Illuminate\Http\Response
     */
    public function edit(GitHubStar $gitHubStar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGitHubStarRequest  $request
     * @param  \App\Models\GitHubStar  $gitHubStar
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGitHubStarRequest $request, GitHubStar $gitHubStar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GitHubStar  $gitHubStar
     * @return \Illuminate\Http\Response
     */
    public function destroy(GitHubStar $gitHubStar)
    {
        //
    }
}
