<?php

namespace App\Http\Requests\Admin\Page;

use Illuminate\Foundation\Http\FormRequest;

class DataPanelCreateRequest extends FormRequest
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
            'id_panel' => ['nullable'],
            'display' => ['required','boolean'],
            'type' => ['required'],
            'content' => ['nullable'],
            'id_boll' => ['required','boolean'],
            'safe' => ['required','boolean'],
            'id_page' => ['required'],
            'order' => ['required']
        ];
    }

    public function prepareForValidation(){
//        $data = json_decode($this->input('datahub', true));
//        if (is_object($data)) {
//            $data = get_object_vars($data);
//        }
//
//        $this->merge([
//            'id_panel' => $data['data']['id_panel'],
//            'display' => ['required','boolean'],
//            'type' => ['required'],
//            'content' => ['nullable'],
//            'id_boll' => ['required','boolean'],
//            'safe' => ['required','boolean'],
//            'id_page' => ['required'],
//            'datahub' => $data['data']
//        ]);
    }
}
