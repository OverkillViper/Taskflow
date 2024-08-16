<?php

namespace App\Http\Controllers;

use App\Models\SubTask;
use App\Models\Task;
use App\Models\Tag;
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
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully created task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error creating task']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        $task->load('taskGroup', 'subTasks'); // Eager load task group and subtasks

        $tags = Tag::all();

        $context = [
            'task' => $task->loadCount(['subTasks as sub_tasks_count', 'subTasks as completed_subtasks_count' => function($query) {
                $query->where('completed', true);
            }]),
            'taskGroup'              => $task->taskGroup,
            'subTasks'               => $task->subTasks,
            'subTasksCount'          => $task->sub_tasks_count,
            'completedSubTasksCount' => $task->completed_subtasks_count,
            'tags'                   => $tags,
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
        $data = $request->validate([
            'title'         => 'required|string|max:255',
            'deadline'      => 'required|date',
            'task_group_id' => 'int',
        ]);

        $data['deadline'] = $request->deadline != $task->deadline ? Carbon::parse($request->deadline)->addDay(1) : $task->deadline;

        $updatedTask = $task->update($data);

        if($updatedTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully updated task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error updating task']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $deletedTask = $task->delete();

        if($deletedTask) {
            return redirect()->route('tasks.index')->with(['status' => 'success', 'message' => 'Successfully deleted task']);
        } else {
            return redirect()->route('tasks.index')->with(['status' => 'error', 'message' => 'Error deleting task']);
        }
    }

    public function toggleTaskStatus(Task $task) {
        
        // if(!$task->completed) {
        $subtasks = SubTask::where('task_id', '=', $task->id)->get();

        foreach ($subtasks as $subtask) {
            $subtask->update([
                'completed' => !$task->completed,
            ]);
        }
        // }
        
        $updatedTask = $task->update([
            'completed' => !$task->completed,
        ]);

        if($updatedTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully updated task status']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error updating task status']);
        }
    }

    public function pendingTasks() {
        $tasks = Task::where('completed', '=', false)->with('taskGroup')
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

        return Inertia::render('Tasks/PendingTasks', $context);
    }

    public function completedTasks() {
        $tasks = Task::where('completed', '=', true)->with('taskGroup')
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

        return Inertia::render('Tasks/CompletedTasks', $context);
    }

    public function missedTasks() {
        $tasks = Task::where('completed', false)->where('deadline', '<', Carbon::now())->with('taskGroup')
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

        return Inertia::render('Tasks/MissedTasks', $context);
    }

    public function addTagToTask(Request $request, Task $task) {
        $tags = $request->tags;

        if(sizeof($tags)) {
            foreach ($tags as $tag) {
                # code...
            }
        }

        return redirect()->back()->with(['status' => 'error', 'message' => 'Error updating task status']);
    }
}
