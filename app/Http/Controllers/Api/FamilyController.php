<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Family;
use Illuminate\Http\Request;
class FamilyController extends Controller {
    public function index(Request $request) { $query = Family::withCount('members'); if ($request->filled('search')) $query->where('name','like','%'.$request->string('search').'%'); return response()->json($query->latest()->get()); }
    public function show(Family $family) { return response()->json($family->load('martyr','members.student')); }
}
