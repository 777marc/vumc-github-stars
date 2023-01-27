<?php

namespace App\Http\Controllers;

use App\Interfaces\GithubServiceInterface;
use App\Models\GithubStar;
use App\Services\GithubService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Inertia\Response;

class GithubStarsController extends Controller
{

    private GithubServiceInterface $githubService;

    /**
     *
     * @param GithubServiceInterface $githubService
     */
    public function __construct(GithubServiceInterface $githubService) 
    {
        $this->githubService = $githubService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $allStars = GithubStar::all();
        if (count($allStars) === 0) {
            $allStars = $this->githubService->init();
        }
        return Inertia::render('Stars', ['stars' => $allStars]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return void
     */
    public function refresh(Request $request)
    {
        $this->githubService->init();
        return redirect('/');
    }
}
