import type {
  Job,
  FAQ,
  StudyAbroadProgram,
  StudentGroup,
  Article,
  Sponsor,
  Campaign,
} from "./types";

// ===== 求人データ =====
export const allJobs: Job[] = [
  {
    id: 1,
    title: "医学部受験生向けのマンツーマン指導（週1回〜OK）",
    employmentType: "アルバイト",
    jobType: "家庭教師",
    prefecture: "東京都",
    location: "東京都 港区",
    salary: 3500,
    salaryDisplay: "時給 3,500円〜",
    schedule: "平日 18:00〜21:00 の間で2時間",
    company: "個人契約",
    companyType: "個",
    requirements: "4年生以上対象",
  },
  {
    id: 2,
    title: "医療系スタートアップでのPMアシスタント業務（フルリモート）",
    employmentType: "インターン",
    jobType: "インターン",
    prefecture: "オンライン",
    location: "フルリモート",
    salary: 1500,
    salaryDisplay: "時給 1,500円〜",
    schedule: "週10時間程度（柔軟対応）",
    company: "株式会社MedicalTech",
    companyType: "S",
  },
  {
    id: 3,
    title: "学習塾での医学部受験指導スタッフ",
    employmentType: "アルバイト",
    jobType: "塾",
    prefecture: "神奈川県",
    location: "神奈川県 横浜市",
    salary: 2500,
    salaryDisplay: "時給 2,500円〜",
    schedule: "週2回〜 17:00〜22:00",
    company: "医学部専門予備校メディカル",
    companyType: "S",
  },
  {
    id: 4,
    title: "病院実習サポート＆データ入力",
    employmentType: "アルバイト",
    jobType: "その他",
    prefecture: "東京都",
    location: "東京都 新宿区",
    salary: 1200,
    salaryDisplay: "時給 1,200円〜",
    schedule: "週3日〜 9:00〜17:00",
    company: "総合病院グループ",
    companyType: "S",
  },
  {
    id: 5,
    title: "オンライン家庭教師（高校生対象・医学部志望者優先）",
    employmentType: "アルバイト",
    jobType: "家庭教師",
    prefecture: "オンライン",
    location: "完全オンライン",
    salary: 3000,
    salaryDisplay: "時給 3,000円〜",
    schedule: "好きな時間でOK",
    company: "オンライン家庭教師プラットフォーム",
    companyType: "S",
  },
  {
    id: 6,
    title: "飲食店での接客スタッフ（医学生歓迎）",
    employmentType: "アルバイト",
    jobType: "その他",
    prefecture: "大阪府",
    location: "大阪府 大阪市",
    salary: 1200,
    salaryDisplay: "時給 1,200円〜",
    schedule: "週2回〜 17:00〜22:00",
    company: "イタリアンレストランチェーン",
    companyType: "S",
  },
];

// ===== 求人カテゴリ =====
export const jobCategories = ["すべて", "家庭教師", "塾", "インターン", "その他"];

// ===== FAQ データ =====
export const allFaqs: FAQ[] = [
  { id: 1, category: "基本情報", question: "Hugmeidの利用は無料ですか？", answer: "はい、Hugmeidの基本機能は全て無料でご利用いただけます。医学生の皆様の学習やキャリア支援を目的としたプラットフォームです。" },
  { id: 2, category: "求人", question: "求人に応募するにはどうすればいいですか？", answer: "求人詳細ページから「応募する」ボタンをクリックすると、企業の応募フォームに移動します。一部の求人ではHugmeid内で直接応募も可能です。" },
  { id: 3, category: "アカウント", question: "プロフィール情報は企業に公開されますか？", answer: "基本的にプロフィール情報は非公開です。求人に応募する際に、あなたが選択した情報のみが企業に共有されます。" },
  { id: 4, category: "アカウント", question: "LINEログインは必須ですか？", answer: "求人や記事の閲覧は誰でも可能ですが、保存機能や応募機能を利用するにはLINEログインが必要です。" },
  { id: 5, category: "アカウント", question: "退会したい場合はどうすればいいですか？", answer: "マイページの設定から退会手続きが可能です。または、お問い合わせフォームからご連絡ください。" },
  { id: 6, category: "通知", question: "企業からの連絡はどこに届きますか？", answer: "登録されたメールアドレスとLINEに通知が届きます。通知設定はマイページから変更可能です。" },
  { id: 7, category: "課外活動", question: "留学情報の詳細はどこで確認できますか？", answer: "課外活動セクションの「留学情報」タブから、各プログラムの詳細ページにアクセスできます。" },
];

export const faqCategories = ["すべて", "基本情報", "求人", "アカウント", "通知", "課外活動"];

// ===== 学生団体データ =====
export const studentGroups: StudentGroup[] = [
  { id: 1, name: "医療×IT研究会", category: "学生団体", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", description: "医療とテクノロジーの融合を目指す学生団体。アプリ開発やAI研究を行っています。", members: 25, social: { instagram: "@med_tech", twitter: "@medtech_club", mail: "" } },
  { id: 2, name: "国際医療支援サークル", category: "学生団体", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600", description: "途上国への医療支援活動を行う団体。年1回の海外ボランティアも実施しています。", members: 40, social: { instagram: "@global_med", twitter: "", mail: "contact@globalmed.org" } },
  { id: 3, name: "救急医療研究会", category: "学生団体", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600", description: "救急医療に興味のある学生が集まるサークル。BLS・ACLS講習会を定期開催。", members: 35, social: { instagram: "", twitter: "@emergency_med", mail: "" } },
];

// ===== 留学プログラムデータ =====
export const studyAbroadPrograms: StudyAbroadProgram[] = [
  { id: 1, title: "野口医学研究所 短期留学プログラム", country: "アメリカ", duration: "2週間〜4週間", image: "https://images.unsplash.com/photo-1609126385558-bc3fc5082b0a?auto=format&fit=crop&q=80&w=600", organization: "公益財団法人 野口医学研究所", deadline: "2026年5月31日" },
  { id: 2, title: "欧州医学交流プログラム", country: "ドイツ・フランス", duration: "1ヶ月", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600", organization: "日欧医学教育交流協会", deadline: "2026年6月15日" },
  { id: 3, title: "アジア臨床実習プログラム", country: "シンガポール・タイ", duration: "2週間", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=600", organization: "アジア医療教育機構", deadline: "2026年7月10日" },
];

// ===== 課外活動記事データ =====
export const activityArticles: Article[] = [
  { id: 1, title: "医学部生が起業するまでのストーリー", category: "起業", date: "2026-04-03", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "基礎研究の魅力とキャリアパス", category: "研究", date: "2026-04-01", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "臨床医として働く日々", category: "臨床", date: "2026-03-29", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
];

// ===== 勉強系記事データ =====
export const schoolArticles: Article[] = [
  { id: 1, title: "2025年再試率50%!解剖実習突破法！", category: "基礎医学", date: "2026-04-01", image: "https://images.unsplash.com/photo-1603726574690-cc3138bfec8c?auto=format&fit=crop&q=80&w=600", excerpt: "医学科2年生必見！教授の出題傾向と過去問の活用法を徹底解説。" },
  { id: 2, title: "国家試験対策スケジュールの立て方", category: "国試対策", date: "2026-03-28", image: "https://images.unsplash.com/photo-1560111828-e16fc96d9a5e?auto=format&fit=crop&q=80&w=600", excerpt: "医師国家試験に合格するための計画的な学習スケジュールの作成方法。" },
  { id: 3, title: "臨床推論の基本：病歴聴取のコツ", category: "臨床・実習", date: "2026-04-05", image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=600", excerpt: "OSCEやポリクリで役立つ、OPQRSTを使ったスムーズな問診テクニック。" },
  { id: 4, title: "病理学エッセンス：組織免疫染色の見極め", category: "基礎医学", date: "2026-04-08", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600", excerpt: "腫瘍マーカーと免疫組織化学染色（IHC）の頻出パターンまとめ。" },
  { id: 5, title: "Notionを使った効率的な医学知識のまとめ方", category: "ツール", date: "2026-04-02", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=600", excerpt: "膨大な授業資料をデータベース化して検索可能にするNotionテンプレ配布。" },
  { id: 6, title: "ポリクリで回る前に準備すべき手技と知識", category: "臨床・実習", date: "2026-03-20", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", excerpt: "採血、ルート確保、縫合など、実習前に動画で確認しておくべきリスト。" },
  { id: 7, title: "胸部X線の読影ステップ完全ガイド", category: "臨床・実習", date: "2026-03-15", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600", excerpt: "シルエットサインからABCDEアプローチまで、見落としを防ぐ読影法。" },
  { id: 8, title: "マッチング対策：病院見学で聞くべき質問", category: "キャリア", date: "2026-03-10", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600", excerpt: "初期研修病院を選ぶ際、先輩研修医にこっそり聞いておくべき裏事情。" },
  { id: 9, title: "医学生向け：iPadアプリ活用術2026年版", category: "ツール", date: "2026-02-28", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600", excerpt: "GoodNotes6とAnkiを連携させた最強の暗記フローを紹介。" },
  { id: 10, title: "心電図の波形と軸偏位の覚え方", category: "基礎医学", date: "2026-02-20", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600", excerpt: "循環器ブロックでつまずきやすい心電図の基礎をゴロ合わせで攻略。" },
  { id: 11, title: "CBT対策：出やすい公衆衛生の計算問題", category: "国試対策", date: "2026-02-15", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", excerpt: "感度・特異度、オッズ比、相対危険度など、絶対に落とせない計算問題。" },
  { id: 12, title: "頻出する抗菌薬のスペクトラムまとめ", category: "基礎医学", date: "2026-02-10", image: "https://images.unsplash.com/photo-1584308666744-24d5e4a83b27?auto=format&fit=crop&q=80&w=600", excerpt: "ペニシリン系からカルバペネムまで、どの菌に効くかを一枚の図解に。" },
];

// ===== キャンペーンデータ =====
export const allCampaigns: Campaign[] = [
  { id: "1", title: "最新の医療機器・設備を学ぶ", company: "MedTech Innovations", img: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&q=80&w=1080", description: "次世代の手術支援ロボットやAI診断ツールの見学・体験プログラムを開催中。医学生限定の特別セッションです。", tag: "見学会", date: "2026年4月15日(水)", time: "14:00〜17:00", location: "東京都品川区六本木ヒルズ", capacity: "30名（先着順）", target: "医学部4年生〜6年生" },
  { id: "2", title: "若手医師との座談会・キャリア相談", company: "第一総合病院グループ", img: "https://images.unsplash.com/photo-1758691461973-553db5285280?auto=format&fit=crop&q=80&w=1080", description: "現場で活躍する先輩医師から直接話が聞けるチャンス。初期研修のリアルな情報を知りたい方必見。", tag: "座談会", date: "2026年5月2日(土)", time: "10:00〜12:30", location: "第一総合病院 本院 大会議室", capacity: "20名", target: "全学年対象" },
  { id: "3", title: "医学生向け奨学金プログラム説明会", company: "公益財団法人 未来医療基金", img: "https://images.unsplash.com/photo-1603726574690-cc3138bfec8c?auto=format&fit=crop&q=80&w=1080", description: "返済不要の給付型奨学金や海外留学支援制度について、詳しい応募条件や選考プロセスをご案内します。", tag: "説明会", date: "2026年4月20日(月)", time: "18:00〜19:30", location: "オンライン（Zoom配信）", capacity: "制限なし", target: "医学部1年生〜5年生" },
];

// ===== スポンサーデータ =====
export const allSponsors: Sponsor[] = [
  { id: "1", name: "医療法人伏見会　伏見病院", logo: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1758691461973-553db5285280?auto=format&fit=crop&q=80&w=1200", description: "地域医療に貢献する総合病院。2026年度の初期研修医を積極的に募集しています。充実した指導体制と幅広い診療科ローテーションが特徴です。", category: "医療機関", url: "#", tier: "platinum", products: [{ name: "初期研修プログラム", description: "全国トップクラスの救急受け入れ件数を誇り、実践的な手技が身につきます。", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400" }], video: { title: "病院紹介ビデオ - 研修医の1日", thumbnail: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&q=80&w=600", duration: "3:24" } },
  { id: "2", name: "メディカルテックカンパニー", logo: "https://images.unsplash.com/photo-1560111828-e16fc96d9a5e?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=1200", description: "医療AIソリューションを開発するヘルステックスタートアップ。医学生インターンを募集中。", category: "IT・テクノロジー", url: "#", tier: "platinum", products: [{ name: "AI診断支援システム開発インターン", description: "実際の医療データを用いたAIモデル開発に、医師の卵として参画できる有給インターンです。", image: "https://images.unsplash.com/photo-1603726574690-cc3138bfec8c?auto=format&fit=crop&q=80&w=400" }] },
  { id: "3", name: "グローバル医療教育機構", logo: "https://images.unsplash.com/photo-1609126385558-bc3fc5082b0a?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1609126385558-bc3fc5082b0a?auto=format&fit=crop&q=80&w=600", description: "医学生の海外留学・USMLE対策をサポートする専門機関。", category: "教育・留学", url: "#", tier: "gold" },
  { id: "4", name: "株式会社メディカルキャリア", logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600", description: "医学生特化の家庭教師・学習塾アルバイトを一括検索。", category: "人材紹介", url: "#", tier: "gold" },
  { id: "5", name: "医療奨学財団", logo: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=200", description: "", category: "財団", url: "#", tier: "supporter" },
  { id: "6", name: "山口医師会", logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=200", description: "", category: "団体", url: "#", tier: "supporter" },
  { id: "7", name: "医学書出版ネット", logo: "https://images.unsplash.com/photo-1588514747201-904031665a2a?auto=format&fit=crop&q=80&w=200", description: "", category: "出版", url: "#", tier: "supporter" },
  { id: "8", name: "白衣工房", logo: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=200", description: "", category: "アパレル", url: "#", tier: "supporter" },
];

// ===== プロフィール登録ステップ =====
export const profileGenderOptions = ["男性", "女性", "その他", "回答しない"];
export const profileGradeOptions = ["1年生", "2年生", "3年生", "4年生", "5年生", "6年生", "その他"];
export const profileClubOptions = ["運動部", "文化部", "医療系サークル", "その他", "所属していない"];
export const profileSpecialtyOptions = ["内科", "外科", "小児科", "産婦人科", "整形外科", "精神科", "皮膚科", "眼科", "耳鼻咽喉科", "その他", "未定"];

// ===== 時間割グリッドデータ =====
export type TimetableCell = {
  title: string;
  room?: string;
  style: string;
  dots?: string[];
};

export const timetableDays = ["月", "火", "水", "木", "金"];
export const timetableDates = ["6", "7", "8", "9", "10"];

export const timetableGrid: Record<string, Record<number, TimetableCell>> = {
  月: {
    1: { title: "解剖学\n実習", room: "第1実習室", style: "bg-pink-50 border-pink-200 text-pink-700", dots: ["bg-blue-500", "bg-pink-500"] },
    2: { title: "(実習\n続き)", style: "bg-pink-50 border-pink-200 text-pink-700 border-t-0 rounded-t-none" },
    4: { title: "生化学\n演習", room: "演習室1", style: "bg-emerald-50 border-emerald-200 text-emerald-700", dots: ["bg-amber-700"] },
  },
  火: {
    1: { title: "生理学", room: "第3講義室", style: "bg-blue-50 border-blue-400 text-blue-700 border-b-0 rounded-b-none", dots: ["bg-blue-500", "bg-pink-500"] },
    2: { title: "(続き)", style: "bg-blue-50 border-blue-400 text-blue-700 border-t-0 rounded-t-none" },
    3: { title: "英語", room: "共通B", style: "bg-gray-50 border-gray-200 text-gray-700", dots: ["bg-pink-500"] },
  },
  水: {
    2: { title: "病理学", room: "第2講義室", style: "bg-orange-50 border-orange-200 text-orange-700 border-b-0 rounded-b-none", dots: ["bg-pink-500", "bg-amber-700"] },
    3: { title: "(続き)", style: "bg-orange-50 border-orange-200 text-orange-700 border-t-0 rounded-t-none" },
    5: { title: "総合\n演習", room: "大講義室", style: "bg-gray-50 border-gray-200 text-gray-700", dots: ["bg-pink-500"] },
  },
  木: {
    1: { title: "生化学", room: "B棟204", style: "bg-emerald-50 border-emerald-200 text-emerald-700 border-b-0 rounded-b-none", dots: ["bg-amber-700"] },
    2: { title: "(続き)", style: "bg-emerald-50 border-emerald-200 text-emerald-700 border-t-0 rounded-t-none" },
    4: { title: "解剖学", room: "第1講義室", style: "bg-pink-50 border-pink-200 text-pink-700", dots: ["bg-pink-500"] },
    6: { title: "臨床\n入門", room: "医学部棟A", style: "bg-teal-50 border-teal-200 text-teal-700", dots: ["bg-blue-500", "bg-pink-500"] },
  },
  金: {
    1: { title: "解剖学", room: "第1講義室", style: "bg-pink-50 border-pink-200 text-pink-700" },
    3: { title: "組織学", room: "第4講義室", style: "bg-blue-50 border-blue-200 text-blue-700 border-b-0 rounded-b-none", dots: ["bg-blue-500"] },
    4: { title: "(続き)", style: "bg-blue-50 border-blue-200 text-blue-700 border-t-0 rounded-t-none" },
  },
};
