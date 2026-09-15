<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void { Schema::create('families', function (Blueprint $table) { $table->id(); $table->string('name'); $table->foreignId('martyr_id')->nullable()->constrained()->nullOnDelete(); $table->unsignedInteger('member_count')->default(0); $table->string('category'); $table->string('supervisor'); $table->string('locality'); $table->string('status')->default('مكتملة'); $table->timestamps(); }); }
    public function down(): void { Schema::dropIfExists('families'); }
};
