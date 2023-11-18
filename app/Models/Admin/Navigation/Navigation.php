<?php

namespace App\Models\Admin\Navigation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Navigation extends Model
{
    use HasFactory;
    protected $fillable = ['title','url','comment','page'];
    public function list(): BelongsToMany
    {
        return $this->belongsToMany(NavigationList::class, 'navigations_has_navigation_list',
            'navigation_id', 'navigation_list_id', 'id', 'id');
    }
}
