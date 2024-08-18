<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\TaskGroup;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {   
        if(Auth::check()) {
            $taskGroups = TaskGroup::where('user_id', '=', Auth::user()->id)->withCount('tasks')->orderBy('created_at', 'desc')->get();
        } else {
            $taskGroups = null;
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'message' => session('message'),
                'status'  => session('status'),
            ],
            'taskGroups' => $taskGroups,
        ];
    }
}
