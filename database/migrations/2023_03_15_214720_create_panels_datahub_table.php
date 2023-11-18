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
        Schema::create('panels_datahub', function (Blueprint $table) {
            $table->id();
            $table
                ->foreignId('id_panel')->nullable()
                ->references('id')->on('panels');
            $table
                ->foreignId('id_page')
                ->references('id')
                ->on('page_create')
                ->cascadeOnDelete();
            $table->string('type');
            $table->boolean('display');
            $table->boolean('id_boll');
            $table->boolean('safe')->nullable();
            $table->integer('order');
            $table->text('content')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('panels_datahub');
    }
};
