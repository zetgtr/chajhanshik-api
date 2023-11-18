<?php


use App\Http\Controllers\Admin\Home\IndexController as AdminController;
use App\Http\Controllers\Admin\Navigation\NavigationController;
use App\Http\Controllers\Admin\Packages\PackagesController;
use App\Http\Controllers\Admin\Packages\PackagesSettings;
use App\Http\Controllers\Admin\Page\PageController;
use App\Http\Controllers\Admin\Panel\PanelController;
use App\Http\Controllers\Admin\SettingsMenuController;
use App\Http\Controllers\Admin\Users\UserController as AdminUserController;
use App\Http\Controllers\Admin\Vizit\VizitController;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\Front\RouterController;
use App\Models\Admin\Menu;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\Utils\Lfm;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PhotoGalley\PhotoGalleryController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::middleware('auth')->group(function () {
    Route::group([ 'as'=>'admin.', 'middleware' => 'is_admin'],static function(){
        Route::get("/", [AdminController::class,'index'])
            ->name('index');
//        Route::get('user', )
        Route::group(['prefix' => 'settings', 'as' => 'settings.'], static function(){
//            Route::resource('menu', SettingsMenuController::class);
            Route::post('menu/order', [SettingsMenuController::class,'menuOrder'])->name('menu.order');
        });
        Route::post('page/order', [PageController::class,'order'])->name('page.order');

        Route::post('panel/get_all', [PanelController::class,'getAllPanel'])->name('panel-all-get');

        Route::post('panel/select', [PanelController::class,'getSelectTable'])->name('panel-select');
        Route::resource('packages_settings', PackagesSettings::class);
        Route::resource('navigation', NavigationController::class);

        Route::group(['prefix' => 'packages', 'as' => 'packages.'], static function() {
            Route::put('packages/set', [PackagesController::class, 'store'])->name('set');
            Route::put('packages/set-data', [PackagesController::class, 'setData'])->name('set-data');
        });

        Route::group(['prefix' => 'panel', 'as' => 'panel.'], static function() {
            Route::get('publish/{panel}',[PanelController::class,'publish'])->name('publish');
        });

        Route::put('user/password',[AdminUserController::class, 'passwordUpdate'])->name('password-update');

        Route::group(['prefix' => 'photo_gallery', 'as' => 'photo_gallery.'], static function() {
            Route::post('image_store/{category}', [PhotoGalleryController::class, 'storeImage'])->name('image_store');
            Route::post('image_edit/{image}', [PhotoGalleryController::class, 'updateImage'])->name('image_edit');
            Route::delete('image_delete/{image}', [PhotoGalleryController::class, 'destroyImage'])->name('image_delete');
        });

        try {
            foreach (Menu::query()->get() as $menu)
            {
                if($menu->controller)
                {
                    $controllerClass = '\App\Http\Controllers\\' . $menu->controller;
                    if (class_exists($controllerClass)) {

                        if ($menu->controller_type) {
                            Route::get($menu->url, $controllerClass)
                                ->name(str_replace("/",".",$menu->url))
                                ->middleware('menu.check:'.$menu->id);
                        } else {
                            Route::resource($menu->url, $controllerClass)
                                ->middleware('menu.check:'.$menu->id);

                        }
                    }
                }
            }
        } catch (Exception $exception)
        {

        }
    });
});
