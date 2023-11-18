<?php

namespace App\Http\Controllers\Admin\SiteMap;

use App\Http\Controllers\Controller;
use App\QueryBuilder\Admin\Sitemap\SiteMapBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, SiteMapBuilder $siteMapBuilder)
    {
        $siteMapBuilder->getMap();
        return view('admin.sitemap.index');
    }
}
