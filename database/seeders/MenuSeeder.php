<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('menus')->insert($this->getData());
    }

    public function getData()
    {
        return [
            ['id'=>1,'name'=>'Инструменты','position'=>'left','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null,"controller_type"=>null, 'order'=>2],
//            ['id'=>2,'name'=>'Файлы','position'=>'left','logo'=>'fe fe-folder','controller'=>'Admin\FileController','url'=>'file','parent'=>1,"controller_type"=>null, 'order'=>1],
            ['id'=>3,'name'=>'Настройки','position'=>'right','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null,"controller_type"=>null, 'order'=>0],
            ['id'=>4,'name'=>'Настройки меню','position'=>'right','logo'=>'fe fe-settings','controller'=>'Admin\SettingsMenuController','url'=>'menu','parent'=>3,"controller_type"=>null, 'order'=>2],
            ['id'=>5,'name'=>'Сайт','position'=>'left','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null,"controller_type"=>null, 'order'=>1],
            ['id'=>6,'name'=>'Создание страниц','position'=>'left','logo'=>'fal fa-tools','controller'=>'Admin\Page\PageController','url'=>'page-create','parent'=>5,"controller_type"=>null, 'order'=>0],
            ['id'=>7,'name'=>'Главные настройки','position'=>'right','logo'=>'fad fa-cogs','controller'=>'Admin\Settings\SettingsController','url'=>'settings','parent'=>3,"controller_type"=>null, 'order'=>1],
            ['id'=>8,'name'=>'Пользователи','position'=>'right','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null,"controller_type"=>null, 'order'=>1],
            ['id'=>9,'name'=>'Роли','position'=>'right','logo'=>'fad fa-user-tag','controller'=>'Admin\RolesController','url'=>'roles','parent'=>8,"controller_type"=>null, 'order'=>1],
            ['id'=>10,'name'=>'Пользователи','position'=>'right','logo'=>'fad fa-user','controller'=>'Admin\Users\UserController','url'=>'user','parent'=>8,"controller_type"=>null, 'order'=>0],
            ['id'=>11,'name'=>'Редактор панелей','position'=>'left','logo'=>'fal fa-solar-panel','controller'=>'Admin\Panel\PanelController','url'=>'panel','parent'=>1,"controller_type"=>null, 'order'=>0],
            ['id'=>12,'name'=>'Шапка и подвал','position'=>'left','logo'=>'fal fa-bezier-curve','controller'=>'Admin\HeaderAndFooter\HeaderAndFooterController','url'=>'header-and-footer','parent'=>5,"controller_type"=>null, 'order'=>3],
            ['id'=>13,'name'=>'Robot.txt','position'=>'right','logo'=>'fad fa-robot','controller'=>'Admin\Robot\RobotController','url'=>'robot','parent'=>3,"controller_type"=>null, 'order'=>4],
            ['id'=>14,'name'=>'Плагины','position'=>'right','logo'=>'fad fa-box-open','controller'=>'Admin\Packages\PackagesController','url'=>'packages','parent'=>3,"controller_type"=>null, 'order'=>3],
            ['id'=>15,'name'=>'Обратная связь','position'=>'left','logo'=>'fal fa-comments','controller'=>'Admin\FeedBack\FeedBackController','url'=>'feedback','parent'=>5,"controller_type"=>null, 'order'=>1],
            ['id'=>16,'name'=>'Навигация','position'=>'left','logo'=>'fal fa-link','controller'=>'Admin\Navigation\NavigationListController','url'=>'navigation_list','parent'=>5,"controller_type"=>null, 'order'=>2],
            ['id'=>17,'name'=>'Карта сайта','position'=>'right','logo'=>'fad fa-sitemap','controller'=>'Admin\SiteMap\IndexController','url'=>'sitemap','parent'=>3,"controller_type"=>true, 'order'=>5],
            ['id'=>18,'name'=>'Рабочий стол','position'=>'left','logo'=>null,'controller'=>null,'url'=>null,'parent'=>null,"controller_type"=>null, 'order'=>0],
            ['id'=>19,'name'=>'Аналитика','position'=>'left','logo'=>'fal fa-analytics','controller'=>'Admin\Home\IndexController','url'=>'index','parent'=>18,"controller_type"=>null, 'order'=>0],
            ['id'=>20,'name'=>'Настройки админки','position'=>'right','logo'=>'fad fa-user-cog','controller'=>'Admin\AdminSettings\AdminSettingsController','url'=>'admin_settings','parent'=>3,"controller_type"=>null, 'order'=>0],
        ];
    }
}
