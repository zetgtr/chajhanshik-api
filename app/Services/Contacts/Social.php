<?php

namespace App\Services\Contacts;

use laravel\Socialite\Contracts\User as SocialUser;
interface Social
{
    public function loginAndGetRedirectUrl(SocialUser $socialUser): string;
}
