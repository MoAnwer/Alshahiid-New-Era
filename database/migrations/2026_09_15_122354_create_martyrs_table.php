<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void { Schema::create('martyrs', function (Blueprint $table) { $table->id(); $table->string('full_name'); $table->string('force'); $table->string('unit'); $table->string('rank'); $table->string('military_id')->unique(); $table->date('martyrdom_date'); $table->string('martyrdom_location'); $table->string('registry_number')->unique(); $table->date('registry_date'); $table->string('category'); $table->string('rights_status'); $table->string('sector'); $table->string('locality'); $table->string('status')->default('موثق'); $table->timestamps(); }); }
    public function down(): void { Schema::dropIfExists('martyrs'); }
};
