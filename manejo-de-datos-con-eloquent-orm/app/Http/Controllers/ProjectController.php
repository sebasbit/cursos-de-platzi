<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProjectController extends Controller
{
    public function index()
    {
        return Project::all();
    }

    public function show(int $id)
    {
        try {
            return Project::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function limited(int $limit)
    {
        return Project::take($limit)->get();
    }
}
