<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PackagesSettingsSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('packages_settings')->insert($this->getData());
    }

    private function getData()
    {
        return ['id'=>1,'user'=>'zetgtr', 'url' => 'gitlab.com','php'=>'C:\laragon\bin\php\php-8.1.10-Win32-vs16-x64\\','composer'=>'C:\laragon\bin\composer\\'];
    }
}
