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
        Schema::create('catalog_order_has_product', function (Blueprint $table) {
            $table
                ->foreignId('order_id')
                ->references('id')->on('catalog_orders')
                ->cascadeOnDelete();
            $table->foreignId('product_id')
                ->references('id')->on('catalog_products')
                ->cascadeOnDelete();
            $table->integer('count')->default(1);
            $table->float('price')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalog_order_has_product');
    }
};
