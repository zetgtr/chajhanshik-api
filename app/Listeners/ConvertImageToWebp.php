<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ConvertImageToWebp
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle($event)
    {
        $file = $event->file;

        // Проверка, является ли файл изображением
        if ($file->isFile() && $file->is('image/*')) {
            // Генерация уникального имени файла
            $filename = uniqid() . '.webp';

            // Путь к файлу на диске
            $path = $file->storeAs('public', $filename);

            // Открытие оригинального изображения с помощью Intervention Image
            $image = Image::make(Storage::disk('public')->path($path));

            // Конвертация в формат WebP
            $image->encode('webp');

            // Сохранение сконвертированного изображения
            Storage::disk('public')->put($path, $image->getEncoded());
        }
    }
}
