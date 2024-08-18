<?php

namespace App\Http\Controllers;

use App\Models\SubTask;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'title' => 'required|string',
            'task_id' => 'required',
        ]);

        $task = Task::findOrFail($request->task_id);

        if(Auth::user()->id == $task->user_id) {
            $task->update([
                'completed' => false,
            ]);
    
            $newSubTask = SubTask::create($data);
        }

        if($newSubTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully created subordinate task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error creating subordinate task']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SubTask $subtask)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubTask $subtask)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SubTask $subtask)
    {
        $data = $request->validate([
            'title' => 'required|string',
        ]);

        if(Auth::user()->id == $subtask->task->user_id) {
            $updatedSubtask = $subtask->update($data);
        }

        if($updatedSubtask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully created subordinate task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error creating subordinate task']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubTask $subtask)
    {
        if(Auth::user()->id == $subtask->task->user_id) {
            $deletedSubTask = $subtask->delete();
        }

        if($deletedSubTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully deleted subordinate task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error deleting subordinate task']);
        }
    }

    public function toggleSubTaskStatus(Request $request, SubTask $subtask) {

        // dd($request);
        if(Auth::user()->id == $subtask->task->user_id) {
            $updatedSubtask = $subtask->update([
                'completed' => $request->completed,
            ]);

            $task = $subtask->task;

            $allSubtasksCompleted = $task->subTasks()->where('completed', false)->count() === 0;

            $task->update([
                'completed' => $allSubtasksCompleted
            ]);
        }

        if($updatedSubtask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully changed subordinate task status']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error changing subordinate task status']);
        }
    }
}
