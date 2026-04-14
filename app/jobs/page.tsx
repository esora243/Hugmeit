"use client";

import { useState } from "react";
import { Filter, Search, MapPin, JapaneseYen, Clock, BookmarkCheck, BookmarkPlus, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useAuth } from "@/components/AuthContext";
import { AdBanner } from "@/components/AdBanner";
import { JobFilterModal } from "@/components/JobFilterModal";
import { allJobs, jobCategories } from "@/lib/data";
import { useSavedItems } from "@/lib/saved-items";
import type { FilterOptions } from "@/lib/types";

export default function JobsPage() {
  const { isLoggedIn, openLoginModal } = useAuth();
  const { isSaved, toggleSaved } = useSavedItems();
  const [activeTab, setActiveTab] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    employmentType: [],
    jobType: [],
    prefecture: [],
    salaryMin: "",
  });

  const filteredJobs = allJobs.filter((job) => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (activeTab !== "すべて" && job.jobType !== activeTab) return false;
    if (filters.employmentType.length > 0 && !filters.employmentType.includes(job.employmentType)) return false;
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.jobType)) return false;
    if (filters.prefecture.length > 0 && !filters.prefecture.includes(job.prefecture)) return false;
    if (filters.salaryMin && job.salary < Number(filters.salaryMin)) return false;
    return true;
  });

  const activeFilterCount =
    filters.employmentType.length + filters.jobType.length + filters.prefecture.length + (filters.salaryMin ? 1 : 0);

  const clearFilters = () => {
    setFilters({ employmentType: [], jobType: [], prefecture: [], salaryMin: "" });
  };

  const handleToggleSave = (jobId: number) => {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }

    const savedAfterToggle = toggleSaved("job", jobId);
    toast.success(savedAfterToggle ? "求人を保存しました" : "保存を解除しました");
  };

  return (
    <div className="w-full max-w-lg mx-auto pb-4 animate-fade-in">
      <div className="sticky top-[10px] z-30 bg-[#FFF9FA]/90 backdrop-blur-md pt-2 pb-3 -mx-4 px-4 border-b border-pink-100">
        <h2 className="text-xl font-bold text-gray-800 mb-3">求人</h2>
        <div className="flex gap-2 mb-3">
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-pink-100 p-2.5 flex items-center gap-2">
            <Search className="text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="フリーワードで絞り込み"
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-300"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="relative bg-pink-50 p-2.5 rounded-xl border border-pink-100 text-pink-500 hover:bg-pink-100 transition-colors"
          >
            <Filter className="w-5 h-5" />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex overflow-x-auto gap-2 hide-scrollbar">
          {jobCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === cat ? "bg-pink-500 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-600 px-4 pt-3">{filteredJobs.length}件の求人が見つかりました</div>

      <div className="space-y-4 px-4 pb-8">
        {filteredJobs.map((job, idx) => {
          const saved = isSaved("job", job.id);

          return (
            <div key={job.id}>
              {idx === 1 && (
                <div className="mb-4">
                  <AdBanner
                    type="infeed"
                    campaignId="1"
                    title="2026年度 初期研修説明会 受付中"
                    imageUrl="https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&q=80&w=1080"
                    sponsorName="医療法人伏見会　伏見病院"
                  />
                </div>
              )}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-50 relative hover:shadow-md transition-all group">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggleSave(job.id);
                  }}
                  className={`absolute top-4 right-4 transition-colors active:scale-90 ${
                    saved ? "text-pink-500" : "text-gray-300 hover:text-pink-500"
                  }`}
                  aria-label={saved ? "保存解除" : "保存"}
                >
                  {saved ? <BookmarkCheck size={22} strokeWidth={1.8} /> : <BookmarkPlus size={22} strokeWidth={1.5} />}
                </button>

                <div className="flex gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-pink-100 text-pink-600 rounded">{job.jobType}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded">{job.employmentType}</span>
                  {job.requirements && (
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded">{job.requirements}</span>
                  )}
                </div>

                <h4 className="font-bold text-gray-800 leading-snug pr-8 mb-3 group-hover:text-pink-600 transition-colors">{job.title}</h4>

                <div className="space-y-1.5 text-xs text-gray-600 mb-4 bg-gray-50/50 p-3 rounded-xl border border-gray-50">
                  <div className="flex items-center gap-1.5"><MapPin size={14} className="text-pink-400 shrink-0" /> {job.location}</div>
                  <div className="flex items-center gap-1.5"><JapaneseYen size={14} className="text-pink-400 shrink-0" /> {job.salaryDisplay}</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} className="text-pink-400 shrink-0" /> {job.schedule}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold text-[10px]">{job.companyType}</div>
                    <span className="line-clamp-1">{job.company}</span>
                  </div>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm hover:shadow-md hover:from-pink-500 hover:to-pink-600 transition-all active:scale-95"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">条件に一致する求人が見つかりませんでした</p>
            <button onClick={clearFilters} className="text-pink-500 font-bold hover:text-pink-600">絞り込みをクリア</button>
          </div>
        )}
      </div>

      <JobFilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} filters={filters} onApplyFilters={setFilters} />
    </div>
  );
}
