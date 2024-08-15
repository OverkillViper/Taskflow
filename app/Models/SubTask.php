<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubTask extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'task_id', 'is_completed'];

    // Relationships
    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
