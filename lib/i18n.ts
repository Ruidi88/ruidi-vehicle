export type Locale = 'en' | 'fr' | 'ja'

export const locales: Locale[] = ['en', 'fr', 'ja']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ja: '日本語'
}

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  ja: '🇯🇵'
}

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      services: 'OEM/ODM Services',
      resources: 'Resources',
      blog: 'Blog',
      contact: 'Contact',
      tradeAccount: 'Trade Account',
      getQuote: 'Get B2B Pricing',
      wholesale: 'For Wholesale'
    },
    // Hero
    hero: {
      badge: 'Trusted by Distributors in 50+ Countries',
      title: 'Global OEM/ODM Mobility Scooter Manufacturer',
      subtitle: 'Since 1999, Ruidi has been delivering premium mobility solutions to distributors worldwide. Factory-direct quality with competitive B2B pricing.',
      cta1: 'Get B2B Pricing',
      cta2: 'Factory Tour Video',
      cta3: 'Download Catalog'
    },
    // Stats
    stats: {
      years: 'Years Experience',
      countries: 'Countries Served',
      capacity: 'Annual Capacity',
      patents: 'Patents & Innovations'
    },
    // Certifications
    certs: {
      title: 'Global Certifications',
      subtitle: 'Fully compliant with international standards'
    },
    // Products
    products: {
      title: 'Complete Product Range',
      subtitle: 'Six comprehensive categories covering every mobility need',
      viewAll: 'View All Products',
      viewCategory: 'View Category',
      categories: {
        travel: {
          name: 'Travel Scooters',
          desc: 'Lightweight, foldable designs for easy transport and storage'
        },
        fourWheel: {
          name: '4-Wheel Scooters',
          desc: 'Maximum stability and comfort for everyday use'
        },
        threeWheel: {
          name: '3-Wheel Scooters',
          desc: 'Enhanced maneuverability for tight spaces'
        },
        heavyDuty: {
          name: 'Heavy Duty',
          desc: 'High capacity models for larger users'
        },
        parts: {
          name: 'Parts & Accessories',
          desc: 'Batteries, chargers, and replacement components'
        },
        custom: {
          name: 'Custom Solutions',
          desc: 'Tailored OEM/ODM products for your brand'
        }
      }
    },
    // Why Choose Us
    whyUs: {
      title: 'Why Distributors Choose Ruidi',
      subtitle: 'Your trusted manufacturing partner for mobility solutions',
      features: {
        factory: {
          title: 'Factory-Direct Quality',
          desc: 'Cut out the middleman. Direct manufacturing ensures consistent quality and better margins for your business.'
        },
        moq: {
          title: 'Flexible MOQ & Fast Shipping',
          desc: 'Low minimum order quantities with 15-25 day production. Scale up with volume discounts as your business grows.'
        },
        oem: {
          title: 'OEM / White-Label Options',
          desc: 'Custom packaging, logo printing, and color schemes available. Build your brand on proven products.'
        },
        compliance: {
          title: 'Full Compliance Documentation',
          desc: 'CE, FDA, ISO 13485, TUV certifications. All documentation provided for regulatory requirements.'
        }
      }
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive support from concept to delivery',
      items: {
        oem: {
          title: 'OEM Manufacturing',
          desc: 'Produce your designs with our manufacturing expertise'
        },
        odm: {
          title: 'ODM Solutions',
          desc: 'Select from our proven designs for your brand'
        },
        customization: {
          title: 'Customization',
          desc: 'Colors, logos, packaging tailored to your market'
        },
        logistics: {
          title: 'Global Logistics',
          desc: 'Efficient shipping to ports worldwide'
        }
      }
    },
    // CTA
    cta: {
      title: 'Ready to Partner with Ruidi?',
      subtitle: 'Join 500+ distributors worldwide. Get wholesale pricing and product samples today.',
      button1: 'Request B2B Pricing',
      button2: 'Download Catalog'
    },
    // Footer
    footer: {
      description: 'Professional mobility scooter manufacturer since 1999. Serving distributors in 50+ countries with quality products and reliable service.',
      quickLinks: 'Quick Links',
      products: 'Products',
      support: 'Support',
      contact: 'Contact Us',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe for industry news and product updates',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email',
      rights: 'All Rights Reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    // About Page
    about: {
      title: 'About Ruidi',
      subtitle: 'A Legacy of Quality and Innovation',
      history: {
        title: 'Our History',
        content: 'Established in 1999, Zhejiang Ruidi Vehicle Industry Co., Ltd. began as a family business with a simple mission: to create mobility solutions that enhance independence and quality of life for seniors and individuals with mobility challenges.'
      },
      mission: {
        title: 'Our Mission',
        content: 'To be the world\'s most trusted mobility scooter manufacturer, delivering innovative products that empower independence while providing exceptional value to our distribution partners.'
      },
      facility: {
        title: 'Manufacturing Excellence',
        area: 'Production Area',
        lines: 'Assembly Lines',
        workers: 'Skilled Workers',
        daily: 'Daily Capacity'
      }
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our B2B team',
      form: {
        name: 'Your Name',
        company: 'Company Name',
        email: 'Email Address',
        phone: 'Phone Number',
        country: 'Country',
        interest: 'Interest',
        message: 'Message',
        submit: 'Send Inquiry',
        interests: {
          wholesale: 'Wholesale Inquiry',
          oem: 'OEM/ODM Partnership',
          sample: 'Sample Request',
          other: 'Other'
        }
      },
      info: {
        address: 'Address',
        addressValue: '58 Feiyang Road, Jinhua, Zhejiang, China',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours',
        hoursValue: 'Mon - Fri: 8:00 AM - 6:00 PM (GMT+8)'
      }
    },
    // Trade Account
    trade: {
      title: 'Apply for Trade Account',
      subtitle: 'Unlock exclusive B2B pricing and benefits',
      benefits: {
        title: 'Trade Account Benefits',
        pricing: 'Wholesale Pricing',
        pricingDesc: 'Access to exclusive B2B pricing tiers',
        credit: 'Credit Terms',
        creditDesc: 'Flexible payment terms for qualified partners',
        support: 'Dedicated Support',
        supportDesc: 'Priority access to our B2B sales team',
        samples: 'Product Samples',
        samplesDesc: 'Request samples at reduced rates'
      }
    },
    // Blog
    blog: {
      title: 'Industry Insights',
      subtitle: 'News, trends, and expertise from Ruidi',
      readMore: 'Read More',
      categories: {
        all: 'All',
        industry: 'Industry News',
        product: 'Product Updates',
        guides: 'Buying Guides',
        events: 'Trade Shows'
      }
    },
    // Common
    common: {
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      downloadPdf: 'Download PDF',
      backToTop: 'Back to Top'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      products: 'Produits',
      services: 'Services OEM/ODM',
      resources: 'Ressources',
      blog: 'Blog',
      contact: 'Contact',
      tradeAccount: 'Compte Pro',
      getQuote: 'Tarifs B2B',
      wholesale: 'Grossiste'
    },
    hero: {
      badge: 'Partenaire de confiance dans 50+ pays',
      title: 'Fabricant Mondial de Scooters de Mobilité OEM/ODM',
      subtitle: 'Depuis 1999, Ruidi fournit des solutions de mobilité premium aux distributeurs du monde entier. Qualité directe usine avec tarifs B2B compétitifs.',
      cta1: 'Tarifs B2B',
      cta2: 'Visite Usine',
      cta3: 'Télécharger Catalogue'
    },
    stats: {
      years: "Ans d'Expérience",
      countries: 'Pays Desservis',
      capacity: 'Capacité Annuelle',
      patents: 'Brevets & Innovations'
    },
    certs: {
      title: 'Certifications Mondiales',
      subtitle: 'Conformité totale aux normes internationales'
    },
    products: {
      title: 'Gamme Complète de Produits',
      subtitle: 'Six catégories complètes couvrant tous les besoins de mobilité',
      viewAll: 'Voir Tous les Produits',
      viewCategory: 'Voir Catégorie',
      categories: {
        travel: {
          name: 'Scooters de Voyage',
          desc: 'Designs légers et pliables pour un transport facile'
        },
        fourWheel: {
          name: 'Scooters 4 Roues',
          desc: 'Stabilité et confort maximum pour un usage quotidien'
        },
        threeWheel: {
          name: 'Scooters 3 Roues',
          desc: 'Maniabilité améliorée pour les espaces restreints'
        },
        heavyDuty: {
          name: 'Usage Intensif',
          desc: 'Modèles haute capacité pour utilisateurs plus lourds'
        },
        parts: {
          name: 'Pièces & Accessoires',
          desc: 'Batteries, chargeurs et composants de rechange'
        },
        custom: {
          name: 'Solutions Sur Mesure',
          desc: 'Produits OEM/ODM personnalisés pour votre marque'
        }
      }
    },
    whyUs: {
      title: 'Pourquoi Choisir Ruidi',
      subtitle: 'Votre partenaire fabricant de confiance pour les solutions de mobilité',
      features: {
        factory: {
          title: 'Qualité Directe Usine',
          desc: "Éliminez les intermédiaires. La fabrication directe garantit une qualité constante et de meilleures marges pour votre entreprise."
        },
        moq: {
          title: 'MOQ Flexible & Livraison Rapide',
          desc: "Quantités minimales faibles avec production de 15-25 jours. Profitez des remises volume au fur et à mesure de votre croissance."
        },
        oem: {
          title: 'Options OEM / Marque Blanche',
          desc: 'Emballage personnalisé, impression de logo et schémas de couleurs disponibles. Construisez votre marque sur des produits éprouvés.'
        },
        compliance: {
          title: 'Documentation Complète de Conformité',
          desc: 'Certifications CE, FDA, ISO 13485, TUV. Toute la documentation fournie pour les exigences réglementaires.'
        }
      }
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Support complet du concept à la livraison',
      items: {
        oem: {
          title: 'Fabrication OEM',
          desc: 'Produisez vos designs avec notre expertise de fabrication'
        },
        odm: {
          title: 'Solutions ODM',
          desc: 'Sélectionnez parmi nos designs éprouvés pour votre marque'
        },
        customization: {
          title: 'Personnalisation',
          desc: 'Couleurs, logos, emballages adaptés à votre marché'
        },
        logistics: {
          title: 'Logistique Mondiale',
          desc: 'Expédition efficace vers les ports du monde entier'
        }
      }
    },
    cta: {
      title: 'Prêt à Devenir Partenaire Ruidi?',
      subtitle: "Rejoignez 500+ distributeurs dans le monde. Obtenez les tarifs grossiste et des échantillons aujourd'hui.",
      button1: 'Demander Tarifs B2B',
      button2: 'Télécharger Catalogue'
    },
    footer: {
      description: 'Fabricant professionnel de scooters de mobilité depuis 1999. Au service des distributeurs dans 50+ pays avec des produits de qualité et un service fiable.',
      quickLinks: 'Liens Rapides',
      products: 'Produits',
      support: 'Support',
      contact: 'Contactez-nous',
      newsletter: 'Newsletter',
      newsletterDesc: "Abonnez-vous aux actualités de l'industrie et mises à jour produits",
      subscribe: "S'abonner",
      emailPlaceholder: 'Entrez votre email',
      rights: 'Tous Droits Réservés',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation"
    },
    about: {
      title: 'À Propos de Ruidi',
      subtitle: 'Un Héritage de Qualité et d\'Innovation',
      history: {
        title: 'Notre Histoire',
        content: 'Fondée en 1999, Zhejiang Ruidi Vehicle Industry Co., Ltd. a débuté comme une entreprise familiale avec une mission simple: créer des solutions de mobilité qui améliorent l\'indépendance et la qualité de vie des seniors et des personnes à mobilité réduite.'
      },
      mission: {
        title: 'Notre Mission',
        content: 'Être le fabricant de scooters de mobilité le plus fiable au monde, offrant des produits innovants qui favorisent l\'indépendance tout en apportant une valeur exceptionnelle à nos partenaires distributeurs.'
      },
      facility: {
        title: 'Excellence de Fabrication',
        area: 'Surface de Production',
        lines: 'Lignes d\'Assemblage',
        workers: 'Ouvriers Qualifiés',
        daily: 'Capacité Journalière'
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Contactez notre équipe B2B',
      form: {
        name: 'Votre Nom',
        company: 'Nom de l\'Entreprise',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        country: 'Pays',
        interest: 'Intérêt',
        message: 'Message',
        submit: 'Envoyer la Demande',
        interests: {
          wholesale: 'Demande Grossiste',
          oem: 'Partenariat OEM/ODM',
          sample: 'Demande d\'Échantillon',
          other: 'Autre'
        }
      },
      info: {
        address: 'Adresse',
        addressValue: '58 Feiyang Road, Jinhua, Zhejiang, Chine',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Heures d\'Ouverture',
        hoursValue: 'Lun - Ven: 8h00 - 18h00 (GMT+8)'
      }
    },
    trade: {
      title: 'Demander un Compte Pro',
      subtitle: 'Débloquez des tarifs B2B exclusifs et des avantages',
      benefits: {
        title: 'Avantages du Compte Pro',
        pricing: 'Tarifs Grossiste',
        pricingDesc: 'Accès aux niveaux de tarification B2B exclusifs',
        credit: 'Conditions de Crédit',
        creditDesc: 'Conditions de paiement flexibles pour les partenaires qualifiés',
        support: 'Support Dédié',
        supportDesc: 'Accès prioritaire à notre équipe commerciale B2B',
        samples: 'Échantillons Produits',
        samplesDesc: 'Demandez des échantillons à tarifs réduits'
      }
    },
    blog: {
      title: 'Perspectives de l\'Industrie',
      subtitle: 'Actualités, tendances et expertise de Ruidi',
      readMore: 'Lire Plus',
      categories: {
        all: 'Tout',
        industry: 'Actualités Industrie',
        product: 'Mises à Jour Produits',
        guides: 'Guides d\'Achat',
        events: 'Salons Professionnels'
      }
    },
    common: {
      learnMore: 'En Savoir Plus',
      viewDetails: 'Voir les Détails',
      downloadPdf: 'Télécharger PDF',
      backToTop: 'Retour en Haut'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      products: '製品',
      services: 'OEM/ODMサービス',
      resources: 'リソース',
      blog: 'ブログ',
      contact: 'お問い合わせ',
      tradeAccount: '卸売アカウント',
      getQuote: 'B2B価格を取得',
      wholesale: '卸売向け'
    },
    hero: {
      badge: '50カ国以上のディストリビューターに信頼されています',
      title: 'グローバルOEM/ODMモビリティスクーターメーカー',
      subtitle: '1999年以来、Ruidiは世界中のディストリビューターにプレミアムモビリティソリューションを提供してきました。工場直販品質と競争力のあるB2B価格。',
      cta1: 'B2B価格を取得',
      cta2: '工場見学ビデオ',
      cta3: 'カタログダウンロード'
    },
    stats: {
      years: '年の経験',
      countries: '対応国',
      capacity: '年間生産能力',
      patents: '特許と革新'
    },
    certs: {
      title: '国際認証',
      subtitle: '国際基準に完全準拠'
    },
    products: {
      title: '製品ラインナップ',
      subtitle: 'あらゆるモビリティニーズをカバーする6つのカテゴリー',
      viewAll: 'すべての製品を見る',
      viewCategory: 'カテゴリーを見る',
      categories: {
        travel: {
          name: 'トラベルスクーター',
          desc: '持ち運びと収納が簡単な軽量折りたたみデザイン'
        },
        fourWheel: {
          name: '4輪スクーター',
          desc: '日常使用に最大の安定性と快適性'
        },
        threeWheel: {
          name: '3輪スクーター',
          desc: '狭いスペースでの優れた操作性'
        },
        heavyDuty: {
          name: 'ヘビーデューティー',
          desc: '大きなユーザー向けの高耐荷重モデル'
        },
        parts: {
          name: 'パーツとアクセサリー',
          desc: 'バッテリー、充電器、交換部品'
        },
        custom: {
          name: 'カスタムソリューション',
          desc: 'あなたのブランド向けのOEM/ODM製品'
        }
      }
    },
    whyUs: {
      title: 'ディストリビューターがRuidiを選ぶ理由',
      subtitle: 'モビリティソリューションの信頼できる製造パートナー',
      features: {
        factory: {
          title: '工場直販品質',
          desc: '中間業者を排除。直接製造により、一貫した品質とビジネスの利益向上を実現。'
        },
        moq: {
          title: '柔軟な最小注文数と迅速な配送',
          desc: '15〜25日の生産で低い最小注文数。ビジネスの成長に合わせてボリュームディスカウントも活用可能。'
        },
        oem: {
          title: 'OEM/プライベートラベルオプション',
          desc: 'カスタム包装、ロゴ印刷、カラースキームが利用可能。実績ある製品でブランドを構築。'
        },
        compliance: {
          title: '完全なコンプライアンス文書',
          desc: 'CE、FDA、ISO 13485、TUV認証。規制要件のための文書を完備。'
        }
      }
    },
    services: {
      title: 'サービス',
      subtitle: 'コンセプトから納品まで包括的なサポート',
      items: {
        oem: {
          title: 'OEM製造',
          desc: '当社の製造専門知識であなたのデザインを生産'
        },
        odm: {
          title: 'ODMソリューション',
          desc: 'あなたのブランドのための実績あるデザインから選択'
        },
        customization: {
          title: 'カスタマイズ',
          desc: 'お客様の市場に合わせた色、ロゴ、パッケージング'
        },
        logistics: {
          title: 'グローバル物流',
          desc: '世界中の港への効率的な配送'
        }
      }
    },
    cta: {
      title: 'Ruidiとのパートナーシップの準備はできていますか？',
      subtitle: '世界中の500以上のディストリビューターに参加。今日、卸売価格と製品サンプルを取得してください。',
      button1: 'B2B価格を申請',
      button2: 'カタログダウンロード'
    },
    footer: {
      description: '1999年以来のプロフェッショナルモビリティスクーターメーカー。50カ国以上のディストリビューターに高品質の製品と信頼できるサービスを提供。',
      quickLinks: 'クイックリンク',
      products: '製品',
      support: 'サポート',
      contact: 'お問い合わせ',
      newsletter: 'ニュースレター',
      newsletterDesc: '業界ニュースと製品アップデートを購読',
      subscribe: '購読',
      emailPlaceholder: 'メールアドレスを入力',
      rights: '全著作権所有',
      privacy: 'プライバシーポリシー',
      terms: '利用規約'
    },
    about: {
      title: 'Ruidiについて',
      subtitle: '品質と革新の遺産',
      history: {
        title: '私たちの歴史',
        content: '1999年に設立された浙江瑞迪車両工業有限公司は、シンプルな使命を持つ家族経営の企業として始まりました：高齢者やモビリティに課題を持つ人々の独立性と生活の質を向上させるモビリティソリューションを創造すること。'
      },
      mission: {
        title: '私たちの使命',
        content: '世界で最も信頼されるモビリティスクーターメーカーになること。独立性を促進する革新的な製品を提供しながら、ディストリビューションパートナーに卓越した価値を提供します。'
      },
      facility: {
        title: '製造の卓越性',
        area: '生産面積',
        lines: '組立ライン',
        workers: '熟練作業者',
        daily: '日産能力'
      }
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'B2Bチームにご連絡ください',
      form: {
        name: 'お名前',
        company: '会社名',
        email: 'メールアドレス',
        phone: '電話番号',
        country: '国',
        interest: '関心事項',
        message: 'メッセージ',
        submit: 'お問い合わせを送信',
        interests: {
          wholesale: '卸売のお問い合わせ',
          oem: 'OEM/ODMパートナーシップ',
          sample: 'サンプルリクエスト',
          other: 'その他'
        }
      },
      info: {
        address: '住所',
        addressValue: '中国浙江省金華市飛揚路58号',
        phone: '電話',
        email: 'メール',
        hours: '営業時間',
        hoursValue: '月〜金: 8:00 - 18:00 (GMT+8)'
      }
    },
    trade: {
      title: '卸売アカウントを申請',
      subtitle: '限定B2B価格と特典をアンロック',
      benefits: {
        title: '卸売アカウント特典',
        pricing: '卸売価格',
        pricingDesc: '限定B2B価格帯へのアクセス',
        credit: '支払い条件',
        creditDesc: '認定パートナー向けの柔軟な支払い条件',
        support: '専任サポート',
        supportDesc: 'B2B営業チームへの優先アクセス',
        samples: '製品サンプル',
        samplesDesc: '割引価格でサンプルをリクエスト'
      }
    },
    blog: {
      title: '業界インサイト',
      subtitle: 'Ruidiからのニュース、トレンド、専門知識',
      readMore: '続きを読む',
      categories: {
        all: 'すべて',
        industry: '業界ニュース',
        product: '製品アップデート',
        guides: '購入ガイド',
        events: '展示会'
      }
    },
    common: {
      learnMore: '詳細を見る',
      viewDetails: '詳細を見る',
      downloadPdf: 'PDFダウンロード',
      backToTop: 'トップへ戻る'
    }
  }
} as const

export type TranslationKey = keyof typeof translations.en

export function getTranslation(locale: Locale) {
  return translations[locale]
}
