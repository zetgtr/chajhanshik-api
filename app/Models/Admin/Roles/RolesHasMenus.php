<?php

namespace App\Models\Admin\Roles;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolesHasMenus extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = "roles_has_menus";
    protected $fillable = [
      'role_id','menu_id','show'
    ];
}
