<?php

namespace App\QueryBuilder\Admin\Sitemap;

use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Spatie\Crawler\Crawler;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class SiteMapBuilder extends QueryBuilder
{

    public function getAll(): Collection
    {

    }

    private function editMap()
    {
        $file = file_get_contents(public_path('sitemap.xml'));
        $newPath = str_replace(env('APP_URL')."/<",env('APP_URL')."<",$file);
        file_put_contents(public_path('sitemap.xml'),$newPath);
    }

    public function getMap(){
        SitemapGenerator::create(env('APP_URL'))
            ->shouldCrawl(function ($url) {
                $extensionsToExclude = ['.jpg', '.jpeg', '.png', '.gif','.webp'];
                foreach ($extensionsToExclude as $extension) {
                    if (str_ends_with($url, $extension)) {
                        return false;
                    }
                }
                if(!$url->getPath()) return false;

                return true;
            })
            ->writeToFile(public_path('sitemap.xml'));
        $this->editMap();
    }
}
