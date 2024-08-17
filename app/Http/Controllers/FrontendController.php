<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\TaskGroup;
use App\Models\Task;
use App\Models\Tag;
use Carbon\Carbon;

class FrontendController extends Controller
{
    public function dashboard() {

        $tasks = Task::with('taskGroup')
                ->withCount([
                    'subTasks', 
                    'subTasks as completed_subtasks_count' => function($query) {
                        $query->where('completed', true);
                    }
                ])->orderBy('deadline', 'asc')->limit(3)->get();

        $totalTasks     = Task::all()->count();
        $pendingTasks   = Task::where('completed', false)->where('deadline', '>', Carbon::now())->count();
        $missedTasks    = Task::where('completed', false)->where('deadline', '<', Carbon::now())->count();
        $completedTasks = Task::where('completed', true)->count();

        $context = [
            'tasks'             => $tasks,
            'totalTasks'        => $totalTasks,
            'pendingTasks'      => $pendingTasks,
            'completedTasks'    => $completedTasks,
            'missedTasks'       => $missedTasks,
        ];

        return Inertia::render('Dashboard/Dashboard', $context);
    }

    public function search(Request $request) {

        $query = $request->input('q');

        $tasks = Task::where('title', 'LIKE', "%{$query}%")
                     ->orWhereHas('tags', function($q) use ($query) {
                        $q->where('name', 'LIKE', "%{$query}%");
                    })->withCount([
                        'subTasks', 
                        'subTasks as completed_subtasks_count' => function($query) {
                            $query->where('completed', true);
                        }
                    ])->paginate(4);

        $taskGroups = TaskGroup::where('title', 'LIKE', "%{$query}%")->withCount('tasks')->get();

        $tags = Tag::where('name', 'LIKE', "%{$query}%")->get();

        $context = [
            'tasks'  => $tasks,
            'groups' => $taskGroups,
            'tags'   => $tags,
            'q'      => $query,
        ];

        return Inertia::render('Dashboard/SearchResult', $context);

    }
}
