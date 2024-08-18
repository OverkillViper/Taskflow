<?php

namespace App\Http\Controllers;

use App\Models\SubTask;
use App\Models\Task;
use App\Models\Tag;
use App\Models\TaskTag;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = $request->filter;

        switch($filter) {
            case 'pending' :
                $tasks = Task::where('user_id', '=', Auth::user()->id)
                             ->where('completed', '=', false)
                             ->where('deadline', '>', Carbon::now())
                             ->with('taskGroup')
                             ->withCount([
                                 'subTasks', 
                                 'subTasks as completed_subtasks_count' => function($query) {
                                     $query->where('completed', true);
                                 }
                             ])->paginate(4);
                break;
            case 'completed' :
                $tasks = Task::where('user_id', '=', Auth::user()->id)
                             ->where('completed', '=', true)
                             ->with('taskGroup')
                             ->withCount([
                                 'subTasks', 
                                 'subTasks as completed_subtasks_count' => function($query) {
                                     $query->where('completed', true);
                                 }
                             ])->paginate(4);
                break;
            case 'missed' :
                $tasks = Task::where('user_id', '=', Auth::user()->id)
                             ->where('completed', false)
                             ->where('deadline', '<', Carbon::now())
                             ->with('taskGroup')
                             ->withCount([
                                 'subTasks', 
                                 'subTasks as completed_subtasks_count' => function($query) {
                                     $query->where('completed', true);
                                 }
                             ])->paginate(4);
                break;
            default :
                $tasks = Task::where('user_id', '=', Auth::user()->id)
                             ->with('taskGroup')
                             ->withCount([
                                 'subTasks', 
                                 'subTasks as completed_subtasks_count' => function($query) {
                                     $query->where('completed', true);
                                 }
                             ])->paginate(4);
        }

        $context = [
            'tasks' => $tasks,
            'filter' => $filter,
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
        ]);

        $data['user_id']  = Auth::user()->id;
        $data['deadline'] = Carbon::parse($request->deadline)->addDay(1);
        $data['task_group_id'] = $request->task_group_id;
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

        $tags = Tag::where('user_id', '=', Auth::user()->id)->get();

        $taskTags = TaskTag::where('task_id', '=', $task->id)->with('tag')->get();

        $context = [
            'task' => $task->loadCount(['subTasks as sub_tasks_count', 'subTasks as completed_subtasks_count' => function($query) {
                $query->where('completed', true);
            }]),
            'taskGroup'              => $task->taskGroup,
            'subTasks'               => $task->subTasks,
            'subTasksCount'          => $task->sub_tasks_count,
            'completedSubTasksCount' => $task->completed_subtasks_count,
            'tags'                   => $tags,
            'taskTags'               => $taskTags,
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
        if(Auth::user()->id == $task->user_id) {
            $deletedTask = $task->delete();
        }

        if($deletedTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully deleted task']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error deleting task']);
        }
    }

    public function toggleTaskStatus(Task $task) {
        
        if(Auth::user()->id == $task->user_id) {
            $subtasks = SubTask::where('task_id', '=', $task->id)->get();

            foreach ($subtasks as $subtask) {
                $subtask->update([
                    'completed' => !$task->completed,
                ]);
            }
        
            $updatedTask = $task->update([
                'completed' => !$task->completed,
            ]);
        }

        if($updatedTask) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully updated task status']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error updating task status']);
        }
    }

    public function addTagToTask(Request $request, Task $task) {
        
        // $tags
        if(Auth::user()->id == $task->user_id) {
            $tags = $request->tags;

            foreach ($tags as $tag) {
                if (!TaskTag::where('tag_id', $tag['id'])->exists()) {
                    $newTaskTag = TaskTag::create([
                        'task_id' => $task->id,
                        'tag_id'  => $tag['id'],
                    ]);

                    if($newTaskTag == null) {
                        return redirect()->back()->with(['status' => 'error', 'message' => 'Error assigning tag']);
                    }
                }
            }

            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully assigned tags']);
        }
    }

    public function removeTagFromTask(TaskTag $tasktag) {

        if(Auth::user()->id == $tasktag->task->user_id) {
            $deletedTaskTag = $tasktag->delete();
        }
        
        if($deletedTaskTag) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully removed tag']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error removing tag']);
        }
    }
}
