<?php

namespace App\Http\Requests\Admin\Panel;

use App\Models\Admin\Panel\Panel;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required'],
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'alias' => ['required', Rule::unique(Panel::class)->ignore($this->id, 'id')],
            'data' => 'nullable|json',
            'service' => 'required|boolean',
        ];
    }
}
