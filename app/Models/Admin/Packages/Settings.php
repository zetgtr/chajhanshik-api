<?php

namespace App\Models\Admin\Packages;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;
    protected $fillable = ['user','url','php','composer','docker'];
    protected $table = 'packages_settings';
}
