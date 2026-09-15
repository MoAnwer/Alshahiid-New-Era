<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Martyr;
use Illuminate\Http\Request;
class MartyrController extends Controller {
    public function index(Request $request) { $query = Martyr::query(); if ($request->filled('search')) $query->where('full_name','like','%'.$request->string('search').'%'); return response()->json($query->latest()->get()); }
    public function show(Martyr $martyr) { return response()->json($martyr->load('families.members')); }
}
