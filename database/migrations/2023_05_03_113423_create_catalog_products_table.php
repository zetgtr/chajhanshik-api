<?php

use App\Enums\AccessEnums;
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
        Schema::create('catalog_products', function (Blueprint $table) {
            $table->id();
                $table->string('title');
                $table->text('content');
                $table->text('characteristics')->nullable();
                $table->string('url');
                $table->integer('price')->default(0);
                $table->string('seo_title')->nullable();
                $table->text('seo_description')->nullable();
                $table->text('seo_keywords')->nullable();
                $table->json('images')->nullable();
                $table->enum('access',[AccessEnums::all()]);
                $table->boolean('new')->default(false);
                $table->boolean('hit')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalog_products');
    }
};
