<?php

namespace App\Providers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class FileManagerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $request = Request::capture();
        $pathUrl = $request->segment(2);
        $segment = $request->segment(1);
        $path = 'app/public';
        $url = env('APP_URL').'/storage';
//        dd($pathUrl);
        if($segment == 'admin')
        {
            if ($pathUrl == 'file') {
                Cache::put('file-admin', false, 600);
            } else {
                Cache::put('file-admin', true, 600);
                Cache::put('file-url', $pathUrl, 600);
            }
        }

        if (Cache::get('file-admin')) {
            $path = $path.'/files/1/'.Cache::get('file-url');
            $url = $url . '/files/1/'.Cache::get('file-url');
        }


        config(['filesystems.disks.file.root' => storage_path($path)]);
        config(['filesystems.disks.file.url' => $url]);
    }
}
