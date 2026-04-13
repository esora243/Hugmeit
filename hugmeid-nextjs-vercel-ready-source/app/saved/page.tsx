"use client";

import Link from "next/link";
import { Bookmark, BookmarkX, Briefcase, CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { useAuth } from "@/components/AuthContext";
import { allCampaigns, allJobs } from "@/lib/data";
import { useSavedItems } from "@/lib/saved-items";

export default function SavedPage() {
  const { isLoggedIn, openLoginModal } = useAuth();
  const { savedItems, hasHydrated, removeSaved, savedCounts } = useSavedItems();

  if (!isLoggedIn) {
    return (
      <div className="w-full max-w-lg mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <Bookmark size={48} className="text-pink-200 mb-4" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">保存機能</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">保存した求人やキャンペーンを見るにはログインが必要です</p>
        <button onClick={openLoginModal} className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-sm hover:bg-pink-600 transition-colors">ログインする</button>
      </div>
    );
  }

  if (!hasHydrated) {
    return <div className="w-full max-w-lg mx-auto p-4 min-h-[60vh]" />;
  }

  const resolvedItems = savedItems
    .map((item) => {
      if (item.type === "job") {
        const job = allJobs.find((entry) => String(entry.id) === item.id);
        if (!job) return null;

        return {
          ...item,
          href: `/jobs/${job.id}`,
          title: job.title,
          subtitle: job.company,
          metaPrimary: job.location,
          metaSecondary: `${job.salaryDisplay} / ${job.schedule}`,
        };
      }

      const campaign = allCampaigns.find((entry) => entry.id === item.id);
      if (!campaign) return null;

      return {
        ...item,
        href: `/campaign/${campaign.id}`,
        title: campaign.title,
        subtitle: campaign.company,
        metaPrimary: campaign.location,
        metaSecondary: `${campaign.date} / ${campaign.time}`,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className="w-full max-w-lg mx-auto pb-20 animate-fade-in">
      <div className="sticky top-[110px] z-30 bg-[#FFF9FA]/90 backdrop-blur-md pt-2 pb-3 px-4 border-b border-pink-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Bookmark className="text-pink-500" /> 保存済み
        </h2>
        <p className="text-xs text-gray-500 mt-1">求人 {savedCounts.jobs}件 / キャンペーン {savedCounts.campaigns}件</p>
      </div>

      {resolvedItems.length === 0 ? (
        <div className="px-4 pt-12 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 flex items-center justify-center mb-4">
            <Bookmark className="text-pink-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">まだ保存データがありません</h3>
          <p className="text-gray-500 text-sm">求人詳細やキャンペーン詳細の「保存」から、あとで見返したい情報を追加できます。</p>
        </div>
      ) : (
        <div className="px-4 pt-4 space-y-3">
          {resolvedItems.map((item) => (
            <div key={`${item.type}-${item.id}`} className="bg-white rounded-2xl border border-pink-50 shadow-sm overflow-hidden">
              <div className="p-4 flex items-start gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.type === "job" ? "bg-blue-50 text-blue-500" : "bg-pink-50 text-pink-500"}`}>
                  {item.type === "job" ? <Briefcase size={20} /> : <CalendarDays size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.type === "job" ? "bg-blue-50 text-blue-600" : "bg-pink-50 text-pink-600"}`}>
                      {item.type === "job" ? "求人" : "キャンペーン"}
                    </span>
                    <span className="text-[10px] text-gray-400">{new Date(item.savedAt).toLocaleDateString("ja-JP")}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 leading-snug mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5"><MapPin size={12} className="text-pink-400 shrink-0" /> {item.metaPrimary}</div>
                    <div className="text-gray-500">{item.metaSecondary}</div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4 flex items-center gap-2">
                <Link href={item.href} className="flex-1 bg-pink-500 text-white text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 hover:bg-pink-600 transition-colors">
                  詳細を見る <ChevronRight size={16} />
                </Link>
                <button
                  onClick={() => removeSaved(item.type, item.id)}
                  className="h-11 px-4 rounded-xl border border-pink-100 text-pink-500 hover:bg-pink-50 transition-colors flex items-center gap-2 text-sm font-bold"
                >
                  <BookmarkX size={16} /> 解除
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
