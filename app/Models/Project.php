<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'link'
    ];

    public function projectImages()
    {
        return $this->hasMany(ProjectImage::class);
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class);
    }
}
