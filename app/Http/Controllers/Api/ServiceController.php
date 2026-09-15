<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
class ServiceController extends Controller {
    public function index(Request $request) { $query = Service::with(['family','familyMember']); if ($request->filled('search')) $query->where('beneficiary','like','%'.$request->string('search').'%'); return response()->json($query->latest('added_at')->get()); }
    public function show(Service $service) { return response()->json($service->load('family','familyMember')); }
}
