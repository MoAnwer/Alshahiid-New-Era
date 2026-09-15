<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Service extends Model { use HasFactory; protected $guarded = []; protected $casts = ['added_at' => 'date']; public function family(): BelongsTo { return $this->belongsTo(Family::class); } public function familyMember(): BelongsTo { return $this->belongsTo(FamilyMember::class); } }
