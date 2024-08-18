<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskGroup extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'color', 'user_id'];

    // Relationships
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function getTaskCountAttribute()
    {
        return $this->tasks()->count();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
