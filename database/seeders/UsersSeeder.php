<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->insert($this->getData());
    }

    public function getData()
    {
        return [
            'name' => 'ji-touch',
            'avatar' => '/storage/avatars/avatar1.jpg',
            'email'=> 'support@ji-touch.ru',
            'role_id'=> 1,
            'is_admin' => true,
            'password' => '$2y$10$KlGIjP5tlhuBYn7z0WOLdeL0b5ajKDD6CulM8QlN1nt4KgAOq6C4G'
        ];
    }
}
