<?php

namespace App\Http\Requests\Admin\PhotoGallery;

use App\Models\Admin\PhotoGallery\GalleryCategory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class UpdateCategoryRequest extends FormRequest
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
            'id' => 'required',
            'title' => 'required',
            'description' => 'nullable',
            'image_url'=> 'string|nullable'
        ];
    }

    public function prepareForValidation()
    {
        if ($this->file('image')) {
            $disc = Storage::disk('public');
            $category = GalleryCategory::query()->find($this->input('id'));
            if($category) {
                $path = explode("storage", $category->image_url);
                if (count($path) > 1)
                    $disc->delete($path[1]);
            }
            $file = $this->file('image');
            $fileName = $disc->put('gallery/category', $file);
            $this->merge([
                'image_url' => "/storage/".$fileName
            ]);
        }
    }
}
