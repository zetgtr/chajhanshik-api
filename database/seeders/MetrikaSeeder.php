<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MetrikaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('metrika')->insert($this->getData());
    }

    public function getData(): array
    {
        return [
            ['id'=>1],
        ];
    }
}
