<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Task extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'deadline', 'task_group_id', 'completed'];
    
    protected $appends = ['missed'];

    // Relationships
    public function taskGroup()
    {
        return $this->belongsTo(TaskGroup::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'task_tag');
    }

    public function subTasks()
    {
        return $this->hasMany(SubTask::class)->orderBy('created_at', 'desc');
    }

    public function getSubTaskCountAttribute()
    {
        return $this->subTasks()->count();
    }

    // Accessor for completed subtasks count
    public function getCompletedSubTaskCountAttribute()
    {
        return $this->subTasks()->where('completed', true)->count();
    }

    public function getMissedAttribute()
    {
        $now = Carbon::now();
        $deadline = Carbon::parse($this->deadline);

        return !$this->completed && $deadline->isPast();
    }
}
