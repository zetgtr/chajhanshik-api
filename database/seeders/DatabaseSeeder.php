<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesSeeder::class,
            UsersSeeder::class,
            MenuSeeder::class,
            SettingSeeder::class,
            HeaderAndFooterSeeder::class,
            PackagesSettingsSeed::class,
            MetrikaSeeder::class,
        ]);
    }
}
