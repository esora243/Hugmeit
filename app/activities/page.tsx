"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Plane, ExternalLink, Instagram, Twitter, Mail } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<"groups" | "study-abroad" | "articles">("groups");

  const groups = [
    { id: 1, name: "医療×IT研究会", category: "学生団体", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", description: "医療とテクノロジーの融合を目指す学生団体。アプリ開発やAI研究を行っています。", members: 25, social: { instagram: "@med_tech", twitter: "@medtech_club", mail: "" } },
    { id: 2, name: "国際医療支援サークル", category: "学生団体", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600", description: "途上国への医療支援活動を行う団体。年1回の海外ボランティアも実施しています。", members: 40, social: { instagram: "@global_med", twitter: "", mail: "contact@globalmed.org" } },
    { id: 3, name: "救急医療研究会", category: "学生団体", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600", description: "救急医療に興味のある学生が集まるサークル。BLS・ACLS講習会を定期開催。", members: 35, social: { instagram: "", twitter: "@emergency_med", mail: "" } },
  ];

  const studyAbroad = [
    { id: 1, title: "野口医学研究所 短期留学プログラム", country: "アメリカ", duration: "2週間〜4週間", image: "https://images.unsplash.com/photo-1609126385558-bc3fc5082b0a?auto=format&fit=crop&q=80&w=600", organization: "公益財団法人 野口医学研究所", deadline: "2026年5月31日" },
    { id: 2, title: "欧州医学交流プログラム", country: "ドイツ・フランス", duration: "1ヶ月", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600", organization: "日欧医学教育交流協会", deadline: "2026年6月15日" },
    { id: 3, title: "アジア臨床実習プログラム", country: "シンガポール・タイ", duration: "2週間", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=600", organization: "アジア医療教育機構", deadline: "2026年7月10日" },
  ];

  const articles = [
    { id: 1, title: "医学部生が起業するまでのストーリー", category: "起業", date: "2026-04-03", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "基礎研究の魅力とキャリアパス", category: "研究", date: "2026-04-01", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "臨床医として働く日々", category: "臨床", date: "2026-03-29", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto pb-8 animate-slide-in-right">
      <div className="sticky top-[20px] z-30 bg-white border-b border-pink-100 px-4 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">課外活動</h2>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          <button onClick={() => setActiveTab("groups")} className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "groups" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>👥 学生団体</button>
          <button onClick={() => setActiveTab("study-abroad")} className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "study-abroad" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>✈️ 留学情報</button>
          <button onClick={() => setActiveTab("articles")} className={`shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "articles" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>📝 記事</button>
        </div>
      </div>

      <div className="px-4 pt-3 space-y-4">
        {activeTab === "groups" && groups.map((group) => (
          <Link key={group.id} href={`/activities/groups/${group.id}`} className="block bg-white rounded-2xl shadow-sm border border-pink-50 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative h-40">
              <OptimizedImage src={group.image} alt={group.name} fill sizes="(max-width: 768px) 100vw, 640px" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold bg-pink-500 text-white px-2 py-1 rounded-full">{group.category}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">{group.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{group.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-500"><Users size={14} className="text-pink-400" /><span>{group.members}名</span></div>
                <div className="flex items-center gap-2">
                  {group.social.instagram && <div className="text-pink-400"><Instagram size={14} /></div>}
                  {group.social.twitter && <div className="text-blue-400"><Twitter size={14} /></div>}
                  {group.social.mail && <div className="text-gray-400"><Mail size={14} /></div>}
                </div>
              </div>
            </div>
          </Link>
        ))}

        {activeTab === "study-abroad" && studyAbroad.map((program) => (
          <div key={program.id} className="block bg-white rounded-2xl shadow-sm border border-pink-50 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="relative h-32">
              <OptimizedImage src={program.image} alt={program.title} fill sizes="(max-width: 768px) 100vw, 640px" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">{program.country}</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">{program.title}</h3>
              <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                <div className="flex items-center gap-2"><Plane size={12} className="text-pink-400" /><span>{program.duration}</span></div>
                <div className="flex items-center gap-2"><Users size={12} className="text-pink-400" /><span>{program.organization}</span></div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-[10px] text-red-500 font-bold">締切: {program.deadline}</span>
                <button className="flex items-center gap-1 text-xs font-bold text-pink-500 hover:text-pink-600">詳細 <ExternalLink size={12} /></button>
              </div>
            </div>
          </div>
        ))}

        {activeTab === "articles" && articles.map((article) => (
          <div key={article.id} className="block bg-white rounded-2xl shadow-sm border border-pink-50 overflow-hidden hover:shadow-md transition-shadow group">
            <div className="flex gap-4 p-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                <OptimizedImage src={article.image} alt={article.title} width={96} height={96} sizes="96px" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-600 rounded">{article.category}</span>
                  <span className="text-[10px] text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-pink-600 transition-colors">{article.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
