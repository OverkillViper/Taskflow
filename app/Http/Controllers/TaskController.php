<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::with('taskGroup')
                 ->withCount([
                    'subTasks', 
                    'subTasks as completed_subtasks_count' => function($query) {
                        $query->where('completed', true);
                    }
                 ])
                 ->get();

        $context = [
            'tasks' => $tasks
        ];

        return Inertia::render('Tasks/Index', $context);
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
            'title'         => 'required|string|max:255',
            'deadline'      => 'required|date',
            'task_group_id' => 'int'
        ]);

        $data['deadline'] = Carbon::parse($request->deadline)->addDay(1);

        $newTask = Task::create($data);

        if($newTask) {
            return redirect()->route('dashboard')->with(['status' => 'success', 'message' => 'Successfully created task']);
        } else {
            return redirect()->route('dashboard')->with(['status' => 'error', 'message' => 'Error creating task']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        $task->load('taskGroup', 'subTasks'); // Eager load task group and subtasks

        $context = [
            'task' => $task->loadCount(['subTasks as sub_tasks_count', 'subTasks as completed_subtasks_count' => function($query) {
                $query->where('completed', true);
            }]),
            'taskGroup' => $task->taskGroup,
            'subTasks' => $task->subTasks,
            'subTasksCount' => $task->sub_tasks_count,
            'completedSubTasksCount' => $task->completed_subtasks_count,
        ];

        return Inertia::render('Tasks/TaskDetails', $context);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
