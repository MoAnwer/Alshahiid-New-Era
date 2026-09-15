<?php
namespace Database\Seeders;
use App\Models\Family;
use App\Models\FamilyMember;
use App\Models\Martyr;
use App\Models\Service;
use App\Models\Student;
use Illuminate\Database\Seeder;
class DemoDataSeeder extends Seeder {
    public function run(): void {
        $martyrs = [
            ['full_name'=>'الشهيد محمد أحمد علي','force'=>'القوات المسلحة','unit'=>'اللواء 41 مشاة','rank'=>'ملازم أول','military_id'=>'MIL-10428','martyrdom_date'=>'2021-03-12','martyrdom_location'=>'الخرطوم - منطقة القيادة','registry_number'=>'REG-2026-0184','registry_date'=>'2024-09-15','category'=>'أ','rights_status'=>'مستوفاة ومعتمدة','sector'=>'الخرطوم','locality'=>'الخرطوم','status'=>'موثق'],
            ['full_name'=>'الشهيد عبد الرحمن عمر','force'=>'الشرطة','unit'=>'وحدة العمليات الخاصة','rank'=>'رقيب','military_id'=>'MIL-10745','martyrdom_date'=>'2020-07-27','martyrdom_location'=>'أم درمان - منطقة العمليات','registry_number'=>'REG-2026-0185','registry_date'=>'2024-09-16','category'=>'ب','rights_status'=>'مستوفاة ومعتمدة','sector'=>'أم درمان','locality'=>'أم درمان','status'=>'موثق'],
            ['full_name'=>'الشهيد ياسر إبراهيم','force'=>'الدعم السريع','unit'=>'قوة الإسناد','rank'=>'نقيب','military_id'=>'MIL-11062','martyrdom_date'=>'2022-01-04','martyrdom_location'=>'بحري - القطاع الشرقي','registry_number'=>'REG-2026-0186','registry_date'=>'2024-09-17','category'=>'أ','rights_status'=>'قيد المراجعة','sector'=>'بحري','locality'=>'بحري','status'=>'قيد المراجعة'],
            ['full_name'=>'الشهيد صديق عبد الله','force'=>'القوات المسلحة','unit'=>'اللواء 12 مشاة','rank'=>'مساعد','military_id'=>'MIL-11379','martyrdom_date'=>'2019-08-18','martyrdom_location'=>'الجزيرة - منطقة الدفاع','registry_number'=>'REG-2026-0187','registry_date'=>'2024-09-18','category'=>'ج','rights_status'=>'مستوفاة ومعتمدة','sector'=>'الجزيرة','locality'=>'الجزيرة','status'=>'موثق'],
            ['full_name'=>'الشهيد أسامة حسن','force'=>'القوات المسلحة','unit'=>'اللواء 20 مشاة','rank'=>'رائد','military_id'=>'MIL-11696','martyrdom_date'=>'2023-11-30','martyrdom_location'=>'سنار - منطقة العمليات','registry_number'=>'REG-2026-0188','registry_date'=>'2024-09-19','category'=>'ب','rights_status'=>'مستوفاة ومعتمدة','sector'=>'سنار','locality'=>'سنار','status'=>'موثق'],
        ];
        foreach ($martyrs as $data) {
            $martyr = Martyr::create($data);
            $family = Family::create(['name'=>'أسرة '.str_replace('الشهيد ','',$data['full_name']), 'martyr_id'=>$martyr->id, 'member_count'=>0, 'category'=>$data['category'], 'supervisor'=>'أحمد الطيب', 'locality'=>$data['locality'], 'status'=>'مكتملة']);
            $member = FamilyMember::create(['family_id'=>$family->id, 'full_name'=>match($martyr->id){1=>'مريم محمد أحمد',2=>'عبد الله عبد الرحمن',3=>'سارة ياسر إبراهيم',4=>'أحمد صديق عبد الله',default=>'نور أسامة حسن'}, 'gender'=>$martyr->id % 2 ? 'أنثى':'ذكر', 'age'=>[16,12,19,9,7][$martyr->id-1], 'relationship'=>$martyr->id % 2 ? 'ابنة':'ابن', 'national_id'=>'29010'.str_pad((string)$martyr->id,2,'0',STR_PAD_LEFT).'••••', 'insurance_number'=>'HI-'.(40821+$martyr->id), 'coverage_start'=>'2026-01-01', 'coverage_end'=>'2026-12-31', 'phone'=>'09•••••'.(241+$martyr->id), 'insurance_status'=>'ساري']);
            if ($member->age >= 7 && $member->age <= 19) Student::create(['family_member_id'=>$member->id, 'stage'=>$member->age >= 18 ? 'جامعي' : ($member->age >= 13 ? 'ثانوي':'متوسط'), 'grade'=>$member->age >= 18 ? 'الثالث' : ($member->age >= 13 ? 'الثاني':'السادس'), 'school'=>$member->age >= 18 ? 'جامعة الخرطوم':'مدرسة النور', 'service_type'=>'رسوم دراسية', 'status'=>'منفذة']);
            $family->update(['member_count'=>1]);
            Service::create(['family_id'=>$family->id,'family_member_id'=>$member->id,'beneficiary'=>$member->full_name,'type'=>'رسوم دراسية','estimated_amount'=>150000,'funded_amount'=>150000,'added_at'=>'2026-09-13','status'=>'منفذة']);
        }
    }
}
