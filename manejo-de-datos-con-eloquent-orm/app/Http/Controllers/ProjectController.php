<?php

namespace App\Http\Controllers;

use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::all();
    }

    public function limited(int $limit)
    {
        return Project::take($limit)->get();
    }
}
