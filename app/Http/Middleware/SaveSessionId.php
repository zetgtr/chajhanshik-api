<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SaveSessionId
{
    public function handle(Request $request, Closure $next)
    {
        // Сохраняем session_id в куки
        if ($request->hasSession()) {
            $session = $request->session();
            $sessionId = $session->getId();

            dd($session->getId());
            $response = $next($request);
            $response->cookie('session_id', $sessionId);
            return $response;
        }
        return $next($request);
    }
}
