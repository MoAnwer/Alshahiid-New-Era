<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
class FamilyMember extends Model { use HasFactory; protected $guarded = []; protected $casts = ['coverage_start' => 'date', 'coverage_end' => 'date']; public function family(): BelongsTo { return $this->belongsTo(Family::class); } public function student(): HasOne { return $this->hasOne(Student::class); } }
