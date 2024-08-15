<?php

namespace App\Http\Controllers;

use App\Models\SubTask;
use Illuminate\Http\Request;

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

        $newSubTask = SubTask::create($data);

        if($newSubTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully created subordinate task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error creating subordinate task']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SubTask $subTask)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SubTask $subTask)
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

        $updatedSubtask = $subtask->update($data);

        if($updatedSubtask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully created subordinate task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error creating subordinate task']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SubTask $subTask)
    {
        //
    }

    public function toggleSubTaskStatus(Request $request, SubTask $subtask) {

        // dd($request);

        $updatedSubtask = $subtask->update([
            'completed' => $request->completed,
        ]);

        if($updatedSubtask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully changed subordinate task status']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error changing subordinate task status']);
        }
    }
}
