<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinksHasPageTable extends Migration
{
    public function up()
    {
        Schema::create('links_has_page', function (Blueprint $table) {
            $table->id();
            $table->foreignId('link_id')
                ->references('id')->on('navigations_list')
                ->cascadeOnDelete();
            $table->foreignId('page_id')
                ->references('id')->on('page_create')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('links_has_page');
    }
}
