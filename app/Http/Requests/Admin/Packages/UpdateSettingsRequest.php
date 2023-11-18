<?php

namespace App\Http\Requests\Admin\Packages;

use App\Models\Admin\News\News;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateSettingsRequest extends FormRequest
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
            'user' => ['required'],
            'url' => ['required'],
            'php' => ['required'],
            'docker' => ['required'],
            'composer' => ['required']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'docker' => $this->input('docker') ? false : true
        ]);
    }
}
