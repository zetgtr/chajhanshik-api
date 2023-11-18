<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('navigations_has_navigation_list', function (Blueprint $table) {
            $table
                ->foreignId('navigation_id')
                ->references('id')->on('navigations')
                ->cascadeOnDelete();
            $table->foreignId('navigation_list_id')
                ->references('id')->on('navigations_list')
                ->cascadeOnDelete();
            $table->integer('order')->default(0);
            $table->integer('parent')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('navigations_has_navigation_list');
    }
};
