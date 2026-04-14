"use client";

import { useState } from "react";
import { MessageCircle, HelpCircle, Send, ChevronDown } from "lucide-react";
import { toast } from "sonner";

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "faq">("contact");
  const [formData, setFormData] = useState({ name: "", email: "", category: "", message: "" });
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<string>("すべて");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("お問い合わせを送信しました！担当者より連絡いたします。");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  const faqs = [
    { id: 1, category: "基本情報", question: "Hugmeidの利用は無料ですか？", answer: "はい、Hugmeidの基本機能は全て無料でご利用いただけます。医学生の皆様の学習やキャリア支援を目的としたプラットフォームです。" },
    { id: 2, category: "求人", question: "求人に応募するにはどうすればいいですか？", answer: "求人詳細ページから「応募する」ボタンをクリックすると、企業の応募フォームに移動します。一部の求人ではHugmeid内で直接応募も可能です。" },
    { id: 3, category: "アカウント", question: "プロフィール情報は企業に公開されますか？", answer: "基本的にプロフィール情報は非公開です。求人に応募する際に、あなたが選択した情報のみが企業に共有されます。" },
    { id: 4, category: "アカウント", question: "LINEログインは必須ですか？", answer: "求人や記事の閲覧は誰でも可能ですが、保存機能や応募機能を利用するにはLINEログインが必要です。" },
    { id: 5, category: "アカウント", question: "退会したい場合はどうすればいいですか？", answer: "マイページの設定から退会手続きが可能です。または、お問い合わせフォームからご連絡ください。" },
    { id: 6, category: "通知", question: "企業からの連絡はどこに届きますか？", answer: "登録されたメールアドレスとLINEに通知が届きます。通知設定はマイページから変更可能です。" },
    { id: 7, category: "課外活動", question: "留学情報の詳細はどこで確認できますか？", answer: "課外活動セクションの「留学情報」タブから、各プログラムの詳細ページにアクセスできます。" },
  ];

  const faqCategories = ["すべて", "基本情報", "求人", "アカウント", "通知", "課外活動"];
  const filteredFaqs = faqCategory === "すべて" ? faqs : faqs.filter((f) => f.category === faqCategory);

  return (
    <div className="w-full max-w-lg mx-auto pb-8 animate-slide-in-right">
      <div className="sticky top-[20px] z-30 bg-white border-b border-pink-100 px-4 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">繋がり</h2>
        <div className="flex gap-2">
          <button onClick={() => setActiveTab("contact")} className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "contact" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>
            💬 お問い合わせ
          </button>
          <button onClick={() => setActiveTab("faq")} className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "faq" ? "bg-pink-500 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-pink-50"}`}>
            ❓ FAQ
          </button>
        </div>
      </div>

      <div className="px-4 pt-3">
        {activeTab === "contact" ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center shadow-md"><MessageCircle className="text-white" size={24} /></div>
                <div><h3 className="font-bold text-gray-800">お問い合わせ</h3><p className="text-xs text-gray-500">お気軽にご連絡ください</p></div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">ご質問、ご要望、不具合報告など、どんなことでもお気軽にお問い合わせください。担当者より2営業日以内にご連絡いたします。</p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 space-y-5">
              <div>
                <label className="text-xs font-bold text-gray-600 mb-2 block">お名前 *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="山田 太郎" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 mb-2 block">メールアドレス *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 mb-2 block">お問い合わせ種別 *</label>
                <select required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm">
                  <option value="">選択してください</option>
                  <option value="contact">連絡先が欲しい</option>
                  <option value="question">サービスについての質問</option>
                  <option value="bug">不具合報告</option>
                  <option value="request">機能リクエスト</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 mb-2 block">お問い合わせ内容 *</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="お問い合わせ内容をご記入ください" rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm resize-none" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
                <Send size={18} /> 送信する
              </button>
            </form>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-gray-700"><span className="font-bold">💡 ヒント：</span>「〜〜の連絡先が欲しい」などのご要望もお気軽にお送りください。可能な限り情報をお調べしてご連絡いたします。</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 mb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-md"><HelpCircle className="text-white" size={24} /></div>
                <div><h3 className="font-bold text-gray-800">よくある質問</h3><p className="text-xs text-gray-500">FAQ</p></div>
              </div>
              <p className="text-xs text-gray-600">よくあるご質問をまとめました。解決しない場合はお問い合わせください。</p>
            </div>
            <div className="flex overflow-x-auto gap-2 pb-4 hide-scrollbar">
              {faqCategories.map((cat) => (
                <button key={cat} onClick={() => setFaqCategory(cat)} className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${faqCategory === cat ? "bg-blue-500 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"}`}>{cat}</button>
              ))}
            </div>
            <div className="space-y-3">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-pink-50 overflow-hidden">
                  <button onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)} className="w-full p-4 flex items-start justify-between text-left hover:bg-pink-50/50 transition-colors">
                    <div className="flex-1 pr-3">
                      <div className="flex items-center gap-2 mb-2"><span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-600 rounded">{faq.category}</span></div>
                      <div className="flex items-start gap-2"><span className="shrink-0 text-pink-500 font-bold text-sm mt-0.5">Q.</span><span className="text-sm font-bold text-gray-800 leading-snug">{faq.question}</span></div>
                    </div>
                    <ChevronDown size={20} className={`text-gray-400 shrink-0 transition-transform ${openFaqId === faq.id ? "rotate-180" : ""}`} />
                  </button>
                  {openFaqId === faq.id && (
                    <div className="px-4 pb-4 pt-0 border-t border-gray-50">
                      <div className="flex items-start gap-2 bg-pink-50/50 p-3 rounded-lg"><span className="shrink-0 text-blue-500 font-bold text-sm mt-0.5">A.</span><p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center mt-6">
              <p className="text-xs text-gray-600 mb-3">解決しない場合は</p>
              <button onClick={() => setActiveTab("contact")} className="bg-pink-500 text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-sm hover:bg-pink-600 transition-colors active:scale-95">お問い合わせする</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
