<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void { Schema::create('services', function (Blueprint $table) { $table->id(); $table->foreignId('family_id')->nullable()->constrained()->nullOnDelete(); $table->foreignId('family_member_id')->nullable()->constrained()->nullOnDelete(); $table->string('beneficiary'); $table->string('type'); $table->decimal('estimated_amount', 12, 2)->nullable(); $table->decimal('funded_amount', 12, 2)->nullable(); $table->date('added_at'); $table->string('status')->default('قيد التنفيذ'); $table->timestamps(); }); }
    public function down(): void { Schema::dropIfExists('services'); }
};
