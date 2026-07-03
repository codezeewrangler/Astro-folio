type Language = 'en' | 'hi';

const STORAGE_KEY = 'portfolio-language';

const translations: Record<string, string> = {
  'Celestial': 'आकाशीय',
  'Guidance': 'मार्गदर्शन',
  'Home': 'होम',
  'Experience': 'अनुभव',
  'Contact & Booking': 'संपर्क और बुकिंग',
  'Email': 'ईमेल',
  'LinkedIn': 'लिंक्डइन',
  'GitHub': 'गिटहब',
  'All rights reserved.': 'सर्वाधिकार सुरक्षित।',
  'Aligning ancient wisdom with modern psychological insights.': 'प्राचीन ज्ञान को आधुनिक मनोवैज्ञानिक अंतर्दृष्टि से जोड़ना।',
  '© 2026 Celestial Guidance Astrology. All rights reserved.': '© 2026 आकाशीय मार्गदर्शन ज्योतिष। सर्वाधिकार सुरक्षित।',

  'Certified Astrology Professional': 'प्रमाणित ज्योतिष पेशेवर',
  'Certified Vedic & Western Astrology Professional': 'प्रमाणित वैदिक और पश्चिमी ज्योतिष पेशेवर',
  'Aligning Your Life With': 'आपके जीवन को जोड़ना',
  'Cosmic Design': 'ब्रह्मांडीय योजना से',
  'Book a Reading': 'रीडिंग बुक करें',
  'Book a Kundli Reading': 'कुंडली रीडिंग बुक करें',
  'Explore My Journey': 'मेरी यात्रा देखें',
  'Years Experience': 'वर्षों का अनुभव',
  'Charts Analyzed': 'कुंडलियों का विश्लेषण',
  'Client Satisfaction': 'ग्राहक संतुष्टि',
  'Explore the': 'देखें',
  'Cosmic Wheel': 'ब्रह्मांडीय चक्र',
  'Interact with the houses of the zodiac to reveal key archetypes and insights.': 'मुख्य आर्केटाइप और अंतर्दृष्टि जानने के लिए राशि चक्र के भावों से इंटरैक्ट करें।',
  'Professional Summary': 'पेशेवर सारांश',
  'Profile Image': 'प्रोफ़ाइल छवि',
  'Astrologer Portrait': 'ज्योतिषी पोर्ट्रेट',
  'Update this image from the browser. Your selected image is saved locally for future visits on this device.': 'इस छवि को browser से update करें। आपकी चुनी हुई छवि इस device पर future visits के लिए locally save होगी।',
  'Change Image': 'छवि बदलें',
  'Reset': 'रीसेट',
  'Professional astrologer portrait': 'पेशेवर ज्योतिषी पोर्ट्रेट',
  'My Story': 'मेरी कहानी',
  'Core': 'मुख्य',
  'Principles': 'सिद्धांत',
  'The philosophical pillars that ground my astrological practice.': 'वे दार्शनिक आधार जिन पर मेरा ज्योतिष अभ्यास टिका है।',
  'Active Pursuits & Goals': 'सक्रिय प्रयास और लक्ष्य',
  'A Personal Note': 'एक व्यक्तिगत नोट',
  'Kundli Intelligence': 'कुंडली इंटेलिजेंस',
  'Kundli, Yogas &': 'कुंडली, योग और',
  'Rajyog Analysis': 'राजयोग विश्लेषण',
  'A complete reading should connect birth-chart structure with timing, strengths, challenges, and practical guidance.': 'एक पूर्ण रीडिंग में जन्म कुंडली की संरचना को timing, strengths, challenges और व्यावहारिक guidance से जोड़ना चाहिए।',
  'Kundli Foundation': 'कुंडली आधार',
  'Lagna, Moon sign, planetary dignity, house strength, aspects, conjunctions, nakshatras, and divisional chart context.': 'लग्न, चंद्र राशि, ग्रह बल, भाव शक्ति, दृष्टि, युति, नक्षत्र और divisional charts का संदर्भ।',
  'Yog & Rajyog': 'योग और राजयोग',
  'Identification of Dhan Yog, Gaj Kesari Yog, Budhaditya Yog, Vipreet Rajyog, Neech Bhang Rajyog, and career-supporting combinations.': 'धन योग, गज केसरी योग, बुधादित्य योग, विपरीत राजयोग, नीच भंग राजयोग और career-supporting combinations की पहचान।',
  'Dasha & Transit Timing': 'दशा और गोचर timing',
  'Vimshottari dasha, antardasha, Saturn/Jupiter transit, sade sati, return periods, and high-probability windows for action.': 'विंशोत्तरी दशा, अंतर्दशा, शनि/गुरु गोचर, साढ़े साती, return periods और action के high-probability windows।',
  'Remedies & Guidance': 'उपाय और मार्गदर्शन',
  'Practical remedies, mantra discipline, gemstone suitability, donation guidance, habit corrections, and decision planning.': 'व्यावहारिक उपाय, मंत्र अनुशासन, gemstone suitability, दान guidance, habit corrections और decision planning।',
  'Essential': 'आवश्यक',
  'Consultation Areas': 'परामर्श क्षेत्र',
  'Focused astrology support for the decisions clients most often need clarity on.': 'उन निर्णयों के लिए focused astrology support जिन पर clients को सबसे अधिक clarity चाहिए।',
  'Career & Business Timing': 'करियर और बिजनेस timing',
  'Profession direction, promotion windows, business launch muhurta, partnership risk, and financial growth cycles.': 'Profession direction, promotion windows, business launch muhurta, partnership risk और financial growth cycles।',
  'Marriage & Compatibility': 'विवाह और अनुकूलता',
  'Guna matching, Manglik analysis, relationship patterns, synastry, emotional compatibility, and timing for commitment.': 'गुण मिलान, मांगलिक विश्लेषण, relationship patterns, synastry, emotional compatibility और commitment timing।',
  'Wealth & Rajyog Potential': 'धन और राजयोग क्षमता',
  'Wealth houses, Lakshmi yogas, inheritance indicators, authority combinations, and periods that activate recognition.': 'धन भाव, लक्ष्मी योग, inheritance indicators, authority combinations और recognition activate करने वाले periods।',
  'Health & Life Balance': 'स्वास्थ्य और जीवन संतुलन',
  'Stress signatures, recurring patterns, lifestyle-sensitive periods, and practical spiritual routines for steadier choices.': 'Stress signatures, recurring patterns, lifestyle-sensitive periods और स्थिर choices के लिए practical spiritual routines।',
  'Kundli chart with Vedic astrology analysis tools': 'वैदिक ज्योतिष विश्लेषण साधनों के साथ कुंडली चार्ट',

  'Dedicated Astrology Professional with extensive expertise in natal chart analysis, planetary transits, and predictive astrology. I guide individuals and organizations through life transitions using ancient wisdom combined with modern psychological insights, helping them align with their cosmic purpose.': 'जन्म कुंडली विश्लेषण, ग्रह गोचर और भविष्यवाणी ज्योतिष में व्यापक विशेषज्ञता वाला समर्पित ज्योतिष पेशेवर। मैं प्राचीन ज्ञान और आधुनिक मनोवैज्ञानिक अंतर्दृष्टि के संयोजन से व्यक्तियों और संगठनों को जीवन परिवर्तन में मार्गदर्शन देता हूं, ताकि वे अपने ब्रह्मांडीय उद्देश्य के साथ तालमेल बना सकें।',
  'I am a certified Astrology Professional with 8+ years of experience in Vedic and Western astrology traditions. I specialize in comprehensive natal chart interpretation, transit analysis, timing predictions, and spiritual guidance. My approach blends classical astrological techniques with contemporary coaching methods to provide clients with actionable insights and deeper self-understanding.': 'मैं वैदिक और पश्चिमी ज्योतिष परंपराओं में 8+ वर्षों के अनुभव वाला प्रमाणित ज्योतिष पेशेवर हूं। मेरी विशेषज्ञता विस्तृत जन्म कुंडली व्याख्या, गोचर विश्लेषण, समय निर्धारण और आध्यात्मिक मार्गदर्शन में है। मेरा तरीका शास्त्रीय ज्योतिष तकनीकों को समकालीन कोचिंग पद्धतियों से मिलाकर ग्राहकों को उपयोगी अंतर्दृष्टि और गहरी आत्म-समझ देता है।',
  "My journey into astrology began with personal curiosity about life's patterns and deeper purpose. After witnessing the transformative impact of chart analysis on my own life decisions, I pursued formal training in both Vedic and Western astrological systems. Over the years, I've refined my practice through intensive study, continuous learning, and working with diverse clients ranging from individuals seeking personal guidance to entrepreneurs requiring business timing optimization. Today, I focus on delivering authentic, empowering readings that illuminate clients' potential and help them navigate life's cyclical nature with confidence and clarity.": 'ज्योतिष में मेरी यात्रा जीवन के पैटर्न और गहरे उद्देश्य को समझने की व्यक्तिगत जिज्ञासा से शुरू हुई। अपनी जीवन-निर्णय प्रक्रिया पर कुंडली विश्लेषण के परिवर्तनकारी प्रभाव को देखने के बाद, मैंने वैदिक और पश्चिमी दोनों ज्योतिष प्रणालियों में औपचारिक प्रशिक्षण लिया। वर्षों में, गहन अध्ययन, निरंतर सीखने और विविध ग्राहकों के साथ काम करके मैंने अपने अभ्यास को निखारा। आज मेरा ध्यान ऐसी प्रामाणिक और सशक्त रीडिंग देने पर है जो ग्राहकों की क्षमता को उजागर करे और उन्हें जीवन की चक्रीय प्रकृति को आत्मविश्वास और स्पष्टता से समझने में मदद करे।',
  'Beyond the charts and calculations, I\'m driven by a deep curiosity about human nature and the cosmos. I believe astrology serves as a powerful mirror for self-discovery and a tool for cultivating intentionality. When I\'m not analyzing charts, you\'ll find me exploring mythology, studying psychology, or discussing philosophy—all interests that inform and deepen my astrological practice.': 'कुंडलियों और गणनाओं से आगे, मानव स्वभाव और ब्रह्मांड के प्रति गहरी जिज्ञासा मुझे प्रेरित करती है। मेरा मानना है कि ज्योतिष आत्म-खोज का शक्तिशाली दर्पण और सजगता विकसित करने का साधन है। जब मैं कुंडलियों का विश्लेषण नहीं कर रहा होता, तब आप मुझे पौराणिक कथाएं खोजते, मनोविज्ञान पढ़ते या दर्शन पर चर्चा करते पाएंगे। ये सभी रुचियां मेरे ज्योतिष अभ्यास को गहरा बनाती हैं।',
  'Integrity & Authenticity': 'ईमानदारी और प्रामाणिकता',
  'Honest interpretations grounded in classical astrological principles, without manipulation or fear-based narratives': 'शास्त्रीय ज्योतिष सिद्धांतों पर आधारित ईमानदार व्याख्या, बिना हेरफेर या भय-आधारित कथाओं के',
  'Empowerment': 'सशक्तिकरण',
  'Helping clients become active co-creators of their destiny rather than passive recipients of fate': 'ग्राहकों को भाग्य के निष्क्रिय प्राप्तकर्ता के बजाय अपनी नियति के सक्रिय सह-निर्माता बनने में मदद करना',
  'Continuous Learning': 'निरंतर सीखना',
  'Staying current with astrological research, psychology, and emerging practices to serve clients with evolving wisdom': 'विकसित होती समझ के साथ ग्राहकों की सेवा के लिए ज्योतिष शोध, मनोविज्ञान और नई पद्धतियों से अद्यतन रहना',
  'Compassionate Guidance': 'करुणामय मार्गदर्शन',
  'Meeting clients where they are with sensitivity, respect for their beliefs, and non-judgmental support': 'संवेदनशीलता, विश्वासों के सम्मान और निष्पक्ष समर्थन के साथ ग्राहकों से वहीं मिलना जहां वे हैं',
  'Short-term': 'अल्पकालिक',
  'Expand my client base with specialized services in business astrology and relationship compatibility, while building a resource library of educational content for aspiring astrology enthusiasts': 'बिजनेस ज्योतिष और संबंध अनुकूलता की विशेष सेवाओं के साथ ग्राहक आधार बढ़ाना, साथ ही उभरते ज्योतिष रुचि रखने वालों के लिए शैक्षिक सामग्री की लाइब्रेरी बनाना',
  'Long-term': 'दीर्घकालिक',
  'Establish a recognized practice as a thought leader in integrative astrology, mentor emerging practitioners, and develop innovative approaches that bridge ancient astrological wisdom with modern life contexts': 'इंटीग्रेटिव ज्योतिष में विचार-नेता के रूप में मान्यता प्राप्त अभ्यास स्थापित करना, उभरते practitioners को मेंटर करना और ऐसी नई पद्धतियां विकसित करना जो प्राचीन ज्योतिष ज्ञान को आधुनिक जीवन संदर्भों से जोड़ें',

  'Interactive Zodiac': 'इंटरैक्टिव राशि चक्र',
  'Hover over or tap any sector of the celestial wheel to decode its archetype, ruling planet, element, and cosmic guidance.': 'इसके आर्केटाइप, स्वामी ग्रह, तत्व और ब्रह्मांडीय मार्गदर्शन जानने के लिए आकाशीय चक्र के किसी भी भाग पर hover या tap करें।',
  'Aries': 'मेष',
  'Taurus': 'वृषभ',
  'Gemini': 'मिथुन',
  'Cancer': 'कर्क',
  'Leo': 'सिंह',
  'Virgo': 'कन्या',
  'Libra': 'तुला',
  'Scorpio': 'वृश्चिक',
  'Sagittarius': 'धनु',
  'Capricorn': 'मकर',
  'Aquarius': 'कुंभ',
  'Pisces': 'मीन',
  'Fire': 'अग्नि',
  'Earth': 'पृथ्वी',
  'Air': 'वायु',
  'Water': 'जल',
  'Mars': 'मंगल',
  'Venus': 'शुक्र',
  'Mercury': 'बुध',
  'Moon': 'चंद्रमा',
  'Sun': 'सूर्य',
  'Mars/Pluto': 'मंगल/प्लूटो',
  'Jupiter': 'बृहस्पति',
  'Saturn': 'शनि',
  'Saturn/Uranus': 'शनि/यूरेनस',
  'Jupiter/Neptune': 'बृहस्पति/नेपच्यून',
  'The pioneer of the zodiac. Drives initiative, raw courage, and new beginnings. Vedic translation: Mesha.': 'राशि चक्र का अग्रदूत। पहल, साहस और नई शुरुआत को प्रेरित करता है। वैदिक नाम: मेष।',
  'The anchor of the zodiac. Symbolizes stability, sensory beauty, determination, and material creation. Vedic: Vrishabha.': 'राशि चक्र का आधार। स्थिरता, सौंदर्य-बोध, दृढ़ता और भौतिक सृजन का प्रतीक। वैदिक: वृषभ।',
  'The messenger of the zodiac. Inspires versatile communication, intellect, learning, and adaptability. Vedic: Mithuna.': 'राशि चक्र का संदेशवाहक। बहुमुखी संवाद, बुद्धि, सीखने और अनुकूलन को प्रेरित करता है। वैदिक: मिथुन।',
  'The nurturer of the zodiac. Rules the emotional realm, intuition, security, home, and ancestral roots. Vedic: Karka.': 'राशि चक्र का पोषक। भावनाओं, अंतर्ज्ञान, सुरक्षा, घर और पैतृक जड़ों से जुड़ा। वैदिक: कर्क।',
  'The sovereign of the zodiac. Embodies creative expression, leadership, vitality, and generosity. Vedic: Simha.': 'राशि चक्र का शासक। रचनात्मक अभिव्यक्ति, नेतृत्व, ऊर्जा और उदारता का प्रतीक। वैदिक: सिंह।',
  'The alchemist of the zodiac. Focuses on systems analysis, practical service, refinement, and wellness. Vedic: Kanya.': 'राशि चक्र का विश्लेषक। प्रणाली विश्लेषण, व्यावहारिक सेवा, परिष्कार और स्वास्थ्य पर केंद्रित। वैदिक: कन्या।',
  'The diplomat of the zodiac. Seeks equilibrium, relationship harmony, aesthetic balance, and justice. Vedic: Tula.': 'राशि चक्र का कूटनीतिज्ञ। संतुलन, संबंधों में सामंजस्य, सौंदर्य संतुलन और न्याय चाहता है। वैदिक: तुला।',
  'The transformer of the zodiac. Commands depth, psychological insight, healing, and personal power. Vedic: Vrishchika.': 'राशि चक्र का रूपांतरणकर्ता। गहराई, मनोवैज्ञानिक अंतर्दृष्टि, उपचार और व्यक्तिगत शक्ति से जुड़ा। वैदिक: वृश्चिक।',
  'The seeker of the zodiac. Drives philosophical exploration, wisdom, travel, optimism, and truth. Vedic: Dhanu.': 'राशि चक्र का खोजी। दर्शन, ज्ञान, यात्रा, आशावाद और सत्य की ओर प्रेरित करता है। वैदिक: धनु।',
  'The builder of the zodiac. Master of responsibility, timing, structured ambition, and longevity. Vedic: Makara.': 'राशि चक्र का निर्माता। जिम्मेदारी, समय, संरचित महत्वाकांक्षा और दीर्घायु का स्वामी। वैदिक: मकर।',
  'The visionary of the zodiac. Connects community, innovative solutions, progress, and independence. Vedic: Kumbha.': 'राशि चक्र का दूरदर्शी। समुदाय, नवाचार, प्रगति और स्वतंत्रता से जुड़ा। वैदिक: कुंभ।',
  'The mystic of the zodiac. Governs the spiritual realms, unity, compassion, and creative dreaming. Vedic: Meena.': 'राशि चक्र का रहस्यवादी। आध्यात्मिकता, एकता, करुणा और रचनात्मक स्वप्नों से जुड़ा। वैदिक: मीन।',

  'Chronicle': 'वृत्तांत',
  'Experience & Skills': 'अनुभव और कौशल',
  'A mapping of my professional trajectory, consultancy focus areas, and technical proficiencies.': 'मेरी पेशेवर यात्रा, परामर्श क्षेत्रों और तकनीकी दक्षताओं का मानचित्र।',
  'Journey': 'यात्रा',
  'Timeline': 'समयरेखा',
  'Key Responsibilities': 'मुख्य जिम्मेदारियां',
  'Key Outcomes': 'मुख्य परिणाम',
  'Team:': 'टीम:',
  'Client Advisory Services': 'ग्राहक सलाह सेवाएं',
  'Education & Workshop Delivery': 'शिक्षा और वर्कशॉप डिलीवरी',
  'Cosmic Insights Consultations': 'कॉस्मिक इनसाइट्स कंसल्टेशन',
  'Lead Astrologer & Consult': 'लीड ज्योतिषी और परामर्शदाता',
  'Starlight Astrological Academy': 'स्टारलाइट ज्योतिष अकादमी',
  'Associate Astrologer & Educator': 'सहायक ज्योतिषी और शिक्षक',
  'Jan 2020 to Present': 'जनवरी 2020 से वर्तमान',
  'Mar 2017 to Dec 2019': 'मार्च 2017 से दिसंबर 2019',
  'Conduct detailed natal chart analyses, planetary transit readings, and relationship compatibility synastry for 500+ global clients.': '500+ वैश्विक ग्राहकों के लिए विस्तृत जन्म कुंडली विश्लेषण, ग्रह गोचर रीडिंग और संबंध अनुकूलता सिनैस्ट्री की।',
  'Provide strategic career, relationship, and business timing consultations to entrepreneurs, creatives, and individuals.': 'उद्यमियों, रचनात्मक पेशेवरों और व्यक्तियों को करियर, संबंध और बिजनेस timing पर रणनीतिक परामर्श दिया।',
  'Helped 50+ business owners optimize launch timing, contributing to a significant decrease in initial operational risks.': '50+ बिजनेस मालिकों को लॉन्च timing बेहतर करने में मदद की, जिससे शुरुआती संचालन जोखिमों में कमी आई।',
  'Maintained a 98% satisfaction rating across standard and premium consulting programs.': 'स्टैंडर्ड और प्रीमियम परामर्श कार्यक्रमों में 98% संतुष्टि रेटिंग बनाए रखी।',
  'Facilitated weekly workshops and seminars on basic-to-intermediate natal chart reading techniques and transit interpretations.': 'बेसिक से इंटरमीडिएट जन्म कुंडली पढ़ने की तकनीकों और गोचर व्याख्या पर साप्ताहिक वर्कशॉप और सेमिनार आयोजित किए।',
  'Mentored 80+ aspiring astrologers through intensive, practical chart study sessions and counseling techniques.': 'गहन व्यावहारिक कुंडली अध्ययन सत्रों और काउंसलिंग तकनीकों के माध्यम से 80+ उभरते ज्योतिषियों को मेंटर किया।',
  'Designed and successfully launched a comprehensive 12-week introduction to predictive astrology curriculum.': 'भविष्यवाणी ज्योतिष का व्यापक 12-सप्ताह परिचय पाठ्यक्रम डिजाइन और सफलतापूर्वक लॉन्च किया।',
  'Maintained a student retention rate above 92% across all cohort terms.': 'सभी cohorts में 92% से अधिक छात्र retention rate बनाए रखी।',
  'Core Skills': 'मुख्य कौशल',
  'Frontend': 'फ्रंटएंड',
  'Backend & Calculations': 'बैकएंड और गणनाएं',
  'Database & Cloud': 'डेटाबेस और क्लाउड',
  'Tools': 'टूल्स',
  'Soft Skills': 'सॉफ्ट स्किल्स',
  'Natal Chart Interpretation': 'जन्म कुंडली व्याख्या',
  'Planetary Transit Analysis': 'ग्रह गोचर विश्लेषण',
  'Vedic Astrology (Jyotish)': 'वैदिक ज्योतिष',
  'Western Psychological Astrology': 'पश्चिमी मनोवैज्ञानिक ज्योतिष',
  'Relationship Compatibility (Synastry)': 'संबंध अनुकूलता (सिनैस्ट्री)',
  'Predictive Dasha Systems': 'भविष्यवाणी दशा प्रणाली',
  'Astro Framework': 'Astro फ्रेमवर्क',
  'Interactive SVG Rendering': 'इंटरैक्टिव SVG रेंडरिंग',
  'Vanilla CSS / HSL Color Systems': 'Vanilla CSS / HSL रंग प्रणाली',
  'Responsive UI Design': 'रिस्पॉन्सिव UI डिजाइन',
  'Native DOM Animations': 'नेटिव DOM एनिमेशन',
  'Swiss Ephemeris API Integration': 'Swiss Ephemeris API इंटीग्रेशन',
  'REST API Design': 'REST API डिजाइन',
  'Calculations Unit Testing': 'गणना यूनिट टेस्टिंग',
  'Vercel Deployment': 'Vercel डिप्लॉयमेंट',
  'Firebase Services': 'Firebase सेवाएं',
  'Jest Testing Library': 'Jest टेस्टिंग लाइब्रेरी',
  'Swiss Ephemeris library': 'Swiss Ephemeris लाइब्रेरी',
  'Astro Devtools': 'Astro Devtools',
  'Empathetic Listening': 'सहानुभूतिपूर्ण सुनना',
  'Non-judgmental Guidance': 'निष्पक्ष मार्गदर्शन',
  'Clear Written & Verbal Communication': 'स्पष्ट लिखित और मौखिक संवाद',
  'Problem Solving': 'समस्या समाधान',
  'Time Management & Scheduling': 'समय प्रबंधन और शेड्यूलिंग',

  'Creations & Standards': 'निर्माण और मानक',
  'A collection of technical tools I have built and the professional methodologies I follow.': 'मेरे बनाए तकनीकी टूल्स और जिन पेशेवर पद्धतियों का मैं पालन करता हूं उनका संग्रह।',
  'Astrological': 'ज्योतिषीय',
  'Software': 'सॉफ्टवेयर',
  'Custom applications developed to make celestial insights interactive, responsive, and accessible.': 'आकाशीय अंतर्दृष्टि को इंटरैक्टिव, रिस्पॉन्सिव और सुलभ बनाने के लिए विकसित कस्टम एप्लिकेशन।',
  'Consultation & Work': 'परामर्श और कार्य',
  'Standards': 'मानक',
  'The protocols, workflows, and quality standards I adhere to in research and developer collaborations.': 'शोध और डेवलपर सहयोग में जिन protocols, workflows और गुणवत्ता मानकों का मैं पालन करता हूं।',
  'The Challenge': 'चुनौती',
  'The Solution': 'समाधान',
  'The Impact': 'प्रभाव',
  'Explore Project': 'प्रोजेक्ट देखें',
  'Cosmic Clock': 'कॉस्मिक क्लॉक',
  'Personalized Transit Planner': 'व्यक्तिगत गोचर प्लानर',
  'Vedic Match': 'वैदिक मैच',
  'Compatibility Engine': 'अनुकूलता इंजन',
  'Personal & Professional Tool': 'व्यक्तिगत और पेशेवर टूल',
  'Professional Consultation Module': 'पेशेवर परामर्श मॉड्यूल',
  'Jun 2023 to Dec 2023': 'जून 2023 से दिसंबर 2023',
  'Feb 2022 to Sep 2022': 'फरवरी 2022 से सितंबर 2022',
  'Clients struggled to track how current planetary movements align with their specific natal chart on a daily basis.': 'ग्राहकों को रोजाना यह ट्रैक करने में कठिनाई होती थी कि वर्तमान ग्रह चाल उनकी जन्म कुंडली से कैसे मेल खाती है।',
  "Developed a personalized transit planner application that visualizes planetary transits against a user's natal chart in real-time, sending notifications for key planetary transits (e.g., Mercury retrograde, Saturn return).": 'एक व्यक्तिगत गोचर प्लानर एप्लिकेशन विकसित किया जो उपयोगकर्ता की जन्म कुंडली के अनुसार ग्रह गोचर को real-time में दिखाता है और महत्वपूर्ण गोचरों के लिए notifications भेजता है।',
  'Actively used by 100+ clients to plan their schedules and major life decisions, enhancing timing-based results.': '100+ ग्राहकों द्वारा schedules और बड़े जीवन निर्णयों की योजना बनाने के लिए सक्रिय रूप से उपयोग किया गया, जिससे timing-आधारित परिणाम बेहतर हुए।',
  'Traditional relationship compatibility software uses basic zodiac sign matching, which lacks depth and accuracy.': 'पारंपरिक संबंध अनुकूलता सॉफ्टवेयर सामान्य राशि मिलान का उपयोग करता है, जिसमें गहराई और सटीकता की कमी होती है।',
  'Built an Ashtakoota compatibility calculator that combines classical Vedic astrology rules with modern relationship psychology profiles.': 'एक अष्टकूट अनुकूलता calculator बनाया जो शास्त्रीय वैदिक ज्योतिष नियमों को आधुनिक संबंध मनोविज्ञान profiles के साथ जोड़ता है।',
  'Integrated into a prominent online relationship consultancy platform, increasing client booking retention by 40%.': 'एक प्रमुख ऑनलाइन relationship consultancy platform में integrate किया गया, जिससे client booking retention 40% बढ़ी।',
  'Practices': 'अभ्यास',
  'Work Principles': 'कार्य सिद्धांत',
  'User-first decisions': 'यूज़र-फर्स्ट निर्णय',
  'Clear communication': 'स्पष्ट संवाद',
  'Continuous improvement': 'निरंतर सुधार',
  'Ownership and accountability': 'स्वामित्व और जवाबदेही',
  'Development Workflow': 'डेवलपमेंट वर्कफ़्लो',
  'Understand problem and define scope.': 'समस्या समझें और scope तय करें।',
  'Break work into small deliverables.': 'काम को छोटे deliverables में बांटें।',
  'Build with clean and maintainable code.': 'साफ और maintainable code से बनाएं।',
  'Review, test, and improve.': 'Review, test और improve करें।',
  'Document decisions and handoff clearly.': 'निर्णयों और handoff को स्पष्ट रूप से document करें।',
  'Code Quality Practices': 'कोड गुणवत्ता अभ्यास',
  'Meaningful naming and clear structure': 'अर्थपूर्ण naming और स्पष्ट structure',
  'Reusable components and modular design': 'Reusable components और modular design',
  'Linting, formatting, and static checks': 'Linting, formatting और static checks',
  'Unit/integration testing where applicable': 'जहां लागू हो unit/integration testing',
  'PR reviews before merge': 'Merge से पहले PR reviews',
  'Collaboration Practices': 'सहयोग अभ्यास',
  'Write clear task updates and notes': 'स्पष्ट task updates और notes लिखें',
  'Raise risks early': 'जोखिम जल्दी उठाएं',
  'Discuss trade-offs with stakeholders': 'Stakeholders के साथ trade-offs पर चर्चा करें',
  'Share learnings with the team': 'सीख को team के साथ share करें',
  'Learning Practices': 'सीखने के अभ्यास',
  'Weekly learning goals': 'साप्ताहिक learning goals',
  'Build small experiments': 'छोटे experiments बनाएं',
  'Track lessons learned after each project': 'हर project के बाद सीखे गए lessons track करें',
  'Follow community and ecosystem updates': 'Community और ecosystem updates follow करें',
  'Delivery Standards': 'Delivery मानक',
  'Performance-aware implementation': 'Performance-aware implementation',
  'Accessibility basics included': 'Accessibility basics शामिल',
  'Mobile responsive behavior': 'Mobile responsive behavior',
  'Reliable deployment checklist': 'Reliable deployment checklist',

  'Inquire': 'पूछताछ',
  'Schedule a chart consultation or start a conversation about potential speaking and writing opportunities.': 'कुंडली परामर्श schedule करें या speaking और writing opportunities पर बातचीत शुरू करें।',
  'Public Contact': 'सार्वजनिक संपर्क',
  'Availability Status': 'उपलब्धता स्थिति',
  'Collaboration Channels': 'सहयोग चैनल',
  'Consultation Booking': 'परामर्श बुकिंग',
  'Provide your exact birth coordinates so we can prepare your natal chart geometries before the reading.': 'अपने सटीक जन्म details दें ताकि reading से पहले आपकी जन्म कुंडली तैयार की जा सके।',
  'Full Name': 'पूरा नाम',
  'Email Address': 'ईमेल पता',
  'Date of Birth': 'जन्म तिथि',
  'Exact Time of Birth': 'जन्म का सटीक समय',
  'Check your birth certificate if possible.': 'संभव हो तो अपना birth certificate जांचें।',
  'Place of Birth': 'जन्म स्थान',
  'Consultation Focus': 'परामर्श फोकस',
  'Select reading archetype...': 'Reading type चुनें...',
  'Natal Chart Geometry (In-depth analysis)': 'जन्म कुंडली ज्योमेट्री (गहन विश्लेषण)',
  'Planetary Transits & Timing (1-year forecast)': 'ग्रह गोचर और timing (1-वर्ष forecast)',
  'Synastry & Relationship Geometry': 'सिनैस्ट्री और संबंध ज्योमेट्री',
  'Electional Business Launch Timing': 'बिजनेस लॉन्च के लिए शुभ timing',
  'Focus Areas / Specific Questions': 'फोकस क्षेत्र / विशिष्ट प्रश्न',
  'Briefly describe what life transitions or questions you want to focus on during our reading.': 'संक्षेप में बताएं कि reading के दौरान आप किन जीवन बदलावों या प्रश्नों पर ध्यान देना चाहते हैं।',
  'Request Consultation': 'परामर्श अनुरोध भेजें',
  'Request Alignment Confirmed!': 'अनुरोध पुष्टि हो गई!',
  'Your birth coordinates have been sent to the celestial engine. I will review your natal alignments and contact you within 24 hours with booking schedules.': 'आपके जन्म details भेज दिए गए हैं। मैं आपकी जन्म कुंडली देखूंगा और booking schedule के साथ 24 घंटे के भीतर संपर्क करूंगा।',
  'Return to Form': 'फॉर्म पर लौटें',
  'Active consulting terms. Average response: 24h.': 'परामर्श सक्रिय है। औसत response: 24 घंटे।',
  'Open to': 'उपलब्ध',
  'Freelance / Consultations / Speaking Engagements': 'Freelance / परामर्श / Speaking Engagements',
  'Location': 'स्थान',
  'New Delhi, India': 'नई दिल्ली, भारत',
  'Time Zone': 'समय क्षेत्र',
  'Communication': 'संचार',
  'Email / Slack': 'ईमेल / Slack',
  'Typical response time': 'सामान्य response time',
  'within 24 hours': '24 घंटे के भीतर',
  'Portfolio': 'पोर्टफोलियो',
  'City, State, Country': 'शहर, राज्य, देश',
};

const reverseTranslations = Object.entries(translations).reduce<Record<string, string>>((acc, [en, hi]) => {
  acc[hi] = en;
  return acc;
}, {});

const translatableAttributes = ['aria-label', 'alt', 'placeholder', 'title', 'data-sign', 'data-element', 'data-planet', 'data-desc'];

function getSavedLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'hi' ? 'hi' : 'en';
}

function translateValue(value: string, language: Language): string {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const text = value.trim();
  const translated = language === 'hi' ? translations[text] : reverseTranslations[text];

  return translated ? `${leading}${translated}${trailing}` : value;
}

function translateTextNodes(root: ParentNode, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    node.textContent = translateValue(node.textContent ?? '', language);
  });
}

function translateAttributes(root: ParentNode, language: Language) {
  translatableAttributes.forEach((attr) => {
    root.querySelectorAll(`[${attr}]`).forEach((element) => {
      const value = element.getAttribute(attr);
      if (value) element.setAttribute(attr, translateValue(value, language));
    });
  });
}

function updateToggle(button: HTMLButtonElement | null, language: Language) {
  if (!button) return;

  const isHindi = language === 'hi';
  button.setAttribute('aria-pressed', String(isHindi));
  button.setAttribute('aria-label', isHindi ? 'Switch language to English' : 'भाषा हिंदी में बदलें');
  const current = button.querySelector('[data-language-current]');
  const target = button.querySelector('[data-language-target]');
  if (current) current.textContent = isHindi ? 'हि' : 'EN';
  if (target) target.textContent = isHindi ? 'EN' : 'हि';
}

function applyLanguage(language: Language) {
  if (!document.body) return;

  document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  translateTextNodes(document.body, language);
  translateAttributes(document.body, language);
  updateToggle(document.querySelector<HTMLButtonElement>('[data-language-toggle]'), language);
}

function initLanguageToggle() {
  const button = document.querySelector<HTMLButtonElement>('[data-language-toggle]');
  const savedLanguage = getSavedLanguage();

  applyLanguage(savedLanguage);

  button?.addEventListener('click', () => {
    const nextLanguage: Language = getSavedLanguage() === 'hi' ? 'en' : 'hi';
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    applyLanguage(nextLanguage);
  }, { signal: getAbortSignal(button) });
}

document.addEventListener('astro:page-load', initLanguageToggle);

function getAbortSignal(button: HTMLButtonElement) {
  const existingController = button.dataset.languageListenerId;
  if (existingController) {
    window.dispatchEvent(new CustomEvent(`language-toggle:abort:${existingController}`));
  }

  const id = crypto.randomUUID();
  const controller = new AbortController();
  button.dataset.languageListenerId = id;
  window.addEventListener(`language-toggle:abort:${id}`, () => controller.abort(), { once: true });

  return controller.signal;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageToggle, { once: true });
} else {
  initLanguageToggle();
}
