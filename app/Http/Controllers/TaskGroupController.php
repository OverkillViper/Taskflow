<?php

namespace App\Http\Controllers;

use App\Models\TaskGroup;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TaskGroupController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $groups = TaskGroup::where('user_id', '=', Auth::user()->id)->withCount('tasks')->get();

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

        $data['user_id'] = Auth::user()->id;

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
    public function show(TaskGroup $group)
    {

        $tasks = Task::where('user_id', '=', Auth::user()->id)->where('task_group_id', '=', $group->id)->with('taskGroup')
                 ->withCount([
                    'subTasks', 
                    'subTasks as completed_subtasks_count' => function($query) {
                        $query->where('completed', true);
                    }
                 ])
                 ->get();

        $context = [
            'group' => $group,
            'tasks' => $tasks,
        ];

        return Inertia::render('Groups/GroupDetails', $context);
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
    public function update(Request $request, TaskGroup $group)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'color' => 'required|string|max:10'
        ]);

        $updatedGroup = $group->update($data);

        if($updatedGroup) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully updated group']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error updating group']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TaskGroup $group)
    {

        if(Auth::user()->id == $group->user_id) {
            $deletedGroup = $group->delete();
        }

        if($deletedGroup) {
            return redirect()->route('groups.index')->with(['status' => 'success', 'message' => 'Successfully deleted group']);
        } else {
            return redirect()->route('groups.index')->with(['status' => 'error', 'message' => 'Error deleting group']);
        }
    }
}
