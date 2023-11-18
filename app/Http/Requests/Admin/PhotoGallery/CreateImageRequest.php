<?php

namespace App\Http\Requests\Admin\PhotoGallery;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class CreateImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'nullable',
            'description' => 'nullable',
            'imagesData' => 'required|array',
            'images' => 'required|array',
            'images.*' => 'image'
        ];
    }

    public function prepareForValidation()
    {
        $files = $this->file('images');
        if ($files) {
            $fileNames = [];
            foreach ($files as $file) {
                $disc = Storage::disk('public');
                $fileNames[] = "/storage/".$disc->put('gallery/images', $file);
            }
            $this->merge([
                'imagesData' => $fileNames
            ]);
        }
    }

}
