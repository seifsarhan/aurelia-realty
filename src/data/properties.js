export const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';

export const propertiesData = [
  {
    id: 'aur-01',
    type: 'villa',
    status: 'sale',
    cityKey: 'riyadh',
    featured: true,
    priceUSD: 1200000,
    priceDisplay: { ar: '4,500,000 ريال', en: '4,500,000 SAR' },
    pricePerSqm: { ar: '7,500 ريال/م²', en: '7,500 SAR/m²' },
    badge: { ar: 'حصري', en: 'Exclusive' },
    title: { ar: 'فيلا أوركيد الملكية', en: 'Royal Orchid Villa' },
    location: { ar: 'حي النرجس، شمال الرياض', en: 'Al Narjis, North Riyadh' },
    beds: 5,
    baths: 6,
    area: 600,
    parking: 3,
    yearBuilt: 2025,
    finishing: { ar: 'تشطيب ألترا سوبر لوكس ذكي', en: 'Ultra-Luxury Smart Finish' },
    paymentPlan: { ar: 'مقدم 15% وتقسيط حتى 10 سنوات', en: '15% Down · Up to 10-Yr Plan' },
    description: {
      ar: 'تحفة معمارية معاصرة في قلب حي النرجس، تجمع بين الواجهات الحجرية الطبيعية والمساحات الزجاجية الممتدة على مسبح لا متناهي وحديقة خاصة بنظام ري ذكي وتحكم منزلي متكامل.',
      en: 'A contemporary architectural masterpiece in Al Narjis featuring natural stone facades, floor-to-ceiling glass overlooking a private infinity pool, landscaped courtyard, and full KNX smart-home automation.'
    },
    amenities: {
      ar: ['مسبح خاص مُدفأ', 'نظام منزل ذكي KNX', 'مصعد داخلي بانورامي', 'مجلس رجال منفصل', 'سينما منزلية', 'غرفة سائق وعاملة', 'حديقة مع شلال مائي', 'أمن وحراسة 24/7'],
      en: ['Heated Infinity Pool', 'KNX Smart Home', 'Private Panoramic Elevator', 'Detached Majlis', 'Home Cinema', 'Staff Quarters', 'Landscaped Waterfall Garden', '24/7 Gated Security']
    },
    advisorId: 'adv-1',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-02',
    type: 'penthouse',
    status: 'sale',
    cityKey: 'dubai',
    featured: true,
    priceUSD: 2450000,
    priceDisplay: { ar: '8,950,000 درهم', en: '8,950,000 AED' },
    pricePerSqm: { ar: '21,300 درهم/م²', en: '21,300 AED/m²' },
    badge: { ar: 'إطلالة برج خليفة', en: 'Burj View' },
    title: { ar: 'بنتهاوس سكاي لاين داون تاون', en: 'Skyline Downtown Penthouse' },
    location: { ar: 'وسط مدينة دبي، الإمارات', en: 'Downtown Dubai, UAE' },
    beds: 4,
    baths: 5,
    area: 420,
    parking: 3,
    yearBuilt: 2026,
    finishing: { ar: 'مفروش بالكامل بتصميم إيطالي', en: 'Turnkey Italian Designer Furnishings' },
    paymentPlan: { ar: 'خطة سداد 60/40 مرنة', en: 'Flexible 60/40 Payment Plan' },
    description: {
      ar: 'بنتهاوس فائق الفخامة في الطابق الـ 54 بإطلالة بانورامية 270 درجة على برج خليفة ونافورة دبي، مع تراس سماوي خاص ومسبح غطس ومطبخ مصمم من علامة بولتوب الألمانية.',
      en: 'Ultra-luxury 54th-floor penthouse commanding 270-degree views of Burj Khalifa and Dubai Fountain, complete with a private sky-terrace plunge pool, Bulthaup kitchen, and direct private elevator access.'
    },
    amenities: {
      ar: ['مسبح خاص على التراس', 'خدمة كونسيرج 5 نجوم', 'إطلالة مباشرة على برج خليفة', 'مصعد خاص مباشر', 'نادي صحي وسبا', 'خزانة ملابس فاخرة', 'مواقف VIP', 'تأهل للإقامة الذهبية'],
      en: ['Private Terrace Plunge Pool', '5-Star Concierge', 'Direct Burj Khalifa Views', 'Private Direct Lift', 'Residents Spa & Wellness', 'Walk-in Bespoke Closet', 'VIP Valet Parking', 'Golden Visa Eligible']
    },
    advisorId: 'adv-2',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-03',
    type: 'chalet',
    status: 'sale',
    cityKey: 'north_coast',
    featured: true,
    priceUSD: 680000,
    priceDisplay: { ar: '32,500,000 جنيه', en: '32,500,000 EGP' },
    pricePerSqm: { ar: '85,500 جنيه/م²', en: '85,500 EGP/m²' },
    badge: { ar: 'صف أول بحر', en: 'Beachfront' },
    title: { ar: 'قصر أزور الساحلي', en: 'Azure Seafront Residence' },
    location: { ar: 'رأس الحكمة، الساحل الشمالي', en: 'Ras El Hekma, North Coast' },
    beds: 5,
    baths: 6,
    area: 380,
    parking: 2,
    yearBuilt: 2025,
    finishing: { ar: 'تشطيب كامل بالتكييفات والمطبخ', en: 'Fully Finished w/ ACs & Kitchen' },
    paymentPlan: { ar: '10% مقدم وتقسيط على 8 سنوات', en: '10% Down · 8-Year Installments' },
    description: {
      ar: 'فيلا شاطئية مباشرة على مياه رأس الحكمة الفيروزية بواجهة رملية خاصة، وتصميم مستوحى من الجزر اليونانية مع روف لاونج للغروب ومنطقة شواء متكاملة.',
      en: 'Direct beachfront sanctuary on the turquoise shores of Ras El Hekma with private sandy frontage, Mediterranean minimalism, sunset roof lounge, and seamless indoor-outdoor coastal living.'
    },
    amenities: {
      ar: ['شاطئ خاص مباشر', 'مسبح لاجون خاص', 'روف لاونج للغروب', 'مارينا لليخوت', 'كلوب هاوس عالمي', 'تكييف مركزي كامل', 'خدمة فندقية', 'أمن وبوابات إلكترونية'],
      en: ['Direct Private Beach', 'Private Lagoon Pool', 'Sunset Roof Lounge', 'Yacht Marina Access', 'Private Beach Club', 'Central Air Conditioning', 'Hotel Hospitality Services', 'Electronic Gate Security']
    },
    advisorId: 'adv-3',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-04',
    type: 'villa',
    status: 'sale',
    cityKey: 'new_cairo',
    featured: true,
    priceUSD: 520000,
    priceDisplay: { ar: '24,800,000 جنيه', en: '24,800,000 EGP' },
    pricePerSqm: { ar: '55,100 جنيه/م²', en: '55,100 EGP/m²' },
    badge: { ar: 'استلام فوري', en: 'Ready to Move' },
    title: { ar: 'فيلا فيردي جولف المستقلة', en: 'Verde Golf Standalone Villa' },
    location: { ar: 'التجمع الخامس، القاهرة الجديدة', en: 'Fifth Settlement, New Cairo' },
    beds: 4,
    baths: 5,
    area: 450,
    parking: 2,
    yearBuilt: 2024,
    finishing: { ar: 'تشطيب فاخر أرضيات رخام', en: 'Luxury Marble Finish' },
    paymentPlan: { ar: '20% مقدم وتقسيط 6 سنوات', en: '20% Down · 6-Year Plan' },
    description: {
      ar: 'فيلا مستقلة بإطلالة مفتوحة على ملاعب الجولف والبحيرات الصناعية في أرقى كمبوندات القاهرة الجديدة، مع حديقة خاصة بمساحة 300 م² ومدخل مزدوج الارتفاع.',
      en: 'Standalone residence overlooking championship golf greens and tranquil lakes inside New Cairo’s most prestigious gated community, offering a 300 m² private garden and double-height grand foyer.'
    },
    amenities: {
      ar: ['إطلالة مباشرة على الجولف', 'حديقة خاصة 300 م²', 'غرفة مربية بحمام', 'جراج خاص لسيارتين', 'مسارات للجري والدراجات', 'نادي اجتماعي ورياضي', 'مدارس دولية قريبة', 'حراسة على مدار الساعة'],
      en: ['Direct Golf Views', '300 m² Private Garden', 'Nanny Suite', 'Covered 2-Car Garage', 'Jogging & Cycling Trails', 'Country Club & Tennis', 'International Schools Nearby', '24/7 Compound Security']
    },
    advisorId: 'adv-3',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-05',
    type: 'apartment',
    status: 'sale',
    cityKey: 'dubai',
    featured: false,
    priceUSD: 760000,
    priceDisplay: { ar: '2,800,000 درهم', en: '2,800,000 AED' },
    pricePerSqm: { ar: '12,700 درهم/م²', en: '12,700 AED/m²' },
    badge: { ar: 'عائد إيجاري 8.5%', en: '8.5% Rental Yield' },
    title: { ar: 'شقق بانوراما مارينا ريزيدنس', en: 'Panorama Marina Residence' },
    location: { ar: 'دبي مارينا، الإمارات', en: 'Dubai Marina, UAE' },
    beds: 3,
    baths: 4,
    area: 220,
    parking: 2,
    yearBuilt: 2025,
    finishing: { ar: 'تشطيب فندقي عصري', en: 'Modern Hotel-Grade Finish' },
    paymentPlan: { ar: '10% حجز وتقسيط 5 سنوات', en: '10% Booking · 5-Year Plan' },
    description: {
      ar: 'شقة زاوية رحبة بإطلالة خلابة على مرسى اليخوت والخليج العربي، مع شرفة ممتدة ومرافق فندقية متكاملة تجعلها خياراً مثالياً للسكن أو الاستثمار بعائد إيجاري مرتفع.',
      en: 'Expansive corner residence showcasing unobstructed views of the yacht marina and Arabian Gulf, paired with a wraparound balcony and resort-grade amenities ideal for living or high-yield investment.'
    },
    amenities: {
      ar: ['إطلالة بحرية ومارينا', 'مسبح إنفينيتي مشترك', 'صالة رياضية بانورامية', 'ممشى المارينا المباشر', 'شرفة واسعة', 'مطبخ مجهز بأجهزة ميلي', 'أمن وكاميرات 24/7', 'قرب المترو والترام'],
      en: ['Marina & Sea Views', 'Shared Infinity Pool', 'Panoramic Sky Gym', 'Direct Marina Walk Access', 'Wraparound Balcony', 'Miele Kitchen Appliances', '24/7 CCTV Security', 'Steps from Metro & Tram']
    },
    advisorId: 'adv-2',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-06',
    type: 'villa',
    status: 'rent',
    cityKey: 'riyadh',
    featured: false,
    priceUSD: 95000,
    priceDisplay: { ar: '350,000 ريال / سنوياً', en: '350,000 SAR / yr' },
    pricePerSqm: { ar: 'تأجير سنوي مرن', en: 'Flexible Annual Lease' },
    badge: { ar: 'للإيجار الفاخر', en: 'Luxury Lease' },
    title: { ar: 'فيلا الدبلوماسيين المعاصرة', en: 'Diplomatic Quarter Modern Villa' },
    location: { ar: 'حي السفارات، الرياض', en: 'Diplomatic Quarter, Riyadh' },
    beds: 5,
    baths: 6,
    area: 540,
    parking: 3,
    yearBuilt: 2024,
    finishing: { ar: 'مفروشة بالكامل ومجهزة', en: 'Fully Furnished Executive Ready' },
    paymentPlan: { ar: 'دفعتان سنوياً شاملة الصيانة', en: 'Bi-Annual · Maintenance Included' },
    description: {
      ar: 'فيلا تنفيذية فاخرة مخصصة لكبار التنفيذيين والدبلوماسيين في أهدأ وأرقى أحياء الرياض، مفروشة بالكامل بأثاث أوروبي مع صيانة شاملة للحديقة والمسبح.',
      en: 'Executive-grade residence curated for diplomats and C-suite leaders in Riyadh’s greenest enclave, offered fully furnished with European pieces plus full pool and garden maintenance.'
    },
    amenities: {
      ar: ['مفروشة بالكامل', 'صيانة شاملة مجانية', 'مسبح داخلي وخاص', 'مكتب منزلي تنفيذي', 'غرف خدم مستقلة', 'شاحن سيارة كهربائية', 'نظام أمني متطور', 'حديقة مظللة'],
      en: ['Fully Furnished', 'All-Inclusive Maintenance', 'Private Courtyard Pool', 'Executive Home Office', 'Independent Staff Wing', 'EV Home Charger', 'Advanced Perimeter Security', 'Shaded Lounge Garden']
    },
    advisorId: 'adv-1',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-07',
    type: 'penthouse',
    status: 'sale',
    cityKey: 'new_cairo',
    featured: false,
    priceUSD: 310000,
    priceDisplay: { ar: '14,900,000 جنيه', en: '14,900,000 EGP' },
    pricePerSqm: { ar: '51,300 جنيه/م²', en: '51,300 EGP/m²' },
    badge: { ar: 'إطلاق جديد', en: 'New Launch' },
    title: { ar: 'سكاي بنتهاوس سوان ليك', en: 'Swan Lake Sky Penthouse' },
    location: { ar: 'التجمع الأول، القاهرة الجديدة', en: 'First Settlement, New Cairo' },
    beds: 3,
    baths: 4,
    area: 290,
    parking: 2,
    yearBuilt: 2026,
    finishing: { ar: 'تشطيب ألترا مودرن مع روف', en: 'Ultra-Modern w/ Private Roof' },
    paymentPlan: { ar: '5% مقدم وتقسيط حتى 9 سنوات', en: '5% Down · Up to 9 Years' },
    description: {
      ar: 'بنتهاوس استثنائي بروف خاص مساحته 110 م² وجاكوزي خارجي يطل على مسطحات خضراء واسعة، يجمع بين هدوء الكمبوند الفاخر والقرب من محور التسعين والمطار.',
      en: 'Exceptional penthouse featuring a 110 m² private roof terrace with outdoor jacuzzi overlooking lush parklands, minutes from Road 90 and Cairo International Airport.'
    },
    amenities: {
      ar: ['روف خاص 110 م²', 'جاكوزي خارجي', 'نظام سمارت هوم', 'بحيرات كريستالية', 'موقف تحت الأرض', 'كلوب هاوس فاخر', 'منطقة تجارية راقية', 'أمن وحراسة 24/7'],
      en: ['110 m² Private Roof', 'Outdoor Jacuzzi', 'Smart Home System', 'Crystal Lagoons', 'Underground Parking', 'Luxury Clubhouse', 'Boutique Retail Promenade', '24/7 Security']
    },
    advisorId: 'adv-3',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-08',
    type: 'apartment',
    status: 'rent',
    cityKey: 'dubai',
    featured: false,
    priceUSD: 62000,
    priceDisplay: { ar: '230,000 درهم / سنوياً', en: '230,000 AED / yr' },
    pricePerSqm: { ar: 'متاح للإيجار فوراً', en: 'Immediate Move-In' },
    badge: { ar: 'إطلالة النخلة', en: 'Palm View' },
    title: { ar: 'ريزيدنس نخلة جميرا الفندقي', en: 'Palm Jumeirah Serviced Suite' },
    location: { ar: 'نخلة جميرا، دبي', en: 'Palm Jumeirah, Dubai' },
    beds: 2,
    baths: 3,
    area: 175,
    parking: 1,
    yearBuilt: 2025,
    finishing: { ar: 'مفروش فندقياً بالكامل', en: 'Full 5-Star Serviced Furnishings' },
    paymentPlan: { ar: 'إيجار سنوي أو ربع سنوي', en: 'Annual or Quarterly Lease' },
    description: {
      ar: 'جناح سكني فندقي فاخر في قلب نخلة جميرا مع دخول مجاني للشاطئ الخاص والسبا وخدمة تنظيف أسبوعية، بإطلالة مفتوحة على البحر وفندق أتلانتس.',
      en: 'Five-star serviced residence on Palm Jumeirah offering complimentary private beach and spa access, weekly housekeeping, and sweeping views toward the sea and Atlantis.'
    },
    amenities: {
      ar: ['دخول شاطئ خاص', 'خدمة تنظيف أسبوعية', 'إطلالة بحرية مفتوحة', 'مسبح لا متناهي', 'مطاعم عالمية بالبرج', 'خدمة صف السيارات', 'صالة رياضية متكاملة', 'إنترنت فائق السرعة'],
      en: ['Private Beach Access', 'Weekly Housekeeping', 'Open Sea Views', 'Infinity Beach Pool', 'Fine Dining Onsite', '24/7 Valet Service', 'Technogym Fitness Center', 'High-Speed Fiber Wi-Fi']
    },
    advisorId: 'adv-2',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'aur-09',
    type: 'chalet',
    status: 'sale',
    cityKey: 'north_coast',
    featured: false,
    priceUSD: 295000,
    priceDisplay: { ar: '14,200,000 جنيه', en: '14,200,000 EGP' },
    pricePerSqm: { ar: '67,600 جنيه/م²', en: '67,600 EGP/m²' },
    badge: { ar: 'كريستال لاجون', en: 'Lagoon Front' },
    title: { ar: 'شاليه ماراسي لاجون الفاخر', en: 'Marassi Lagoon Signature Chalet' },
    location: { ar: 'سيدي عبد الرحمن، الساحل الشمالي', en: 'Sidi Abdel Rahman, North Coast' },
    beds: 3,
    baths: 3,
    area: 210,
    parking: 1,
    yearBuilt: 2025,
    finishing: { ar: 'تشطيب فاخر جاهز للسكن', en: 'Turnkey Coastal Finish' },
    paymentPlan: { ar: '10% مقدم وتقسيط 7 سنوات', en: '10% Down · 7-Year Plan' },
    description: {
      ar: 'شاليه بحديقة خاصة وإطلالة مباشرة على الكريستال لاجون الصالحة للسباحة في أرقى منتجعات سيدي عبد الرحمن، خطوات من المارينا والمطاعم العالمية.',
      en: 'Ground-floor garden chalet directly fronting swimmable crystal lagoons in Sidi Abdel Rahman’s premier resort destination, steps from the marina promenade and gourmet dining.'
    },
    amenities: {
      ar: ['إطلالة مباشرة على اللاجون', 'حديقة خاصة 120 م²', 'تكييف مركزي', 'دخول الشاطئ الخاص', 'ملعب جولف قريب', 'أكوا بارك للأطفال', 'منطقة مطاعم وكافيهات', 'أمن 24 ساعة'],
      en: ['Direct Lagoon Frontage', '120 m² Private Garden', 'Central AC', 'Private Beach Pass', 'Championship Golf Nearby', 'Family Lagoon Club', 'Waterfront Dining Strip', '24/7 Resort Security']
    },
    advisorId: 'adv-3',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const destinationsData = [
  {
    cityKey: 'dubai',
    name: { ar: 'دبي', en: 'Dubai' },
    tag: { ar: 'عائد استثماري عالمي', en: 'Global Investment Hub' },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80'
  },
  {
    cityKey: 'riyadh',
    name: { ar: 'الرياض', en: 'Riyadh' },
    tag: { ar: 'نهضة عقارية متسارعة', en: 'Vision 2030 Growth' },
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=900&q=80'
  },
  {
    cityKey: 'north_coast',
    name: { ar: 'الساحل الشمالي', en: 'North Coast' },
    tag: { ar: 'ريفييرا المتوسط الفاخرة', en: 'Mediterranean Riviera' },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
  },
  {
    cityKey: 'new_cairo',
    name: { ar: 'القاهرة الجديدة', en: 'New Cairo' },
    tag: { ar: 'مجتمعات سكنية متكاملة', en: 'Premier Gated Living' },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
  }
];

export const advisorsData = [
  {
    id: 'adv-1',
    name: { ar: 'خالد العتيبي', en: 'Khalid Al-Otaibi' },
    role: { ar: 'مدير قطاع الفلل والقصور – الرياض', en: 'Head of Private Estates – Riyadh' },
    experience: { ar: '12 عاماً خبرة', en: '12 Years Exp.' },
    deals: { ar: '+180 صفقة ناجحة', en: '180+ Deals Closed' },
    languages: { ar: 'العربية • الإنجليزية', en: 'Arabic · English' },
    phone: '+966 50 482 9100',
    email: 'khalid@aureliaestates.com',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'adv-2',
    name: { ar: 'لينا المنصور', en: 'Lina Al-Mansour' },
    role: { ar: 'مستشارة الاستثمار الفاخر – دبي', en: 'Senior Investment Advisor – Dubai' },
    experience: { ar: '10 أعوام خبرة', en: '10 Years Exp.' },
    deals: { ar: '+240 مليون دولار مبيعات', en: '$240M+ Portfolio Sold' },
    languages: { ar: 'العربية • الإنجليزية • الفرنسية', en: 'Arabic · English · French' },
    phone: '+971 52 904 3311',
    email: 'lina@aureliaestates.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'adv-3',
    name: { ar: 'كريم الشاذلي', en: 'Karim El-Shazly' },
    role: { ar: 'خبير عقارات القاهرة والساحل', en: 'Cairo & North Coast Director' },
    experience: { ar: '14 عاماً خبرة', en: '14 Years Exp.' },
    deals: { ar: '+310 وحدة تم تسليمها', en: '310+ Units Delivered' },
    languages: { ar: 'العربية • الإنجليزية', en: 'Arabic · English' },
    phone: '+20 10 9440 2288',
    email: 'karim@aureliaestates.com',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80'
  }
];
