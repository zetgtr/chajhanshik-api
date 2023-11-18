<?php

namespace App\Enums;

enum AccessEnums: string
{
    case GENERAL = "general";
    case USER = "user";
    case ADMIN = "admin";
    case SUADMIN = "su_admin";
    public static function all(): array
    {
        return [
            self::GENERAL->value,
            self::USER->value,
            self::ADMIN->value,
            self::SUADMIN->value,
        ];
    }
    public static function name(): array
    {
        return [
            self::GENERAL->value=>"Общий",
            self::USER->value=>"Пользователь",
            self::ADMIN->value=>"Администратор",
            self::SUADMIN->value=>"Супер администратор",
        ];
    }
}
