<?php

namespace App\Http\Requests\Admin\AdminSettings;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'url' => 'nullable|string',
            'passed' => 'nullable|date',
            'developer' => 'nullable|string',
            'developer_site' => 'nullable|string',
            'developer_email' => 'nullable|email',
            'developer_phone' => 'nullable|string',
        ];
    }
}
