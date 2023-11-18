<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Contacts\Social;
use App\Services\SocialService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function redirect(string $driver)
    {
        return Socialite::driver($driver)->redirect();
    }
    public function register(string $driver)
    {
        return Socialite::driver($driver)->redirect();
    }

    public function callback(string $driver, Social $social)
    {
        return redirect($social->loginAndGetRedirectUrl(
            Socialite::driver($driver)->user()
        ));
    }
}
