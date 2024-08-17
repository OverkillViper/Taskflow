<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::all();

        $context = [
            'tags' => $tags,
        ];

        return Inertia::render('Tags/Index', $context);
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
            'name' => 'required|string|max:255'
        ]);

        $newTag = Tag::create($data);

        if($newTag) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully created tag']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error creating tag']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        $tasks = $tag->tasks()->with('taskGroup')
                ->withCount([
                    'subTasks', 
                    'subTasks as completed_subtasks_count' => function($query) {
                        $query->where('completed', true);
                    }
                ])
                ->orderBy('deadline', 'asc')
                ->paginate(4);

        $context = [
            'tag'   => $tag,
            'tasks' => $tasks,
        ];

        return Inertia::render('Tags/TagDetails', $context);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tag $tag)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tag $tag)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $deletedTag = $tag->delete();

        if($deletedTag) {
            return redirect()->back()->with(['status' => 'success', 'message' => 'Successfully deleted tag']);
        } else {
            return redirect()->back()->with(['status' => 'error', 'message' => 'Error deleting tag']);
        }
    }
}
