<?php

namespace App\Models\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'logo','name','url','parent','position','order','controller','controller_type'
    ];

    public static function getControllerOptions()
    {
        $controllers = [];

        $namespace = '\App\Http\Controllers\\';

        foreach (get_declared_classes() as $class) {
            if (strpos($class, $namespace) === 0 && is_subclass_of($class, Controller::class)) {
                $controllerName = str_replace($namespace, '', $class);
                $controllers[$controllerName] = $controllerName;
            }
        }

        return $controllers;
    }
}
