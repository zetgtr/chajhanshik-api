<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdateDatabaseConfig extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:update {database} {username} {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update database connection in .env file';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $envFile = base_path('.env');
        $database = $this->argument('database');
        $username = $this->argument('username');
        $password = $this->argument('password');

        if (file_exists($envFile)) {
            file_put_contents($envFile, str_replace([
                'DB_DATABASE=',
                'DB_USERNAME=',
                'DB_PASSWORD=',
            ], [
                'DB_DATABASE=' . $database,
                'DB_USERNAME=' . $username,
                'DB_PASSWORD=' . $password,
            ], file_get_contents($envFile)));

            $this->info('Настройки базы данных успешно сохранены.');
        } else {
            $this->error('.env file not found.');
        }
    }
}
