<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\FamilyMember;
use Illuminate\Http\Request;
class FamilyMemberController extends Controller {
    public function index(Request $request) { $query = FamilyMember::with(['family','student']); if ($request->filled('search')) $query->where('full_name','like','%'.$request->string('search').'%'); return response()->json($query->latest()->get()); }
    public function show(FamilyMember $familyMember) { return response()->json($familyMember->load('family.martyr','student')); }
}
