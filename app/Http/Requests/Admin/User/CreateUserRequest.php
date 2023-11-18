<?php

namespace App\Http\Requests\Admin\User;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
            'password' => ['nullable', 'string', 'min:8', 'confirmed'],
            'password_confirmation' => ['nullable', 'string'],
            'last_name'=>['nullable'],
            'first_name'=>['nullable'],
            'avatar'=>['nullable'],
            'name'=>['required',Rule::unique(User::class)->ignore($this->id, 'id')],
            'email'=>['required','email',Rule::unique(User::class)->ignore($this->id, 'id')],
            'is_admin'=>['boolean'],
            'role_id'=>['exists:roles,id','required']
        ];
    }
    public function handle($user)
    {
        if($this->input('password') === $this->input('password_confirmation')) {
            $user->update(['password' => Hash::make($this->input('password'))]);
            return true;
        }

        return false;
    }
    public function prepareForValidation(){
        $this->merge([
            'is_admin' => $this->input('is_admin') === "on"
        ]);
        if ($this->file('avatar_file')) {
            $file = $this->file('avatar_file');
            $path = Storage::disk('public')->putFileAs('avatars', $file, 'avatar'.$this->id.'.jpg');
            $this->merge([
                'avatar' => "/storage/".$path
            ]);

        }
    }
}
