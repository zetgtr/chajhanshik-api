<?php

namespace App\Models\Admin\Navigation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class NavigationList extends Model
{
    use HasFactory;
    protected $table = "navigations_list";
    protected $fillable = ['title','alias'];
    public function links(): BelongsToMany
    {
        return $this->belongsToMany(Navigation::class, 'navigations_has_navigation_list',
            'navigation_list_id', 'navigation_id', 'id', 'id');
    }
}
