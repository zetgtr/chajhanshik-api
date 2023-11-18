<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdateSiteConfig extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:siteconfig {name} {url}';

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
        $name = $this->argument('name');
        $url = $this->argument('url');

        if (file_exists($envFile)) {
            file_put_contents($envFile, str_replace([
                'APP_NAME=',
                'APP_URL=',
            ], [
                'APP_NAME=' . $name,
                'APP_URL=' . $url,
            ], file_get_contents($envFile)));

            $this->info('Вы успешно обновили конфигурацию сайта.');
        } else {
            $this->error('.env file not found.');
        }
    }
}
