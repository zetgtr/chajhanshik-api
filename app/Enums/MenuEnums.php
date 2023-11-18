<?php

namespace App\Enums;

enum MenuEnums: string
{
    case LEFT = "left";
    case RIGHT = "right";
    public static function all(): array
    {
        return [
            self::LEFT->value,
            self::RIGHT->value,
        ];
    }
}
