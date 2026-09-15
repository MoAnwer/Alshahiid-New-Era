<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void { Schema::create('family_members', function (Blueprint $table) { $table->id(); $table->foreignId('family_id')->constrained()->cascadeOnDelete(); $table->string('full_name'); $table->string('gender'); $table->unsignedTinyInteger('age'); $table->string('relationship'); $table->string('profile_photo')->nullable(); $table->string('national_id'); $table->string('insurance_number')->nullable(); $table->date('coverage_start')->nullable(); $table->date('coverage_end')->nullable(); $table->string('phone')->nullable(); $table->string('insurance_status')->default('ساري'); $table->timestamps(); }); }
    public function down(): void { Schema::dropIfExists('family_members'); }
};
