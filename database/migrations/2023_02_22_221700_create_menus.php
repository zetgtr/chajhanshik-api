<?php

use App\Enums\MenuEnums;
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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('name',60);
            $table->string('logo', 40)->nullable();
            $table->enum('position',[MenuEnums::all()]);
            $table->string('controller', 100)->nullable();
            $table->string('controller_type', 20)->nullable();
            $table->string('url', 40)->nullable();
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
        Schema::dropIfExists('menus');
    }
};
