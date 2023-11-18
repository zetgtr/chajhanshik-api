<?php

namespace App\Http\Requests\Admin\Packages;

use Illuminate\Foundation\Http\FormRequest;

class EditRequest extends FormRequest
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
            "name" => ['required'],
            "migration" => ['required', 'boolean'],
            "url" => ['required'],
            'seeder' => ['required', 'boolean'],
            'name_seeder' => ['nullable'],
            'delete' => ['nullable'],
            'provider' => ['nullable'],
            'script' => ['required','boolean'],
            'view' => ['required', 'boolean'],
            'vue' => ['required', 'boolean']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'vue' => $this->has('vue'),
            'view' => $this->has('view'),
            'script' => $this->has('script'),
            'seeder' => $this->has('seeder'),
            'migration' => $this->has('migration')
        ]);
    }
}
