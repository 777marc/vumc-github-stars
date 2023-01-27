<?php

namespace App\Services;

use App\Interfaces\GithubServiceInterface;
use App\Models\GithubStar;
use Carbon\Carbon;

class GithubService implements GithubServiceInterface
{
    public function getRepos()
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.github.com/search/repositories?q=Q+language:php&sort=stars&order=desc&per_page=10",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_TIMEOUT => 30000,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'User-Agent: Awesome-Octocat-App',
            ),
        ));
        $response = curl_exec($curl);

        $err = curl_error($curl);
        curl_close($curl);
        
        if ($err) {
            return "cURL Error #:" . $err;
        } else {
            return json_decode($response);
        }
    }

    public function init()
    {
        GithubStar::truncate();
        $res = $this->getRepos();
        foreach($res->items as $item) {
            GithubStar::insert([
                'repository_id' => $item->id,
                'name' => $item->name,
                'url' => $item->html_url,
                'created_date' =>  Carbon::parse($item->created_at),
                'last_publish_date' => Carbon::parse($item->pushed_at),
                'description' => $item->description,
                'number_of_starts' => $item->stargazers_count,
            ]);
        }
    }
    
}
