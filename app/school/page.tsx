"use client";

import { useState, useMemo } from "react";
import { Calendar, Clock, ChevronRight, ChevronLeft, Plus, Menu, Search } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

type ArticleData = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

const ARTICLES: ArticleData[] = [
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

const CATEGORIES = ["すべて", ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

type CellData = {
  title: string;
  room?: string;
  style: string;
  dots?: string[];
};

const TIMETABLE_GRID: Record<string, Record<number, CellData>> = {
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

const DAYS = ["月", "火", "水", "木", "金"];
const DATES = ["6", "7", "8", "9", "10"];

export default function SchoolPage() {
  const [activeTab, setActiveTab] = useState<"timetable" | "syllabus" | "articles">("timetable");
  const [view, setView] = useState<"main" | "detail">("main");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchQuery =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = selectedCategory === "すべて" || article.category === selectedCategory;
      return matchQuery && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (view === "detail") {
    return (
      <div className="w-full max-w-lg mx-auto bg-white min-h-screen pb-20 animate-fade-in">
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-white">
          <button onClick={() => setView("main")} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="text-lg font-bold text-gray-800">授業の詳細</h2>
          <div className="w-10 h-10" />
        </div>

        <div className="px-5 pt-2">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-bold mb-3 border border-blue-100">機能系</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">生理学</h1>
          <p className="text-sm text-gray-700 mb-6 font-medium">火・1〜2限 09:00–12:00 第3講義室 田中 正樹 教授</p>

          <div className="flex justify-between border-b border-gray-200 mb-6">
            <button className="pb-3 border-b-2 border-pink-400 text-pink-500 font-bold text-sm px-4">基本情報</button>
            <button className="pb-3 text-gray-500 font-bold text-sm px-4 hover:text-gray-700">課題</button>
            <button className="pb-3 text-gray-500 font-bold text-sm px-4 hover:text-gray-700">メモ・通知</button>
          </div>

          <h3 className="font-bold text-sm text-gray-800 mb-3">授業情報</h3>
          <div className="bg-gray-50 rounded-2xl p-4 mb-4">
            <div className="flex py-2 border-b border-gray-200">
              <div className="w-24 text-xs text-gray-600 flex items-center gap-2"><Clock size={14} /> 時間</div>
              <div className="text-xs font-medium text-gray-800">09:00–12:00（2コマ）</div>
            </div>
            <div className="flex py-3 border-b border-gray-200">
              <div className="w-24 text-xs text-gray-600 flex items-center gap-2"><Calendar size={14} /> 開講期間</div>
              <div className="text-xs font-medium text-gray-800">前期（4月〜7月）</div>
            </div>
            <div className="flex py-3">
              <div className="w-24 text-xs text-gray-600">教室</div>
              <div className="text-xs font-medium text-gray-800">第3講義室</div>
            </div>
          </div>

          <h3 className="font-bold text-sm text-gray-800 mb-3 mt-8">課題</h3>
          <div className="bg-gray-50 rounded-2xl p-4 mb-8 space-y-4">
            <div className="flex gap-3 pb-4 border-b border-gray-200 opacity-50">
              <div className="bg-pink-500 text-white rounded w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
              <div>
                <p className="text-sm font-bold text-gray-800 line-through decoration-gray-500">第1回レポート（心臓生理）</p>
                <p className="text-xs text-gray-500 mt-1">提出期限：4月3日　提出済み</p>
              </div>
            </div>
            <div className="flex gap-3 pb-4 border-b border-gray-200">
              <div className="border-2 border-amber-500 bg-amber-50 rounded w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-800">第2回レポート（呼吸生理）</p>
                <p className="text-xs text-amber-600 font-bold mt-1">提出期限：4月10日（残り3日）</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-pink-500 text-sm font-bold py-1 hover:text-pink-600">
              <Plus size={16} /> 課題を追加
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto pb-8 bg-white min-h-screen animate-fade-in">
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">学校</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"><Plus size={16} /></button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"><Menu size={16} /></button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"><Clock size={16} /></button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          <button onClick={() => setActiveTab("timetable")} className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "timetable" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>
            📅 時間割
          </button>
          <button onClick={() => setActiveTab("syllabus")} className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "syllabus" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>
            📋 シラバス
          </button>
          <button onClick={() => setActiveTab("articles")} className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "articles" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>
            📚 勉強系記事
          </button>
        </div>
      </div>

      <div className="px-3 pt-4">
        {activeTab === "timetable" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <button className="p-1"><ChevronLeft size={20} className="text-gray-400" /></button>
              <span className="font-bold text-gray-800">2026年4月 第2週</span>
              <button className="p-1"><ChevronRight size={20} className="text-gray-400" /></button>
            </div>

            <div className="bg-white">
              <div className="grid grid-cols-[24px_1fr_1fr_1fr_1fr_1fr] gap-1 mb-2">
                <div />
                {DAYS.map((day, i) => (
                  <div key={day} className="text-center flex flex-col items-center">
                    {day === "火" ? (
                      <>
                        <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">{DATES[i]}</span>
                        <span className="text-pink-500 text-[10px] mt-0.5 font-bold">{day}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-gray-800 text-xs font-bold h-6 flex items-center justify-center">{DATES[i]}</span>
                        <span className="text-gray-500 text-[10px] mt-0.5">{day}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {[1, 2, 3, 4, 5, 6].map((period) => (
                <div key={period} className="grid grid-cols-[24px_1fr_1fr_1fr_1fr_1fr] gap-1 mb-1">
                  <div className="flex flex-col items-center justify-center text-[10px] text-gray-400">
                    <span className="font-bold">{period}</span>
                    <span className="scale-75">限</span>
                  </div>
                  {DAYS.map((day) => {
                    const cell = TIMETABLE_GRID[day]?.[period];
                    if (!cell) {
                      return <div key={day} className="border border-gray-200 rounded-md bg-gray-50/30 min-h-[70px]" />;
                    }
                    return (
                      <div
                        key={day}
                        onClick={() => setView("detail")}
                        className={`relative border rounded-md p-1.5 min-h-[70px] flex flex-col cursor-pointer hover:opacity-80 transition-opacity ${cell.style}`}
                      >
                        <span className="font-bold text-[10px] leading-tight whitespace-pre-line tracking-tight">{cell.title}</span>
                        {cell.room && <span className="text-[8px] mt-1 opacity-70 leading-tight">{cell.room}</span>}
                        {cell.dots && (
                          <div className="absolute bottom-1.5 left-1.5 flex gap-1">
                            {cell.dots.map((dotColor, i) => (
                              <div key={i} className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 text-[9px] mt-4 px-2 justify-center text-gray-600">
              <span className="flex items-center gap-1"><span className="w-2 h-2 border border-pink-200 bg-pink-50" />形態系</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 border border-blue-200 bg-blue-50" />機能系</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 border border-emerald-200 bg-emerald-50" />生化学</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 border border-orange-200 bg-orange-50" />病理</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 border border-teal-200 bg-teal-50" />臨床</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Zoom</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" />通知</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-700" />課題</span>
            </div>
          </div>
        )}

        {activeTab === "syllabus" && (
          <div className="space-y-4">
            <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-gray-200 shadow-sm relative bg-gray-50">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-0">
                <Calendar className="text-gray-300 mb-2" size={32} />
                <p className="text-sm text-gray-500 font-bold mb-1">シラバスを読み込んでいます...</p>
                <p className="text-xs text-gray-400">
                  表示されない場合は、
                  <a href="https://lcu.hama-med.ac.jp/lcu-web/SC_06001B00_21" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">こちらからブラウザで開いて</a>
                  ください。
                </p>
              </div>
              <iframe
                src="https://lcu.hama-med.ac.jp/lcu-web/SC_06001B00_21"
                title="大学シラバス"
                className="relative z-10 w-full h-full border-none bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        )}

        {activeTab === "articles" && (
          <div className="space-y-4 animate-fade-in">
            <div className="relative px-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="記事を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 sm:text-sm transition-colors"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto px-1 pb-1 hide-scrollbar">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-colors border ${
                    selectedCategory === category
                      ? "bg-gray-800 border-gray-800 text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-3 pb-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex hover:shadow-md transition-shadow cursor-pointer">
                    <OptimizedImage src={article.image} alt={article.title} width={112} height={112} sizes="112px" className="w-28 h-28 object-cover shrink-0" />
                    <div className="p-3 flex flex-col justify-center min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-pink-500 font-bold px-1.5 py-0.5 bg-pink-50 rounded-sm">{article.category}</span>
                        <span className="text-[10px] text-gray-400">{article.date.replace(/-/g, "/")}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1 leading-tight">{article.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-tight">{article.excerpt}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-500 text-sm font-bold">一致する記事が見つかりません</p>
                  <button onClick={() => { setSearchQuery(""); setSelectedCategory("すべて"); }} className="mt-2 text-pink-500 text-xs font-bold underline">
                    検索条件をクリア
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
