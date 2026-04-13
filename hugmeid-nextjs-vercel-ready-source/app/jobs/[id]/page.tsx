"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { MapPin, JapaneseYen, Clock, ArrowLeft, BookmarkCheck, BookmarkPlus, Share, Calendar, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/components/AuthContext";
import { allJobs } from "@/lib/data";
import { useSavedItems } from "@/lib/saved-items";

const jobDetailContent: Record<number, { description: string; requirements: string[] }> = {
  1: {
    description:
      "医学部を目指す高校生へのマンツーマン指導ポジションです。授業準備から当日の進行までを一貫して担当し、受験生の目標達成を伴走します。",
    requirements: ["医学部4年生以上", "数学・英語の受験指導経験", "責任感を持って継続的に対応できる方"],
  },
  2: {
    description:
      "医療系スタートアップで、PMアシスタントとしてプロダクト改善を支えるポジションです。リサーチ、ドキュメント作成、ユーザーヒアリングの補助などを担当します。",
    requirements: ["医学部在籍（学年不問）", "基本的なPCスキル", "週1回のオンラインMTG参加が可能な方"],
  },
  3: {
    description:
      "医学部受験に特化した学習塾で、教科指導と学習計画のフォローを担当します。受験経験を活かして受講生を支援したい方におすすめです。",
    requirements: ["受験指導経験がある方歓迎", "週2回以上勤務できる方", "丁寧なコミュニケーションができる方"],
  },
  4: {
    description:
      "病院実習サポートとデータ入力を通じて、医療現場の運営を支えるアルバイトです。事務作業と現場補助の両方を経験できます。",
    requirements: ["基本的なPC入力スキル", "平日日中に勤務可能な方", "チームでの業務に抵抗がない方"],
  },
  5: {
    description:
      "完全オンラインの家庭教師案件です。自身のスケジュールに合わせて働きながら、医学部志望の高校生を学習面から支援できます。",
    requirements: ["オンライン指導環境を用意できる方", "高校範囲の主要科目を指導可能な方", "丁寧に伴走できる方"],
  },
  6: {
    description:
      "医学生歓迎の飲食接客スタッフ募集です。学業と両立しながら、接客やチームワークの経験を積みたい方に向いています。",
    requirements: ["週2回以上勤務できる方", "明るい接客ができる方", "未経験歓迎"],
  },
};

export default function JobDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const { isLoggedIn, openLoginModal } = useAuth();
  const { isSaved, toggleSaved } = useSavedItems();

  const job = useMemo(() => allJobs.find((item) => String(item.id) === id), [id]);

  if (!job) {
    return (
      <div className="w-full max-w-lg mx-auto min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">求人が見つかりません</h2>
        <p className="text-sm text-gray-500 mb-6">対象の求人は削除されたか、URL が正しくありません。</p>
        <button onClick={() => router.push("/jobs")} className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors">
          求人一覧へ戻る
        </button>
      </div>
    );
  }

  const detail = jobDetailContent[job.id] ?? {
    description: `${job.company}による募集案件です。勤務条件や役割の詳細は、面談時にご確認ください。`,
    requirements: ["医学生歓迎", "誠実に業務へ取り組める方"],
  };
  const saved = isSaved("job", job.id);

  const handleApply = () => {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }

    toast.success("応募導線を開く想定で処理しました");
  };

  const handleSave = () => {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }

    const savedAfterToggle = toggleSaved("job", job.id);
    toast.success(savedAfterToggle ? "求人を保存しました" : "保存を解除しました");
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white min-h-screen animate-slide-in-right">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-pink-50 px-4 py-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="p-2 -ml-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
        <span className="font-bold text-sm text-gray-800">求人詳細</span>
        <button className="p-2 -mr-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors">
          <Share size={18} />
        </button>
      </header>

      <div className="p-4 space-y-6 pb-28">
        <div>
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-pink-100 text-pink-600 rounded">{job.jobType}</span>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded">{job.employmentType}</span>
            {job.requirements && <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded">{job.requirements}</span>}
          </div>
          <h2 className="text-xl font-bold text-gray-800 leading-snug mb-3">{job.title}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 border-b border-gray-100 pb-4">
            <div className="w-6 h-6 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center font-bold text-xs">{job.companyType}</div>
            <span>{job.company}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="bg-pink-50/50 p-3 rounded-xl flex items-start gap-3">
            <JapaneseYen className="text-pink-500 mt-0.5" size={18} />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">給与・報酬</div>
              <div className="text-sm font-bold text-gray-800">{job.salaryDisplay}</div>
            </div>
          </div>
          <div className="bg-pink-50/50 p-3 rounded-xl flex items-start gap-3">
            <MapPin className="text-pink-500 mt-0.5" size={18} />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">勤務地</div>
              <div className="text-sm font-bold text-gray-800">{job.location}</div>
            </div>
          </div>
          <div className="bg-pink-50/50 p-3 rounded-xl flex items-start gap-3">
            <Clock className="text-pink-500 mt-0.5" size={18} />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">勤務時間</div>
              <div className="text-sm font-bold text-gray-800">{job.schedule}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-bold text-gray-800 flex items-center gap-2 border-b border-pink-100 pb-2">
            <span className="w-1.5 h-4 bg-pink-400 rounded-full" />
            募集要項
          </h3>
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            <p>{detail.description}</p>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-1.5 text-sm">
                <CheckCircle2 size={16} className="text-green-500" /> 必須要件
              </h4>
              <ul className="list-disc list-inside text-xs space-y-1.5 ml-1 text-gray-600">
                {detail.requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400 flex items-center gap-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1"><Calendar size={14} /> 掲載日: 2026.04.01</div>
          <div className="flex items-center gap-1">求人ID: HUG-{job.id}</div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 p-3 pb-safe z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
        <div className="max-w-lg mx-auto flex gap-3">
          <button
            onClick={handleSave}
            className={`flex flex-col items-center justify-center w-16 shrink-0 rounded-xl border transition-colors active:scale-95 ${
              saved ? "bg-pink-500 border-pink-500 text-white" : "bg-pink-50 text-pink-500 border-pink-100 hover:bg-pink-100"
            }`}
          >
            {saved ? <BookmarkCheck size={20} className="mb-0.5" /> : <BookmarkPlus size={20} className="mb-0.5" />}
            <span className="text-[10px] font-bold">{saved ? "保存済み" : "保存"}</span>
          </button>
          <button
            onClick={handleApply}
            className="flex-1 bg-[#06C755] hover:bg-[#05B34C] text-white font-bold rounded-xl flex justify-center items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-[0.98] py-3"
          >
            LINEで応募する
          </button>
        </div>
      </div>
    </div>
  );
}
