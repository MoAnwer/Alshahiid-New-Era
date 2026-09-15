<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Martyr extends Model { use HasFactory; protected $guarded = []; protected $casts = ['martyrdom_date' => 'date', 'registry_date' => 'date']; public function families(): HasMany { return $this->hasMany(Family::class); } }
