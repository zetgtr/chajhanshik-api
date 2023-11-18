<?php

namespace App\Http\Requests\Admin\PhotoGallery;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class AddCategoryGalleryRequest extends FormRequest
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
            'title' => 'required',
            'description' => 'nullable',
            'image_url'=> 'string|nullable'
        ];
    }

    public function prepareForValidation()
    {
        if ($this->file('image')) {
            $file = $this->file('image');
            $disc = Storage::disk('public');
            $fileName = $disc->put('gallery/category', $file);
            $this->merge([
                'image_url' => "/storage/".$fileName
            ]);
        }
    }
}
