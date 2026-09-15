import './style.css';

const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-1.8a4.2 4.2 0 0 0-4.2-4.2H6.2A4.2 4.2 0 0 0 2 19.2V21"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-1.8a4.2 4.2 0 0 0-3-4M16 3.2a4 4 0 0 1 0 7.6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s8-3.5 8-10V5l-8-3-8 3v6c0 6.5 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h4l2.2-7 4.1 14 2.3-7H21"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 6h8M8 10h8"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M8 17v-4M12 17V8M16 17v-6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="m19.4 15 .1.1a2 2 0 0 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4V19a2 2 0 0 1-4 0v-.2a2 2 0 0 0-3.4-1.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 3.6 11H3.5a2 2 0 0 1 0-4h.1A2 2 0 0 0 5 3.6l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A2 2 0 0 0 11.2 0h.3a2 2 0 0 1 4 0v.2A2 2 0 0 0 18.9 1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 20.3 7h.2a2 2 0 0 1 0 4h-.2a2 2 0 0 0-.9 4Z" transform="scale(.78) translate(3.4 3.4)"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 15.3A8.5 8.5 0 0 1 8.7 3.2 8.5 8.5 0 1 0 20.8 15.3Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 15 7-7 7 7"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 9 7 7 7-7"/></svg>',
  dots: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-5"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16M7 12h10M10 19h4"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  printer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m9 18 6-6-6-6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/></svg>',
};

const icon = (name, className = '') => `<span class="icon ${className}">${icons[name] || icons.grid}</span>`;

const state = {
  screen: 'login',
  active: 'dashboard',
  detailIndex: 0,
  memberDetailIndex: 0,
  search: '',
  sidebarOpen: false,
  notificationOpen: false,
  dark: false,
};

const navSections = [
  {
    label: 'الرئيسية',
    items: [
      { id: 'dashboard', label: 'لوحة القيادة', icon: 'grid' },
      { id: 'martyrs', label: 'الشهداء', icon: 'shield', badge: '1,248' },
      { id: 'families', label: 'أسر الشهداء', icon: 'users', badge: '364' },
      { id: 'members', label: 'أفراد الأسر', icon: 'users' },
      { id: 'orphans', label: 'الأيتام', icon: 'heart', badge: '892' },
      { id: 'students', label: 'الطلاب', icon: 'book' },
    ],
  },
  {
    label: 'الخدمات والرعاية',
    items: [
      { id: 'education', label: 'الخدمات التعليمية', icon: 'book' },
      { id: 'injured', label: 'مصابو العمليات', icon: 'activity' },
      { id: 'widows', label: 'قائمة الأرامل', icon: 'heart' },
      { id: 'supervisors', label: 'مشرفو الأسر', icon: 'users' },
    ],
  },
  {
    label: 'المساندة والتقارير',
    items: [
      { id: 'care', label: 'محور الرعاية', icon: 'heart' },
      { id: 'spiritual', label: 'التزكية الروحية', icon: 'book' },
      { id: 'reports', label: 'التقارير والتحليلات', icon: 'report' },
      { id: 'settings', label: 'إعدادات النظام', icon: 'settings' },
    ],
  },
];

const moduleConfig = {
  martyrs: { title: 'الشهداء', kicker: 'السجل المركزي', icon: 'shield', description: 'إدارة شاملة لبيانات الشهداء والربط مع ملفات الأسر.', headers: ['اسم الشهيد', 'القوة', 'الرتبة', 'تاريخ الاستشهاد', 'القطاع', 'الحالة'], rows: [['الشهيد محمد أحمد علي', 'القوات المسلحة', 'ملازم أول', '12 مارس 2021', 'الخرطوم', 'موثق'], ['الشهيد عبد الرحمن عمر', 'الشرطة', 'رقيب', '27 يوليو 2020', 'أم درمان', 'موثق'], ['الشهيد ياسر إبراهيم', 'الدعم السريع', 'نقيب', '04 يناير 2022', 'بحري', 'قيد المراجعة'], ['الشهيد صديق عبد الله', 'القوات المسلحة', 'مساعد', '18 أغسطس 2019', 'الجزيرة', 'موثق'], ['الشهيد أسامة حسن', 'القوات المسلحة', 'رائد', '30 نوفمبر 2023', 'سنار', 'موثق']] },
  families: { title: 'أسر الشهداء', kicker: 'دليل الأسر', icon: 'users', description: 'ملفات الأسر المسجلة، المشرفون، ومؤشرات الخدمات المرتبطة.', headers: ['أسرة الشهيد', 'عدد الأفراد', 'الشريحة', 'المشرف', 'المحلية', 'الحالة'], rows: [['أسرة الشهيد محمد أحمد', '8', 'أ', 'أحمد الطيب', 'الخرطوم', 'مكتملة'], ['أسرة الشهيد عبد الرحمن', '5', 'ب', 'سارة عثمان', 'أم درمان', 'تحتاج تحديث'], ['أسرة الشهيد ياسر إبراهيم', '11', 'أ', 'محمود النور', 'بحري', 'مكتملة'], ['أسرة الشهيد صديق عبد الله', '6', 'ج', 'نجلاء حمد', 'الجزيرة', 'مكتملة'], ['أسرة الشهيد أسامة حسن', '4', 'ب', 'عبد الله فضل', 'سنار', 'مكتملة']] },
  members: { title: 'أفراد الأسر', kicker: 'السجلات الفردية', icon: 'users', description: 'ملفات الأفراد، بيانات التواصل، الوثائق، والتأمين الصحي.', headers: ['الاسم', 'العلاقة', 'العمر', 'الرقم الوطني', 'الأسرة', 'التأمين'], rows: [['مريم محمد أحمد', 'ابنة', '16', '290104••••', 'أسرة محمد أحمد', 'ساري'], ['عبد الله عبد الرحمن', 'ابن', '12', '290108••••', 'أسرة عبد الرحمن', 'ساري'], ['سارة ياسر إبراهيم', 'ابنة', '19', '290106••••', 'أسرة ياسر', 'منتهي قريباً'], ['أحمد صديق عبد الله', 'ابن', '9', '290111••••', 'أسرة صديق', 'ساري'], ['نور أسامة حسن', 'ابنة', '7', '290115••••', 'أسرة أسامة', 'ساري']] },
  orphans: { title: 'الأيتام', kicker: 'رعاية الأيتام', icon: 'heart', description: 'متابعة بيانات الأيتام والتعليم والخدمات الاجتماعية المقدمة لهم.', headers: ['اسم اليتيم', 'العمر', 'المرحلة', 'المدرسة', 'القطاع', 'الملف'], rows: [['مريم محمد أحمد', '16', 'ثانوي', 'مدرسة النور', 'الخرطوم', 'مكتمل'], ['عبد الله عبد الرحمن', '12', 'متوسط', 'مدرسة الأمل', 'أم درمان', 'مكتمل'], ['سارة ياسر إبراهيم', '19', 'جامعي', 'جامعة الخرطوم', 'بحري', 'قيد التحديث'], ['أحمد صديق عبد الله', '9', 'ابتدائي', 'مدرسة الفجر', 'الجزيرة', 'مكتمل'], ['نور أسامة حسن', '7', 'ابتدائي', 'مدرسة الوفاء', 'سنار', 'مكتمل']] },
  students: { title: 'الطلاب', kicker: 'السجل التعليمي', icon: 'book', description: 'رصد الطلاب، المراحل الدراسية، والمدارس والخدمات المساندة.', headers: ['اسم الطالب', 'المرحلة', 'الصف', 'المدرسة', 'نوع الخدمة', 'الحالة'], rows: [['مريم محمد أحمد', 'ثانوي', 'الثاني', 'مدرسة النور', 'رسوم دراسية', 'منفذة'], ['عبد الله عبد الرحمن', 'متوسط', 'السادس', 'مدرسة الأمل', 'زي وأدوات', 'منفذة'], ['سارة ياسر إبراهيم', 'جامعي', 'الثالث', 'جامعة الخرطوم', 'منحة طالب', 'قيد التنفيذ'], ['نور أسامة حسن', 'ابتدائي', 'الثالث', 'مدرسة الوفاء', 'كتب ودفاتر', 'منفذة'], ['بشير صديق', 'ثانوي', 'الأول', 'مدرسة الجزيرة', 'رسوم دراسية', 'منفذة']] },
  education: { title: 'الخدمات التعليمية', kicker: 'برامج التعليم', icon: 'book', description: 'تتبع طلبات الدعم التعليمي من التسجيل وحتى إغلاق الخدمة.', headers: ['اسم المستفيد', 'نوع الخدمة', 'التقديري', 'المؤمن', 'تاريخ الإضافة', 'الحالة'], rows: [['مريم محمد أحمد', 'رسوم دراسية', '150,000 ج.س', '150,000 ج.س', '13 سبتمبر 2026', 'منفذة'], ['عبد الله عبد الرحمن', 'زي وأدوات', '85,000 ج.س', '50,000 ج.س', '11 سبتمبر 2026', 'قيد التنفيذ'], ['سارة ياسر إبراهيم', 'منحة طالب', '300,000 ج.س', '300,000 ج.س', '08 سبتمبر 2026', 'منفذة'], ['نور أسامة حسن', 'كتب ودفاتر', '48,000 ج.س', '48,000 ج.س', '01 سبتمبر 2026', 'منفذة']] },
  injured: { title: 'مصابو العمليات', kicker: 'الرعاية الصحية', icon: 'activity', description: 'سجل المصابين وخطط العلاج ونسب العجز والتأمين الصحي.', headers: ['الاسم', 'نوع الإصابة', 'نسبة العجز', 'رقم التأمين', 'المحلية', 'الحالة'], rows: [['خالد حسن محمد', 'إصابة طرفية', '35%', 'INS-10984', 'الخرطوم', 'متابعة'], ['مصطفى عبد الجليل', 'إصابة ظهر', '60%', 'INS-10851', 'أم درمان', 'مستقر'], ['عمر الصادق', 'إصابة سمعية', '25%', 'INS-10420', 'بحري', 'متابعة'], ['طارق يوسف', 'إصابة حركية', '70%', 'INS-10318', 'الجزيرة', 'يحتاج دعم']] },
  widows: { title: 'قائمة الأرامل', kicker: 'الدعم الاجتماعي', icon: 'heart', description: 'متابعة أرامل الشهداء واحتياجاتهن والخدمات المقدمة.', headers: ['الاسم', 'العمر', 'الشهيد', 'رقم الهاتف', 'المحلية', 'الحالة'], rows: [['أسماء محمد علي', '38', 'محمد أحمد علي', '09•••••241', 'الخرطوم', 'محدث'], ['سعاد عمر حسن', '42', 'عبد الرحمن عمر', '09•••••834', 'أم درمان', 'محدث'], ['زينب إبراهيم', '35', 'ياسر إبراهيم', '09•••••912', 'بحري', 'تحتاج متابعة'], ['آمنة عبد الله', '46', 'صديق عبد الله', '09•••••107', 'الجزيرة', 'محدث']] },
  supervisors: { title: 'مشرفو الأسر', kicker: 'التنسيق الميداني', icon: 'users', description: 'توزيع الأسر ومتابعة الأداء والزيارات الميدانية.', headers: ['اسم المشرف', 'رقم الهاتف', 'عدد الأسر', 'آخر زيارة', 'القطاع', 'الأداء'], rows: [['أحمد الطيب', '09•••••342', '42', '12 سبتمبر 2026', 'الخرطوم', 'ممتاز'], ['سارة عثمان', '09•••••118', '36', '11 سبتمبر 2026', 'أم درمان', 'جيد جداً'], ['محمود النور', '09•••••665', '51', '10 سبتمبر 2026', 'بحري', 'ممتاز'], ['نجلاء حمد', '09•••••224', '28', '08 سبتمبر 2026', 'الجزيرة', 'جيد']] },
  care: { title: 'محور الرعاية', kicker: 'الخدمات والمساندة', icon: 'heart', description: 'مركز موحد للمشاريع الإنتاجية والمساعدات والعلاج والتأمين.', headers: ['الخدمة', 'النوع', 'التقديري', 'المؤمن', 'تاريخ الإضافة', 'الحالة'], rows: [['مشروع خياطة أسرة محمد', 'مشاريع إنتاجية', '2,400,000 ج.س', '1,800,000 ج.س', '12 سبتمبر 2026', 'قيد التنفيذ'], ['سلة غذائية شهرية', 'مساعدات', '160,000 ج.س', '160,000 ج.س', '10 سبتمبر 2026', 'منفذة'], ['علاج بالخارج', 'علاج طبي', '4,800,000 ج.س', '4,000,000 ج.س', '06 سبتمبر 2026', 'قيد التنفيذ'], ['تأمين صحي أسرة', 'تأمين صحي', '120,000 ج.س', '120,000 ج.س', '01 سبتمبر 2026', 'منفذة']] },
  spiritual: { title: 'التزكية الروحية', kicker: 'التنمية الروحية', icon: 'book', description: 'الحلقات والمعسكرات والندوات وتوثيق سير الشهداء.', headers: ['البرنامج', 'النوع', 'التاريخ', 'المستفيدون', 'المحلية', 'الحالة'], rows: [['حلقة النور', 'حلقة تربوية', '14 سبتمبر 2026', '28', 'الخرطوم', 'مجدولة'], ['معسكر البناء', 'معسكر تربوي', '21 سبتمبر 2026', '65', 'أم درمان', 'مجدولة'], ['ندوة الصمود', 'ندوة ومحاضرة', '30 أغسطس 2026', '124', 'بحري', 'منفذة'], ['سيرة الشهيد علي', 'توثيق سيرة', '18 أغسطس 2026', '—', 'الجزيرة', 'مكتملة']] },
  reports: { title: 'التقارير والتحليلات', kicker: 'مركز القرار', icon: 'report', description: 'مؤشرات فورية وتقارير جاهزة لدعم التخطيط واتخاذ القرار.', headers: ['التقرير', 'الفئة', 'آخر تحديث', 'المالك', 'المدى', 'الإجراء'], rows: [['إحصاء الشهداء', 'بيانات أساسية', 'اليوم، 09:42', 'النظام', 'كل القطاعات', 'عرض'], ['إحصائية الأيتام', 'ديموغرافيا', 'اليوم، 09:38', 'النظام', 'كل القطاعات', 'عرض'], ['الإجمالي العام', 'مالي', 'أمس، 16:20', 'الإدارة المالية', 'الربع الثالث', 'عرض'], ['الخدمات العلاجية', 'صحي', 'أمس، 13:10', 'الرعاية', '2026', 'عرض']] },
  settings: { title: 'إعدادات النظام', kicker: 'التهيئة والأمان', icon: 'settings', description: 'إعدادات الحساب، الصلاحيات، النسخ الاحتياطي، وتفضيلات النظام.', headers: ['الإعداد', 'القسم', 'آخر تعديل', 'بواسطة', 'الحالة', 'الإجراء'], rows: [['أدوار المستخدمين', 'الأمان', '12 سبتمبر 2026', 'مدير النظام', 'نشط', 'إدارة'], ['النسخ الاحتياطي', 'البيانات', '10 سبتمبر 2026', 'مدير النظام', 'مجدول', 'إدارة'], ['قوالب التقارير', 'التقارير', '08 سبتمبر 2026', 'أحمد الطيب', 'نشط', 'إدارة'], ['إشعارات النظام', 'التفضيلات', '01 سبتمبر 2026', 'مدير النظام', 'نشط', 'إدارة']] },
};

const stats = [
  { label: 'إجمالي الشهداء', value: '1,248', delta: '+8.4%', icon: 'shield', tone: 'navy', note: 'منذ بداية العام' },
  { label: 'الأسر المسجلة', value: '364', delta: '+5.2%', icon: 'users', tone: 'teal', note: 'أسرة نشطة' },
  { label: 'الأيتام المكفولون', value: '892', delta: '+12.6%', icon: 'heart', tone: 'amber', note: 'ضمن برامج الرعاية' },
  { label: 'مصابو العمليات', value: '47', delta: '-2.1%', icon: 'activity', tone: 'rose', note: 'حالات قيد المتابعة' },
];

const API_BASE = window.__API_BASE__ || (window.location.port === '3000' ? 'http://127.0.0.1:8000/api' : '/api');
const formatDate = (value) => value ? new Intl.DateTimeFormat('ar', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(String(value).includes('T') ? value : `${value}T00:00:00`)) : '—';

async function hydrateBackend() {
  const [dashboard, martyrs, families, members, students, services] = await Promise.all([
    fetch(`${API_BASE}/dashboard`).then(r => r.json()),
    fetch(`${API_BASE}/martyrs`).then(r => r.json()),
    fetch(`${API_BASE}/families`).then(r => r.json()),
    fetch(`${API_BASE}/members`).then(r => r.json()),
    fetch(`${API_BASE}/students`).then(r => r.json()),
    fetch(`${API_BASE}/services`).then(r => r.json()),
  ]);
  moduleConfig.martyrs.rows = martyrs.map(item => [item.full_name, item.force, item.rank, formatDate(item.martyrdom_date), item.sector, item.status]);
  moduleConfig.families.rows = families.map(item => [item.name, String(item.members_count ?? item.member_count), item.category, item.supervisor, item.locality, item.status]);
  moduleConfig.members.rows = members.map(item => [item.full_name, item.relationship, String(item.age), item.national_id, item.family?.name || '—', item.insurance_status]);
  moduleConfig.students.rows = students.map(item => [item.family_member?.full_name || '—', item.stage, item.grade, item.school, item.service_type || '—', item.status]);
  moduleConfig.education.rows = services.map(item => [item.beneficiary, item.type, `${Number(item.estimated_amount || 0).toLocaleString('ar')} ج.س`, `${Number(item.funded_amount || 0).toLocaleString('ar')} ج.س`, formatDate(item.added_at), item.status]);
  moduleConfig.care.rows = moduleConfig.education.rows;
  stats[0].value = Number(dashboard.martyrs_count).toLocaleString('ar');
  stats[1].value = Number(dashboard.families_count).toLocaleString('ar');
  stats[2].value = Number(dashboard.students_count).toLocaleString('ar');
  showToast(`تم الاتصال بالـ backend · ${dashboard.source}`);
  render();
}

function navMarkup() {
  return navSections.map(section => `
    <div class="nav-section">
      <div class="nav-label">${section.label}</div>
      ${section.items.map(item => `
        <button class="nav-item ${state.active === item.id || (state.active === 'martyr-detail' && item.id === 'martyrs') || (state.active === 'member-detail' && item.id === 'members') ? 'active' : ''}" data-nav="${item.id}">
          ${icon(item.icon)}<span>${item.label}</span>${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
        </button>
      `).join('')}
    </div>
  `).join('');
}

function loginMarkup() {
  return `
    <main class="login-page">
      <section class="login-visual">
        <div class="visual-noise"></div>
        <div class="brand-lockup large"><div class="brand-mark">ش</div><div><div class="brand-name">نظام الشهيد</div><div class="brand-subtitle">ALSHAHIID MANAGEMENT SYSTEM</div></div></div>
        <div class="visual-copy">
          <div class="eyebrow light">منصة موحدة للرعاية والوفاء</div>
          <h1>نحفظ الأثر،<br><em>ونرعى الامتداد.</em></h1>
          <p>مساحة عمل هادئة ومتكاملة لإدارة بيانات الشهداء وأسرهم والخدمات التي يستحقونها.</p>
        </div>
        <div class="visual-metrics">
          <div><strong>1,248</strong><span>شهيداً موثقاً</span></div><div><strong>364</strong><span>أسرة مسجلة</span></div><div><strong>17+</strong><span>تقريراً فورياً</span></div>
        </div>
        <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div><div class="visual-star star-one">✦</div><div class="visual-star star-two">·</div>
      </section>
      <section class="login-form-side">
        <div class="login-topline"><span>الإصدار 2.4.0</span><span class="secure-label">${icon('shield')} بيئة آمنة</span></div>
        <div class="login-card">
          <div class="mobile-brand"><div class="brand-mark">ش</div><div><div class="brand-name">نظام الشهيد</div><div class="brand-subtitle">ALSHAHIID</div></div></div>
          <div class="eyebrow">مرحباً بعودتك</div>
          <h2>تسجيل الدخول</h2>
          <p class="login-description">أدخل بياناتك للوصول إلى لوحة العمليات المركزية.</p>
          <form id="login-form">
            <label>اسم المستخدم<input id="username" type="text" placeholder="مثال: admin@alshahiid" autocomplete="username" /></label>
            <label>كلمة المرور<div class="password-wrap"><input id="password" type="password" placeholder="أدخل كلمة المرور" autocomplete="current-password" /><button type="button" class="password-toggle" data-action="toggle-password" aria-label="إظهار كلمة المرور">إظهار</button></div></label>
            <div class="login-options"><label class="check-label"><input type="checkbox" checked /><span>تذكرني</span></label><a href="#" data-action="forgot">نسيت كلمة المرور؟</a></div>
            <button class="primary-button full" type="submit">الدخول إلى النظام ${icon('arrow')}</button>
          </form>
          <div class="demo-hint">للاستعراض السريع استخدم أي بيانات تجريبية <span>·</span> الدخول متاح للعرض فقط</div>
        </div>
        <div class="login-footer">© 2026 منظمة الشهيد <span>•</span> جميع الحقوق محفوظة</div>
      </section>
    </main>
  `;
}

function topbarMarkup() {
  const currentTitle = state.active === 'martyr-detail' ? 'ملف الشهيد' : state.active === 'member-detail' ? 'ملف فرد الأسرة' : (moduleConfig[state.active]?.title || 'لوحة القيادة');
  return `
    <header class="topbar">
      <button class="mobile-menu" data-action="toggle-sidebar">${icon('menu')}</button>
      <div class="breadcrumb"><span>نظام الشهيد</span><i>/</i><strong>${currentTitle}</strong></div>
      <div class="topbar-actions">
        <div class="global-search">${icon('search')}<input id="global-search" value="${state.search}" placeholder="ابحث في السجلات..." /></div>
        <button class="icon-button theme-button" data-action="toggle-theme" aria-label="تبديل المظهر">${icon(state.dark ? 'sun' : 'moon')}</button>
        <div class="notification-wrap"><button class="icon-button notification-button ${state.notificationOpen ? 'active' : ''}" data-action="toggle-notifications">${icon('bell')}<span class="notification-dot"></span></button>${state.notificationOpen ? notificationMarkup() : ''}</div>
        <div class="top-divider"></div>
        <button class="profile-chip" data-action="profile"><span class="avatar">أ</span><span class="profile-copy"><strong>أحمد الطيب</strong><small>مدير النظام</small></span>${icon('chevron')}</button>
      </div>
    </header>
  `;
}

function notificationMarkup() {
  return `<div class="notification-panel"><div class="panel-heading"><strong>الإشعارات</strong><button data-action="toast" data-message="تم تعليم الإشعارات كمقروءة">تحديد كمقروء</button></div><div class="notification-item"><span class="notification-icon teal">${icon('check')}</span><div><strong>تم تحديث ملف أسرة محمد أحمد</strong><small>منذ 12 دقيقة</small></div></div><div class="notification-item"><span class="notification-icon amber">${icon('calendar')}</span><div><strong>لديك 3 مهام مجدولة اليوم</strong><small>منذ ساعة</small></div></div><div class="notification-item"><span class="notification-icon rose">${icon('activity')}</span><div><strong>تحديث حالة مصاب يحتاج مراجعة</strong><small>منذ ساعتين</small></div></div></div>`;
}

function statCardsMarkup() {
  return stats.map(stat => `<article class="stat-card ${stat.tone}"><div class="stat-head"><span class="stat-icon">${icon(stat.icon)}</span><span class="stat-delta ${stat.delta.startsWith('-') ? 'down' : ''}">${stat.delta} ${icon(stat.delta.startsWith('-') ? 'arrowDown' : 'arrowUp')}</span></div><div class="stat-value">${stat.value}</div><div class="stat-label">${stat.label}</div><div class="stat-note">${stat.note}</div></article>`).join('');
}

function dashboardMarkup() {
  return `
    <section class="page-shell dashboard-page">
      <div class="welcome-row"><div><div class="eyebrow">الأحد، 13 سبتمبر 2026</div><h1>صباح الخير، <span>أحمد</span></h1><p>إليك نظرة سريعة على آخر ما يحدث في منظومة الرعاية اليوم.</p></div><div class="welcome-actions"><button class="secondary-button" data-action="print">${icon('printer')} طباعة الملخص</button><button class="primary-button" data-action="open-modal">${icon('plus')} إضافة سجل جديد</button></div></div>
      <div class="insight-banner"><div class="insight-mark">✦</div><div><strong>كل أثر يصنع فرقاً</strong><p>تم تحديث مؤشرات النظام بنجاح. نسبة اكتمال ملفات الأسر ارتفعت <b>8.4%</b> هذا الشهر.</p></div><button data-action="toast" data-message="تم فتح تفاصيل المؤشر">عرض التفاصيل ${icon('arrow')}</button><span class="banner-orb orb-a"></span><span class="banner-orb orb-b"></span></div>
      <div class="stats-grid">${statCardsMarkup()}</div>
      <div class="analytics-grid"><article class="panel chart-panel"><div class="panel-header"><div><div class="eyebrow">نظرة تشغيلية</div><h3>التسجيلات خلال العام</h3></div><select class="period-select"><option>آخر 12 شهراً</option><option>هذا العام</option><option>العام الماضي</option></select></div><div class="chart-legend"><span><i class="legend-dot navy"></i> ملفات جديدة</span><span><i class="legend-dot mint"></i> خدمات مكتملة</span></div><div class="bar-chart"><div class="y-axis"><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span></div><div class="bars">${[['أكتوبر',66,42],['نوفمبر',84,51],['ديسمبر',72,58],['يناير',102,62],['فبراير',91,74],['مارس',118,82],['أبريل',93,68],['مايو',136,89],['يونيو',127,96],['يوليو',149,104],['أغسطس',164,122],['سبتمبر',182,140]].map(([m,a,b]) => `<div class="bar-group"><div class="bar-pair"><span class="bar navy" style="height:${a / 2.15}%"></span><span class="bar mint" style="height:${b / 2.15}%"></span></div><small>${m}</small></div>`).join('')}</div></div><div class="chart-footer"><span>آخر تحديث: اليوم، 09:42 ص</span><strong>+18.6% <span>مقارنة بالشهر السابق</span></strong></div></article><article class="panel distribution-panel"><div class="panel-header"><div><div class="eyebrow">توزيع الأسر</div><h3>حسب الشريحة</h3></div><button class="more-button" data-action="toast" data-message="تم فتح تحليل توزيع الأسر">${icon('dots')}</button></div><div class="donut-wrap"><div class="donut-chart"><div class="donut-center"><strong>364</strong><span>أسرة</span></div></div><div class="donut-labels"><div><span><i class="legend-dot navy"></i> الشريحة أ</span><strong>42%</strong></div><div><span><i class="legend-dot teal"></i> الشريحة ب</span><strong>31%</strong></div><div><span><i class="legend-dot amber"></i> الشريحة ج</span><strong>18%</strong></div><div><span><i class="legend-dot soft"></i> أخرى</span><strong>9%</strong></div></div></div><div class="distribution-foot"><span>${icon('activity')} <b>+5.2%</b> نمو الأسر النشطة</span><button data-nav="families">التفاصيل ${icon('arrow')}</button></div></article></div>
      <div class="bottom-grid"><article class="panel activity-panel"><div class="panel-header"><div><div class="eyebrow">المتابعة اليومية</div><h3>آخر الأنشطة</h3></div><button class="text-button" data-nav="reports">عرض الكل ${icon('arrow')}</button></div><div class="activity-tabs"><button class="active" data-tab="all">الكل <span>12</span></button><button data-tab="families">الأسر <span>5</span></button><button data-tab="services">الخدمات <span>7</span></button></div><div class="activity-list"><div class="activity-row"><span class="activity-avatar mint">م</span><div><strong>تم تحديث ملف أسرة الشهيد محمد أحمد</strong><small>بواسطة أحمد الطيب · منذ 12 دقيقة</small></div><span class="status-pill done">مكتمل</span></div><div class="activity-row"><span class="activity-avatar navy">س</span><div><strong>إضافة خدمة تعليمية جديدة للطالب سارة ياسر</strong><small>بواسطة سارة عثمان · منذ 34 دقيقة</small></div><span class="status-pill pending">قيد التنفيذ</span></div><div class="activity-row"><span class="activity-avatar amber">خ</span><div><strong>تحديث بيانات مصاب العمليات خالد حسن</strong><small>بواسطة فريق الرعاية · منذ ساعة</small></div><span class="status-pill review">مراجعة</span></div><div class="activity-row"><span class="activity-avatar rose">أ</span><div><strong>تم اعتماد مساعدة شهرية لأسرة عبد الرحمن</strong><small>بواسطة الإدارة المالية · منذ ساعتين</small></div><span class="status-pill done">مكتمل</span></div></div></article><article class="panel tasks-panel"><div class="panel-header"><div><div class="eyebrow">قائمة العمل</div><h3>المهام القادمة <span class="count-badge">4</span></h3></div><button class="more-button" data-action="toast" data-message="تم تحديث قائمة المهام">${icon('dots')}</button></div><div class="task-list"><label class="task-item"><input type="checkbox" data-action="task"><span class="task-check"></span><span><strong>مراجعة ملفات الأسر الجديدة</strong><small>اليوم · قبل 02:00 م</small></span><span class="task-tag urgent">عاجل</span></label><label class="task-item"><input type="checkbox" data-action="task"><span class="task-check"></span><span><strong>اعتماد تقرير الخدمات التعليمية</strong><small>اليوم · قبل 04:30 م</small></span><span class="task-tag normal">عادي</span></label><label class="task-item"><input type="checkbox" data-action="task"><span class="task-check"></span><span><strong>الاتصال بأسرة الشهيد ياسر</strong><small>غداً · 10:00 ص</small></span><span class="task-tag normal">عادي</span></label><label class="task-item"><input type="checkbox" data-action="task"><span class="task-check"></span><span><strong>إعداد تقرير الربع الثالث</strong><small>18 سبتمبر · قبل 12:00 م</small></span><span class="task-tag low">مخطط</span></label></div><button class="add-task" data-action="toast" data-message="إضافة المهام ستكون متاحة في الإصدار القادم">${icon('plus')} إضافة مهمة</button></article></div>
    </section>
  `;
}

function modulePageMarkup(key) {
  const config = moduleConfig[key];
  const filtered = config.rows.filter(row => row.join(' ').toLowerCase().includes(state.search.toLowerCase()));
  const addLabel = key === 'martyrs' ? 'شهيد' : key === 'families' ? 'أسرة' : key === 'members' ? 'فرد' : key === 'reports' ? 'تقرير' : 'سجل';
  const detailAction = key === 'martyrs' ? 'open-martyr' : key === 'members' ? 'open-member' : 'toast';
  return `<section class="page-shell module-page"><div class="module-title-row"><div class="module-heading"><div class="module-title-icon">${icon(config.icon)}</div><div><div class="eyebrow">${config.kicker}</div><h1>${config.title}</h1><p>${config.description}</p></div></div><div class="module-actions"><button class="secondary-button" data-action="print">${icon('printer')} طباعة</button><button class="secondary-button" data-action="export">${icon('download')} تصدير</button><button class="primary-button" data-action="open-modal">${icon('plus')} إضافة ${addLabel}</button></div></div><div class="module-metrics"><div><span>إجمالي السجلات</span><strong>${key === 'martyrs' ? '1,248' : key === 'families' ? '364' : key === 'orphans' ? '892' : config.rows.length * 31}</strong><small class="positive">+8.4% هذا الشهر</small></div><div><span>مكتمل / نشط</span><strong>${key === 'martyrs' ? '96%' : '82%'}</strong><small>من إجمالي السجلات</small></div><div><span>بانتظار المراجعة</span><strong>${key === 'injured' ? '7' : '12'}</strong><small class="warning-text">يحتاج إجراء</small></div><div class="metric-mini-chart"><span>معدل الإنجاز</span><div class="mini-progress"><i style="width:${key === 'reports' ? 92 : 78}%"></i></div><small>${key === 'reports' ? '92%' : '78%'} هذا الأسبوع</small></div></div><article class="panel table-panel"><div class="table-toolbar"><div class="table-search">${icon('search')}<input class="module-search" value="${state.search}" placeholder="ابحث في ${config.title}..." /></div><button class="filter-button" data-action="toast" data-message="تم فتح خيارات الفلترة المتقدمة">${icon('filter')} فلاتر متقدمة <span class="filter-count">2</span></button><div class="toolbar-spacer"></div><span class="result-count">عرض ${filtered.length} من ${config.rows.length} سجلات</span></div><div class="table-scroll"><table><thead><tr>${config.headers.map(h => `<th>${h}<span class="sort-mark">↕</span></th>`).join('')}<th>إجراء</th></tr></thead><tbody>${filtered.length ? filtered.map((row, index) => `<tr>${row.map((cell, i) => `<td>${i === row.length - 1 ? `<span class="status-pill ${statusClass(cell)}">${cell}</span>` : cell}</td>`).join('')}<td><div class="row-actions"><button class="row-action" data-action="${detailAction}" data-index="${index}" data-message="تم فتح سجل ${row[0] || 'السجل'}" aria-label="عرض تفاصيل ${row[0] || 'السجل'}">${icon('file')}</button><button class="row-action" data-action="toast" data-message="وضع التعديل قيد التجهيز">${icon('edit')}</button><button class="row-action" data-action="toast" data-message="المزيد من الخيارات قيد التجهيز">${icon('dots')}</button></div></td></tr>`).join('') : `<tr><td colspan="${config.headers.length + 1}"><div class="empty-state">${icon('search')}<strong>لا توجد نتائج مطابقة</strong><span>جرّب كلمة بحث مختلفة أو امسح الفلتر.</span></div></td></tr>`}</tbody></table></div><div class="table-footer"><span>آخر مزامنة: اليوم، 09:42 ص</span><div class="pagination"><button disabled>${icon('chevron')}</button><button class="active">1</button><button>2</button><button>3</button><span>...</span><button>12</button><button>${icon('chevron')}</button></div></div></article></section>`;
}

function martyrDetailMarkup() {
  const row = moduleConfig.martyrs.rows[state.detailIndex] || moduleConfig.martyrs.rows[0];
  const details = [
    ['اسم الشهيد', row[0], 'Martyr’s Full Name'],
    ['القوة', row[1], 'Military Force / Branch'],
    ['الوحدة', state.detailIndex === 1 ? 'وحدة العمليات الخاصة' : 'اللواء 41 مشاة', 'Military Unit'],
    ['الرتبة', row[2], 'Military Rank'],
    ['النمرة العسكرية', `MIL-${String(10428 + state.detailIndex * 317)}`, 'Military ID Number'],
    ['تاريخ الاستشهاد', row[3], 'Date of Martyrdom'],
    ['مكان الاستشهاد', state.detailIndex === 1 ? 'أم درمان - منطقة العمليات' : 'الخرطوم - منطقة القيادة', 'Location of Martyrdom'],
    ['رقم السجل', `REG-2026-${String(184 + state.detailIndex).padStart(4, '0')}`, 'Registry Number'],
    ['تاريخ السجل', '15 سبتمبر 2024', 'Registry Date'],
    ['الشريحة', state.detailIndex === 2 ? 'ب' : 'أ', 'Category / Tier'],
    ['الحقوق', 'مستوفاة ومعتمدة', 'Rights Status'],
    ['القطاع', row[4], 'Sector'],
    ['المحلية', state.detailIndex === 1 ? 'أم درمان' : row[4], 'Locality'],
  ];
  return `<section class="page-shell detail-page"><div class="detail-top"><button class="back-button" data-action="back-to-martyrs">${icon('arrow')} العودة إلى قائمة الشهداء</button><div class="detail-actions"><button class="secondary-button" data-action="print">${icon('printer')} طباعة الملف</button><button class="secondary-button" data-action="toast" data-message="وضع تعديل الملف قيد التجهيز">${icon('edit')} تعديل البيانات</button></div></div><div class="detail-hero panel"><div class="detail-avatar">${row[0].slice(7, 8) || 'ش'}</div><div class="detail-identity"><div class="eyebrow">ملف الشهيد · ${row[5]}</div><h1>${row[0]}</h1><p>${row[1]} · ${row[2]} · ${row[4]}</p><div class="detail-meta"><span class="status-pill done">${icon('check')} ملف موثق</span><span>${icon('calendar')} آخر تحديث: اليوم، 09:42 ص</span><span>${icon('file')} رقم الملف: REG-2026-${String(184 + state.detailIndex).padStart(4, '0')}</span></div></div><div class="detail-quote"><span>✦</span><strong>حاضرون في الذاكرة</strong><small>نحفظ الأثر ونرعى الامتداد</small></div></div><div class="detail-section-heading"><div><div class="eyebrow">البيانات الأساسية</div><h2>بيانات الشهيد الرسمية</h2></div><span>13 حقلاً موثقاً</span></div><article class="panel details-card"><div class="details-grid">${details.map(([label, value, english]) => `<div class="detail-field"><span class="detail-label">${label}</span><strong>${value}</strong><small>${english}</small></div>`).join('')}</div></article><div class="detail-bottom-grid"><article class="panel detail-note-card"><div class="panel-header"><div><div class="eyebrow">الربط والمتابعة</div><h3>ملفات مرتبطة</h3></div>${icon('arrow')}</div><div class="linked-record"><span class="linked-icon">${icon('users')}</span><div><strong>ملف أسرة الشهيد</strong><small>أسرة ${row[0].replace('الشهيد ', '')} · ${state.detailIndex + 4} أفراد مسجلين</small></div><button data-action="toast" data-message="فتح ملف الأسرة قيد التجهيز">عرض الملف ${icon('arrow')}</button></div><div class="linked-record"><span class="linked-icon amber">${icon('file')}</span><div><strong>الوثائق والشهادات</strong><small>4 وثائق مرتبطة بالسجل</small></div><button data-action="toast" data-message="قسم الوثائق قيد التجهيز">عرض الوثائق ${icon('arrow')}</button></div></article><article class="panel detail-note-card memorial-card"><div class="memorial-pattern"></div><div class="eyebrow">ملاحظة توثيقية</div><h3>هذا الملف جزء من ذاكرة وطنية</h3><p>تمت مراجعة البيانات واعتمادها من قبل فريق التوثيق المركزي.</p><span class="verification">${icon('shield')} محمي بسجل تدقيق إلكتروني</span></article></div></section>`;
}

function memberDetailMarkup() {
  const row = moduleConfig.members.rows[state.memberDetailIndex] || moduleConfig.members.rows[0];
  const isStudent = state.memberDetailIndex !== 1;
  const details = [['الاسم', row[0], 'Full Name'], ['النوع', state.memberDetailIndex % 2 === 0 ? 'أنثى' : 'ذكر', 'Gender'], ['العمر', `${row[2]} سنة`, 'Age'], ['العلاقة', row[1], 'Relationship'], ['الرقم الوطني', row[3], 'National ID'], ['رقم الهاتف', state.memberDetailIndex % 2 === 0 ? '09•••••241' : '09•••••834', 'Phone Number']];
  const insurance = [['رقم التأمين الصحي', `HI-${String(40821 + state.memberDetailIndex * 143)}`, 'Insurance Number'], ['بداية التأمين', '01 يناير 2026', 'Coverage Start Date'], ['نهاية التأمين', '31 ديسمبر 2026', 'Coverage End Date']];
  return `<section class="page-shell detail-page member-detail-page"><div class="detail-top"><button class="back-button" data-action="back-to-members">${icon('arrow')} العودة إلى قائمة أفراد الأسر</button><div class="detail-actions"><button class="secondary-button" data-action="print">${icon('printer')} طباعة الملف</button><button class="secondary-button" data-action="toast" data-message="وضع تعديل الملف قيد التجهيز">${icon('edit')} تعديل البيانات</button></div></div><div class="detail-hero panel member-hero"><div class="detail-avatar member-avatar">${row[0].slice(0, 1)}</div><div class="detail-identity"><div class="eyebrow">ملف فرد الأسرة · ${row[4]}</div><h1>${row[0]}</h1><p>${row[1]} · ${row[2]} سنة · ${row[4]}</p><div class="detail-meta"><span class="status-pill done">${icon('check')} سجل نشط</span><span>${icon('users')} مرتبط بملف الأسرة</span><span>${icon('file')} رقم الملف: FM-2026-${String(271 + state.memberDetailIndex).padStart(4, '0')}</span></div></div><div class="detail-quote"><span>✦</span><strong>رعاية تمتد</strong><small>كل فرد قصة تستحق الاهتمام</small></div></div><div class="detail-section-heading"><div><div class="eyebrow">البيانات الأساسية</div><h2>بيانات فرد الأسرة</h2></div><span>6 حقول أساسية</span></div><article class="panel details-card member-fields-card"><div class="member-profile-photo"><div class="profile-photo-placeholder">${row[0].slice(0, 1)}</div><span>الصورة الشخصية<br><small>Profile Photo</small></span><button data-action="toast" data-message="رفع الصورة الشخصية قيد التجهيز">${icon('plus')} إضافة صورة</button></div><div class="details-grid member-details-grid">${details.map(([label, value, english]) => `<div class="detail-field"><span class="detail-label">${label}</span><strong>${value}</strong><small>${english}</small></div>`).join('')}</div></article><div class="detail-section-heading compact-heading"><div><div class="eyebrow">Health Insurance Details</div><h2>التأمين الصحي</h2></div><span class="status-pill done">ساري</span></div><article class="panel details-card"><div class="details-grid insurance-grid">${insurance.map(([label, value, english]) => `<div class="detail-field"><span class="detail-label">${label}</span><strong>${value}</strong><small>${english}</small></div>`).join('')}</div></article><div class="detail-bottom-grid member-bottom-grid"><article class="panel detail-note-card"><div class="panel-header"><div><div class="eyebrow">Contact & Operations</div><h3>التواصل والعمليات</h3></div>${icon('activity')}</div><div class="linked-record"><span class="linked-icon">${icon('phone')}</span><div><strong>رقم الهاتف</strong><small>${state.memberDetailIndex % 2 === 0 ? '09•••••241' : '09•••••834'}</small></div><button data-action="toast" data-message="ميزة الاتصال قيد التجهيز">اتصال ${icon('arrow')}</button></div><div class="linked-record"><span class="linked-icon amber">${icon('file')}</span><div><strong>الوثائق الشخصية</strong><small>شهادة الميلاد والرقم الوطني</small></div><button data-action="toast" data-message="قسم الوثائق قيد التجهيز">عرض الوثائق ${icon('arrow')}</button></div></article><article class="panel detail-note-card education-card"><div class="education-card-head"><span class="linked-icon">${icon('book')}</span><div><div class="eyebrow">السجل التعليمي</div><h3>${isStudent ? 'هذا الفرد مسجل كطالب' : 'لا يوجد سجل تعليمي'}</h3></div></div>${isStudent ? `<div class="education-summary"><div><span>المرحلة</span><strong>${row[1] === 'ابن' ? 'متوسط' : 'ثانوي'}</strong></div><div><span>الصف</span><strong>${row[1] === 'ابن' ? 'السادس' : 'الثاني'}</strong></div><div><span>المدرسة</span><strong>مدرسة النور</strong></div></div><button class="education-link" data-action="toast" data-message="فتح الملف التعليمي التفصيلي قيد التجهيز">فتح الملف التعليمي التفصيلي ${icon('arrow')}</button>` : `<p class="no-education">لا توجد بيانات تعليمية مرتبطة بهذا الفرد حالياً.</p>`}</article></div></section>`;
}

function statusClass(value = '') {
  const v = value.toLowerCase();
  if (v.includes('مكتمل') || v.includes('منفذ') || v.includes('ساري') || v.includes('محدث') || v.includes('ممتاز') || v === 'نشط' || v === 'موثق') return 'done';
  if (v.includes('تحتاج') || v.includes('مراج') || v.includes('قيد') || v.includes('يحتاج')) return 'pending';
  if (v.includes('منتهي') || v.includes('مستقر') || v.includes('جيد')) return 'review';
  return 'neutral';
}

function appMarkup() {
  const content = state.active === 'dashboard' ? dashboardMarkup() : state.active === 'martyr-detail' ? martyrDetailMarkup() : state.active === 'member-detail' ? memberDetailMarkup() : modulePageMarkup(state.active);
  return `<div class="app-shell ${state.sidebarOpen ? 'sidebar-visible' : ''}"><aside class="sidebar"><div class="sidebar-top"><div class="brand-lockup"><div class="brand-mark">ش</div><div><div class="brand-name">نظام الشهيد</div><div class="brand-subtitle">ALSHAHIID</div></div></div><button class="sidebar-close" data-action="toggle-sidebar">${icon('close')}</button></div><div class="workspace-switcher"><span class="workspace-icon">${icon('shield')}</span><span><small>مساحة العمل</small><strong>العمليات المركزية</strong></span>${icon('chevron')}</div><nav class="side-nav">${navMarkup()}</nav><div class="sidebar-bottom"><div class="help-card"><span class="help-icon">?</span><div><strong>تحتاج مساعدة؟</strong><small>تواصل مع فريق الدعم</small></div>${icon('arrow')}</div><button class="logout-button" data-action="logout">${icon('logout')} تسجيل الخروج</button><div class="sidebar-meta"><span>منصة آمنة ومشفرة</span><span class="secure-dot"></span></div></div></aside><div class="sidebar-overlay" data-action="toggle-sidebar"></div><div class="main-area">${topbarMarkup()}<main class="content-area">${content}</main><footer class="app-footer"><span>نظام الشهيد الإلكتروني</span><span>آخر مزامنة: منذ 2 دقيقة</span><span>v2.4.0</span></footer></div></div>${modalMarkup()}<div id="toast-root"></div>`;
}

function modalMarkup() {
  return `<div class="modal-backdrop" id="record-modal"><div class="modal-card"><div class="modal-head"><div><div class="eyebrow">سجل جديد</div><h3>إضافة ${state.active === 'dashboard' ? 'شهيد' : moduleConfig[state.active]?.title || 'سجل'}</h3></div><button class="close-modal" data-action="close-modal">${icon('close')}</button></div><p>أدخل البيانات الأساسية وسيتم حفظها في المسودة المحلية للعرض.</p><form id="record-form"><div class="form-grid"><label>الاسم الكامل<input required placeholder="اكتب الاسم هنا" /></label><label>القطاع<select><option>الخرطوم</option><option>أم درمان</option><option>بحري</option><option>الجزيرة</option></select></label><label>تاريخ الإضافة<input type="date" value="2026-09-13" /></label><label>الحالة<select><option>قيد المراجعة</option><option>مكتمل</option><option>قيد التنفيذ</option></select></label><label class="wide">ملاحظات<textarea placeholder="أضف أي تفاصيل مساندة..."></textarea></label></div><div class="modal-actions"><button type="button" class="secondary-button" data-action="close-modal">إلغاء</button><button type="submit" class="primary-button">حفظ السجل ${icon('check')}</button></div></form></div></div>`;
}

function render() {
  document.documentElement.classList.toggle('dark-mode', state.dark);
  document.body.className = state.screen === 'login' ? 'login-body' : 'app-body';
  document.querySelector('#app').innerHTML = state.screen === 'login' ? loginMarkup() : appMarkup();
  bindEvents();
}

function showToast(message) {
  const root = document.querySelector('#toast-root') || document.body.appendChild(Object.assign(document.createElement('div'), { id: 'toast-root' }));
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${icon('check')}<span>${message}</span>`;
  root.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 220); }, 3200);
}

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => { state.active = el.dataset.nav; state.search = ''; state.sidebarOpen = false; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }));
  document.querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', handleAction));
  const globalSearch = document.querySelector('#global-search');
  const moduleSearch = document.querySelector('.module-search');
  if (globalSearch) globalSearch.addEventListener('input', e => { state.search = e.target.value; if (state.active !== 'dashboard') render(); });
  if (moduleSearch) moduleSearch.addEventListener('input', e => { state.search = e.target.value; render(); });
  const loginForm = document.querySelector('#login-form');
  if (loginForm) loginForm.addEventListener('submit', e => { e.preventDefault(); state.screen = 'app'; showToast('مرحباً بك، تم تسجيل الدخول بنجاح'); render(); hydrateBackend().catch(() => showToast('تعذر الاتصال بالـ backend؛ يتم عرض بيانات العرض المحلية')); });
  const recordForm = document.querySelector('#record-form');
  if (recordForm) recordForm.addEventListener('submit', e => { e.preventDefault(); closeModal(); showToast('تم حفظ السجل في المسودة المحلية'); });
  document.querySelectorAll('[data-tab]').forEach(el => el.addEventListener('click', () => { document.querySelectorAll('[data-tab]').forEach(tab => tab.classList.remove('active')); el.classList.add('active'); showToast(`تم تطبيق فلتر ${el.textContent.trim()}`); }));
}

function handleAction(e) {
  const action = e.currentTarget.dataset.action;
  if (action === 'toggle-password') {
    const input = document.querySelector('#password'); const button = e.currentTarget;
    input.type = input.type === 'password' ? 'text' : 'password'; button.textContent = input.type === 'password' ? 'إظهار' : 'إخفاء';
  }
  if (action === 'forgot') { e.preventDefault(); showToast('رابط استعادة كلمة المرور سيصل إلى بريدك المسجل'); }
  if (action === 'toggle-theme') { state.dark = !state.dark; render(); showToast(state.dark ? 'تم تفعيل المظهر الداكن' : 'تم تفعيل المظهر الفاتح'); }
  if (action === 'toggle-sidebar') { state.sidebarOpen = !state.sidebarOpen; render(); }
  if (action === 'toggle-notifications') { state.notificationOpen = !state.notificationOpen; render(); }
  if (action === 'open-martyr') { state.detailIndex = Number(e.currentTarget.dataset.index || 0); state.active = 'martyr-detail'; state.search = ''; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'open-member') { state.memberDetailIndex = Number(e.currentTarget.dataset.index || 0); state.active = 'member-detail'; state.search = ''; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'back-to-martyrs') { state.active = 'martyrs'; state.search = ''; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'back-to-members') { state.active = 'members'; state.search = ''; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'open-modal') { document.querySelector('#record-modal')?.classList.add('open'); }
  if (action === 'close-modal') closeModal();
  if (action === 'logout') { state.screen = 'login'; state.active = 'dashboard'; state.sidebarOpen = false; render(); showToast('تم تسجيل الخروج بأمان'); }
  if (action === 'profile') showToast('ملف المستخدم قيد التجهيز');
  if (action === 'toast') showToast(e.currentTarget.dataset.message || 'تم تنفيذ العملية');
  if (action === 'export') exportCsv();
  if (action === 'print') { window.print(); }
}

function closeModal() { document.querySelector('#record-modal')?.classList.remove('open'); }

function exportCsv() {
  const data = moduleConfig[state.active] || moduleConfig.martyrs;
  const csv = [data.headers, ...data.rows].map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n');
  const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `${data.title || state.active}-export.csv`; link.click(); URL.revokeObjectURL(url); showToast('تم تصدير البيانات بصيغة CSV');
}

render();
