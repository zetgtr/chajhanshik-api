<?php

namespace App\Providers;

use App\QueryBuilder\Admin\FeedBack\FeedBackBuilder;
use App\QueryBuilder\Admin\HeaderAndFooter\HeaderAndFooterBuilder;
use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use App\QueryBuilder\Admin\Packages\PackagesBuilder;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\QueryBuilder\Admin\Page\PageDataPanelBuilder;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use App\QueryBuilder\Admin\Settings\SettingsBuilder;
use App\QueryBuilder\MenuBuilder;
use App\QueryBuilder\QueryBuilder;
use App\QueryBuilder\RolesBuilder;
use App\QueryBuilder\UsersBuilder;
use App\Services\Contacts\Social;
use App\Services\SocialService;
use App\View\Components\Admin\Menu\Menu;
use App\View\Components\Admin\Sitebar\MenuItem;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

        $this->app->bind(Social::class, SocialService::class);
        $this->app->bind(QueryBuilder::class, UsersBuilder::class);
        $this->app->bind(QueryBuilder::class, RolesBuilder::class);
        $this->app->bind(QueryBuilder::class, MenuBuilder::class);
        $this->app->bind(QueryBuilder::class, PageBuilder::class);
        $this->app->bind(QueryBuilder::class, SettingsBuilder::class);
        $this->app->bind(QueryBuilder::class, PanelBuilder::class);
        $this->app->bind(QueryBuilder::class, PageDataPanelBuilder::class);
        $this->app->bind(QueryBuilder::class, HeaderAndFooterBuilder::class);
        $this->app->bind(QueryBuilder::class, PackagesBuilder::class);
        $this->app->bind(QueryBuilder::class, FeedBackBuilder::class);
        $this->app->bind(QueryBuilder::class, NavigationBuilder::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);
    }
}
