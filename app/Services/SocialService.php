<?php

namespace App\Services;

use App\Models\User;
use App\Services\Contacts\Social;
use Illuminate\Support\Facades\Auth;
use laravel\Socialite\Contracts\User as SocialUser;


class SocialService implements Social
{


    public function loginAndGetRedirectUrl(SocialUser $socialUser): string
    {
        $user = User::query()->where('email','=', $socialUser->getEmail())->first();

        if(!$user) {
            return route('register');
        }

        $user->name = $socialUser->getName();
        $user->avatar = $socialUser->getAvatar();

        if($user->save()) {
            Auth::loginUsingId($user->id);

            return route('admin.index');
        }

        throw new \Exception("Пользователь не найден.");
    }
}
