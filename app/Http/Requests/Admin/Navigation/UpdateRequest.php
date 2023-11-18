<?php

namespace App\Http\Requests\Admin\Navigation;

use App\Models\Admin\Navigation\NavigationList;
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
            'title' => ['required'],
            'alias' => ['required', Rule::unique(NavigationList::class)->ignore($this->id)]
        ];
    }
}
