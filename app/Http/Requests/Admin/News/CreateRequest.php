<?php

namespace App\Http\Requests\Admin\News;

use App\Models\Admin\News\News;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    public function all($keys = null)
    {
        $data = parent::all($keys);

        $images = $data['images'];

        $jsonImages = json_encode($images);

        $data['images'] = $jsonImages;

        return $data;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'category_id' => ['required', 'integer'],
            'category_id.*' => ['exists:categories_news,id'], // проверяет каждый элемент с таблицей categories_news c полем id
            'title' => ['required', 'min:2', 'max:200'],
            'content' => ['required', 'min:2'],
            'description' => ['required'],
            'url' => ['required', Rule::unique(News::class)->ignore($this->id)],
            'created_at' => ['nullable'],
            'images' => ['sometimes'],
            'seoTitle' => ['nullable','string'],
            'seoKeywords' => ['nullable', 'string'],
            'seoDescription' => ['nullable', 'string'],
            'access' => ['required'],
        ];
    }

    public function getCategoriesIds(): array
    {
        return (array) $this->validated('category_id');
    }

    public function prepareForValidation()
    {
        if (!$this->input('url')) {
            $this->merge([
                'url' => str_slug($this->input('title'))
            ]);
        }
    }

    public function attributes(): array
    {
        return [
            'description' => 'описание',
            'content' => 'контент'
        ];
    }

    public function messages():array
    {
        return [
            'required' => "Нужно заполнить поле :attribute"
        ];
    }
}
