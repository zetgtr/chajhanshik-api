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
        Schema::create('catalog_category_has_product', function (Blueprint $table) {
            $table
                ->foreignId('category_id')
                ->references('id')->on('catalog_categories')
                ->cascadeOnDelete();
            $table->foreignId('product_id')
                ->references('id')->on('catalog_products')
                ->cascadeOnDelete();
            $table->integer('order')->default(0);
            $table->boolean('publish')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalog_category_has_product');
    }
};
