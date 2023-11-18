<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckMenuAccess
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(Request): (Response) $next
     * @param int $menuId
     * @return Response
     */
    public function handle(Request $request, Closure $next,int $menuId): Response
    {
        if (Auth::check() && Auth::user()->hasMenu($menuId)) {
            return $next($request);
        }

        abort(403, 'Доступ запрещен');
    }
}
