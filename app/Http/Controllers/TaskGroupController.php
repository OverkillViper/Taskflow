<?php

namespace App\Http\Controllers;

use App\Models\TaskGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groups = TaskGroup::withCount('tasks')->get();

        $context = [
            'groups' => $groups
        ];

        return Inertia::render('Groups/Index', $context);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'color' => 'required|string|max:10'
        ]);

        $newGroup = TaskGroup::create($data);

        if($newGroup) {
            return redirect()->route('groups.index')->with(['status' => 'success', 'message' => 'Successfully created group']);
        } else {
            return redirect()->route('groups.index')->with(['status' => 'error', 'message' => 'Error creating group']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(TaskGroup $taskGroup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TaskGroup $taskGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TaskGroup $taskGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TaskGroup $group)
    {
        $deletedGroup = $group->delete();

        if($deletedGroup) {
            return redirect()->route('groups.index')->with(['status' => 'success', 'message' => 'Successfully deleted group']);
        } else {
            return redirect()->route('groups.index')->with(['status' => 'error', 'message' => 'Error deleting group']);
        }
    }
}
