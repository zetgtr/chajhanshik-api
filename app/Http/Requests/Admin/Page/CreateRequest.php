<?php

namespace App\Http\Requests\Admin\Page;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required'],
            'url' => ['required'],
            'custom_title' => ['nullable'],
            'description' => ['nullable'],
            'keywords' => ['nullable'],
            'links' => ['nullable'],
            'access' => ['required']
        ];
    }

    public function prepareForValidation()
    {
        if (!$this->url) {
            $this->merge([
                'url' => str_slug($this->title)
            ]);
        }

        if($this->links){
            $this->merge([
                'links' => json_decode($this->links,true)
            ]);
        }
    }
}
