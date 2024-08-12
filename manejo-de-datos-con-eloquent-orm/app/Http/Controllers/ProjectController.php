<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Company;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

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

    public function create()
    {
        return view('project.create', [
            'cities' => City::all(),
            'companies' => Company::all(),
            'users' => User::all(),
        ]);
    }

    public function store(Request $request) {
        $project = new Project();
        $project->city_id = $request->get('city');
        $project->company_id = $request->get('company');
        $project->user_id = $request->get('user');
        $project->name = $request->get('name');
        $project->execution_date = $request->get('execution_date');
        $project->is_active = $request->has('is_active');
        $project->save();

        return redirect()->route('project.index');
    }
}
