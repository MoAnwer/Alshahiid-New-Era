<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Family;
use App\Models\FamilyMember;
use App\Models\Martyr;
use App\Models\Service;
use App\Models\Student;
class DashboardController extends Controller {
    public function __invoke() { return response()->json(['martyrs_count' => Martyr::count(), 'families_count' => Family::count(), 'members_count' => FamilyMember::count(), 'students_count' => Student::count(), 'services_count' => Service::count(), 'source' => 'Laravel '.app()->version().' / SQLite']); }
}
