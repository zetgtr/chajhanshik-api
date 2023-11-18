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
        Schema::create('roles_has_menus', function (Blueprint $table) {
            $table
                ->foreignId('role_id')
                ->references('id')->on('roles')
                ->cascadeOnDelete();
            $table->foreignId('menu_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->boolean('show')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roles_has_menus');
    }
};
