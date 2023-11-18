<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('roles')->insert($this->getData());
    }

    public function getData()
    {
        return [
            ['name'=>'Супер администратор'],
            ['name'=>'Администратор'],
            ['name'=>'Пользователь']
        ];
    }
}
