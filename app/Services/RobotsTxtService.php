<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class RobotsTxtService
{
    public function getRobotsTxt(): string
    {
        return Storage::disk('robot')->get('robots.txt');
    }
}
