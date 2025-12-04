import { Unit } from './types';

export const units: Unit[] = [
  {
    id: 1,
    title: "Ünite 1: Tanışma",
    subtitle: "التعارف والتحية",
    description: "تعلم التحيات الأساسية، الأبجدية، الدول والجنسيات، والأعداد.",
    color: "bg-orange-500",
    icon: "handshake",
    content: {
      vocabulary: [
        // التحيات الأساسية
        { turkish: "Merhaba", arabic: "مرحبا" },
        { turkish: "Selam", arabic: "سلام" },
        { turkish: "Günaydın", arabic: "صباح الخير" },
        { turkish: "İyi günler", arabic: "طاب يومك" },
        { turkish: "İyi akşamlar", arabic: "مساء الخير" },
        { turkish: "İyi geceler", arabic: "ليلة سعيدة" },
        { turkish: "Hoşça kal", arabic: "وداعاً (يقولها المغادر)" },
        { turkish: "Güle güle", arabic: "مع السلامة (يقولها الباقي)" },
        { turkish: "Görüşürüz", arabic: "إلى اللقاء" },
        { turkish: "Görüşmek üzere", arabic: "نلتقي قريباً" },
        
        // أسئلة التعارف
        { turkish: "Nasılsınız?", arabic: "كيف حالكم؟ (احترام)" },
        { turkish: "Nasılsın?", arabic: "كيف حالك؟" },
        { turkish: "İyiyim", arabic: "أنا بخير" },
        { turkish: "Fena değil", arabic: "لست سيئاً" },
        { turkish: "Şöyle böyle", arabic: "يعني (بين وبين)" },
        { turkish: "Adınız ne?", arabic: "ما اسمك؟ (احترام)" },
        { turkish: "Adın ne?", arabic: "ما اسمك؟" },
        { turkish: "Benim adım...", arabic: "اسمي..." },
        { turkish: "Memnun oldum", arabic: "تشرفت بك" },
        { turkish: "Ben de", arabic: "وأنا أيضاً" },
        { turkish: "Nerelisiniz?", arabic: "من أين أنتم؟" },
        { turkish: "Nerelsin?", arabic: "من أين أنت؟" },
        { turkish: "Kaç yaşındasın?", arabic: "كم عمرك؟" },
        
        // كلمات مهذبة
        { turkish: "Teşekkür ederim", arabic: "شكراً لك" },
        { turkish: "Teşekkürler", arabic: "شكراً" },
        { turkish: "Sağ ol", arabic: "تسلم" },
        { turkish: "Rica ederim", arabic: "عفواً (رداً على شكراً)" },
        { turkish: "Bir şey değil", arabic: "لا شكر على واجب" },
        { turkish: "Lütfen", arabic: "لو سمحت" },
        { turkish: "Pardon", arabic: "عفواً (للمقاطعة/الاعتذار)" },
        { turkish: "Özür dilerim", arabic: "أعتذر" },
        { turkish: "Affedersiniz", arabic: "المعذرة" },
        { turkish: "Evet", arabic: "نعم" },
        { turkish: "Hayır", arabic: "لا" },
        { turkish: "Tamam", arabic: "حسناً / تمام" },
        { turkish: "Peki", arabic: "حسناً" },
        
        // أشخاص
        { turkish: "Ben", arabic: "أنا" },
        { turkish: "Sen", arabic: "أنت" },
        { turkish: "O", arabic: "هو / هي" },
        { turkish: "Biz", arabic: "نحن" },
        { turkish: "Siz", arabic: "أنتم" },
        { turkish: "Onlar", arabic: "هم" },
        { turkish: "Arkadaş", arabic: "صديق" },
        { turkish: "Öğrenci", arabic: "طالب" },
        { turkish: "Öğretmen", arabic: "معلم" },
        
        // الفصل والمدرسة
        { turkish: "Okul", arabic: "مدرسة" },
        { turkish: "Sınıf", arabic: "صف" },
        { turkish: "Ders", arabic: "درس" },
        { turkish: "Kitap", arabic: "كتاب" },
        { turkish: "Defter", arabic: "دفتر" },
        { turkish: "Kalem", arabic: "قلم" },
        { turkish: "Silgi", arabic: "ممحاة" },
        { turkish: "Çanta", arabic: "حقيبة" },
        { turkish: "Masa", arabic: "طاولة" },
        { turkish: "Sandalye", arabic: "كرسي" },
        { turkish: "Tahta", arabic: "سبورة" },
        { turkish: "Bilgisayar", arabic: "حاسوب" },
        { turkish: "Sözlük", arabic: "قاموس" },
        { turkish: "Sayfa", arabic: "صفحة" },
        { turkish: "Soru", arabic: "سؤال" },
        { turkish: "Cevap", arabic: "جواب" },
        
        // أوامر الفصل
        { turkish: "Oku", arabic: "اقرأ" },
        { turkish: "Yaz", arabic: "اكتب" },
        { turkish: "Dinle", arabic: "استمع" },
        { turkish: "Tekrar et", arabic: "كرر" },
        { turkish: "Aç", arabic: "افتح" },
        { turkish: "Kapat", arabic: "أغلق" },
        { turkish: "Gel", arabic: "تعال" },
        { turkish: "Git", arabic: "اذهب" },
        { turkish: "Otur", arabic: "اجلس" },
        { turkish: "Kalk", arabic: "انهض" },
        { turkish: "Sessiz ol", arabic: "كن هادئاً" },

        // الأرقام 0-20
        { turkish: "Sıfır", arabic: "0" },
        { turkish: "Bir", arabic: "1" },
        { turkish: "İki", arabic: "2" },
        { turkish: "Üç", arabic: "3" },
        { turkish: "Dört", arabic: "4" },
        { turkish: "Beş", arabic: "5" },
        { turkish: "Altı", arabic: "6" },
        { turkish: "Yedi", arabic: "7" },
        { turkish: "Sekiz", arabic: "8" },
        { turkish: "Dokuz", arabic: "9" },
        { turkish: "On", arabic: "10" },
        { turkish: "On bir", arabic: "11" },
        { turkish: "On iki", arabic: "12" },
        { turkish: "Yirmi", arabic: "20" },

        // دول وجنسيات
        { turkish: "Ülke", arabic: "دولة" },
        { turkish: "Milliyet", arabic: "جنسية" },
        { turkish: "Türkiye", arabic: "تركيا" },
        { turkish: "Türk", arabic: "تركي" },
        { turkish: "Türkçe", arabic: "التركية" },
        { turkish: "Suriye", arabic: "سوريا" },
        { turkish: "Mısır", arabic: "مصر" },
        { turkish: "Filistin", arabic: "فلسطين" },
        { turkish: "Ürdün", arabic: "الأردن" },
        { turkish: "Irak", arabic: "العراق" },
        { turkish: "Arap", arabic: "عربي" },
        { turkish: "Arapça", arabic: "العربية" },
        { turkish: "Rusya", arabic: "روسيا" },
        { turkish: "Rus", arabic: "روسي" },
        { turkish: "Rusça", arabic: "الروسية" },
        { turkish: "İngiltere", arabic: "إنجلترا" },
        { turkish: "İngiliz", arabic: "إنجليزي" },
        { turkish: "İngilizce", arabic: "الإنجليزية" },
        { turkish: "Almanya", arabic: "ألمانيا" },
        { turkish: "Alman", arabic: "ألماني" },
        { turkish: "Almanca", arabic: "الألمانية" }
      ],
      grammar: [
        {
          title: "قاعدة الجمع (-lar / -ler)",
          description: "في اللغة التركية، نجمع الأسماء بإضافة لاحقة تعتمد على آخر حرف صوتي في الكلمة:\n- الحروف الصوتية الثقيلة (a, ı, o, u) تأخذ: -lar\n- الحروف الصوتية الخفيفة (e, i, ö, ü) تأخذ: -ler",
          examples: [
            { tr: "Kitap -> Kitaplar", ar: "كتاب -> كتب" },
            { tr: "Masa -> Masalar", ar: "طاولة -> طاولات" },
            { tr: "Kutu -> Kutular", ar: "صندوق -> صناديق" },
            { tr: "Defter -> Defterler", ar: "دفتر -> دفاتر" },
            { tr: "Öğrenci -> Öğrenciler", ar: "طالب -> طلاب" },
            { tr: "Gözlük -> Gözlükler", ar: "نظارة -> نظارات" },
            { tr: "Saat -> Saatler (استثناء)", ar: "ساعة -> ساعات" },
            { tr: "Hayal -> Hayaller (استثناء)", ar: "خيال -> خيالات" }
          ]
        },
        {
          title: "أدوات الإشارة (Bu, Şu, O)",
          description: "تستخدم للإشارة إلى الأشياء حسب المسافة:\nBu: للقريب جداً (هذا).\nŞu: للبعيد قليلاً (ذاك).\nO: للبعيد جداً (ذلك).",
          examples: [
            { tr: "Bu ne? Bu masa.", ar: "ما هذا؟ هذه طاولة." },
            { tr: "Şu ne? Şu harita.", ar: "ما ذاك؟ تلك خريطة." },
            { tr: "O ne? O uçak.", ar: "ما ذلك (البعيد)؟ تلك طائرة." },
            { tr: "Bu kim? Bu Ali.", ar: "من هذا؟ هذا علي." }
          ]
        },
        {
          title: "أداة السؤال (mı, mi, mu, mü)",
          description: "لتحويل الجملة إلى سؤال (هل؟)، نضيف اللاحقة منفصلة عن الكلمة، وتتبع التوافق الصوتي الرباعي:\n- a, ı -> mı\n- e, i -> mi\n- o, u -> mu\n- ö, ü -> mü",
          examples: [
            { tr: "Bu kitap mı?", ar: "هل هذا كتاب؟" },
            { tr: "Ali evde mi?", ar: "هل علي في المنزل؟" },
            { tr: "Bu doktor mu?", ar: "هل هذا طبيب؟" },
            { tr: "O üzgün mü?", ar: "هل هو حزين؟" }
          ]
        }
      ],
      readings: [
        {
          title: "التعارف الأول (Tanışma)",
          turkish: "Ali: Merhaba!\nZeynep: Merhaba!\nAli: Benim adım Ali. Senin adın ne?\nZeynep: Benim adım Zeynep.\nAli: Memnun oldum Zeynep.\nZeynep: Ben de memnun oldum.",
          arabic: "علي: مرحبا!\nزينب: مرحبا!\nعلي: اسمي علي. ما اسمكِ؟\nزينب: اسمي زينب.\nعلي: تشرفت بك يا زينب.\nزينب: وأنا أيضاً تشرفت."
        },
        {
          title: "كيف حالك؟ (Nasılsın?)",
          turkish: "Ahmet: Selam Hasan, nasılsın?\nHasan: İyiyim Ahmet, teşekkür ederim. Sen nasılsın?\nAhmet: Teşekkürler, ben de iyiyim.\nHasan: Görüşürüz.\nAhmet: Görüşürüz.",
          arabic: "أحمد: سلام حسن، كيف حالك؟\nحسن: أنا بخير يا أحمد، شكراً لك. كيف حالك أنت؟\nأحمد: شكراً، أنا أيضاً بخير.\nحسن: إلى اللقاء.\nأحمد: إلى اللقاء."
        },
        {
          title: "من أين أنت؟ (Nerelisiniz?)",
          turkish: "Öğretmen: Adınız ne?\nÖğrenci: Adım John.\nÖğretmen: Nerelisiniz John Bey?\nÖğrenci: İngiltereliyim. Siz nerelisiniz?\nÖğretmen: Ben Türkiyelliyim.",
          arabic: "المعلم: ما اسمك؟\nالطالب: اسمي جون.\nالمعلم: من أين أنت يا سيد جون؟\nالطالب: أنا من إنجلترا. من أين أنت؟\nالمعلم: أنا من تركيا."
        },
        {
          title: "في الفصل (Sınıfta)",
          turkish: "Öğretmen: Günaydın arkadaşlar.\nSınıf: Günaydın öğretmenim.\nÖğretmen: Bugün nasılsınız?\nSınıf: İyiyiz, sağ olun. Siz nasılsınız?\nÖğretmen: Ben de iyiyim. Lütfen oturun ve kitaplarınızı açın.",
          arabic: "المعلم: صباح الخير يا أصدقاء.\nالصف: صباح الخير يا معلمي.\nالمعلم: كيف حالكم اليوم؟\nالصف: نحن بخير، شكراً لك. كيف حالك أنت؟\nالمعلم: أنا أيضاً بخير. لو سمحتم اجلسوا وافتحوا كتبكم."
        }
      ],
      quiz: [
        {
          question: "أي مما يلي يعني 'صباح الخير'؟",
          options: ["İyi geceler", "Günaydın", "İyi günler", "Merhaba"],
          correctAnswer: 1
        },
        {
          question: "جمع كلمة 'Kalem' (قلم) هو:",
          options: ["Kalemlar", "Kalemler", "Kalem", "Kaleminiz"],
          correctAnswer: 1
        },
        {
          question: "أكمل: Bu kitap ____?",
          options: ["mi", "mı", "mu", "mü"],
          correctAnswer: 1
        },
        {
          question: "ما معنى 'Nerelisiniz'؟",
          options: ["ما اسمك؟", "كيف حالك؟", "من أين أنت؟", "كم عمرك؟"],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: 2,
    title: "Ünite 2: Ailemiz",
    subtitle: "عائلتنا والمنزل",
    description: "أفراد العائلة، المنزل، الأرقام الكبيرة، الملكية وحروف الجر.",
    color: "bg-pink-500",
    icon: "users",
    content: {
      vocabulary: [
        // العائلة
        { turkish: "Aile", arabic: "عائلة" },
        { turkish: "Baba", arabic: "أب" },
        { turkish: "Anne", arabic: "أم" },
        { turkish: "Oğul", arabic: "ابن" },
        { turkish: "Kız", arabic: "بنت" },
        { turkish: "Kardeş", arabic: "أخ/أخت (بشكل عام)" },
        { turkish: "Erkek kardeş", arabic: "أخ" },
        { turkish: "Kız kardeş", arabic: "أخت" },
        { turkish: "Ağabey (Abi)", arabic: "أخ أكبر" },
        { turkish: "Abla", arabic: "أخت كبرى" },
        { turkish: "Dede", arabic: "جد" },
        { turkish: "Nine / Babaanne", arabic: "جدة" },
        { turkish: "Anneanne", arabic: "جدة (أم الأم)" },
        { turkish: "Amca", arabic: "عم" },
        { turkish: "Hala", arabic: "عمة" },
        { turkish: "Dayı", arabic: "خال" },
        { turkish: "Teyze", arabic: "خالة" },
        { turkish: "Kuzen", arabic: "ابن العم/الخال" },
        { turkish: "Yeğen", arabic: "ابن الأخ/الأخت" },
        { turkish: "Torun", arabic: "حفيد" },
        { turkish: "Eş", arabic: "زوج / زوجة" },
        { turkish: "Bebek", arabic: "رضيع" },
        { turkish: "Çocuk", arabic: "طفل / ولد" },
        { turkish: "Adam", arabic: "رجل" },
        { turkish: "Kadın", arabic: "امرأة" },
        
        // المنزل والأثاث
        { turkish: "Ev", arabic: "منزل" },
        { turkish: "Apartman", arabic: "بناء سكني" },
        { turkish: "Daire", arabic: "شقة" },
        { turkish: "Site", arabic: "مجمع سكني" },
        { turkish: "Bahçe", arabic: "حديقة" },
        { turkish: "Kapı", arabic: "باب" },
        { turkish: "Zil", arabic: "جرس" },
        { turkish: "Giriş", arabic: "مدخل" },
        { turkish: "Kat", arabic: "طابق" },
        { turkish: "Oda", arabic: "غرفة" },
        { turkish: "Salon", arabic: "صالون" },
        { turkish: "Mutfak", arabic: "مطبخ" },
        { turkish: "Banyo", arabic: "حمام" },
        { turkish: "Tuvalet", arabic: "مرحاض" },
        { turkish: "Yatak odası", arabic: "غرفة نوم" },
        { turkish: "Balkon", arabic: "شرفة" },
        { turkish: "Pencere", arabic: "نافذة" },
        { turkish: "Duvar", arabic: "جدار" },
        { turkish: "Tavan", arabic: "سقف" },
        { turkish: "Taban", arabic: "أرضية" },
        
        // الأثاث
        { turkish: "Eşya", arabic: "أغراض / أثاث" },
        { turkish: "Koltuk", arabic: "كنبة / مقعد" },
        { turkish: "Kanepe", arabic: "أريكة" },
        { turkish: "Sehpa", arabic: "طاولة صغيرة" },
        { turkish: "Halı", arabic: "سجادة" },
        { turkish: "Perde", arabic: "ستارة" },
        { turkish: "Lamba", arabic: "مصباح" },
        { turkish: "Yatak", arabic: "سرير" },
        { turkish: "Dolap", arabic: "خزانة" },
        { turkish: "Ayna", arabic: "مرآة" },
        { turkish: "Buzdolabı", arabic: "ثلاجة" },
        { turkish: "Çamaşır makinesi", arabic: "غسالة" },
        { turkish: "Bulaşık makinesi", arabic: "جلاية صحون" },
        { turkish: "Fırın", arabic: "فرن" },
        { turkish: "Ocak", arabic: "موقد غاز" },
        { turkish: "Ütü", arabic: "مكواة" },
        { turkish: "Televizyon", arabic: "تلفاز" },

        // صفات للمكان
        { turkish: "Büyük", arabic: "كبير" },
        { turkish: "Küçük", arabic: "صغير" },
        { turkish: "Geniş", arabic: "واسع" },
        { turkish: "Dar", arabic: "ضيق" },
        { turkish: "Yeni", arabic: "جديد" },
        { turkish: "Eski", arabic: "قديم" },
        { turkish: "Temiz", arabic: "نظيف" },
        { turkish: "Kirli", arabic: "متسخ" },
        { turkish: "Güzel", arabic: "جميل" },
        { turkish: "Rahat", arabic: "مريح" },
        
        // الأرقام 10-100
        { turkish: "On", arabic: "10" },
        { turkish: "Yirmi", arabic: "20" },
        { turkish: "Otuz", arabic: "30" },
        { turkish: "Kırk", arabic: "40" },
        { turkish: "Elli", arabic: "50" },
        { turkish: "Altmış", arabic: "60" },
        { turkish: "Yetmiş", arabic: "70" },
        { turkish: "Seksen", arabic: "80" },
        { turkish: "Doksan", arabic: "90" },
        { turkish: "Yüz", arabic: "100" },
        { turkish: "Bin", arabic: "1000" },

        // الوجود
        { turkish: "Var", arabic: "يوجد" },
        { turkish: "Yok", arabic: "لا يوجد" }
      ],
      grammar: [
        {
          title: "لواحق الملكية (İyelik Ekleri)",
          description: "تضاف للأسماء لتحديد مالك الشيء. تختلف اللاحقة حسب آخر حرف صوتي وحسب الضمير.\nBenim (لي): -m, -ım, -im, -um, -üm\nSenin (لك): -n, -ın, -in, -un, -ün\nOnun (له): -ı, -i, -u, -ü\nBizim (لنا): -mız, -miz, -muz, -müz\nSizin (لكم): -nız, -niz, -nuz, -nüz\nOnların (لهم): -ları, -leri",
          examples: [
            { tr: "Benim evim", ar: "منزلي" },
            { tr: "Senin araban", ar: "سيارتك" },
            { tr: "Onun kalemi", ar: "قلمه" },
            { tr: "Bizim okulumuz", ar: "مدرستنا" },
            { tr: "Sizin eviniz", ar: "منزلكم" }
          ]
        },
        {
          title: "حالة التواجد (Bulunma Hâli -da/-de)",
          description: "تستخدم للدلالة على المكان (في / عند / على). تتغير اللاحقة (-da, -de, -ta, -te) حسب التوافق الصوتي وقاعدة فستقجي شهاب (f,s,t,k,ç,ş,h,p).",
          examples: [
            { tr: "Evde", ar: "في المنزل" },
            { tr: "Okulda", ar: "في المدرسة" },
            { tr: "Masada", ar: "على الطاولة" },
            { tr: "Sınıfta (انتهت بـ f)", ar: "في الصف" },
            { tr: "Ahmet'te (انتهت بـ t)", ar: "عند أحمد" }
          ]
        },
        {
          title: "Var / Yok (يوجد / لا يوجد)",
          description: "تستخدم للتعبير عن وجود الشيء أو عدمه، أو للملكية (لدي).",
          examples: [
            { tr: "Evde süt var.", ar: "يوجد حليب في المنزل." },
            { tr: "Okulda havuz yok.", ar: "لا يوجد مسبح في المدرسة." },
            { tr: "Benim arabam var.", ar: "لدي سيارة." },
            { tr: "Senin paran yok mu?", ar: "أليس لديك مال؟" }
          ]
        }
      ],
      readings: [
        {
          title: "عائلتي (Benim Ailem)",
          turkish: "Merhaba, benim adım Sevim. Ben öğrenciyim. Bu benim ailem. Babamın adı Kemal, o 45 yaşında ve doktor. Annemin adı Fatma, o 40 yaşında ve öğretmen. Bir abim var, adı Murat. Murat üniversitede öğrenci. Bir de küçük kardeşim var, adı Elif.",
          arabic: "مرحبا، اسمي سيفيم. أنا طالبة. هذه عائلتي. اسم أبي كمال، عمره 45 عاماً وهو طبيب. اسم أمي فاطمة، عمرها 40 عاماً وهي معلمة. لدي أخ أكبر، اسمه مراد. مراد طالب في الجامعة. ولدي أيضاً أخت صغيرة، اسمها إليف."
        },
        {
          title: "منزلك الجديد (Yeni Evin)",
          turkish: "Ahmet: Yeni evin nasıl?\nMehmet: Çok güzel. Evim Kadıköy'de.\nAhmet: Evde kaç oda var?\nMehmet: Üç oda ve bir salon var. Ayrıca büyük bir balkon var.\nAhmet: Güle güle otur.",
          arabic: "أحمد: كيف هو منزلك الجديد؟\nمحمد: جميل جداً. منزلي في كاديكوي.\nأحمد: كم غرفة في المنزل؟\nمحمد: يوجد ثلاث غرف وصالون. بالإضافة إلى شرفة كبيرة.\nأحمد: أتمنى لك إقامة سعيدة (تعبير تهنئة)."
        },
        {
          title: "أين القلم؟ (Kalem Nerede?)",
          turkish: "- Kalem nerede?\n- Kalem masada.\n- Defter nerede?\n- Defter çantada.\n- Öğretmen nerede?\n- Öğretmen sınıfta.\n- Ali nerede?\n- Ali kantinde.",
          arabic: "- أين القلم؟\n- القلم على الطاولة.\n- أين الدفتر؟\n- الدفتر في الحقيبة.\n- أين المعلم؟\n- المعلم في الصف.\n- أين علي؟\n- علي في الكانتين (المقصف)."
        }
      ],
      quiz: [
        {
          question: "ما معنى 'Dayı'؟",
          options: ["عم", "خال", "جد", "أخ"],
          correctAnswer: 1
        },
        {
          question: "Senin ______ (غرفتك)",
          options: ["odam", "odası", "odan", "odanız"],
          correctAnswer: 2
        },
        {
          question: "أين الكتاب؟ Kitap çanta___",
          options: ["da", "de", "ta", "te"],
          correctAnswer: 0
        },
        {
          question: "Sınıf___ (في الصف)",
          options: ["ta", "da", "te", "de"],
          correctAnswer: 0
        },
        {
          question: "كلمة تعني 'يوجد'؟",
          options: ["Yok", "Var", "Değil", "Evet"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 3,
    title: "Ünite 3: Günlük Hayat",
    subtitle: "الحياة اليومية والوقت",
    description: "الأيام، الأشهر، الوقت، الروتين اليومي، والفعل المضارع.",
    color: "bg-green-500",
    icon: "clock",
    content: {
      vocabulary: [
        // الوقت
        { turkish: "Zaman", arabic: "وقت" },
        { turkish: "Saat", arabic: "ساعة" },
        { turkish: "Dakika", arabic: "دقيقة" },
        { turkish: "Saniye", arabic: "ثانية" },
        { turkish: "Yarım", arabic: "نصف" },
        { turkish: "Çeyrek", arabic: "ربع" },
        { turkish: "Buçuk", arabic: "ونصف (مع الساعة)" },
        
        // الأيام والفترات
        { turkish: "Gün", arabic: "يوم" },
        { turkish: "Hafta", arabic: "أسبوع" },
        { turkish: "Ay", arabic: "شهر" },
        { turkish: "Yıl", arabic: "سنة" },
        { turkish: "Bugün", arabic: "اليوم" },
        { turkish: "Yarın", arabic: "غداً" },
        { turkish: "Dün", arabic: "أمس" },
        { turkish: "Sabah", arabic: "صباح" },
        { turkish: "Öğle", arabic: "ظهر" },
        { turkish: "Öğleden sonra", arabic: "بعد الظهر" },
        { turkish: "Akşam", arabic: "مساء" },
        { turkish: "Gece", arabic: "ليل" },
        { turkish: "Hafta içi", arabic: "أيام الأسبوع" },
        { turkish: "Hafta sonu", arabic: "عطلة نهاية الأسبوع" },
        
        // أيام الأسبوع
        { turkish: "Pazartesi", arabic: "الاثنين" },
        { turkish: "Salı", arabic: "الثلاثاء" },
        { turkish: "Çarşamba", arabic: "الأربعاء" },
        { turkish: "Perşembe", arabic: "الخميس" },
        { turkish: "Cuma", arabic: "الجمعة" },
        { turkish: "Cumartesi", arabic: "السبت" },
        { turkish: "Pazar", arabic: "الأحد" },

        // الأشهر
        { turkish: "Ocak", arabic: "كانون الثاني (يناير)" },
        { turkish: "Şubat", arabic: "شباط (فبراير)" },
        { turkish: "Mart", arabic: "آذار (مارس)" },
        { turkish: "Nisan", arabic: "نيسان (أبريل)" },
        { turkish: "Mayıs", arabic: "أيار (مايو)" },
        { turkish: "Haziran", arabic: "حزيران (يونيو)" },
        { turkish: "Temmuz", arabic: "تموز (يوليو)" },
        { turkish: "Ağustos", arabic: "آب (أغسطس)" },
        { turkish: "Eylül", arabic: "أيلول (سبتمبر)" },
        { turkish: "Ekim", arabic: "تشرين الأول (أكتوبر)" },
        { turkish: "Kasım", arabic: "تشرين الثاني (نوفمبر)" },
        { turkish: "Aralık", arabic: "كانون الأول (ديسمبر)" },

        // أفعال روتينية (مصدر)
        { turkish: "Uyanmak", arabic: "الاستيقاظ" },
        { turkish: "Kalkmak", arabic: "النهوض" },
        { turkish: "Yüz yıkamak", arabic: "غسل الوجه" },
        { turkish: "Diş fırçalamak", arabic: "تنظيف الأسنان" },
        { turkish: "Duş almak", arabic: "الاستحمام" },
        { turkish: "Giyinmek", arabic: "ارتداء الملابس" },
        { turkish: "Kahvaltı etmek", arabic: "تناول الفطور" },
        { turkish: "Evden çıkmak", arabic: "الخروج من المنزل" },
        { turkish: "Otobüse binmek", arabic: "ركوب الحافلة" },
        { turkish: "İşe gitmek", arabic: "الذهاب للعمل" },
        { turkish: "Çalışmak", arabic: "العمل / الدراسة" },
        { turkish: "Yemek yemek", arabic: "تناول الطعام" },
        { turkish: "Eve dönmek", arabic: "العودة للمنزل" },
        { turkish: "Ders çalışmak", arabic: "المذاكرة" },
        { turkish: "Kitap okumak", arabic: "قراءة كتاب" },
        { turkish: "Televizyon izlemek", arabic: "مشاهدة التلفاز" },
        { turkish: "Müzik dinlemek", arabic: "الاستماع للموسيقى" },
        { turkish: "Uyumak", arabic: "النوم" },
        { turkish: "Yatmak", arabic: "الاستلقاء/النوم" },
        { turkish: "Spor yapmak", arabic: "ممارسة الرياضة" },
        { turkish: "Alışveriş yapmak", arabic: "التسوق" },
        { turkish: "Temizlik yapmak", arabic: "التنظيف" },
        
        // ظروف زمان
        { turkish: "Her gün", arabic: "كل يوم" },
        { turkish: "Genellikle", arabic: "عادةً" },
        { turkish: "Sık sık", arabic: "غالباً" },
        { turkish: "Bazen", arabic: "أحياناً" },
        { turkish: "Hiç", arabic: "أبداً" },
        { turkish: "Şimdi", arabic: "الآن" },
        { turkish: "Sonra", arabic: "لاحقاً / بعد" },
        { turkish: "Önce", arabic: "قبل" },
        { turkish: "Erken", arabic: "باكراً" },
        { turkish: "Geç", arabic: "متأخراً" }
      ],
      grammar: [
        {
          title: "الزمن المضارع (Şimdiki Zaman -yor)",
          description: "يستخدم للتعبير عن حدث يقع الآن أو كروتين مستمر.\nالقاعدة الأساسية: جذر الفعل + (ı, i, u, ü) + yor + ملحق الضمير.\nمثال: Gel + i + yor + um",
          examples: [
            { tr: "Geliyorum", ar: "أنا قادم" },
            { tr: "Gidiyorsun (t->d)", ar: "أنت ذاهب" },
            { tr: "Okuyor", ar: "هو يقرأ" },
            { tr: "Yazıyoruz", ar: "نحن نكتب" },
            { tr: "İzliyorsunuz", ar: "أنتم تشاهدون" },
            { tr: "Dinliyorlar", ar: "هم يستمعون" }
          ]
        },
        {
          title: "النفي في المضارع (-mıyor, -miyor)",
          description: "لنفي الفعل المضارع نضع m بعد الجذر مباشرة ثم التوافق الصوتي.",
          examples: [
            { tr: "Gelmiyorum", ar: "أنا لا آتي" },
            { tr: "Bilmiyorum", ar: "أنا لا أعرف" },
            { tr: "Sevmiyoruz", ar: "نحن لا نحب" }
          ]
        },
        {
          title: "السؤال في المضارع",
          description: "الفعل + yor + أداة السؤال والضمير؟",
          examples: [
            { tr: "Geliyor musun?", ar: "هل أنت قادم؟" },
            { tr: "Okuyor mu?", ar: "هل هو يقرأ؟" },
            { tr: "Biliyor musunuz?", ar: "هل تعرفون؟" }
          ]
        },
        {
          title: "الساعة (Saat kaç? / Saatte)",
          description: "للسؤال عن الوقت: Saat kaç? (كم الساعة؟)\nللتعبير عن توقيت فعل: Saat kaçta? (في أي ساعة؟)",
          examples: [
            { tr: "Saat üç.", ar: "الساعة الثالثة." },
            { tr: "Saat üç buçuk.", ar: "الساعة الثالثة والنصف." },
            { tr: "Saat beşi on geçiyor.", ar: "الساعة الخامسة وعشر دقائق." },
            { tr: "Saat yedide kalkıyorum.", ar: "أستيقظ في الساعة السابعة." }
          ]
        }
      ],
      readings: [
        {
          title: "يوم عادي (Sıradan Bir Gün)",
          turkish: "Ben her sabah saat 07.00'de kalkıyorum. Elimi yüzümü yıkıyorum ve kahvaltı ediyorum. Saat 08.00'de evden çıkıyorum. Otobüsle işe gidiyorum. İşte çok çalışıyorum. Öğlen saat 12.30'da yemek yiyorum. Akşam saat 18.00'de işten çıkıyorum ve eve dönüyorum.",
          arabic: "أنا أستيقظ كل صباح في السابعة. أغسل وجهي ويديه وأتناول الفطور. أخرج من المنزل في الثامنة. أذهب للعمل بالحافلة. أعمل كثيراً. أتناول الغداء في الـ 12:30. أخرج من العمل في السادسة مساءً وأعود للمنزل."
        },
        {
          title: "ماذا تفعل في العطلة؟ (Hafta Sonu Ne Yapıyorsun?)",
          turkish: "Ali: Hafta sonu ne yapıyorsun?\nCan: Cumartesi günü sinemaya gidiyorum. Pazar günü evde dinleniyorum. Sen ne yapıyorsun?\nAli: Ben genellikle arkadaşlarımla buluşuyorum ve futbol oynuyorum.",
          arabic: "علي: ماذا تفعل في عطلة نهاية الأسبوع؟\nجان: يوم السبت أذهب إلى السينما. يوم الأحد أستريح في المنزل. وأنت ماذا تفعل؟\nعلي: أنا عادة ألتقي بأصدقائي وألعب كرة القدم."
        },
        {
          title: "موعد (Randevu)",
          turkish: "- Alo, merhaba Ayşe. Müsait misin?\n- Evet, müsaitim.\n- Yarın akşam ne yapıyorsun? Sinemaya gidelim mi?\n- Olur, gidelim. Saat kaçta?\n- Saat sekizde.\n- Tamam, görüşürüz.",
          arabic: "- ألو، مرحبا عائشة. هل أنت متاحة؟\n- نعم، متاحة.\n- ماذا تفعلين غداً مساءً؟ هل نذهب للسينما؟\n- موافقة، لنذهب. في أي ساعة؟\n- في الساعة الثامنة.\n- حسناً، نلتقي."
        }
      ],
      quiz: [
        {
          question: "كيف نقول 'أنا ذاهب'؟",
          options: ["Gidiyor", "Gidiyorum", "Gitti", "Gideceğim"],
          correctAnswer: 1
        },
        {
          question: "نفي جملة 'Geliyorum' هو:",
          options: ["Gelmiyorum", "Geliyor değilim", "Gelmeyorum", "Gelmedim"],
          correctAnswer: 0
        },
        {
          question: "معنى 'Kahvaltı etmek'؟",
          options: ["تناول العشاء", "النوم", "تناول الفطور", "الاستحمام"],
          correctAnswer: 2
        },
        {
          question: "الساعة 3:30 (Saat...)",
          options: ["üç", "üç buçuk", "üç çeyrek", "dört"],
          correctAnswer: 1
        },
        {
          question: "اليوم الأحد، غداً ______",
          options: ["Cumartesi", "Salı", "Pazartesi", "Cuma"],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: 4,
    title: "Ünite 4: Çevremiz",
    subtitle: "مدينتنا وبيئتنا",
    description: "الأماكن العامة، وصف المكان، الاتجاهات، والسؤال عن العنوان.",
    color: "bg-blue-500",
    icon: "map-pin",
    content: {
      vocabulary: [
        // أماكن المدينة
        { turkish: "Şehir", arabic: "مدينة" },
        { turkish: "Merkez", arabic: "مركز" },
        { turkish: "Bina", arabic: "بناء" },
        { turkish: "Yer", arabic: "مكان" },
        { turkish: "Hastane", arabic: "مستشفى" },
        { turkish: "Eczane", arabic: "صيدلية" },
        { turkish: "Postane", arabic: "مكتب بريد" },
        { turkish: "Banka", arabic: "بنك" },
        { turkish: "Okul", arabic: "مدرسة" },
        { turkish: "Kütüphane", arabic: "مكتبة (للقراءة)" },
        { turkish: "Kitapçı", arabic: "مكتبة (للبيع)" },
        { turkish: "Kırtasiye", arabic: "قرطاسية" },
        { turkish: "Market", arabic: "بقالة / سوبرماركت" },
        { turkish: "Süpermarket", arabic: "سوبرماركت" },
        { turkish: "Fırın", arabic: "فرن / مخبز" },
        { turkish: "Kasap", arabic: "لحام" },
        { turkish: "Manav", arabic: "بائع خضار" },
        { turkish: "Pastane", arabic: "محل حلويات" },
        { turkish: "Lokanta", arabic: "مطعم (شعبي)" },
        { turkish: "Restoran", arabic: "مطعم" },
        { turkish: "Kafe", arabic: "مقهى" },
        { turkish: "Mağaza", arabic: "متجر" },
        { turkish: "Alışveriş Merkezi (AVM)", arabic: "مول" },
        { turkish: "Sinema", arabic: "سينما" },
        { turkish: "Tiyatro", arabic: "مسرح" },
        { turkish: "Müze", arabic: "متحف" },
        { turkish: "Cami", arabic: "مسجد" },
        { turkish: "Kilise", arabic: "كنيسة" },
        { turkish: "Otel", arabic: "فندق" },
        { turkish: "Park", arabic: "حديقة" },
        { turkish: "Polis karakolu", arabic: "مركز شرطة" },
        { turkish: "Belediye", arabic: "بلدية" },
        
        // الشارع والاتجاهات
        { turkish: "Cadde", arabic: "شارع رئيسي" },
        { turkish: "Sokak", arabic: "شارع فرعي / زقاق" },
        { turkish: "Mahalle", arabic: "حي" },
        { turkish: "Meydan", arabic: "ميدان / ساحة" },
        { turkish: "Yol", arabic: "طريق" },
        { turkish: "Köşe", arabic: "زاوية" },
        { turkish: "Trafik lambası", arabic: "إشارة مرور" },
        { turkish: "Sağ", arabic: "يمين" },
        { turkish: "Sol", arabic: "يسار" },
        { turkish: "İleri", arabic: "أمام" },
        { turkish: "Geri", arabic: "خلف" },
        { turkish: "Düz git", arabic: "اذهب مستقيماً" },
        { turkish: "Dön", arabic: "انعطف" },
        { turkish: "Geç", arabic: "اعبر / تجاوز" },
        
        // ظروف المكان (الموقع)
        { turkish: "Burada", arabic: "هنا" },
        { turkish: "Şurada", arabic: "هناك (قريب)" },
        { turkish: "Orada", arabic: "هناك (بعيد)" },
        { turkish: "Nerede?", arabic: "أين؟" },
        { turkish: "Yakın", arabic: "قريب" },
        { turkish: "Uzak", arabic: "بعيد" },
        { turkish: "Üstünde", arabic: "فوق / على" },
        { turkish: "Altında", arabic: "تحت" },
        { turkish: "Yanında", arabic: "بجانب" },
        { turkish: "Karşısında", arabic: "مقابل" },
        { turkish: "Arasında", arabic: "بين" },
        { turkish: "İçinde", arabic: "داخل" },
        { turkish: "Dışında", arabic: "خارج" },
        { turkish: "Önünde", arabic: "أمام" },
        { turkish: "Arkasında", arabic: "خلف" }
      ],
      grammar: [
        {
          title: "حالة التوجه (Yönelme Hâli -a/-e)",
          description: "تعني 'إلى'. تضاف للكلمة للدلالة على الحركة نحوها.\n- a, ı, o, u -> a\n- e, i, ö, ü -> e\n* انتبه لقاعدة كاتشب (k,t,ç,p تتحول إلى ğ,d,c,b) إذا جاء بعدها صوتي.",
          examples: [
            { tr: "Okula gidiyorum", ar: "ذاهب إلى المدرسة" },
            { tr: "Eve dönüyorum", ar: "عائد إلى المنزل" },
            { tr: "Markete", ar: "إلى الماركت" },
            { tr: "Sokağa (k->ğ)", ar: "إلى الشارع" }
          ]
        },
        {
          title: "حالة الابتعاد (Ayrılma Hâli -dan/-den)",
          description: "تعني 'من'. تضاف للكلمة للدلالة على الحركة منها. تتغير حسب التوافق الصوتي وفستقجي شهاب.",
          examples: [
            { tr: "Okuldan geliyorum", ar: "قادم من المدرسة" },
            { tr: "Evden çıkıyorum", ar: "خارج من المنزل" },
            { tr: "İşten (ş -> t)", ar: "من العمل" },
            { tr: "Marketten", ar: "من الماركت" }
          ]
        },
        {
          title: "تحديد الموقع (Altında, Üstünde, Yanında...)",
          description: "التركيب: المضاف إليه (in/ın) + الاسم + لاحقة الملكية والمكان (ında/inde).\nمثال: الطاولة + (in) + تحت + (ında) = Masanın altında.",
          examples: [
            { tr: "Masanın üstünde", ar: "فوق الطاولة" },
            { tr: "Okulun yanında", ar: "بجانب المدرسة" },
            { tr: "Kutunun içinde", ar: "داخل الصندوق" },
            { tr: "Bankanın karşısında", ar: "مقابل البنك" }
          ]
        }
      ],
      readings: [
        {
          title: "وصف الطريق (Adres Tarifi)",
          turkish: "- Pardon, en yakın banka nerede?\n- Dümdüz gidin, sonra sağa dönün. Eczanenin yanında.\n- Uzak mı?\n- Hayır, çok yakın. Yürüyerek 5 dakika.\n- Teşekkür ederim.\n- Rica ederim.",
          arabic: "- المعذرة، أين أقرب بنك؟\n- اذهب مستقيماً تماماً، ثم انعطف يميناً. إنه بجانب الصيدلية.\n- هل هو بعيد؟\n- لا، قريب جداً. 5 دقائق مشياً.\n- شكراً لك.\n- عفواً."
        },
        {
          title: "أين القطة؟ (Kedi Nerede?)",
          turkish: "Kedi masanın altında. Köpek bahçede. Kuş ağacın üstünde. Araba evin önünde. Çocuklar parkta oynuyor.",
          arabic: "القطة تحت الطاولة. الكلب في الحديقة. العصفور فوق الشجرة. السيارة أمام المنزل. الأطفال يلعبون في الحديقة."
        },
        {
          title: "في الحي (Mahallede)",
          turkish: "Bizim mahallemiz çok güzel. Evimin yanında bir park var. Parkın karşısında büyük bir market var. Marketin yanında fırın var. Ben her sabah fırından ekmek alıyorum.",
          arabic: "حينا جميل جداً. يوجد حديقة بجانب منزلي. مقابل الحديقة يوجد سوبرماركت كبير. بجانب السوبرماركت يوجد فرن. أنا أشتري الخبز من الفرن كل صباح."
        }
      ],
      quiz: [
        {
          question: "أين تذهب؟ Nereye _______?",
          options: ["gidiyorsun", "geliyorsun", "kalkıyorsun", "yiyorsun"],
          correctAnswer: 0
        },
        {
          question: "أنا قادم __ المدرسة (Okul___ geliyorum)",
          options: ["da", "a", "dan", "ı"],
          correctAnswer: 2
        },
        {
          question: "الكرة تحت الطاولة. Top masanın _______",
          options: ["üstünde", "altında", "içinde", "yanında"],
          correctAnswer: 1
        },
        {
          question: "معنى 'Sağa dön'؟",
          options: ["انعطف يساراً", "انعطف يميناً", "اذهب للأمام", "ارجع للخلف"],
          correctAnswer: 1
        },
        {
          question: "عكس كلمة 'Yakın' (قريب)؟",
          options: ["Güzel", "Uzak", "Eski", "Büyük"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 5,
    title: "Ünite 5: Meslekler ve Sağlık",
    subtitle: "المهن، الصحة، والجسم",
    description: "أسماء المهن، ماذا تعمل؟، أعضاء الجسم، الأمراض وعند الطبيب.",
    color: "bg-purple-500",
    icon: "briefcase",
    content: {
      vocabulary: [
        // المهن
        { turkish: "Meslek", arabic: "مهنة" },
        { turkish: "Doktor", arabic: "طبيب" },
        { turkish: "Dişçi", arabic: "طبيب أسنان" },
        { turkish: "Hemşire", arabic: "ممرضة" },
        { turkish: "Eczacı", arabic: "صيدلاني" },
        { turkish: "Öğretmen", arabic: "معلم" },
        { turkish: "Mühendis", arabic: "مهندس" },
        { turkish: "Mimar", arabic: "معماري" },
        { turkish: "Avukat", arabic: "محامي" },
        { turkish: "Polis", arabic: "شرطي" },
        { turkish: "Asker", arabic: "جندي" },
        { turkish: "Şoför", arabic: "سائق" },
        { turkish: "Terzi", arabic: "خياط" },
        { turkish: "Berber", arabic: "حلاق" },
        { turkish: "Kuaför", arabic: "كوافير" },
        { turkish: "Garson", arabic: "نادل" },
        { turkish: "Aşçı", arabic: "طباخ" },
        { turkish: "İşçi", arabic: "عامل" },
        { turkish: "Temizlikçi", arabic: "عامل نظافة" },
        { turkish: "Sekreter", arabic: "سكرتير" },
        { turkish: "Memur", arabic: "موظف حكومي" },
        { turkish: "Postacı", arabic: "ساعي بريد" },
        { turkish: "Satıcı", arabic: "بائع" },
        { turkish: "Çiftçi", arabic: "مزارع" },
        { turkish: "Veteriner", arabic: "طبيب بيطري" },
        { turkish: "Futbolcu", arabic: "لاعب كرة قدم" },
        { turkish: "Şarkıcı", arabic: "مغني" },
        { turkish: "Oyuncu", arabic: "ممثل" },
        { turkish: "Gazeteci", arabic: "صحفي" },
        { turkish: "Pilot", arabic: "طيار" },
        { turkish: "Emekli", arabic: "متقاعد" },
        { turkish: "Ev hanımı", arabic: "ربة منزل" },
        
        // الجسم
        { turkish: "Vücut", arabic: "جسم" },
        { turkish: "Baş", arabic: "رأس" },
        { turkish: "Saç", arabic: "شعر" },
        { turkish: "Yüz", arabic: "وجه" },
        { turkish: "Alın", arabic: "جبين" },
        { turkish: "Göz", arabic: "عين" },
        { turkish: "Kulak", arabic: "أذن" },
        { turkish: "Burun", arabic: "أنف" },
        { turkish: "Ağız", arabic: "فم" },
        { turkish: "Diş", arabic: "سن" },
        { turkish: "Dil", arabic: "لسان" },
        { turkish: "Boğaz", arabic: "حلق" },
        { turkish: "Boyun", arabic: "رقبة" },
        { turkish: "Omuz", arabic: "كتف" },
        { turkish: "Sırt", arabic: "ظهر" },
        { turkish: "Göğüs", arabic: "صدر" },
        { turkish: "Karın", arabic: "بطن" },
        { turkish: "Kol", arabic: "ذراع" },
        { turkish: "El", arabic: "يد" },
        { turkish: "Parmak", arabic: "أصبع" },
        { turkish: "Bacak", arabic: "ساق" },
        { turkish: "Diz", arabic: "ركبة" },
        { turkish: "Ayak", arabic: "قدم" },
        
        // الصحة والأمراض
        { turkish: "Sağlık", arabic: "صحة" },
        { turkish: "Hasta", arabic: "مريض" },
        { turkish: "Hastalık", arabic: "مرض" },
        { turkish: "Ağrı", arabic: "ألم" },
        { turkish: "Ateş", arabic: "حرارة" },
        { turkish: "Öksürük", arabic: "سعال" },
        { turkish: "Grip", arabic: "انفلونزا" },
        { turkish: "Nezle", arabic: "زكام" },
        { turkish: "Yorgun", arabic: "متعب" },
        { turkish: "Halsiz", arabic: "مرهق / فاقد للطاقة" },
        { turkish: "İlaç", arabic: "دواء" },
        { turkish: "Hap", arabic: "حبوب" },
        { turkish: "Şurup", arabic: "شراب" },
        { turkish: "İğne", arabic: "إبرة / حقنة" },
        { turkish: "Reçete", arabic: "وصفة طبية" },
        { turkish: "Muayene", arabic: "معاينة" },
        { turkish: "Randevu", arabic: "موعد" },
        { turkish: "Acil", arabic: "طوارئ / عاجل" },
        { turkish: "Geçmiş olsun", arabic: "سلامتك (تقال للمريض)" }
      ],
      grammar: [
        {
          title: "لاحقة المهنة (-cı/-ci)",
          description: "تحول الاسم إلى مهنة أو شخص يقوم بالعمل.\n- cı, -ci, -cu, -cü\n- çı, -çi, -çu, -çü (بعد فستقجي شهاب)",
          examples: [
            { tr: "Futbol -> Futbolcu", ar: "كرة قدم -> لاعب كرة قدم" },
            { tr: "Simit -> Simitçi", ar: "سميت -> بائع سميت" },
            { tr: "Kitap -> Kitapçı", ar: "كتاب -> بائع كتب" },
            { tr: "Gözlük -> Gözlükçü", ar: "نظارة -> بائع نظارات" },
            { tr: "Çöp -> Çöpçü", ar: "قمامة -> عامل نظافة" }
          ]
        },
        {
          title: "تكوين جملة المهنة (Ben ...yım)",
          description: "استخدام لواحق الخبر (الشخصية) مع المهن.",
          examples: [
            { tr: "Ben doktorum.", ar: "أنا طبيب." },
            { tr: "Sen mühendissin.", ar: "أنت مهندس." },
            { tr: "O öğretmen.", ar: "هو معلم." },
            { tr: "Biz öğrenciyiz.", ar: "نحن طلاب." }
          ]
        }
      ],
      readings: [
        {
          title: "ما مهنتك؟ (Mesleğiniz Ne?)",
          turkish: "Ali: Merhaba, mesleğiniz ne?\nCan: Ben mühendisim. Bir şirkette çalışıyorum. Sizin mesleğiniz ne?\nAli: Ben öğretmenim. Bir lisede Türkçe öğretiyorum.\nCan: Ne güzel. İşini seviyor musun?\nAli: Evet, çok seviyorum.",
          arabic: "علي: مرحبا، ما مهنتك؟\nجان: أنا مهندس. أعمل في شركة. ما مهنتك أنت؟\nعلي: أنا معلم. أدرس التركية في ثانوية.\nجان: هذا جميل. هل تحب عملك؟\nعلي: نعم، أحبه كثيراً."
        },
        {
          title: "عند الطبيب (Doktorda)",
          turkish: "Doktor: Şikayetiniz nedir?\nHasta: Kendimi çok halsiz hissediyorum. Başım ağrıyor ve ateşim var.\nDoktor: Boğazınız ağrıyor mu?\nHasta: Evet, biraz öksürüyorum da.\nDoktor: Sizi muayene edeyim... Grip olmuşsunuz. Size ilaç yazıyorum. Bol bol dinlenin.\nHasta: Teşekkür ederim doktor bey.",
          arabic: "الطبيب: ما شكواك؟\nالمريض: أشعر بإرهاق شديد. رأسي يؤلمني ولدي حرارة.\nالطبيب: هل يؤلمك حلقك؟\nالمريض: نعم، وأسعل قليلاً أيضاً.\nالطبيب: دعني أفحصك... أنت مصاب بالانفلونزا. سأكتب لك دواءً. استرح كثيراً.\nالمريض: شكراً لك يا دكتور."
        }
      ],
      quiz: [
        {
          question: "شخص يبيع الكتب (Kitap...)",
          options: ["Kitaplık", "Kitapçı", "Kitaplar", "Kitapsız"],
          correctAnswer: 1
        },
        {
          question: "معنى 'Başım ağrıyor'؟",
          options: ["بطني يؤلمني", "رأسي يؤلمني", "أسناني تؤلمني", "أنا جائع"],
          correctAnswer: 1
        },
        {
          question: "ما مهنة 'Avukat'؟",
          options: ["طبيب", "مهندس", "محامي", "سائق"],
          correctAnswer: 2
        },
        {
          question: "Ben öğrenci____ (أنا طالب)",
          options: ["yim", "sin", "yiz", "ler"],
          correctAnswer: 0
        },
        {
          question: "ماذا تقول للمريض؟",
          options: ["Afiyet olsun", "Güle güle", "Geçmiş olsun", "Tebrikler"],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: 6,
    title: "Ünite 6: Ulaşım ve Hava Durumu",
    subtitle: "المواصلات والطقس",
    description: "وسائل النقل، كيف أذهب؟، الطقس والفصول.",
    color: "bg-yellow-500",
    icon: "train",
    content: {
      vocabulary: [
        // وسائل النقل
        { turkish: "Ulaşım", arabic: "مواصلات" },
        { turkish: "Araç", arabic: "واسطة نقل" },
        { turkish: "Otobüs", arabic: "حافلة" },
        { turkish: "Minibüs", arabic: "حافلة صغيرة" },
        { turkish: "Dolmuş", arabic: "ميكروباص" },
        { turkish: "Metrobüs", arabic: "متروباص" },
        { turkish: "Tramvay", arabic: "ترام" },
        { turkish: "Metro", arabic: "مترو" },
        { turkish: "Tren", arabic: "قطار" },
        { turkish: "Hızlı Tren", arabic: "قطار سريع" },
        { turkish: "Taksi", arabic: "تاكسي" },
        { turkish: "Araba", arabic: "سيارة" },
        { turkish: "Uçak", arabic: "طائرة" },
        { turkish: "Helikopter", arabic: "مروحية" },
        { turkish: "Gemi", arabic: "سفينة" },
        { turkish: "Vapur", arabic: "باخرة (ركاب)" },
        { turkish: "Feribot", arabic: "عبارة (سيارات)" },
        { turkish: "Bisiklet", arabic: "دراجة هوائية" },
        { turkish: "Motosiklet", arabic: "دراجة نارية" },
        
        // المحطات والمصطلحات
        { turkish: "Bilet", arabic: "تذكرة" },
        { turkish: "Kart", arabic: "بطاقة" },
        { turkish: "Akbil / İstanbulkart", arabic: "بطاقة مواصلات" },
        { turkish: "Durak", arabic: "موقف" },
        { turkish: "İstasyon", arabic: "محطة (مترو/قطار)" },
        { turkish: "Gar", arabic: "محطة قطار رئيسية" },
        { turkish: "Havalimanı", arabic: "مطار" },
        { turkish: "Liman", arabic: "ميناء" },
        { turkish: "Otogar", arabic: "كراج حافلات السفر" },
        { turkish: "İskele", arabic: "رصيف بحري" },
        { turkish: "Yolcu", arabic: "راكب" },
        { turkish: "Trafik", arabic: "ازدحام مروري" },
        
        // أفعال الحركة
        { turkish: "İnmek", arabic: "النزول" },
        { turkish: "Binmek", arabic: "الركوب" },
        { turkish: "Aktarma yapmak", arabic: "التبديل (بين المواصلات)" },
        { turkish: "Yürümek", arabic: "المشي" },
        { turkish: "Kaçırmak", arabic: "تضييع (الباص/الطائرة)" },
        { turkish: "Yetişmek", arabic: "اللحاق" },

        // الطقس والفصول
        { turkish: "Hava", arabic: "طقس / جو" },
        { turkish: "Hava durumu", arabic: "حالة الطقس" },
        { turkish: "Mevsim", arabic: "فصل" },
        { turkish: "İlkbahar", arabic: "ربيع" },
        { turkish: "Yaz", arabic: "صيف" },
        { turkish: "Sonbahar", arabic: "خريف" },
        { turkish: "Kış", arabic: "شتاء" },
        { turkish: "Güneş", arabic: "شمس" },
        { turkish: "Güneşli", arabic: "مشمس" },
        { turkish: "Bulut", arabic: "غيمة" },
        { turkish: "Bulutlu", arabic: "غائم" },
        { turkish: "Yağmur", arabic: "مطر" },
        { turkish: "Yağmurlu", arabic: "ممطر" },
        { turkish: "Kar", arabic: "ثلج" },
        { turkish: "Karlı", arabic: "مثلج" },
        { turkish: "Rüzgar", arabic: "رياح" },
        { turkish: "Rüzgarlı", arabic: "عاصف" },
        { turkish: "Sis", arabic: "ضباب" },
        { turkish: "Sisli", arabic: "ضبابي" },
        { turkish: "Sıcak", arabic: "حار" },
        { turkish: "Soğuk", arabic: "بارد" },
        { turkish: "Ilık", arabic: "معتدل / دافئ" },
        { turkish: "Serin", arabic: "منعش / بارد قليلاً" },
        { turkish: "Derece", arabic: "درجة" }
      ],
      grammar: [
        {
          title: "أداة المعية/بواسطة (ile / -le / -la)",
          description: "تستخدم بمعنى 'مع' أو 'بواسطة'. إذا انتهت الكلمة بحرف صوتي نضع y حماية (yla/yle).\nمعنى 'مع': Ali ile (مع علي)\nمعنى 'بواسطة': Araba ile -> Arabayla (بالسيارة)",
          examples: [
            { tr: "Okula otobüsle gidiyorum.", ar: "أذهب للمدرسة بالحافلة." },
            { tr: "İstanbul'a uçakla gidiyoruz.", ar: "نذهب لإسطنبول بالطائرة." },
            { tr: "Ahmet'le konuşuyorum.", ar: "أتحدث مع أحمد." },
            { tr: "Taksiyle (i + y + le)", ar: "بالتاكسي" }
          ]
        },
        {
          title: "لاحقة الصفة (-ki)",
          description: "التي في.. / الذي في.. (تحول ظرف المكان أو الزمان إلى صفة).",
          examples: [
            { tr: "Evdeki kedi", ar: "القطة التي في المنزل" },
            { tr: "Yarınki toplantı", ar: "اجتماع الغد" },
            { tr: "Masadaki kitap", ar: "الكتاب الذي على الطاولة" }
          ]
        }
      ],
      readings: [
        {
          title: "كيف أذهب إلى تقسيم؟ (Taksim'e Nasıl Giderim?)",
          turkish: "- Pardon, Taksim'e nasıl giderim?\n- Buradan otobüse binin. Mecidiyeköy'de inin. Sonra metroya binin ve Taksim durağında inin.\n- Teşekkürler. Bilet nerede satılıyor?\n- Şu büfede İstanbulkart satılıyor.",
          arabic: "- المعذرة، كيف أذهب إلى تقسيم؟\n- اركب الحافلة من هنا. انزل في مجيدية كوي. ثم اركب المترو وانزل في محطة تقسيم.\n- شكراً. أين تباع التذاكر؟\n- تباع بطاقة إسطنبول في ذلك الكشك."
        },
        {
          title: "الطقس اليوم (Bugün Hava Nasıl?)",
          turkish: "Bugün hava çok soğuk ve yağmurlu. Dün hava güneşliydi. Yarın kar yağacak. Kış mevsimini sevmiyorum. Yazı ve güneşi özledim.",
          arabic: "اليوم الطقس بارد جداً وممطر. البارحة كان الطقس مشمساً. غداً سينزل الثلج. لا أحب فصل الشتاء. اشتقت للصيف وللشمس."
        },
        {
          title: "في المطار (Havalimanında)",
          turkish: "- Pasaportunuz lütfen.\n- Buyurun.\n- Nereye gidiyorsunuz?\n- Almanya'ya.\n- İyi yolculuklar.\n- Teşekkürler.",
          arabic: "- جواز سفرك لو سمحت.\n- تفضل.\n- إلى أين تذهب؟\n- إلى ألمانيا.\n- رحلة سعيدة.\n- شكراً."
        }
      ],
      quiz: [
        {
          question: "أذهب للعمل __ التاكسي (Taksi...)",
          options: ["de", "den", "yle", "siz"],
          correctAnswer: 2
        },
        {
          question: "ما معنى 'Kış'؟",
          options: ["صيف", "شتاء", "ربيع", "خريف"],
          correctAnswer: 1
        },
        {
          question: "الطقس ممطر (Hava ...)",
          options: ["Güneşli", "Bulutlu", "Yağmurlu", "Karlı"],
          correctAnswer: 2
        },
        {
          question: "عكس كلمة 'İnmek' (النزول)؟",
          options: ["Gitmek", "Binmek", "Gelmek", "Yürümek"],
          correctAnswer: 1
        },
        {
          question: "Evde__ hesap (الحساب الذي في المنزل)",
          options: ["ki", "li", "lik", "siz"],
          correctAnswer: 0
        }
      ]
    }
  },
  {
    id: 7,
    title: "Ünite 7: İletişim ve Alışveriş",
    subtitle: "الاتصالات والتسوق",
    description: "التكنولوجيا، المقارنة، صيغة الأمر، وشراء الملابس.",
    color: "bg-indigo-500",
    icon: "phone",
    content: {
      vocabulary: [
        // التكنولوجيا والاتصال
        { turkish: "İletişim", arabic: "اتصال" },
        { turkish: "Telefon", arabic: "هاتف" },
        { turkish: "Cep telefonu", arabic: "هاتف محمول" },
        { turkish: "Bilgisayar", arabic: "حاسوب" },
        { turkish: "Dizüstü bilgisayar", arabic: "لابتوب" },
        { turkish: "Tablet", arabic: "جهاز لوحي" },
        { turkish: "Ekran", arabic: "شاشة" },
        { turkish: "Klavye", arabic: "لوحة مفاتيح" },
        { turkish: "Şarj aleti", arabic: "شاحن" },
        { turkish: "İnternet", arabic: "إنترنت" },
        { turkish: "E-posta", arabic: "بريد إلكتروني" },
        { turkish: "Mesaj", arabic: "رسالة" },
        { turkish: "Uygulama", arabic: "تطبيق" },
        { turkish: "Aramak", arabic: "اتصال / بحث" },
        { turkish: "Konuşmak", arabic: "تحدث" },
        { turkish: "Göndermek", arabic: "إرسال" },
        { turkish: "Açmak", arabic: "فتح" },
        { turkish: "Kapatmak", arabic: "إغلاق" },
        { turkish: "İndirmek", arabic: "تنزيل" },
        
        // الملابس والتسوق
        { turkish: "Kıyafet", arabic: "ملابس" },
        { turkish: "Giyim", arabic: "لباس" },
        { turkish: "Kazak", arabic: "كنزة" },
        { turkish: "Gömlek", arabic: "قميص" },
        { turkish: "Tişört", arabic: "تيشيرت" },
        { turkish: "Pantolon", arabic: "بنطال" },
        { turkish: "Etek", arabic: "تنورة" },
        { turkish: "Elbise", arabic: "فستان" },
        { turkish: "Ceket", arabic: "جاكيت" },
        { turkish: "Mont", arabic: "معطف" },
        { turkish: "Ayakkabı", arabic: "حذاء" },
        { turkish: "Çorap", arabic: "جورب" },
        { turkish: "Beden", arabic: "مقاس" },
        { turkish: "Renk", arabic: "لون" },
        { turkish: "Fiyat", arabic: "سعر" },
        { turkish: "İndirim", arabic: "تخفيض" },
        { turkish: "Kasa", arabic: "صندوق الدفع" },
        { turkish: "Nakit", arabic: "نقدي" },
        { turkish: "Kredi kartı", arabic: "بطاقة ائتمان" },
        { turkish: "Denemek", arabic: "تجربة / قياس" },
        { turkish: "Giymek", arabic: "لبس" },
        { turkish: "Almak", arabic: "شراء / أخذ" },
        { turkish: "Satmak", arabic: "بيع" },

        // صفات للمقارنة
        { turkish: "Pahalı", arabic: "غالي" },
        { turkish: "Ucuz", arabic: "رخيص" },
        { turkish: "Hızlı", arabic: "سريع" },
        { turkish: "Yavaş", arabic: "بطيء" },
        { turkish: "Yeni", arabic: "جديد" },
        { turkish: "Eski", arabic: "قديم" },
        { turkish: "Büyük", arabic: "كبير" },
        { turkish: "Küçük", arabic: "صغير" },
        { turkish: "Güzel", arabic: "جميل" },
        { turkish: "Çirkin", arabic: "قبيح" },
        { turkish: "Kolay", arabic: "سهل" },
        { turkish: "Zor", arabic: "صعب" },
        { turkish: "Uzun", arabic: "طويل" },
        { turkish: "Kısa", arabic: "قصير" },
        { turkish: "Genç", arabic: "شاب" },
        { turkish: "Yaşlı", arabic: "مسن" }
      ],
      grammar: [
        {
          title: "المقارنة (Daha)",
          description: "تستخدم 'Daha' للمقارنة بين شيئين (بمعنى 'أكثر'). الصيغة: (الشيء الأول) + (الشيء الثاني + dan/den) + daha + (الصفة).",
          examples: [
            { tr: "Ali, Ahmet'ten daha uzun.", ar: "علي أطول من أحمد." },
            { tr: "Bu araba o arabadan daha hızlı.", ar: "هذه السيارة أسرع من تلك السيارة." },
            { tr: "İstanbul Ankara'dan daha kalabalık.", ar: "إسطنبول أكثر ازدحاماً من أنقرة." }
          ]
        },
        {
          title: "التفضيل (En)",
          description: "تستخدم 'En' للتفضيل المطلق (بمعنى 'الأكثر').",
          examples: [
            { tr: "Sınıfın en çalışkanı Ayşe.", ar: "أنشط طالبة في الصف هي عائشة." },
            { tr: "Türkiye'nin en büyük şehri İstanbul.", ar: "أكبر مدينة في تركيا هي إسطنبول." },
            { tr: "En sevdiğim renk mavi.", ar: "لوني المفضل (أكثر لون أحبه) هو الأزرق." }
          ]
        },
        {
          title: "صيغة الأمر (Emir Kipi)",
          description: "Sen: جذر الفعل فقط (Gel).\nSiz: جذر الفعل + ın/in/un/ün (Gelin).\nSiz (رسمي جداً): جذر الفعل + ınız (Geliniz).\nالنفي: إضافة -me/-ma بعد الجذر.",
          examples: [
            { tr: "Gel!", ar: "تعال!" },
            { tr: "Gelmeyin!", ar: "لا تأتوا!" },
            { tr: "Buraya park etmeyiniz.", ar: "لا تركنوا هنا (رسمي)." },
            { tr: "Lütfen kapıyı kapat.", ar: "أغلق الباب لو سمحت." }
          ]
        }
      ],
      readings: [
        {
          title: "شراء ملابس (Kıyafet Alışverişi)",
          turkish: "- Buyurun, hoş geldiniz. Nasıl yardımcı olabilirim?\n- Bir pantolon bakıyorum.\n- Kaç beden giyiyorsunuz?\n- 40 beden.\n- Bu model nasıl? Rengi çok güzel.\n- Evet, güzelmiş. Deneyebilir miyim?\n- Tabii, deneme kabini şurada.\n- ... Fiyatı ne kadar?\n- 500 Lira.",
          arabic: "- تفضل، أهلاً وسهلاً. كيف يمكنني مساعدتك؟\n- أبحث عن بنطال.\n- أي مقاس تلبس؟\n- مقاس 40.\n- كيف هو هذا الموديل؟ لونه جميل جداً.\n- نعم، جميل. هل يمكنني تجربته؟\n- بالطبع، غرفة القياس هناك.\n- ... كم سعره؟\n- 500 ليرة."
        },
        {
          title: "أيهما أفضل؟ (Hangisi Daha İyi?)",
          turkish: "Ali: Hangi telefonu alayım? Bu siyah telefon mu, yoksa şu beyaz telefon mu?\nSatıcı: Beyaz telefon siyahtan daha yeni ve daha hızlı. Ama siyah telefon daha ucuz.\nAli: Ben hızlı bir telefon istiyorum. Beyazı alıyorum.",
          arabic: "علي: أي هاتف أشتري؟ هذا الهاتف الأسود أم ذاك الهاتف الأبيض؟\nالبائع: الهاتف الأبيض أحدث وأسرع من الأسود. لكن الهاتف الأسود أرخص.\nعلي: أريد هاتفاً سريعاً. سأخذ الأبيض."
        },
        {
          title: "مكالمة هاتفية (Telefon Görüşmesi)",
          turkish: "- Alo, efendim?\n- Merhaba anne, ben geliyorum. Bir şey lazım mı?\n- Evet oğlum, gelirken 2 ekmek al. Ve geç kalma!\n- Tamam anne.",
          arabic: "- ألو، نعم؟\n- مرحبا أمي، أنا قادم. هل يلزم شيء؟\n- نعم يا بني، اشترِ خبزين وأنت قادم. ولا تتأخر!\n- حسناً يا أمي."
        }
      ],
      quiz: [
        {
          question: "الفيل ____ من القطة (أكبر)",
          options: ["daha büyük", "en büyük", "büyük", "kadar büyük"],
          correctAnswer: 0
        },
        {
          question: "عكس كلمة 'Pahalı' (غالي)؟",
          options: ["Güzel", "Ucuz", "Hızlı", "Yeni"],
          correctAnswer: 1
        },
        {
          question: "فعل الأمر من 'Gelmek' (المجيء)؟",
          options: ["Geliyor", "Geldi", "Gel", "Gelecek"],
          correctAnswer: 2
        },
        {
          question: "صيغة الأمر المنفي: لا تتحدث! (Konuş...)",
          options: ["ma", "me", "maz", "mıyor"],
          correctAnswer: 0
        },
        {
          question: "أنقرة باردة، لكن أرضروم ______ (أكثر برودة)",
          options: ["soğuk", "daha soğuk", "en soğuk", "çok soğuk"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 8,
    title: "Ünite 8: Tatil ve Eğlence",
    subtitle: "العطلة والسياحة",
    description: "خطط العطلة، الأماكن السياحية، زمن المستقبل، والأعياد.",
    color: "bg-teal-500",
    icon: "sun",
    content: {
      vocabulary: [
        // العطلة
        { turkish: "Tatil", arabic: "عطلة" },
        { turkish: "Seyahat", arabic: "سفر" },
        { turkish: "Yolculuk", arabic: "رحلة" },
        { turkish: "Turist", arabic: "سائح" },
        { turkish: "Turizm", arabic: "سياحة" },
        { turkish: "Rehber", arabic: "مرشد سياحي" },
        { turkish: "Otel", arabic: "فندق" },
        { turkish: "Pansiyon", arabic: "نزل / بنسيون" },
        { turkish: "Kamp", arabic: "مخيم" },
        { turkish: "Çadır", arabic: "خيمة" },
        { turkish: "Rezervasyon", arabic: "حجز" },
        { turkish: "Resepsiyon", arabic: "استقبال" },
        { turkish: "Giriş yapmak", arabic: "تسجيل دخول" },
        { turkish: "Çıkış yapmak", arabic: "تسجيل خروج" },
        { turkish: "Pasaport", arabic: "جواز سفر" },
        { turkish: "Vize", arabic: "تأشيرة" },
        { turkish: "Bavul", arabic: "حقيبة سفر" },
        
        // الأنشطة والطبيعة
        { turkish: "Deniz", arabic: "بحر" },
        { turkish: "Plaj", arabic: "شاطئ" },
        { turkish: "Kumsal", arabic: "شاطئ رملي" },
        { turkish: "Güneş", arabic: "شمس" },
        { turkish: "Havuz", arabic: "مسبح" },
        { turkish: "Şezlong", arabic: "كرسي استلقاء" },
        { turkish: "Güneş kremi", arabic: "واقي شمسي" },
        { turkish: "Mayo", arabic: "لباس سباحة" },
        { turkish: "Yüzmek", arabic: "السباحة" },
        { turkish: "Güneşlenmek", arabic: "التشمس" },
        { turkish: "Gezmek", arabic: "التنزه" },
        { turkish: "Fotoğraf çekmek", arabic: "التقاط الصور" },
        { turkish: "Tarihi yer", arabic: "مكان تاريخي" },
        { turkish: "Müze", arabic: "متحف" },
        { turkish: "Saray", arabic: "قصر" },
        { turkish: "Kale", arabic: "قلعة" },
        { turkish: "Cami", arabic: "مسجد" },
        { turkish: "Orman", arabic: "غابة" },
        { turkish: "Dağ", arabic: "جبل" },
        { turkish: "Göl", arabic: "بحيرة" },
        { turkish: "Nehir", arabic: "نهر" },
        { turkish: "Şelale", arabic: "شلال" },
        { turkish: "Manzara", arabic: "منظر" },
        { turkish: "Hediyelik eşya", arabic: "هدايا تذكارية" },
        
        // الأعياد والمناسبات
        { turkish: "Bayram", arabic: "عيد" },
        { turkish: "Ramazan Bayramı", arabic: "عيد الفطر" },
        { turkish: "Kurban Bayramı", arabic: "عيد الأضحى" },
        { turkish: "Doğum günü", arabic: "عيد ميلاد" },
        { turkish: "Düğün", arabic: "عرس" },
        { turkish: "Kutlamak", arabic: "الاحتفال" },
        { turkish: "Hediye", arabic: "هدية" },
        { turkish: "Tebrik etmek", arabic: "التهنئة" }
      ],
      grammar: [
        {
          title: "زمن المستقبل (Gelecek Zaman -acak/-ecek)",
          description: "يستخدم للتعبير عن أحداث ستحدث لاحقاً. اللاحقة: (y)acak / (y)ecek.\nBen geleceğim (سآتي - الـ k تقلب ğ)\nSen geleceksin (ستأتي)\nO gelecek (سيأتي)",
          examples: [
            { tr: "Yarın okula gideceğim.", ar: "سأذهب للمدرسة غداً." },
            { tr: "Seneye tatile çıkacağız.", ar: "سنخرج في عطلة السنة القادمة." },
            { tr: "Seni arayacağım.", ar: "سأتصل بك." },
            { tr: "Yağmur yağacak.", ar: "المطر سيهطل." }
          ]
        },
        {
          title: "عبارات التهنئة (Kutlama İfadeleri)",
          description: "عبارات شائعة للمناسبات.",
          examples: [
            { tr: "Bayramınız kutlu olsun.", ar: "عيدكم مبارك." },
            { tr: "İyi bayramlar.", ar: "أعياد سعيدة." },
            { tr: "Doğum günün kutlu olsun.", ar: "عيد ميلاد سعيد." },
            { tr: "Mutlu yıllar.", ar: "سنة سعيدة." },
            { tr: "Hayırlı olsun.", ar: "مبروك (للشيء الجديد)." }
          ]
        }
      ],
      readings: [
        {
          title: "خطة العطلة (Tatil Planı)",
          turkish: "Gelecek hafta tatile gideceğiz. Antalya'ya bilet aldık. Beş yıldızlı bir otelde kalacağız. Sabahları denizde yüzeceğiz, akşamları sahilde yürüyeceğiz. Ayrıca tarihi yerleri gezeceğiz. Çok heyecanlıyım.",
          arabic: "سنذهب في عطلة الأسبوع القادم. اشترينا تذاكر إلى أنطاليا. سنقيم في فندق خمس نجوم. سنسبح في البحر صباحاً، وسنمشي على الشاطئ مساءً. بالإضافة إلى ذلك سنتجول في الأماكن التاريخية. أنا متحمس جداً."
        },
        {
          title: "حجز فندق (Otel Rezervasyonu)",
          turkish: "- İyi günler, rezervasyon yaptırmak istiyorum.\n- Tabii, ne zaman için?\n- Gelecek hafta sonu için. İki kişilik bir oda lütfen.\n- Deniz manzaralı mı olsun?\n- Evet, lütfen.\n- Tamam, kaydınızı aldım.",
          arabic: "- طاب يومك، أريد إجراء حجز.\n- بالطبع، لأي وقت؟\n- لعطلة نهاية الأسبوع القادمة. غرفة لشخصين لو سمحت.\n- هل تريدها مطلة على البحر؟\n- نعم، لو سمحت.\n- حسناً، أخذت تسجيلك."
        },
        {
          title: "زيارة العيد (Bayram Ziyareti)",
          turkish: "Bugün bayram. Sabah erken kalktık. Yeni kıyafetlerimizi giydik. Dedemlere gittik. Onların elini öptük ve bayramlaştık. Dedem bana harçlık verdi. Çok mutlu oldum.",
          arabic: "اليوم عيد. استيقظنا باكراً. لبسنا ملابسنا الجديدة. ذهبنا لبيت جدي. قبلنا أيديهم وتبادلنا التهاني. جدي أعطاني عيدية. سعدت كثيراً."
        }
      ],
      quiz: [
        {
          question: "غداً سأذهب (Git...)",
          options: ["Gidiyorum", "Gittim", "Gideceğim", "Giderim"],
          correctAnswer: 2
        },
        {
          question: "معنى 'Yüzmek'؟",
          options: ["الركض", "السباحة", "النوم", "الأكل"],
          correctAnswer: 1
        },
        {
          question: "ماذا نقول في العيد؟",
          options: ["Geçmiş olsun", "Afiyet olsun", "İyi bayramlar", "Güle güle"],
          correctAnswer: 2
        },
        {
          question: "سوف نقرأ كتاباً. Kitap oku_______",
          options: ["yacağım", "yacaksın", "yacak", "yacağız"],
          correctAnswer: 3
        },
        {
          question: "ما معنى 'Rehber'؟",
          options: ["سائق", "مرشد سياحي", "طبيب", "معلم"],
          correctAnswer: 1
        }
      ]
    }
  }
];