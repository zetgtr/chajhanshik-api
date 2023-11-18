<?php

namespace App\Http\Requests\Settings\Menu;

use App\Models\Admin\Menu;
use Illuminate\Foundation\Http\FormRequest;

class SettingsMenuRequest extends FormRequest
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

        $rules = [
            'logo' => ['min:2','string','nullable'],
            'name' => ['min:2','string','required'],
            'position' => ['min:4','max:5','required'],
            'url' => ['nullable'],
            'controller' => ['nullable'],
            'controller_type' => ['nullable']
        ];

        $controller = $this->input('controller');
        $url = $this->input('url');

        if ($controller) {
            // Проверяем, существует ли класс контроллера в проекте
            if (class_exists('\App\Http\Controllers\\' . $controller)) {
                $rules['controller'] = 'nullable';
            } else {
                $rules['controller'] = "";
            }
        }

        if (!$controller && $url) {
            $rules['controller'] = 'required';
        }
        if ($controller && !$url) {
            $rules['url'] = 'required';
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'name' => 'название'
        ];
    }
}
