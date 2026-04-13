"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Users, Instagram, Twitter, Mail, ExternalLink } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function GroupDetailPage() {
  const params = useParams();
  const router = useRouter();

  const group = {
    id: Number(params.id),
    name: "医療×IT研究会",
    category: "学生団体",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1080",
    description: "医療とテクノロジーの融合を目指す学生団体です。医学部生とエンジニアが協力して、医療現場の課題を解決するアプリやシステムの開発を行っています。",
    members: 25,
    activities: ["月1回の勉強会・LT大会", "医療現場の見学とヒアリング", "大会への参加", "医療系スタートアップとの交流会"],
    social: { instagram: "@med_tech", twitter: "@medtech_club", mail: "contact@medtech.org" },
    achievements: ["医療記録管理アプリの開発", "全国医学生ハッカソン優勝（2025年）", "医療系AIシンポジウムでの発表"],
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="w-full max-w-lg mx-auto">
        <div className="sticky top-[110px] z-30 bg-white/90 backdrop-blur-md border-b border-pink-100 px-4 py-3 flex items-center gap-3">
          <button onClick={() => router.push("/activities")} className="text-gray-600 hover:text-pink-500"><ArrowLeft size={24} /></button>
          <h1 className="text-base font-bold text-gray-800 flex-1 truncate">団体詳細</h1>
        </div>
        <div className="animate-fade-in">
          <div className="w-full h-64 bg-gray-100 relative">
            <OptimizedImage src={group.image} alt={group.name} fill priority sizes="(max-width: 768px) 100vw, 640px" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4"><span className="bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{group.category}</span></div>
          </div>
          <div className="px-4 py-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">{group.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4"><Users size={16} className="text-pink-400" /><span>{group.members}名のメンバー</span></div>
            <p className="text-sm text-gray-700 leading-relaxed">{group.description}</p>
          </div>
          <div className="px-4 py-6 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-800 mb-4">主な活動内容</h3>
            <div className="space-y-2">
              {group.activities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-700"><span className="text-pink-500 mt-1">•</span><span>{activity}</span></div>
              ))}
            </div>
          </div>
          <div className="px-4 py-6 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-800 mb-4">実績</h3>
            <div className="space-y-3">
              {group.achievements.map((achievement, idx) => (
                <div key={idx} className="bg-pink-50 border border-pink-100 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-pink-500 font-bold">🏆</span>
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-50">
            <h3 className="text-base font-bold text-gray-800 mb-4">連絡先・SNS</h3>
            <div className="space-y-3">
              {group.social.instagram && (
                <a href={`https://instagram.com/${group.social.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center"><Instagram size={20} className="text-white" /></div>
                    <div><p className="text-xs text-gray-500 font-medium">Instagram</p><p className="text-sm font-bold text-gray-800">{group.social.instagram}</p></div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              )}
              {group.social.twitter && (
                <a href={`https://twitter.com/${group.social.twitter.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-400 flex items-center justify-center"><Twitter size={20} className="text-white" /></div>
                    <div><p className="text-xs text-gray-500 font-medium">Twitter (X)</p><p className="text-sm font-bold text-gray-800">{group.social.twitter}</p></div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              )}
              {group.social.mail && (
                <a href={`mailto:${group.social.mail}`} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-400 flex items-center justify-center"><Mail size={20} className="text-white" /></div>
                    <div><p className="text-xs text-gray-500 font-medium">Email</p><p className="text-sm font-bold text-gray-800">{group.social.mail}</p></div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
