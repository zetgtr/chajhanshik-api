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
        Schema::create('page_create', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('url');
            $table->string('custom_title')->nullable();
            $table->text('description')->nullable();
            $table->string('keywords')->nullable();
            $table->integer("access");
            $table->string('publish')->default(1);
            $table->integer('parent')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_create');
    }
};
