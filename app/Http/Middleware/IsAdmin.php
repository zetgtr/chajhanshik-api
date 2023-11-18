<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class IsAdmin
{

//    public function __construct(AuthManager $auth)
//    {
//        dd(Auth::guard());
//    }

    public function handle(Request $request, Closure $next)
    {
        if(!Auth::user()->is_admin)
        {
            return redirect()->route('home');
        }
        return $next($request);
    }
}
