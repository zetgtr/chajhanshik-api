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
        Schema::table('panels_datahub', function (Blueprint $table) {
            $table->unsignedBigInteger('parent')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('panels_datahub', function (Blueprint $table) {
            $table->dropColumn('parent');
        });
    }
};
