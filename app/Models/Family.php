<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Family extends Model { use HasFactory; protected $guarded = []; public function martyr(): BelongsTo { return $this->belongsTo(Martyr::class); } public function members(): HasMany { return $this->hasMany(FamilyMember::class); } }
