"use client";

import Link from "next/link";
import { ExternalLink, Play, Building2 } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

type SponsorTier = "platinum" | "gold" | "supporter";
type Sponsor = { id: string; name: string; logo: string; bannerImage?: string; description: string; category: string; url: string; tier: SponsorTier; products?: Array<{ name: string; description: string; image: string }>; video?: { title: string; thumbnail: string; duration: string } };

export default function SponsorsPage() {
  const sponsors: Sponsor[] = [
    { id: "1", name: "医療法人伏見会　伏見病院", logo: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1758691461973-553db5285280?auto=format&fit=crop&q=80&w=1200", description: "地域医療に貢献する総合病院。2026年度の初期研修医を積極的に募集しています。充実した指導体制と幅広い診療科ローテーションが特徴です。", category: "医療機関", url: "#", tier: "platinum", products: [{ name: "初期研修プログラム", description: "全国トップクラスの救急受け入れ件数を誇り、実践的な手技が身につきます。", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400" }], video: { title: "病院紹介ビデオ - 研修医の1日", thumbnail: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?auto=format&fit=crop&q=80&w=600", duration: "3:24" } },
    { id: "2", name: "メディカルテックカンパニー", logo: "https://images.unsplash.com/photo-1560111828-e16fc96d9a5e?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=1200", description: "医療AIソリューションを開発するヘルステックスタートアップ。医学生インターンを募集中。", category: "IT・テクノロジー", url: "#", tier: "platinum", products: [{ name: "AI診断支援システム開発インターン", description: "実際の医療データを用いたAIモデル開発に、医師の卵として参画できる有給インターンです。", image: "https://images.unsplash.com/photo-1603726574690-cc3138bfec8c?auto=format&fit=crop&q=80&w=400" }] },
    { id: "3", name: "グローバル医療教育機構", logo: "https://images.unsplash.com/photo-1609126385558-bc3fc5082b0a?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1609126385558-bc3fc5082b0a?auto=format&fit=crop&q=80&w=600", description: "医学生の海外留学・USMLE対策をサポートする専門機関。", category: "教育・留学", url: "#", tier: "gold" },
    { id: "4", name: "株式会社メディカルキャリア", logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400", bannerImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600", description: "医学生特化の家庭教師・学習塾アルバイトを一括検索。", category: "人材紹介", url: "#", tier: "gold" },
    { id: "5", name: "医療奨学財団", logo: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=200", description: "", category: "財団", url: "#", tier: "supporter" },
    { id: "6", name: "山口医師会", logo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=200", description: "", category: "団体", url: "#", tier: "supporter" },
    { id: "7", name: "医学書出版ネット", logo: "https://images.unsplash.com/photo-1588514747201-904031665a2a?auto=format&fit=crop&q=80&w=200", description: "", category: "出版", url: "#", tier: "supporter" },
    { id: "8", name: "白衣工房", logo: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=200", description: "", category: "アパレル", url: "#", tier: "supporter" },
  ];

  const platinumSponsors = sponsors.filter((s) => s.tier === "platinum");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const supporters = sponsors.filter((s) => s.tier === "supporter");

  return (
    <div className="w-full max-w-4xl mx-auto pb-12">
      <div className="sticky top-[10px] z-30 bg-white/80 backdrop-blur-md border-b border-pink-50 px-4 py-3.5 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 tracking-tight">パートナー企業のご紹介</h2>
        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">Hugmeidを通じて、医学生の未来とキャリアを応援・支援していただいている企業・医療機関様です。</p>
      </div>
      <div className="px-4 pt-3 space-y-8">
        <section>
          <div className="flex flex-col items-center mb-8">
            <span className="text-pink-500 text-[10px] font-extrabold tracking-[0.2em] mb-1">PLATINUM PARTNERS</span>
            <h3 className="text-2xl font-bold text-gray-800">プレミアムパートナー</h3>
          </div>
          <div className="space-y-10">
            {platinumSponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-3xl shadow-md border border-pink-100 overflow-hidden">
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-64 sm:h-80 group overflow-hidden">
                  <OptimizedImage src={sponsor.bannerImage ?? sponsor.logo} alt={sponsor.name} fill sizes="(max-width: 768px) 100vw, 1200px" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full w-max mb-3">PLATINUM</span>
                    <h4 className="text-white text-2xl font-bold mb-2">{sponsor.name}</h4>
                    <p className="text-gray-200 text-sm line-clamp-2 max-w-lg">{sponsor.description}</p>
                  </div>
                </a>
                <div className="p-6 bg-[#FDFBF7]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sponsor.products?.map((product, idx) => (
                      <div key={idx} className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <span className="text-xs font-bold text-pink-500 mb-2 flex items-center gap-1"><Building2 size={14} /> PICK UP</span>
                        <OptimizedImage src={product.image} alt={product.name} width={640} height={256} sizes="(max-width: 768px) 100vw, 320px" className="w-full h-32 object-cover rounded-xl mb-3" />
                        <h5 className="font-bold text-gray-800 text-sm mb-1">{product.name}</h5>
                        <p className="text-xs text-gray-600 mb-3 flex-1">{product.description}</p>
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-pink-500 inline-flex items-center gap-1 hover:text-pink-600">詳細を見る <ExternalLink size={12} /></a>
                      </div>
                    ))}
                    {sponsor.video && (
                      <div className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <span className="text-xs font-bold text-pink-500 mb-2 flex items-center gap-1"><Play size={14} /> VIDEO</span>
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-32 rounded-xl overflow-hidden group bg-black mb-3">
                          <OptimizedImage src={sponsor.video.thumbnail} alt={sponsor.video.title} fill sizes="(max-width: 768px) 100vw, 320px" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-pink-500 group-hover:scale-110 transition-all shadow-lg"><Play size={20} className="text-pink-500 group-hover:text-white ml-1" /></div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">{sponsor.video.duration}</div>
                        </a>
                        <h5 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">{sponsor.video.title}</h5>
                        <p className="text-xs text-gray-500 line-clamp-2">動画で施設の雰囲気やインタビューをご覧いただけます。</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="border-pink-100" />
        <section>
          <div className="flex flex-col items-center mb-8">
            <span className="text-gray-400 text-[10px] font-extrabold tracking-[0.2em] mb-1">GOLD PARTNERS</span>
            <h3 className="text-xl font-bold text-gray-700">公式スポンサー</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {goldSponsors.map((sponsor) => (
              <a key={sponsor.id} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
                <OptimizedImage src={sponsor.bannerImage ?? sponsor.logo} alt={sponsor.name} fill sizes="(max-width: 768px) 100vw, 640px" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <OptimizedImage src={sponsor.logo} alt="" width={24} height={24} sizes="24px" className="w-6 h-6 rounded bg-white object-cover" />
                    <span className="text-[10px] text-pink-300 font-bold bg-black/40 px-2 py-0.5 rounded-sm">{sponsor.category}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{sponsor.name}</h4>
                  <p className="text-gray-300 text-xs line-clamp-2">{sponsor.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <hr className="border-pink-100" />
        <section>
          <div className="flex flex-col items-center mb-6"><h3 className="text-lg font-bold text-gray-600">サポーター様</h3></div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {supporters.map((sponsor) => (
              <a key={sponsor.id} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="aspect-square bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center hover:border-pink-300 hover:shadow-md transition-all group">
                <OptimizedImage src={sponsor.logo} alt={sponsor.name} width={40} height={40} sizes="40px" className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all mb-2" />
                <span className="text-[9px] text-center text-gray-500 font-medium line-clamp-2">{sponsor.name}</span>
              </a>
            ))}
          </div>
        </section>
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100 text-center shadow-sm mt-8">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4"><Building2 size={24} className="text-pink-500" /></div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">スポンサー/掲載企業様を募集しております</h3>
          <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">Hugmeidを通じて、全国の医学生に向けて貴社の魅力や求人情報をダイレクトに発信しませんか？<br />掲載プランの資料請求やお問い合わせはお気軽にどうぞ。</p>
          <Link href="/connect" className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-pink-600 transition-colors transform hover:-translate-y-0.5">お問い合わせ・資料請求 <ExternalLink size={16} /></Link>
        </section>
      </div>
    </div>
  );
}
