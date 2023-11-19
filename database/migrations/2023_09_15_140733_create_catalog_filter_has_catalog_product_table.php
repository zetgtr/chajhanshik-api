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
        Schema::create('catalog_filter_has_catalog_product', function (Blueprint $table) {
            $table->foreignId('product_id')
            ->references('id')->on('catalog_products')
            ->cascadeOnDelete();
            $table->foreignId('filter_id')
            ->references('id')->on('catalog_filters')
            ->cascadeOnDelete();
            $table->string('value');
            $table->integer('category_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalog_filter_has_catalog_product');
    }
};
