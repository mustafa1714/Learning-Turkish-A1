
import { Course, UnitContent, VocabularyItem, GrammarRule, DialogLine, ReadingSection, QuizQuestion } from './types';

// Helper to create vocabulary items quickly
const v = (tr: string, ar: string, exTr: string, exAr: string) => ({ turkish: tr, arabic: ar, exampleTr: exTr, exampleAr: exAr });

// =============================================================================
// 1. ISTANBUL A1 - EXPANDED CONTENT
// =============================================================================

const ISTANBUL_BASE_UNITS: UnitContent[] = [
  {
    id: 1,
    titleTr: "MERHABA",
    titleAr: "مرحباً",
    description: "Tanışma, Selamlaşma, Alfabe, Dilekler / التعارف، التحية، الأبجدية، الأمنيات",
    vocabulary: [
      // Greetings
      v("Merhaba", "مرحباً", "Merhaba, nasılsın?", "مرحباً، كيف حالك؟"),
      v("Selam", "سلام", "Selam Ahmet, naber?", "سلام أحمد، ما الأخبار؟"),
      v("Günaydın", "صباح الخير", "Günaydın öğretmenim.", "صباح الخير يا معلمي."),
      v("İyi günler", "طاب يومك", "Size iyi günler dilerim.", "أتمنى لك يوماً جيداً."),
      v("İyi akşamlar", "مساء الخير", "İyi akşamlar anne.", "مساء الخير يا أمي."),
      v("İyi geceler", "تصبح على خير", "Yatıyorum, iyi geceler.", "أنا ذاهب للنوم، تصبح على خير."),
      v("Hoşça kal", "وداعاً (يقولها المغادر)", "Hoşça kal, yarın görüşürüz.", "وداعاً، أراك غداً."),
      v("Güle güle", "مع السلامة (يقولها الباقي)", "Güle güle, yolun açık olsun.", "مع السلامة، رافقتك السلامة."),
      v("Görüşürüz", "أراك لاحقاً", "Sonra görüşürüz.", "أراك فيما بعد."),
      v("Memnun oldum", "تشرفت بمعرفتك", "Ben de memnun oldum.", "وأنا أيضاً تشرفت بمعرفتك."),
      v("Teşekkür ederim", "شكراً لك", "Yardımın için teşekkür ederim.", "شكراً لمساعدتك."),
      v("Sağ ol", "تسلم (شكراً)", "Sağ ol kardeşim.", "تسلم يا أخي."),
      v("Rica ederim", "عفواً (رداً على الشكر)", "Bir şey değil, rica ederim.", "لا شكر على واجب، عفواً."),
      v("Nasılsın?", "كيف حالك؟", "Nasılsın? İyi misin?", "كيف حالك؟ هل أنت بخير؟"),
      v("İyiyim", "أنا بخير", "Teşekkürler, iyiyim.", "شكراً، أنا بخير."),
      v("Fena değil", "لست سيئاً", "Eh işte, fena değil.", "يعني، لست سيئاً."),
      v("Nerelisin?", "من أين أنت؟", "Pardon, nerelisin?", "عفواً، من أين أنت؟"),
      
      // Basic Identity
      v("Ad", "اسم", "Senin adın ne?", "ما اسمك؟"),
      v("Soyad", "كنية (لقب)", "Soyadınız nedir?", "ما هي كنيتكم؟"),
      v("Ülke", "بلد", "Hangi ülkedensin?", "من أي بلد أنت؟"),
      v("Millet", "قومية/جنسية", "Senin milletin ne?", "ما هي جنسيتك؟"),
      v("Dil", "لغة", "Hangi dili konuşuyorsun?", "أي لغة تتحدث؟"),
      
      // Common Countries/Languages
      v("Türkiye", "تركيا", "Ben Türkiyeliyim.", "أنا من تركيا."),
      v("Türkçe", "التركية", "Türkçe öğreniyorum.", "أتعلم التركية."),
      v("Arapça", "العربية", "O Arapça biliyor.", "هو يعرف العربية."),
      v("İngilizce", "الإنجليزية", "İngilizce konuşuyor musun?", "هل تتحدث الإنجليزية؟"),
      v("Mısır", "مصر", "Mısır büyük bir ülke.", "مصر بلد كبير."),
      v("Suriye", "سوريا", "Arkadaşım Suriyeli.", "صديقي سوري."),
      v("Irak", "العراق", "Irak'tan geldim.", "جئت من العراق."),
      
      // Classroom Objects
      v("Kalem", "قلم", "Bu kalem kırmızı.", "هذا القلم أحمر."),
      v("Defter", "دفتر", "Defterini aç.", "افتح دفترك."),
      v("Kitap", "كتاب", "Kitap masada.", "الكتاب على الطاولة."),
      v("Masa", "طاولة", "Bu masa yeni.", "هذه الطاولة جديدة."),
      v("Sandalye", "كرسي", "Sandalye rahat.", "الكرسي مريح."),
      v("Tahta", "لوح (سبورة)", "Tahtaya bak.", "انظر إلى اللوح."),
      v("Silgi", "ممحاة", "Silgi nerede?", "أين الممحاة؟"),
      v("Bilgisayar", "حاسوب", "Bilgisayar bozuk.", "الحاسوب معطل.")
    ],
    grammar: [
      {
        title: "Türk Alfabesi ve Sesli Harfler (الأبجدية والأحرف الصوتية)",
        explanationTr: "Türkçede 29 harf vardır. En önemli kural 'Ünlü Uyumu'dur. Harfler ikiye ayrılır: Kalın (a, ı, o, u) ve İnce (e, i, ö, ü).",
        explanationAr: "تتكون الأبجدية التركية من 29 حرفاً. أهم قاعدة هي 'التوافق الصوتي'. تنقسم الأحرف الصوتية إلى مجموعتين:\n1. أحرف صوتية ثقيلة (Kalın): a, ı, o, u\n2. أحرف صوتية خفيفة (İnce): e, i, ö, ü\nهذا التقسيم هو أساس كل قواعد اللغة التركية تقريباً.",
        examples: [
          { tr: "A, I, O, U -> Kalın", ar: "تأخذ اللواحق الثقيلة (مثل -lar, -da)" },
          { tr: "E, İ, Ö, Ü -> İnce", ar: "تأخذ اللواحق الخفيفة (مثل -ler, -de)" }
        ]
      },
      {
        title: "Çoğul Eki (-lar / -ler) (قاعدة الجمع)",
        explanationTr: "Türkçede kelimeleri çoğul yapmak için son sesli harfe bakılır. Son harf kalınsa '-lar', inceyse '-ler' gelir.",
        explanationAr: "لجمع الأسماء، ننظر إلى آخر حرف صوتي في الكلمة:\n- إذا كان (a, ı, o, u) نضع اللاحقة (-lar).\n- إذا كان (e, i, ö, ü) نضع اللاحقة (-ler).\n* استثناء: بعض الكلمات الدخيلة تأخذ -ler رغم أنها تنتهي بحرف ثقيل (مثل: Saatler, Harfler, Hayaller).",
        examples: [
          { tr: "Araba -> Arabalar", ar: "سيارة -> سيارات (a ثقيل)" },
          { tr: "Kapı -> Kapılar", ar: "باب -> أبواب (ı ثقيل)" },
          { tr: "Okul -> Okullar", ar: "مدرسة -> مدارس (u ثقيل)" },
          { tr: "Ev -> Evler", ar: "منزل -> منازل (e خفيف)" },
          { tr: "Kedi -> Kediler", ar: "قطة -> قطط (i خفيف)" },
          { tr: "Göz -> Gözler", ar: "عين -> عيون (ö خفيف)" },
          { tr: "Saat -> Saatler", ar: "ساعة -> ساعات (استثناء)" }
        ]
      },
      {
        title: "Soru Eki (-mı / -mi / -mu / -mü) (أداة السؤال 'هل')",
        explanationTr: "Soru eki kelimeye göre değişir (4'lü uyum). Kelimeden ayrı yazılır.",
        explanationAr: "أداة السؤال بمعنى 'هل'. تكتب منفصلة عن الكلمة وتتغير حسب التوافق الصوتي الرباعي:\n- a, ı -> mı\n- e, i -> mi\n- o, u -> mu\n- ö, ü -> mü",
        examples: [
          { tr: "Bu kitap mı?", ar: "هل هذا كتاب؟" },
          { tr: "O Ali mi?", ar: "هل ذلك علي؟" },
          { tr: "Bu top mu?", ar: "هل هذه كرة؟" },
          { tr: "O üzüm mü?", ar: "هل ذلك عنب؟" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Tanışma (التعارف)",
        imageDescription: "Görsel: Üniversite bahçesinde bankta oturan iki öğrenci (Ali ve Zeynep) konuşuyor.",
        lines: [
          { speaker: "Ali", textTr: "Merhaba, benim adım Ali. Senin adın ne?", textAr: "مرحباً، اسمي علي. ما اسمك؟" },
          { speaker: "Zeynep", textTr: "Merhaba Ali, benim adım Zeynep.", textAr: "مرحباً علي، اسمي زينب." },
          { speaker: "Ali", textTr: "Memnun oldum Zeynep. Nasılsın?", textAr: "تشرفت بمعرفتك يا زينب. كيف حالك؟" },
          { speaker: "Zeynep", textTr: "Teşekkür ederim, iyiyim. Sen nasılsın?", textAr: "شكراً لك، أنا بخير. أنت كيف حالك؟" },
          { speaker: "Ali", textTr: "Sağ ol, ben de iyiyim. Nerelisin?", textAr: "تسلمي، أنا بخير أيضاً. من أين أنت؟" },
          { speaker: "Zeynep", textTr: "Ben İstanbulluyum. Sen nerelisin?", textAr: "أنا من إسطنبول. من أين أنت؟" },
          { speaker: "Ali", textTr: "Ben Ankaralıyım.", textAr: "أنا من أنقرة." }
        ]
      }
    ],
    reading: [
      {
        title: "Sınıfta (في الصف)",
        imageDescription: "Görsel: Kalabalık bir sınıf, öğrenciler sıralarda oturuyor, öğretmen ayakta ders anlatıyor.",
        contentTr: "Merhaba. Burası İstanbul Dil Kursu. Burası bizim sınıfımız. Sınıfımız çok kalabalık. Sınıfta masalar, sandalyeler, bilgisayar ve yazı tahtası var. Masalarda kitaplar, defterler ve kalemler var. Sınıfımızda farklı ülkelerden öğrenciler var. Ali Mısırlı, John Amerikalı, Olga Rusyalı. Biz hepimiz Türkçe öğreniyoruz. Türkçe çok güzel bir dil.",
        contentAr: "مرحباً. هذا معهد إسطنبول للغات. هذا صفنا. صفنا مزدحم جداً. يوجد في الصف طاولات، كراسي، حاسوب ولوح كتابة. على الطاولات توجد كتب، دفاتر وأقلام. في صفنا طلاب من بلدان مختلفة. علي من مصر، جون من أمريكا، أولغا من روسيا. نحن جميعاً نتعلم التركية. التركية لغة جميلة جداً."
      }
    ],
    manualQuiz: [
      { question: "\"Nasılsın?\" sorusuna nasıl cevap verilir?", options: ["Güle güle", "İyiyim, teşekkürler", "Memnun oldum", "Hoşça kal"], correctIndex: 1 },
      { question: "Hangisi çoğul eki yanlış almıştır?", options: ["Arabalar", "Evlar", "Kediler", "Okullar"], correctIndex: 1 },
      { question: "\"Bu kalem .....?\" boşluğa ne gelir?", options: ["mı", "mi", "mu", "mü"], correctIndex: 1 },
      { question: "Gece yatarken ne denir?", options: ["Günaydın", "İyi geceler", "Tünaydın", "Afiyet olsun"], correctIndex: 1 }
    ]
  },
  {
    id: 2,
    titleTr: "NEREDE?",
    titleAr: "أين؟",
    description: "Okulda, Sayılar, Bulunma Durumu / في المدرسة، الأرقام، حالة التواجد",
    vocabulary: [
      // Numbers
      v("Bir", "واحد", "Bir ekmek lütfen.", "خبز واحد من فضلك."),
      v("İki", "اثنان", "İki kardeşim var.", "لدي أخوين."),
      v("Üç", "ثلاثة", "Saat üç.", "الساعة الثالثة."),
      v("Dört", "أربعة", "Dört mevsim var.", "يوجد أربعة فصول."),
      v("Beş", "خمسة", "Beş parmak.", "خمسة أصابع."),
      v("On", "عشرة", "On dakika bekle.", "انتظر عشر دقائق."),
      v("Yirmi", "عشرون", "Yirmi yaşındayım.", "عمري عشرون عاماً."),
      v("Yüz", "مائة", "Yüz lira.", "مائة ليرة."),
      
      // Locations
      v("Okul", "مدرسة", "Okul nerede?", "أين المدرسة؟"),
      v("Sınıf", "صف", "Öğrenciler sınıfta.", "الطلاب في الصف."),
      v("Kantin", "مقصف", "Kantin alt katta.", "المقصف في الطابق السفلي."),
      v("Kütüphane", "مكتبة", "Kütüphane çok sessiz.", "المكتبة هادئة جداً."),
      v("Bahçe", "حديقة", "Çocuklar bahçede.", "الأطفال في الحديقة."),
      v("Hastane", "مستشفى", "Doktor hastanede.", "الطبيب في المستشفى."),
      v("Eczane", "صيدلية", "Eczane açık mı?", "هل الصيدلية مفتوحة؟"),
      v("Market", "متجر", "Marketten süt aldım.", "اشتريت حليباً من المتجر."),
      v("Ofis", "مكتب", "Babam ofiste.", "أبي في المكتب."),
      
      // Positional Words
      v("Nerede?", "أين؟", "Çantan nerede?", "أين حقيبتك؟"),
      v("Burada", "هنا", "Kalem burada.", "القلم هنا."),
      v("Şurada", "هناك (قريب)", "Ali şurada oturuyor.", "علي يجلس هناك."),
      v("Orada", "هناك (بعيد)", "Evimiz orada.", "منزلنا هناك."),
      v("Kimde?", "مع من؟", "Kalem kimde?", "مع من القلم؟"),
      v("Var", "يوجد", "Evde süt var.", "يوجد حليب في المنزل."),
      v("Yok", "لا يوجد", "Param yok.", "لا يوجد لدي مال.")
    ],
    grammar: [
      {
        title: "Bulunma Durumu (-da / -de / -ta / -te) (حالة التواجد)",
        explanationTr: "Bir şeyin nerede olduğunu anlatır. İki kurala dikkat edilir: 1. Ünlü Uyumu (a,ı,o,u -> da | e,i,ö,ü -> de). 2. Ünsüz Benzeşmesi (Fıstıkçı Şahap).",
        explanationAr: "حالة التواجد (في، على، مع). تتغير اللاحقة بناءً على قاعدتين:\n1. **التوافق الصوتي:**\n- آخر حرف صوتي ثقيل -> da\n- آخر حرف صوتي خفيف -> de\n2. **قاعدة الفستق (Fıstıkçı Şahap):**\n- إذا انتهت الكلمة بأحد الأحرف (f, s, t, k, ç, ş, h, p)، تقلب الـ d إلى t لتصبح اللاحقة (ta/te).",
        examples: [
          { tr: "Masa-da", ar: "على الطاولة (صوتي ثقيل)" },
          { tr: "Ev-de", ar: "في المنزل (صوتي خفيف)" },
          { tr: "Sınıf-ta", ar: "في الصف (انتهت بـ f، قلبت d إلى t)" },
          { tr: "Market-te", ar: "في المتجر (انتهت بـ t)" },
          { tr: "Dolap-ta", ar: "في الخزانة (انتهت بـ p)" },
          { tr: "Ahmet'te", ar: "مع أحمد (لأنها اسم علم نضع فاصلة، وانتهت بـ t)" }
        ]
      },
      {
        title: "Var / Yok (يوجد / لا يوجد)",
        explanationTr: "Sahiplik veya mevcudiyet bildirir. 'Benim ... var' kalıbı 'I have' anlamındadır.",
        explanationAr: "تستخدم للتعبير عن الوجود (Var) أو العدم (Yok).",
        examples: [
          { tr: "Masada kitap var.", ar: "يوجد كتاب على الطاولة." },
          { tr: "Okulda havuz yok.", ar: "لا يوجد مسبح في المدرسة." },
          { tr: "Benim arabam var.", ar: "لدي سيارة." },
          { tr: "Senin paran yok.", ar: "ليس لديك مال." }
        ]
      }
    ],
    dialogue: [
      {
        title: "Okulda (في المدرسة)",
        imageDescription: "Görsel: Okul koridorunda iki öğrenci konuşuyor, arkada kütüphane kapısı var.",
        lines: [
          { speaker: "Ali", textTr: "Affedersiniz, kütüphane nerede?", textAr: "عفواً، أين المكتبة؟" },
          { speaker: "Veli", textTr: "Kütüphane üçüncü katta.", textAr: "المكتبة في الطابق الثالث." },
          { speaker: "Ali", textTr: "Peki, kantin nerede?", textAr: "حسناً، أين المقصف؟" },
          { speaker: "Veli", textTr: "Kantin bahçede, sağ tarafta.", textAr: "المقصف في الحديقة، في الجهة اليمنى." },
          { speaker: "Ali", textTr: "Çok teşekkür ederim.", textAr: "شكراً جزيلاً." },
          { speaker: "Veli", textTr: "Rica ederim.", textAr: "عفواً." }
        ]
      }
    ],
    reading: [
      {
        title: "Benim Odam (غرفتي)",
        imageDescription: "Görsel: Düzenli bir genç odası. Yatak, çalışma masası, bilgisayar, kitaplık ve yerde bir halı var.",
        contentTr: "Burası benim odam. Odam küçük ama çok güzel. Odamda bir yatak, bir çalışma masası ve bir dolap var. Masada bilgisayarım ve kitaplarım var. Duvarda saat ve resimler var. Yerde mavi bir halı var. Odamda televizyon yok. Ben odamı çok seviyorum.",
        contentAr: "هذه غرفتي. غرفتي صغيرة لكنها جميلة جداً. يوجد في غرفتي سرير، طاولة دراسة وخزانة. على الطاولة يوجد حاسوبي وكتبي. على الحائط توجد ساعة وصور. على الأرض توجد سجادة زرقاء. لا يوجد تلفاز في غرفتي. أنا أحب غرفتي كثيراً."
      }
    ],
    manualQuiz: [
      { question: "\"Sınıf\" kelimesine bulunma eki gelirse ne olur?", options: ["Sınıfda", "Sınıfde", "Sınıfta", "Sınıfte"], correctIndex: 2 },
      { question: "\"Kalem kimde?\" sorusuna cevap verin.", options: ["Kalem masada", "Kalem Ahmet'te", "Kalem kırmızı", "Kalem yok"], correctIndex: 1 },
      { question: "\"Evde ekmek ......\" (Olumsuz)", options: ["var", "yok", "değil", "hayır"], correctIndex: 1 }
    ]
  },
  {
    id: 3,
    titleTr: "NE YAPIYORSUN?",
    titleAr: "ماذا تفعل؟",
    description: "Şimdiki Zaman, Fiiller, Günlük Rutin / الزمن الحاضر، الأفعال، الروتين اليومي",
    vocabulary: [
      // Verbs
      v("Gelmek", "المجيء", "O buraya geliyor.", "هو قادم إلى هنا."),
      v("Gitmek", "الذهاب", "Eve gidiyorum.", "أنا ذاهب للمنزل."),
      v("Okumak", "القراءة/الدراسة", "Kitap okuyorum.", "أقرأ كتاباً."),
      v("Yazmak", "الكتابة", "Ödev yazıyorum.", "أكتب وظيفتي."),
      v("Konuşmak", "التحدث", "Türkçe konuşuyorum.", "أتحدث التركية."),
      v("Dinlemek", "الاستماع", "Müzik dinliyor.", "هو يستمع للموسيقا."),
      v("İzlemek", "المشاهدة", "Film izliyoruz.", "نشاهد فيلماً."),
      v("Yürümek", "المشي", "Parkta yürüyorlar.", "هم يمشون في الحديقة."),
      v("Koşmak", "الركض", "Hızlı koşma.", "لا تركض بسرعة."),
      v("Yemek", "الأكل", "Yemek yiyorum.", "أتناول الطعام."),
      v("İçmek", "الشرب", "Su içiyorum.", "أشرب الماء."),
      v("Uyumak", "النوم", "Bebek uyuyor.", "الطفل نائم."),
      v("Uyanmak", "الاستيقاظ", "Erken uyanıyorum.", "أستيقظ باكراً."),
      v("Çalışmak", "العمل", "Babam çalışıyor.", "أبي يعمل."),
      
      // Time Words
      v("Şimdi", "الآن", "Şimdi geliyorum.", "أنا قادم الآن."),
      v("Her gün", "كل يوم", "Her gün spor yapıyorum.", "أمارس الرياضة كل يوم."),
      v("Sabahları", "في الصباحات", "Sabahları kahve içerim.", "أشرب القهوة في الصباحات."),
      v("Sonra", "بعد ذلك", "Ders bitti, sonra ne yapacaksın?", "انتهى الدرس، ماذا ستفعل بعد ذلك؟")
    ],
    grammar: [
      {
        title: "Şimdiki Zaman (-iyor) (الزمن الحاضر)",
        explanationTr: "Şu anda yapılan işleri anlatır. Fiil köküne sesli uyumuna göre (-iyor, -ıyor, -uyor, -üyor) eklenir. Sonra şahıs eki gelir.",
        explanationAr: "الزمن الحاضر (المضارع). القاعدة: جذر الفعل + (حرف صوتي رباعي مساعد إذا انتهى بساكن) + yor + لاحق الضمير.\nالقواعد الفرعية:\n1. إذا انتهى الفعل بساكن: Gel + i + yor + um -> Geliyorum.\n2. إذا انتهى بصوتي (a,e): يحذف أو يضيق (Daralma). Oyna -> Oynuyor.\n3. Gitmek, Etmek, Tatmak: تقلب T إلى D -> Gidiyorum.",
        examples: [
          { tr: "Ben gel-i-yor-um", ar: "أنا قادم" },
          { tr: "Sen yap-ı-yor-sun", ar: "أنت تفعل" },
          { tr: "O oku-yor", ar: "هو يقرأ (لا يحتاج مساعد لأن u صوتي)" },
          { tr: "Biz gid-i-yor-uz", ar: "نحن ذاهبون (Git -> Gid)" },
          { tr: "Siz dinli-yor-sunuz", ar: "أنتم تستمعون (Dinle -> Dinli)" },
          { tr: "Onlar gül-ü-yor-lar", ar: "هم يضحكون" }
        ]
      },
      {
        title: "Şimdiki Zaman (Olumsuz) (النفي في الحاضر)",
        explanationTr: "Fiil kökünden sonra (-mı, -mi, -mu, -mü) eklenir, sonra -yor gelir.",
        explanationAr: "النفي بسيط جداً: نضع أداة النفي (mı, mi, mu, mü) بعد الجذر وقبل yor.",
        examples: [
          { tr: "Gel-mi-yor-um", ar: "أنا لا آتي" },
          { tr: "Bil-mi-yor-sun", ar: "أنت لا تعرف" },
          { tr: "İzle-mi-yor", ar: "هو لا يشاهد" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Telefon Konuşması (مكالمة هاتفية)",
        imageDescription: "Görsel: Biri evde koltukta, diğeri dışarıda sokakta cep telefonuyla konuşan iki arkadaş.",
        lines: [
          { speaker: "Ayşe", textTr: "Alo, selam Fatma. Ne yapıyorsun?", textAr: "ألو، سلام فاطمة. ماذا تفعلين؟" },
          { speaker: "Fatma", textTr: "Selam Ayşe. Evdeyim, müzik dinliyorum ve kitap okuyorum. Sen ne yapıyorsun?", textAr: "سلام عائشة. أنا في المنزل، أستمع للموسيقا وأقرأ كتاباً. أنت ماذا تفعلين؟" },
          { speaker: "Ayşe", textTr: "Ben şimdi dışarı çıkıyorum. Markete gidiyorum. Bir şey istiyor musun?", textAr: "أنا خارجة الآن. ذاهبة إلى المتجر. هل تريدين شيئاً؟" },
          { speaker: "Fatma", textTr: "Hayır, teşekkür ederim. Görüşürüz.", textAr: "لا، شكراً لك. أراك لاحقاً." }
        ]
      }
    ],
    reading: [
      {
        title: "Bir Günüm (يومي)",
        imageDescription: "Görsel: Bir kişinin sabah uyanması, otobüse binmesi, ofiste çalışması ve akşam yemeği yemesi.",
        contentTr: "Benim adım Murat. Ben her sabah saat 07:00'de kalkıyorum. Elimi yüzümü yıkıyorum ve kahvaltı yapıyorum. Sonra giyiniyorum ve evden çıkıyorum. İşe otobüsle gidiyorum. Ben bir bankada çalışıyorum. İşimi çok seviyorum. Akşam saat 18:00'de işten çıkıyorum ve eve dönüyorum. Akşam yemeği yiyorum, televizyon izliyorum ve kitap okuyorum. Gece saat 23:00'te uyuyorum.",
        contentAr: "اسمي مراد. أستيقظ كل صباح في الساعة 07:00. أغسل وجهي ويدي وأتناول الفطور. ثم أرتدي ملابسي وأخرج من المنزل. أذهب إلى العمل بالحافلة. أنا أعمل في بنك. أحب عملي كثيراً. في المساء أخرج من العمل الساعة 18:00 وأعود للمنزل. أتناول العشاء، أشاهد التلفاز وأقرأ كتاباً. أنام في الساعة 23:00 ليلاً."
      }
    ],
    manualQuiz: [
      { question: "\"Gitmek\" fiilinin 'Biz' çekimi hangisidir?", options: ["Gidiyorsun", "Gidiyoruz", "Gidiyorlar", "Gidiyorum"], correctIndex: 1 },
      { question: "\"O kitap ......\" (Okumak - Olumsuz)", options: ["okuyor", "okumuyor", "okumıyor", "okumiyor"], correctIndex: 1 },
      { question: "\"Yemek ......\" (Yemek)", options: ["yiyorum", "yeiyorum", "yiyor", "yi"], correctIndex: 0 }
    ]
  },
  {
    id: 4,
    titleTr: "BENİM DÜNYAM",
    titleAr: "عالمي",
    description: "Aile, Akrabalar, Tanıtma / العائلة، الأقارب، التعريف بالنفس",
    vocabulary: [
      // Family Members
      v("Anne", "أم", "Annem ev hanımı.", "أمي ربة منزل."),
      v("Baba", "أب", "Babam mühendis.", "أبي مهندس."),
      v("Kardeş", "أخ/أخت", "Hiç kardeşim yok.", "ليس لدي إخوة."),
      v("Abi (Ağabey)", "أخ أكبر", "Abim üniversiteye gidiyor.", "أخي الأكبر يذهب للجامعة."),
      v("Abla", "أخت كبرى", "Ablam evli.", "أختي الكبرى متزوجة."),
      v("Dede", "جد", "Dedem çok tonton.", "جدي لطيف جداً."),
      v("Babaanne", "جدة (أم الأب)", "Babaannem köyde yaşıyor.", "جدتي تعيش في القرية."),
      v("Anneanne", "جدة (أم الأم)", "Anneannem bize geliyor.", "جدتي قادمة إلينا."),
      v("Teyze", "خالة", "Teyzem çok genç.", "خالتي شابة جداً."),
      v("Hala", "عمة", "Halam Almanya'da.", "عمتي في ألمانيا."),
      v("Dayı", "خال", "Dayım polis.", "خالي شرطي."),
      v("Amca", "عم", "Amcamla balığa gidiyoruz.", "نذهب للصيد مع عمي."),
      v("Kuzen", "ابن العم/الخال...", "Kuzenimle oynuyoruz.", "نلعب مع ابن عمي."),
      
      // Adjectives for people
      v("Genç", "شاب", "O genç bir öğretmen.", "هو معلم شاب."),
      v("Yaşlı", "عجوز", "Yaşlı adam yürüyor.", "الرجل العجوز يمشي."),
      v("Evli", "متزوج", "Ali evli.", "علي متزوج."),
      v("Bekar", "أعزب", "Ben bekarım.", "أنا أعزب."),
      v("Uzun", "طويل", "Boyum uzun.", "قامتي طويلة."),
      v("Kısa", "قصير", "Saçları kısa.", "شعرها قصير."),
      v("Çalışkan", "مجتهد", "Çalışkan bir öğrenci.", "طالب مجتهد.")
    ],
    grammar: [
      {
        title: "İyelik Ekleri (Benim, Senin, Onun...) (لواحق الملكية)",
        explanationTr: "Bir nesnenin kime ait olduğunu gösterir. Kelimenin ünlü/ünsüz bitimine göre ekler değişir.",
        explanationAr: "لواحق الملكية. تعتمد كلياً على التوافق الصوتي الرباعي وما إذا كانت الكلمة تنتهي بصوتي أم ساكن.\n- Benim (im/ım/um/üm) -> إذا انتهت بصوتي (m) فقط.\n- Senin (in/ın/un/ün) -> إذا انتهت بصوتي (n) فقط.\n- Onun (i/ı/u/ü) -> إذا انتهت بصوتي (si/sı/su/sü).",
        examples: [
          { tr: "Benim ev-im", ar: "منزلي" },
          { tr: "Benim araba-m", ar: "سيارتي" },
          { tr: "Senin saç-ın", ar: "شعرك" },
          { tr: "Senin kedi-n", ar: "قطتك" },
          { tr: "Onun kalem-i", ar: "قلمه" },
          { tr: "Onun çanta-sı", ar: "حقيبته (s حرف حماية)" },
          { tr: "Bizim okul-umuz", ar: "مدرستنا" },
          { tr: "Sizin öğretmen-iniz", ar: "معلمكم" },
          { tr: "Onların ev-leri", ar: "منزلهم" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Aileni Tanıtıyor musun? (هل تعرف بعائلتك؟)",
        imageDescription: "Görsel: Bir kişi elindeki tabletten aile fotoğrafını arkadaşına gösteriyor.",
        lines: [
          { speaker: "Mehmet", textTr: "Bu fotoğraftaki kim?", textAr: "من هذا الذي في الصورة؟" },
          { speaker: "Ahmet", textTr: "Bu benim babam. Yanındaki de annem.", textAr: "هذا أبي. والتي بجانبه أمي." },
          { speaker: "Mehmet", textTr: "Peki şu genç çocuk kim? Kardeşin mi?", textAr: "حسناً، من ذلك الفتى الشاب؟ هل هو أخوك؟" },
          { speaker: "Ahmet", textTr: "Evet, o benim erkek kardeşim. Adı Burak. Üniversiteye gidiyor.", textAr: "نعم، ذلك أخي. اسمه بوراك. يذهب إلى الجامعة." },
          { speaker: "Mehmet", textTr: "Ailen çok güzel.", textAr: "عائلتك جميلة جداً." }
        ]
      }
    ],
    reading: [
      {
        title: "Sevgili Ailem (عائلتي الحبيبة)",
        imageDescription: "Görsel: Büyük bir aile (dede, nine, torunlar) bayram yemeğinde bir arada.",
        contentTr: "Benim adım Elif. Benim küçük ama mutlu bir ailem var. Babamın adı Kemal, o 45 yaşında ve doktor. Annemin adı Sevgi, o 42 yaşında ve öğretmen. Bir ablam var, adı Esra. O evli ve İstanbul'da yaşıyor. Benim dedem ve anneannem de bizimle aynı apartmanda oturuyor. Hafta sonları hep beraber kahvaltı yapıyoruz. Ailemi çok seviyorum.",
        contentAr: "اسمي إليف. لدي عائلة صغيرة لكن سعيدة. اسم أبي كمال، عمره 45 عاماً وهو طبيب. اسم أمي سفغي، عمرها 42 عاماً وهي معلمة. لدي أخت كبرى، اسمها إسراء. هي متزوجة وتعيش في إسطنبول. جدي وجدتي يعيشان معنا في نفس البناء. في عطلات نهاية الأسبوع نتناول الفطور معاً. أحب عائلتي كثيراً."
      }
    ],
    manualQuiz: [
      { question: "\"Benim ......\" (Baba) kelimesi nasıl olur?", options: ["Babam", "Baban", "Babası", "Babamız"], correctIndex: 0 },
      { question: "\"Onun ......\" (Araba) kelimesi nasıl olur?", options: ["Arabam", "Araban", "Arabası", "Arabaları"], correctIndex: 2 },
      { question: "Annenin kız kardeşi kimdir?", options: ["Hala", "Teyze", "Yenge", "Babaanne"], correctIndex: 1 }
    ]
  },
  {
    id: 5,
    titleTr: "ZAMAN ZAMAN",
    titleAr: "من وقت لآخر",
    description: "Saatler, Günler, Aylar, Mevsimler / الساعات، الأيام، الأشهر، الفصول",
    vocabulary: [
      v("Saat", "ساعة", "Saat kaç?", "كم الساعة؟"),
      v("Dakika", "دقيقة", "Beş dakika bekle.", "انتظر خمس دقائق."),
      v("Saniye", "ثانية", "Bir saniye lütfen.", "ثانية من فضلك."),
      v("Buçuk", "نصف", "Saat iki buçuk.", "الساعة الثانية والنصف."),
      v("Çeyrek", "ربع", "Çeyrek var.", "إلا ربع."),
      v("Geçiyor", "يمضي (و)", "Onu beş geçiyor.", "العاشرة وخمس دقائق."),
      v("Kala (Var)", "بقي (إلا)", "Ona beş var.", "العاشرة إلا خمس دقائق."),
      
      // Time Periods
      v("Sabah", "صباح", "Sabahları koşarım.", "أركض صباحاً."),
      v("Öğle", "ظهر", "Öğle tatili.", "عطلة الغداء."),
      v("Akşam", "مساء", "Akşam yemeği.", "طعام العشاء."),
      v("Gece", "ليل", "Gece uyumam.", "لا أنام ليلاً."),
      
      // Seasons & Months
      v("Yaz", "صيف", "Yazın tatile gideriz.", "نذهب للعطلة في الصيف."),
      v("Kış", "شتاء", "Kışın kar yağar.", "يهطل الثلج في الشتاء."),
      v("İlkbahar", "ربيع", "İlkbaharda çiçekler açar.", "تتفتح الزهور في الربيع."),
      v("Sonbahar", "خريف", "Sonbaharda yağmur yağar.", "يهطل المطر في الخريف."),
      v("Ocak", "كانون الثاني", "Ocak ayı soğuktur.", "شهر كانون الثاني بارد.")
    ],
    grammar: [
      {
        title: "Saat Kaç? (Şu an) (كم الساعة الآن؟)",
        explanationTr: "Saati sorarken: Tam saatler (Saat 5). Buçuklu saatler (Saat 5 buçuk). Geçiyor (Saat 5'i 10 geçiyor - Belirtme Hâli). Var (Saat 5'e 10 var - Yönelme Hâli).",
        explanationAr: "عند الإخبار عن الوقت الحالي:\n1. تماماً: Saat + الرقم.\n2. النصف: Saat + الرقم + buçuk.\n3. (و): الدقائق تمضي الساعة. نستخدم لاحقة المفعول به مع الساعة (i, ı, u, ü) + الدقائق + geçiyor.\nمثال: 09:10 -> Dokuz-u on geçiyor.\n4. (إلا): بقي للساعة كذا دقائق. نستخدم لاحقة التوجه (e, a) + الدقائق + var.\nمثال: 09:50 -> On-a on var (بقي للعاشرة عشرة).",
        examples: [
          { tr: "08:00 -> Saat sekiz.", ar: "الساعة الثامنة." },
          { tr: "08:30 -> Saat sekiz buçuk.", ar: "الساعة الثامنة والنصف." },
          { tr: "08:15 -> Sekiz-i çeyrek geçiyor.", ar: "الثامنة والربع (تمضي الثامنة ربعاً)." },
          { tr: "08:45 -> Dokuz-a çeyrek var.", ar: "التاسعة إلا ربعاً (يوجد ربع للتاسعة)." }
        ]
      },
      {
        title: "Saat Kaçta? (Eylem Zamanı) (في أي ساعة؟)",
        explanationTr: "Bir işin ne zaman yapıldığını anlatır. 'Geçe' ve 'Kala' kelimeleri kullanılır. Tam ve buçuklarda -da/-de eki gelir.",
        explanationAr: "عند تحديد موعد فعل (متى ستذهب؟):\n1. تماماً/النصف: نستخدم (da/de). Yedide (في السابعة).\n2. (و): ... geçe. (Yediyi beş geçe - في السابعة وخمسة).\n3. (إلا): ... kala. (Yediye beş kala - في السابعة إلا خمسة).",
        examples: [
          { tr: "Saat beş-te gel.", ar: "تعال في الخامسة." },
          { tr: "Beş buçuk-ta çıkıyoruz.", ar: "نخرج في الخامسة والنصف." },
          { tr: "Dokuz-u çeyrek geçe ders başlıyor.", ar: "الدرس يبدأ في التاسعة والربع." },
          { tr: "On-a çeyrek kala buluşalım.", ar: "لنتقابل في العاشرة إلا ربعاً." }
        ]
      }
    ],
    dialogue: [
      {
        title: "Randevu (الموعد)",
        imageDescription: "Görsel: İki kişi saatlerine bakarak konuşuyor.",
        lines: [
          { speaker: "Ali", textTr: "Toplantı saat kaçta?", textAr: "في أي ساعة الاجتماع؟" },
          { speaker: "Veli", textTr: "Saat ikide.", textAr: "في الساعة الثانية." },
          { speaker: "Ali", textTr: "Şimdi saat kaç?", textAr: "كم الساعة الآن؟" },
          { speaker: "Veli", textTr: "Bire çeyrek var. Acele etmeliyiz.", textAr: "الواحدة إلا ربع. يجب أن نستعجل." }
        ]
      }
    ],
    reading: [
      {
        title: "Bir Günüm (Zamanlı) (يومي بالتوقيت)",
        imageDescription: "Görsel: Saat kadranları ile eşleştirilmiş günlük aktiviteler.",
        contentTr: "Ben sabah 07:00'de kalkarım. 07:30'da kahvaltı yaparım. 08:15'te evden çıkarım. Otobüs 08:30'da gelir. İş 09:00'da başlar. Öğlen 12:30'da yemek yerim. Akşam 18:00'de iş biter. 19:00'a çeyrek kala evde olurum.",
        contentAr: "أستيقظ في السابعة صباحاً. أتناول الفطور في السابعة والنصف. أخرج من المنزل في الثامنة والربع. تأتي الحافلة في الثامنة والنصف. يبدأ العمل في التاسعة. أتناول الغداء في الثانية عشرة والنصف ظهراً. ينتهي العمل في السادسة مساءً. أكون في المنزل في السابعة إلا ربعاً."
      }
    ],
    manualQuiz: [
      { question: "\"09:15\" (Şu an saat kaç?)", options: ["Dokuzu çeyrek geçiyor", "Dokuzu çeyrek geçe", "Dokuz çeyrek", "Dokuzda"], correctIndex: 0 },
      { question: "\"Okul saat 08:00..... başlıyor.\"", options: ["de", "da", "te", "ta"], correctIndex: 1 }
    ]
  },
  {
    id: 6,
    titleTr: "ÇEVREMİZ VE BİZ",
    titleAr: "بيئتنا ونحن",
    description: "Bayramlar, Mevsimler, Özel Günler / الأعياد، الفصول، الأيام الخاصة",
    vocabulary: [
      v("Bayram", "عيد", "Ramazan Bayramı kutlu olsun.", "عيد فطر سعيد."),
      v("Kutlamak", "احتفال/تهنئة", "Doğum gününü kutluyorum.", "أهنئك بعيد ميلادك."),
      v("Hediye", "هدية", "Sana bir hediye aldım.", "اشتريت لك هدية."),
      v("Davet", "دعوة", "Akşam yemeğine davetlisin.", "أنت مدعو للعشاء."),
      v("Ziyaret", "زيارة", "Dedemi ziyaret ettim.", "زرت جدي."),
      v("Mutlu", "سعيد", "Çok mutluyum.", "أنا سعيد جداً."),
      v("Üzgün", "حزين", "Neden üzgünsün?", "لماذا أنت حزين؟"),
      v("Hava", "طقس", "Hava bugün çok güzel.", "الطقس جميل جداً اليوم."),
      v("Sıcak", "حار", "Yazın hava sıcak.", "الطقس حار في الصيف."),
      v("Soğuk", "بارد", "Kışın hava soğuk.", "الطقس بارد في الشتاء."),
      v("Yağmurlu", "ماطر", "Bugün hava yağmurlu.", "اليوم الطقس ماطر.")
    ],
    grammar: [
      {
        title: "-den Önce / -den Sonra (قبل / بعد - مع الأسماء)",
        explanationTr: "Bir isimden önce veya sonra bir şey olduğunu belirtir. Ayrılma hâli eki (-dan/-den) kullanılır.",
        explanationAr: "تستخدم لقول (قبل كذا) أو (بعد كذا) مع الأسماء.\nالقاعدة: الاسم + dan/den/tan/ten + önce/sonra.",
        examples: [
          { tr: "Okul-dan sonra", ar: "بعد المدرسة" },
          { tr: "Yemek-ten önce", ar: "قبل الطعام" },
          { tr: "İş-ten sonra", ar: "بعد العمل" }
        ]
      },
      {
        title: "Karşılaştırma (Daha / En) (المقارنة والتفضيل)",
        explanationTr: "Sıfatlarda üstünlük (daha) ve en üstünlük (en) dereceleri.",
        explanationAr: "المقارنة (Daha - أكثر) والتفضيل (En - الـ... الأكثر).\nالمقارنة: الاسم الأول + dan + الاسم الثاني + daha + الصفة.\nالتفضيل: En + الصفة.",
        examples: [
          { tr: "Ali, Ahmet'ten daha çalışkan.", ar: "علي أنشط من أحمد." },
          { tr: "İstanbul, Ankara'dan daha büyük.", ar: "إسطنبول أكبر من أنقرة." },
          { tr: "Sınıfın en güzel kızı.", ar: "أجمل فتاة في الصف." },
          { tr: "En yüksek bina.", ar: "المبنى الأكثر ارتفاعاً." }
        ]
      }
    ],
    dialogue: [
      {
        title: "Bayramlaşma (التهنئة بالعيد)",
        imageDescription: "Görsel: Bayramda büyüklerin elini öpen çocuklar.",
        lines: [
          { speaker: "Torun", textTr: "İyi bayramlar dede.", textAr: "عيد سعيد يا جدي." },
          { speaker: "Dede", textTr: "İyi bayramlar yavrum. Gel, el öp.", textAr: "عيد سعيد يا بني. تعال، قبل يدي." },
          { speaker: "Torun", textTr: "Harçlık var mı dede?", textAr: "هل توجد عيدية يا جدي؟" },
          { speaker: "Dede", textTr: "Tabii ki var. Al bakalım.", textAr: "بالطبع يوجد. خذ هذه." }
        ]
      }
    ],
    reading: [
      {
        title: "Dört Mevsim (الفصول الأربعة)",
        imageDescription: "Görsel: Dört parçaya bölünmüş bir manzara: Karlı, çiçekli, güneşli ve yaprak dökümü.",
        contentTr: "Türkiye'de dört mevsim yaşanır. Kışın kar yağar ve hava soğuk olur. İnsanlar kalın giyinir. İlkbaharda doğa uyanır, çiçekler açar. Yazın hava çok sıcak olur, herkes tatile gider ve denize girer. Sonbaharda yapraklar sararır ve yağmur yağar. Her mevsim güzeldir.",
        contentAr: "تُعاش الفصول الأربعة في تركيا. في الشتاء يهطل الثلج ويكون الطقس بارداً. يرتدي الناس ملابس سميكة. في الربيع تستيقظ الطبيعة وتتفتح الزهور. في الصيف يكون الطقس حاراً جداً، يذهب الجميع للعطلة ويسبحون في البحر. في الخريف تصفر الأوراق ويهطل المطر. كل فصل جميل."
      }
    ],
    manualQuiz: [
      { question: "\"Yemek...... ellerini yıka.\" (Önce)", options: ["ten önce", "dan önce", "den önce", "tan önce"], correctIndex: 0 },
      { question: "\"Fil, fareden ...... büyüktür.\"", options: ["en", "daha", "kadar", "gibi"], correctIndex: 1 }
    ]
  },
  {
    id: 7,
    titleTr: "GEÇMİŞ ZAMAN",
    titleAr: "الزمن الماضي",
    description: "Dün, Anılar, Biyografi / الأمس، الذكريات، السيرة الذاتية",
    vocabulary: [
      v("Dün", "أمس", "Dün sinemaya gittim.", "ذهبت للسينما أمس."),
      v("Geçen hafta", "الأسبوع الماضي", "Geçen hafta hastaydım.", "كنت مريضاً الأسبوع الماضي."),
      v("Önce", "قبل / مضت", "İki yıl önce mezun oldum.", "تخرجت قبل عامين."),
      v("Eskiden", "قديماً", "Eskiden burada park vardı.", "كان يوجد حديقة هنا قديماً."),
      v("Doğmak", "الولادة", "1990'da doğdum.", "ولدت في 1990."),
      v("Büyümek", "النمو/الكبر", "İstanbul'da büyüdüm.", "كبرت في إسطنبول."),
      v("Okumak (Geçmiş)", "قرأ/درس", "Dün kitap okudum.", "قرأت كتاباً أمس."),
      v("Görmek", "رأى", "Seni gördüm.", "رأيتك."),
      v("Gezmek", "تنزه", "Müzeyi gezdik.", "تجولنا في المتحف.")
    ],
    grammar: [
      {
        title: "Belirli Geçmiş Zaman (-dı / -di) (الماضي الشهودي)",
        explanationTr: "Bilinen, görülen veya kesin olan geçmiş eylemleri anlatır. Fiil köküne (-dı, -di, -du, -dü) veya sertleşme varsa (-tı, -ti, -tu, -tü) eklenir.",
        explanationAr: "الزمن الماضي الشهودي (الذي رأيته أو تأكدت منه). القاعدة: جذر الفعل + لاحق الماضي (d/t + ı/i/u/ü) + لاحق الضمير.\nتستخدم t بدلاً من d إذا انتهى الجذر بأحد حروف 'Fıstıkçı Şahap'.",
        examples: [
          { tr: "Gel-di-m", ar: "جئت (أتيت)" },
          { tr: "Git-ti-n", ar: "ذهبت (t بسبب t في git)" },
          { tr: "Oku-du", ar: "قرأ" },
          { tr: "Gör-dü-k", ar: "رأينا" },
          { tr: "Yap-tı-nız", ar: "فعلتم (t بسبب p في yap)" },
          { tr: "Unut-tu-lar", ar: "نسوا" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Hafta Sonu Ne Yaptın? (ماذا فعلت في نهاية الأسبوع؟)",
        imageDescription: "Görsel: İki arkadaş kahve içerken sohbet ediyor.",
        lines: [
          { speaker: "Ayşe", textTr: "Hafta sonu ne yaptın?", textAr: "ماذا فعلت في نهاية الأسبوع؟" },
          { speaker: "Fatma", textTr: "Çok güzel geçti. Sinemaya gittim, sonra alışveriş yaptım.", textAr: "مر بشكل جميل جداً. ذهبت إلى السينما، ثم تسوقت." },
          { speaker: "Ayşe", textTr: "Hangi filmi izledin?", textAr: "أي فيلم شاهدت؟" },
          { speaker: "Fatma", textTr: "Yeni bir komedi filmi izledim. Çok güldüm. Sen ne yaptın?", textAr: "شاهدت فيلماً كوميدياً جديداً. ضحكت كثيراً. أنت ماذا فعلت؟" },
          { speaker: "Ayşe", textTr: "Ben evdeydim. Dinlendim.", textAr: "أنا كنت في المنزل. استرحت." }
        ]
      }
    ],
    reading: [
      {
        title: "Dün Gece (الليلة الماضية)",
        imageDescription: "Görsel: Karanlık, fırtınalı bir gece ve evde oturan korkmuş bir çocuk.",
        contentTr: "Dün gece hava çok kötüydü. Çok yağmur yağdı ve şimşek çaktı. Elektrikler kesildi. Ev çok karanlık oldu. Ben biraz korktum. Annem mum yaktı. Sonra hepimiz oturduk ve eski hikayeler anlattık. Çok eğlenceliydi.",
        contentAr: "كان الطقس سيئاً جداً الليلة الماضية. هطل مطر غزير وبرق البرق. انقطعت الكهرباء. أصبح المنزل مظلماً جداً. خفت قليلاً. أشعلت أمي شمعة. ثم جلسنا جميعاً وروينا قصصاً قديمة. كان ممتعاً جداً."
      }
    ],
    manualQuiz: [
      { question: "\"Dün okula ......\" (Gitmek - Ben)", options: ["gittim", "gidiyorum", "gideceğim", "gitti"], correctIndex: 0 },
      { question: "\"Yapmak\" fiilinin geçmiş zaman 'Biz' çekimi?", options: ["Yaptık", "Yaptım", "Yaptı", "Yaptılar"], correctIndex: 0 }
    ]
  },
  {
    id: 8,
    titleTr: "GELECEK & PLANLAR",
    titleAr: "المستقبل والخطط",
    description: "Gelecek Zaman, Tatil Planları / زمن المستقبل، خطط العطلة",
    vocabulary: [
      v("Yarın", "غداً", "Yarın işim var.", "لدي عمل غداً."),
      v("Gelecek hafta", "الأسبوع القادم", "Gelecek hafta sınavım var.", "لدي امتحان الأسبوع القادم."),
      v("Sene", "سنة", "Seneye mezun olacağım.", "سأتخرج السنة القادمة."),
      v("Plan", "خطة", "Planın ne?", "ما هي خطتك؟"),
      v("Uçak bileti", "تذكرة طائرة", "Uçak bileti aldım.", "اشتريت تذكرة طائرة."),
      v("Rezervasyon", "حجز", "Otel rezervasyonu yaptım.", "قمت بحجز الفندق."),
      v("Hazırlamak", "تحضير", "Bavulu hazırlayacağım.", "سأحضر الحقيبة."),
      v("Olmak", "أن يكون (أصبح)", "Doktor olacağım.", "سأصبح طبيباً.")
    ],
    grammar: [
      {
        title: "Gelecek Zaman (-acak / -ecek) (الزمن المستقبل)",
        explanationTr: "Gelecekte yapılacak eylemleri bildirir. 'Ben' ve 'Biz' şahıslarında 'k' harfi 'ğ' harfine dönüşür (Yumuşama).",
        explanationAr: "الزمن المستقبل (سوف). القاعدة: جذر الفعل + acak/ecek + لاحق الضمير.\nقاعدة مهمة (K->Ğ): مع الضمير 'أنا' (Ben) و 'نحن' (Biz)، يقلب حرف k في اللاحقة acak إلى ğ.\nمثال: GeleceK-im -> Geleceğim.",
        examples: [
          { tr: "Ben al-acağ-ım", ar: "أنا سأخذ (K قلبت Ğ)" },
          { tr: "Sen gel-ecek-sin", ar: "أنت ستأتي" },
          { tr: "O yap-acak", ar: "هو سيفعل" },
          { tr: "Biz gid-eceğ-iz", ar: "نحن سنذهب (Git -> Gid, K -> Ğ)" },
          { tr: "Siz oku-y-acak-sınız", ar: "أنتم ستقرؤون (y للحماية)" },
          { tr: "Onlar yüz-ecek-ler", ar: "هم سيسبحون" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Yaz Tatili Planı (خطة العطلة الصيفية)",
        imageDescription: "Görsel: Masada harita ve takvim, tatil planı yapan bir çift.",
        lines: [
          { speaker: "Can", textTr: "Bu yaz ne yapacaksın?", textAr: "ماذا ستفعل هذا الصيف؟" },
          { speaker: "Mert", textTr: "Antalya'ya gideceğim. Denize gireceğim.", textAr: "سأذهب إلى أنطاليا. سأسبح في البحر." },
          { speaker: "Can", textTr: "Ne zaman gideceksin?", textAr: "متى ستذهب؟" },
          { speaker: "Mert", textTr: "Gelecek ay gideceğim. Sen ne yapacaksın?", textAr: "سأذهب الشهر القادم. أنت ماذا ستفعل؟" },
          { speaker: "Can", textTr: "Ben evde kalacağım ve Türkçe çalışacağım.", textAr: "أنا سأبقى في المنزل وأدرس التركية." }
        ]
      }
    ],
    reading: [
      {
        title: "Gelecek Hayallerim (أحلامي المستقبلية)",
        imageDescription: "Görsel: Mezuniyet kepi giymiş bir öğrenci ve gelecekteki kariyerini (doktorluk) düşünen bir balon.",
        contentTr: "Ben şimdi üniversitede öğrenciyim. İki yıl sonra mezun olacağım. Mezun olduktan sonra iyi bir iş bulacağım. Çok çalışacağım ve para kazanacağım. Sonra dünyayı gezeceğim. Farklı ülkeler göreceğim. Belki evleneceğim ve çocuklarım olacak. Güzel bir hayatım olacak.",
        contentAr: "أنا الآن طالب في الجامعة. سأتخرج بعد عامين. بعد التخرج سأجد عملاً جيداً. سأعمل كثيراً وأكسب المال. ثم سأجوب العالم. سأرى بلدان مختلفة. ربما سأتزوج ويصبح لدي أطفال. ستكون لدي حياة جميلة."
      }
    ],
    manualQuiz: [
      { question: "\"Ben yarın size ......\" (Gelmek)", options: ["geleceğim", "geliyorum", "geldim", "gelir"], correctIndex: 0 },
      { question: "Hangisi gelecek zaman ifadesidir?", options: ["Dün", "Şimdi", "Yarın", "Geçen yıl"], correctIndex: 2 }
    ]
  }
];

// =============================================================================
// 2. YEDI IKLIM A1 - EXPANDED CONTENT
// =============================================================================

const YEDI_IKLIM_BASE_UNITS: UnitContent[] = [
  // ... (Identical structure to Istanbul but with the specific Yedi Iklim content requested)
  // Replicating Unit 1-4 with expansions, adding 5-8.
  {
    id: 1,
    titleTr: "TANIŞMA",
    titleAr: "التعارف",
    description: "Merhaba, Nerelisiniz?, Alfabe / مرحباً، من أين أنت؟، الأبجدية",
    vocabulary: [
      v("Merhaba", "مرحباً", "Merhaba, benim adım Ali.", "مرحباً، اسمي علي."),
      v("Selam", "سلام", "Selam, naber?", "سلام، ما الأخبار؟"),
      v("Günaydın", "صباح الخير", "Herkese günaydın.", "صباح الخير للجميع."),
      v("Memnun oldum", "تشرفت بمعرفتك", "Tanıştığımıza memnun oldum.", "تشرفت بمعرفتك."),
      v("Türk", "تركي", "Ben Türküm.", "أنا تركي."),
      v("Nereli", "من أين", "Sen nerelisin?", "من أين أنت؟"),
      v("Ad", "اسم", "Adınız ne?", "ما اسمك؟"),
      v("Soyad", "كنية", "Soyadınız ne?", "ما كنيتك؟"),
      v("Tanışmak", "التعارف", "Tanışalım mı?", "هل نتعارف؟"),
      v("Arkadaş", "صديق", "Bu benim arkadaşım.", "هذا صديقي."),
      v("Hoş geldin", "أهلاً بك", "Eve hoş geldin.", "أهلاً بك في المنزل."),
      v("Hoş bulduk", "أهلاً بك (الرد)", "Hoş bulduk, teşekkürler.", "أهلاً بك، شكراً."),
      v("Nasılsınız?", "كيف حالكم؟ (احترام)", "Nasılsınız Ahmet Bey?", "كيف حالكم سيد أحمد؟")
    ],
    grammar: [
      {
        title: "Ek Fiil (Şahıs Ekleri) (لواحق الضمائر - الجملة الاسمية)",
        explanationTr: "İsim cümlelerinde yüklem yapmak için kullanılır. Ben -im, Sen -sin, O (ek yok)...",
        explanationAr: "لواحق الجملة الاسمية (أنا ...، أنت ...). تتغير حسب التوافق الصوتي الرباعي.\nBen -> (y)ım/im/um/üm\nSen -> sın/sin/sun/sün\nO -> -\nBiz -> (y)ız/iz/uz/üz\nSiz -> sınız/siniz/sunuz/sünüz\nOnlar -> lar/ler",
        examples: [
          { tr: "Ben öğretmen-im", ar: "أنا معلم" },
          { tr: "Sen doktor-sun", ar: "أنت طبيب" },
          { tr: "O hasta", ar: "هو مريض" },
          { tr: "Biz iyi-y-iz", ar: "نحن بخير (y حماية)" },
          { tr: "Siz yorgun-sunuz", ar: "أنتم متعبون" }
        ]
      }
    ],
    dialogue: [
      {
        title: "İlk Tanışma",
        imageDescription: "Görsel: Okul koridorunda karşılaşan iki öğrenci.",
        lines: [
          { speaker: "Murat", textTr: "Merhaba, benim adım Murat. Sizin adınız ne?", textAr: "مرحباً، اسمي مراد. ما اسمكم؟" },
          { speaker: "Yaren", textTr: "Merhaba Murat Bey, ben Yaren. Memnun oldum.", textAr: "مرحباً سيد مراد، أنا يارن. تشرفت بمعرفتك." },
          { speaker: "Murat", textTr: "Ben de memnun oldum. Nerelisiniz?", textAr: "وأنا أيضاً تشرفت. من أين أنت؟" },
          { speaker: "Yaren", textTr: "Ben Ankaralıyım. Siz?", textAr: "أنا من أنقرة. وأنت؟" },
          { speaker: "Murat", textTr: "Ben İstanbulluyum.", textAr: "أنا من إسطنبول." }
        ]
      }
    ],
    reading: [
      {
        title: "Ben Kimim?",
        imageDescription: "Görsel: Bir öğrenci kimlik kartı ve pasaport.",
        contentTr: "Merhaba! Benim adım Omar. Ben Ürdünlüyüm ve 20 yaşındayım. Ben öğrenciyim. İstanbul'da yaşıyorum. Türkçe öğreniyorum. Türkiye çok güzel bir ülke. Sınıfımda çok arkadaşım var.",
        contentAr: "مرحباً! اسمي عمر. أنا أردني وعمري 20 عاماً. أنا طالب. أعيش في إسطنبول. أتعلم اللغة التركية. تركيا بلد جميل جداً. لدي الكثير من الأصدقاء في صفي."
      }
    ],
    manualQuiz: [
      { question: "Memnun oldum cevabı nedir?", options: ["Güle güle", "Ben de", "Hayır", "Tamam"], correctIndex: 1 }
    ]
  },
  {
    id: 2,
    titleTr: "AİLEMİZ",
    titleAr: "عائلتنا",
    description: "Aile Üyeleri, Evin Bölümleri / أفراد العائلة، أقسام المنزل",
    vocabulary: [
      v("Dede", "جد", "Dedem gazete okuyor.", "جدي يقرأ الجريدة."),
      v("Nine", "جدة", "Ninem örgü örüyor.", "جدتي تحييك الصوف."),
      v("Kardeş", "أخ", "Kardeşim oyun oynuyor.", "أخي يلعب."),
      v("Salon", "صالون", "Salonda oturuyoruz.", "نجلس في الصالون."),
      v("Yatak odası", "غرفة النوم", "Yatak odası üst katta.", "غرفة النوم في الطابق العلوي."),
      v("Banyo", "حمام", "Banyo temiz.", "الحمام نظيف."),
      v("Koridor", "ممر", "Koridor uzun.", "الممر طويل."),
      v("Halı", "سجادة", "Yerde halı var.", "توجد سجادة على الأرض.")
    ],
    grammar: [
      {
        title: "Ayrılma Hâli (-dan / -den) (حالة الابتعاد)",
        explanationTr: "Bir yerden ayrılmayı, çıkmayı belirtir (from). Fıstıkçı Şahap kuralı ile -tan/-ten olur.",
        explanationAr: "حالة الابتعاد (من). تستخدم للخروج من مكان أو المصدر.\nالقاعدة: الاسم + dan/den (أو tan/ten إذا انتهى بحرف خشن فستقجي شهاب).",
        examples: [
          { tr: "Ev-den çıkıyorum.", ar: "أخرج من المنزل." },
          { tr: "Okul-dan geliyorum.", ar: "قادم من المدرسة." },
          { tr: "Market-ten", ar: "من المتجر (t بسبب t)" },
          { tr: "Dolap-tan", ar: "من الخزانة (t بسبب p)" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Ailem",
        imageDescription: "Görsel: Aile albümüne bakan iki kişi.",
        lines: [
          { speaker: "Ali", textTr: "Bu resimdekiler kim?", textAr: "من هؤلاء في الصورة؟" },
          { speaker: "Ayşe", textTr: "Bu babam, bu da annem.", textAr: "هذا أبي، وهذه أمي." },
          { speaker: "Ali", textTr: "Kardeşinin adı ne?", textAr: "ما اسم أخيك؟" },
          { speaker: "Ayşe", textTr: "Onun adı Can.", textAr: "اسمه جان." }
        ]
      }
    ],
    reading: [
      {
        title: "Benim Evim",
        imageDescription: "Görsel: Güzel bir evin dıştan görünüşü ve bahçesi.",
        contentTr: "Bizim evimiz Ankara'da. Evimiz çok güzel ve büyük. Evimiz iki katlı ve bahçeli. Alt katta büyük bir salon ve mutfak var. Üst katta yatak odaları ve banyo var.",
        contentAr: "منزلنا في أنقرة. منزلنا جميل جداً وكبير. منزلنا مكون من طابقين وله حديقة. في الطابق السفلي يوجد صالون كبير ومطبخ. في الطابق العلوي توجد غرف النوم والحمام."
      }
    ],
    manualQuiz: [
      { question: "\"Okul..... geliyorum.\" (Ayrılma)", options: ["da", "a", "dan", "la"], correctIndex: 2 }
    ]
  },
  {
    id: 3,
    titleTr: "GÜNLÜK HAYAT",
    titleAr: "الحياة اليومية",
    description: "Saatler, Geniş Zaman (Basit), Günler / الساعات، الزمن الواسع (بسيط)، الأيام",
    vocabulary: [
      v("Uyanmak", "الاستيقاظ", "Yedi de uyanırım.", "أستيقظ في السابعة."),
      v("Duş almak", "الاستحمام", "Her sabah duş alırım.", "أستحم كل صباح."),
      v("Giyinmek", "ارتداء الملابس", "Hızlıca giyinirim.", "أرتدي ملابسي بسرعة."),
      v("Otobüs", "حافلة", "Otobüse binerim.", "أركب الحافلة."),
      v("Ders", "درس", "Ders başlar.", "يبدأ الدرس."),
      v("Öğle yemeği", "غداء", "Öğle yemeği yerim.", "أتناول الغداء."),
      v("Dönmek", "العودة", "Eve dönerim.", "أعود للمنزل.")
    ],
    grammar: [
      {
        title: "Belirli Geçmiş Zaman (-dı/-di) (الماضي)",
        explanationTr: "Geçmişte kesin olarak yapılan eylemler.",
        explanationAr: "الزمن الماضي الشهودي. الجذر + dı/di/du/dü + لاحق الضمير.",
        examples: [
          { tr: "Gel-di-m", ar: "جئت" },
          { tr: "Gör-dü-n", ar: "رأيت" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Rutin",
        imageDescription: "Görsel: Saat ve takvim önünde konuşan iki kişi.",
        lines: [
          { speaker: "Ahmet", textTr: "Sabahları kaçta kalkıyorsun?", textAr: "في أي ساعة تستيقظ صباحاً؟" },
          { speaker: "Mehmet", textTr: "Yedide kalkıyorum.", textAr: "أستيقظ في السابعة." },
          { speaker: "Ahmet", textTr: "Okul kaçta başlıyor?", textAr: "متى تبدأ المدرسة؟" },
          { speaker: "Mehmet", textTr: "Sekiz buçukta.", textAr: "في الثامنة والنصف." }
        ]
      }
    ],
    reading: [
      {
        title: "Pazar Günü",
        imageDescription: "Görsel: Parkta oynayan çocuklar ve gazete okuyan baba.",
        contentTr: "Bugün Pazar. Okul yok. Sabah geç kalkıyorum. Ailemle kahvaltı yapıyorum. Sonra parka gidiyoruz.",
        contentAr: "اليوم الأحد. لا توجد مدرسة. أستيقظ متأخراً. أتناول الفطور مع عائلتي. ثم نذهب إلى الحديقة."
      }
    ],
    manualQuiz: [
      { question: "Pazartesiden sonra hangi gün gelir?", options: ["Salı", "Çarşamba", "Cuma", "Pazar"], correctIndex: 0 }
    ]
  },
  {
    id: 4,
    titleTr: "ÇEVREMİZ",
    titleAr: "بيئتنا",
    description: "Sokak, Mahalle, Konumlar / الشارع، الحي، المواقع",
    vocabulary: [
      v("Mahalle", "حي", "Mahallemiz sakin.", "حينا هادئ."),
      v("Cadde", "جادة", "Cadde kalabalık.", "الجادة مزدحمة."),
      v("Kasap", "لحام", "Kasaptan et aldım.", "اشتريت لحماً من اللحام."),
      v("Manav", "بائع خضار", "Manavda meyve var.", "يوجد فاكهة عند بائع الخضار."),
      v("Fırın", "فرن", "Fırından ekmek al.", "اشترِ خبزاً من الفرن."),
      v("Eczane", "صيدلية", "İlaç aldım.", "اشتريت دواء."),
      v("Karakol", "مخفر", "Polis karakolu.", "مخفر الشرطة."),
      v("Cami", "مسجد", "Camiye gidiyorum.", "أنا ذاهب للمسجد.")
    ],
    grammar: [
      {
        title: "İyelik Ekleri (Devam) (لواحق الملكية - تابع)",
        explanationTr: "Senin, Sizin, Onların kullanımı.",
        explanationAr: "متابعة لواحق الملكية (لك، لكم، لهم).",
        examples: [
          { tr: "Senin evin", ar: "منزلك" },
          { tr: "Sizin arabanız", ar: "سيارتكم" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Adres Sorma",
        imageDescription: "Görsel: Yolda harita ile yön soran biri.",
        lines: [
          { speaker: "Turist", textTr: "Pardon, banka nerede?", textAr: "عفواً، أين البنك؟" },
          { speaker: "Yerli", textTr: "İleride, sağda.", textAr: "في الأمام، على اليمين." }
        ]
      }
    ],
    reading: [
      {
        title: "Mahallemiz",
        imageDescription: "Görsel: Mahalle esnafı ve alışveriş yapan insanlar.",
        contentTr: "Bizim mahallemiz çok güzel. Park var, market var. Komşularımız çok iyi.",
        contentAr: "حينا جميل جداً. يوجد حديقة، يوجد متجر. جيراننا جيدون جداً."
      }
    ],
    manualQuiz: [
      { question: "Ekmek nereden alınır?", options: ["Fırın", "Eczane", "Manav", "Kasap"], correctIndex: 0 }
    ]
  },
  {
    id: 5,
    titleTr: "MESLEKLER",
    titleAr: "المهن",
    description: "Meslek Tanıtımı, İş Hayatı / التعريف بالمهن، الحياة العملية",
    vocabulary: [
      v("Doktor", "طبيب", "Doktor hastaları muayene eder.", "الطبيب يفحص المرضى."),
      v("Mühendis", "مهندس", "Mühendis bina yapar.", "المهندس يبني المباني."),
      v("Öğretmen", "معلم", "Öğretmen okulda çalışır.", "المعلم يعمل في المدرسة."),
      v("Polis", "شرطي", "Polis suçluları yakalar.", "الشرطي يمسك المجرمين."),
      v("Aşçı", "طباخ", "Aşçı yemek pişirir.", "الطباخ يطهو الطعام."),
      v("Pilot", "طيار", "Pilot uçak kullanır.", "الطيار يقود الطائرة."),
      v("Terzi", "خياط", "Terzi elbise diker.", "الخياط يخيط الملابس."),
      v("Çiftçi", "مزارع", "Çiftçi tarlada çalışır.", "المزارع يعمل في الحقل."),
      v("Emekli", "متقاعد", "Dedem emekli.", "جدي متقاعد."),
      v("Ev hanımı", "ربة منزل", "Annem ev hanımı.", "أمي ربة منزل.")
    ],
    grammar: [
      {
        title: "İsim Tamlamaları (Belirtili) (الإضافة المعرفة)",
        explanationTr: "İki ismin birbirine aitlik ilgisiyle bağlanması. (Tamlayan -in + Tamlanan -i).",
        explanationAr: "الإضافة المعرفة (المضاف والمضاف إليه). كلاهما يأخذ لاحقة.\nالاسم الأول + (n)in/ın/un/ün\nالاسم الثاني + (s)i/ı/u/ü",
        examples: [
          { tr: "Ali'nin kalem-i", ar: "قلم علي" },
          { tr: "Okul-un kapı-sı", ar: "باب المدرسة" },
          { tr: "Araba-nın reng-i", ar: "لون السيارة" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Ne İş Yapıyorsun?",
        imageDescription: "Görsel: İş kıyafetleriyle iki kişi konuşuyor (biri doktor, biri polis).",
        lines: [
          { speaker: "Ahmet", textTr: "Mesleğiniz nedir?", textAr: "ما هي مهنتك؟" },
          { speaker: "Mehmet", textTr: "Ben doktorum. Siz?", textAr: "أنا طبيب. وأنت؟" },
          { speaker: "Ahmet", textTr: "Ben polisim.", textAr: "أنا شرطي." }
        ]
      }
    ],
    reading: [
      {
        title: "Hayalimdeki Meslek",
        imageDescription: "Görsel: Gelecekteki mesleğini hayal eden bir çocuk.",
        contentTr: "Ben büyüyünce pilot olmak istiyorum. Gökyüzünü çok seviyorum. Uçakları seviyorum. Dünyayı gezmek istiyorum.",
        contentAr: "أريد أن أصبح طياراً عندما أكبر. أحب السماء كثيراً. أحب الطائرات. أريد أن أجوب العالم."
      }
    ],
    manualQuiz: [
      { question: "Kim yemek yapar?", options: ["Aşçı", "Doktor", "Polis", "Mühendis"], correctIndex: 0 },
      { question: "Ali..... defter..... (İsim tamlaması)", options: ["nin / i", "den / e", "de / i", "nin / de"], correctIndex: 0 }
    ]
  },
  {
    id: 6,
    titleTr: "ULAŞIM",
    titleAr: "المواصلات",
    description: "Araçlar, Bilet Alma, Trafik / المركبات، شراء التذاكر، المرور",
    vocabulary: [
      v("Otobüs", "حافلة", "Otobüs durağı nerede?", "أين موقف الحافلة؟"),
      v("Taksi", "تكسي", "Taksiye bin.", "اركب التكسي."),
      v("Vapur", "عبارة", "Vapurla Kadıköy'e geçtik.", "عبرنا إلى كاديكوي بالعبارة."),
      v("Uçak", "طائرة", "Uçak kalktı.", "أقلعت الطائرة."),
      v("Tren", "قطار", "Trenle yolculuk güzeldir.", "السفر بالقطار جميل."),
      v("Metro", "مترو", "Metro çok hızlı.", "المترو سريع جداً."),
      v("Bilet", "تذكرة", "Bir öğrenci bileti lütfen.", "تذكرة طالب من فضلك."),
      v("Durak", "موقف", "Son durakta ineceğim.", "سأنزل في الموقف الأخير."),
      v("İnmek", "النزول", "Burada inmek istiyorum.", "أريد النزول هنا."),
      v("Binmek", "الركوب", "Otobüse bindim.", "ركبت الحافلة."),
      v("Trafik", "ازدحام مروري", "Çok trafik var.", "يوجد ازدحام شديد.")
    ],
    grammar: [
      {
        title: "-ki Eki (Sıfat Yapan)",
        explanationTr: "İsmi sıfat yapar. Yer ve zaman bildirir.",
        explanationAr: "اللاحقة ki التي تحول الاسم إلى صفة (الذي في...).",
        examples: [
          { tr: "Masa-daki kitap", ar: "الكتاب الذي على الطاولة" },
          { tr: "Yarın-ki maç", ar: "مباراة الغد" }
        ]
      },
      {
        title: "İle (Vasıta) (-la/-le)",
        explanationTr: "Ne ile gidiyorsun? Sorusunun cevabı.",
        explanationAr: "أداة (بـ / مع). تستخدم للمواصلات.",
        examples: [
          { tr: "Otobüs-le", ar: "بالحافلة" },
          { tr: "Araba-y-la", ar: "بالسيارة" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Bilet Gişesinde",
        imageDescription: "Görsel: Bilet gişesinde sıra bekleyen insanlar.",
        lines: [
          { speaker: "Yolcu", textTr: "Ankara'ya bir bilet lütfen.", textAr: "تذكرة إلى أنقرة من فضلك." },
          { speaker: "Gişe", textTr: "Saat kaçta?", textAr: "في أي ساعة؟" },
          { speaker: "Yolcu", textTr: "Sabah 9 otobüsüne.", textAr: "لحافلة التاسعة صباحاً." }
        ]
      }
    ],
    reading: [
      {
        title: "Yolculuk",
        imageDescription: "Görsel: Tren penceresinden dışarıyı izleyen bir yolcu.",
        contentTr: "Ben tren yolculuğunu çok seviyorum. Tren çok rahat. Kitap okuyorum, manzarayı izliyorum. Uçak hızlı ama pahalı.",
        contentAr: "أنا أحب السفر بالقطار كثيراً. القطار مريح جداً. أقرأ كتاباً، وأشاهد المنظر. الطائرة سريعة لكنها غالية."
      }
    ],
    manualQuiz: [
      { question: "Okula ne ..... gidiyorsun?", options: ["ile", "de", "den", "i"], correctIndex: 0 }
    ]
  },
  {
    id: 7,
    titleTr: "İLETİŞİM",
    titleAr: "التواصل",
    description: "Teknoloji, Haberleşme / التكنولوجيا، الاتصالات",
    vocabulary: [
      v("Telefon", "هاتف", "Telefonum çaldı.", "رن هاتفي."),
      v("Bilgisayar", "حاسوب", "Bilgisayar oyunu oynuyorum.", "ألعب لعبة حاسوب."),
      v("İnternet", "إنترنت", "İnternet bağlantısı yok.", "لا يوجد اتصال إنترنت."),
      v("Mesaj", "رسالة", "Bana mesaj at.", "أرسل لي رسالة."),
      v("E-posta", "بريد إلكتروني", "E-postanı kontrol et.", "تفقّد بريدك الإلكتروني."),
      v("Aramak", "اتصال", "Seni aradım.", "اتصلت بك."),
      v("Açmak", "فتح/رد", "Telefonu aç.", "رد على الهاتف."),
      v("Kapatmak", "إغلاق", "Bilgisayarı kapat.", "أغلق الحاسوب."),
      v("Sosyal medya", "وسائل التواصل", "Sosyal medya kullanıyor musun?", "هل تستخدم وسائل التواصل؟")
    ],
    grammar: [
      {
        title: "Karşılaştırma (Daha / En)",
        explanationTr: "Sıfatlarda derece bildirmek için kullanılır.",
        explanationAr: "المقارنة (Daha) والتفضيل (En).",
        examples: [
          { tr: "Bu telefon daha pahalı.", ar: "هذا الهاتف أغلى." },
          { tr: "En hızlı bilgisayar bu.", ar: "هذا هو الحاسوب الأسرع." }
        ]
      }
    ],
    dialogue: [
      {
        title: "Telefon Görüşmesi",
        imageDescription: "Görsel: Cep telefonuyla konuşan bir kişi.",
        lines: [
          { speaker: "Ali", textTr: "Alo, Ahmet evde mi?", textAr: "ألو، هل أحمد في المنزل؟" },
          { speaker: "Veli", textTr: "Hayır, dışarı çıktı.", textAr: "لا، خرج." },
          { speaker: "Ali", textTr: "Tamam, sonra ararım.", textAr: "حسناً، سأتصل لاحقاً." }
        ]
      }
    ],
    reading: [
      {
        title: "Teknoloji",
        imageDescription: "Görsel: Teknolojik aletler (tablet, telefon, laptop) kullanan bir aile.",
        contentTr: "Teknoloji hayatımızı kolaylaştırıyor. Herkesin cep telefonu var. Haberleri internetten okuyoruz. Ama bazen çok zaman kaybediyoruz.",
        contentAr: "التكنولوجيا تسهل حياتنا. الجميع لديه هاتف محمول. نقرأ الأخبار من الإنترنت. لكننا نضيع الكثير من الوقت أحياناً."
      }
    ],
    manualQuiz: [
      { question: "Uçak trenden ...... hızlıdır.", options: ["daha", "en", "çok", "az"], correctIndex: 0 }
    ]
  },
  {
    id: 8,
    titleTr: "TATİL",
    titleAr: "العطلة",
    description: "Yaz Tatili, Gezi, Otel / العطلة الصيفية، الرحلة، الفندق",
    vocabulary: [
      v("Tatil", "عطلة", "Tatile çıkıyoruz.", "نخرج في عطلة."),
      v("Deniz", "بحر", "Deniz suyu sıcak.", "ماء البحر دافئ."),
      v("Kumsal", "شاطئ", "Kumsalda yürüdük.", "مشينا على الشاطئ."),
      v("Güneş", "شمس", "Güneş parlıyor.", "الشمس تشرق."),
      v("Otel", "فندق", "Otel rezervasyonu.", "حجز فندق."),
      v("Bavul", "حقيبة سفر", "Bavulunu hazırla.", "جهز حقيبتك."),
      v("Gezmek", "تجول", "Şehri gezdik.", "تجولنا في المدينة."),
      v("Fotoğraf", "صورة", "Fotoğraf çektik.", "التقطنا صوراً."),
      v("Pasaport", "جواز سفر", "Pasaportum nerede?", "أين جواز سفري؟")
    ],
    grammar: [
      {
        title: "Gelecek Zaman (-acak/-ecek) (المستقبل)",
        explanationTr: "Gelecekte yapılacak işler.",
        explanationAr: "الزمن المستقبل (سوف). الجذر + acak/ecek + لاحق الضمير.",
        examples: [
          { tr: "Gel-ecek-im -> Geleceğim", ar: "سآتي" },
          { tr: "Yap-acak-sın", ar: "ستفعل" },
          { tr: "Git-ecek -> Gidecek", ar: "سيذهب" }
        ]
      }
    ],
    dialogue: [
      {
        title: "Tatil Planı",
        imageDescription: "Görsel: Tatil broşürlerine bakan bir çift.",
        lines: [
          { speaker: "Ayşe", textTr: "Bu yaz nereye gideceğiz?", textAr: "إلى أين سنذهب هذا الصيف؟" },
          { speaker: "Ali", textTr: "Antalya'ya gidelim.", textAr: "لنذهب إلى أنطاليا." },
          { speaker: "Ayşe", textTr: "Harika! Denizi çok seviyorum.", textAr: "رائع! أحب البحر كثيراً." }
        ]
      }
    ],
    reading: [
      {
        title: "Yaz Tatili",
        imageDescription: "Görsel: Plajda oynayan çocuklar ve güneşlenen insanlar.",
        contentTr: "Geçen yaz İzmir'e gittik. Çok eğlendik. Denize girdik, balık yedik. Efes Antik Kenti'ni gezdik. Çok güzel bir tatildi.",
        contentAr: "في الصيف الماضي ذهبنا إلى إزمير. استمتعنا كثيراً. دخلنا البحر، أكلنا السمك. تجولنا في مدينة أفسس الأثرية. كانت عطلة جميلة جداً."
      }
    ],
    manualQuiz: [
      { question: "Yarın okula ......", options: ["gideceğim", "gittim", "gidiyorum", "giderim"], correctIndex: 0 }
    ]
  }
];

// =============================================================================
// HELPER FUNCTION TO CREATE CUMULATIVE UNIT 9 (EXAM)
// =============================================================================

function createCumulativeUnit(baseUnits: UnitContent[], courseName: string): UnitContent {
  const allVocab = baseUnits.flatMap(u => u.vocabulary);
  const allGrammar = baseUnits.flatMap(u => u.grammar);
  
  // Create a large pool of manual questions based on grammar from previous units
  // For simplicity here, we re-use unit manual quizzes, but in a real app, this would be a distinct huge list.
  const allManualQuizQuestions = baseUnits.flatMap(u => u.manualQuiz);

  const reviewDialogues = baseUnits.flatMap(u => u.dialogue).map(d => ({
    ...d,
    title: `Tekrar: ${d.title}`
  }));

  const integratedDialogue = {
    title: "Büyük Final: Günlük Hayat (النهائي الكبير: الحياة اليومية)",
    imageDescription: "Görsel: Bir kafede oturan farklı mesleklerden insanlar sohbet ediyor.",
    lines: [
      { speaker: "Ali", textTr: "Merhaba arkadaşlar, nasılsınız?", textAr: "مرحباً يا أصدقاء، كيف حالكم؟" },
      { speaker: "Ayşe", textTr: "İyiyiz Ali. Sen nasılsın? İşler nasıl?", textAr: "نحن بخير يا علي. أنت كيف حالك؟ كيف هو العمل؟" },
      { speaker: "Ali", textTr: "Çok yoğun. Hastanede çok hasta var.", textAr: "مزدحم جداً. يوجد الكثير من المرضى في المستشفى." },
      { speaker: "Mehmet", textTr: "Benim okulum da bitti. Tatile gideceğim.", textAr: "مدرستي انتهت أيضاً. سأذهب في عطلة." },
      { speaker: "Ayşe", textTr: "Nereye gideceksin?", textAr: "إلى أين ستذهب؟" },
      { speaker: "Mehmet", textTr: "İtalya'ya uçak bileti aldım.", textAr: "اشتريت تذكرة طائرة إلى إيطاليا." }
    ]
  };

  const reviewReadings = baseUnits.flatMap(u => u.reading).map(r => ({
    ...r,
    title: `Tekrar: ${r.title}`
  }));

  const integratedReading = {
    title: "Türkiye'de Yaşam (الحياة في تركيا)",
    imageDescription: "Görsel: Türkiye'nin farklı şehirlerinden (İstanbul, Ankara, Kapadokya) manzaralar.",
    contentTr: "Türkiye büyük ve güzel bir ülke. İstanbul en kalabalık şehir. Ankara başkent. Türkiye'de dört mevsim yaşanır. Türk insanı misafirperverdir. Yemekleri çok lezzetlidir. Kebap, baklava ve çay çok meşhurdur.",
    contentAr: "تركيا بلد كبير وجميل. إسطنبول هي المدينة الأكثر ازدحاماً. أنقرة هي العاصمة. تُعاش الفصول الأربعة في تركيا. الشعب التركي مضياف. طعامهم لذيذ جداً. الكباب والبقلاوة والشاي مشهورون جداً."
  };

  return {
    id: 9,
    titleTr: "GENEL TEKRAR VE SINAV",
    titleAr: "المراجعة العامة والامتحان",
    description: `${courseName} - Kapsamlı Sınav ve Genel Tekrar / امتحان شامل ومراجعة عامة`,
    vocabulary: allVocab,
    grammar: allGrammar,
    dialogue: [integratedDialogue, ...reviewDialogues],
    reading: [integratedReading, ...reviewReadings],
    manualQuiz: allManualQuizQuestions
  };
}

// =============================================================================
// CONSTRUCT FINAL COURSES
// =============================================================================

const ISTANBUL_FINAL_UNIT = createCumulativeUnit(ISTANBUL_BASE_UNITS, "İstanbul A1");
const YEDI_IKLIM_FINAL_UNIT = createCumulativeUnit(YEDI_IKLIM_BASE_UNITS, "Yedi İklim A1");

export const COURSES: Course[] = [
  {
    id: "istanbul_a1",
    titleTr: "İstanbul Yabancılar İçin Türkçe A1",
    titleAr: "إسطنبول للغة التركية للأجانب A1",
    coverColor: "bg-red-600",
    units: [...ISTANBUL_BASE_UNITS, ISTANBUL_FINAL_UNIT]
  },
  {
    id: "yedi_iklim_a1",
    titleTr: "Yedi İklim Türkçe A1",
    titleAr: "التركية يونس إمرة    A1",
    coverColor: "bg-blue-600",
    units: [...YEDI_IKLIM_BASE_UNITS, YEDI_IKLIM_FINAL_UNIT]
  }
];

export const UNITS = ISTANBUL_BASE_UNITS; // Default export for backwards compatibility if needed
