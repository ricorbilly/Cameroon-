"use client"

import { useState } from "react"
import { ArrowRight, Check, LockKeyhole, Smartphone, ShieldCheck, WalletCards } from "lucide-react"

export default function Home() {
  const [phone, setPhone] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [notice, setNotice] = useState("")

  function sendOtp() {
    if (!/^6\d{8}$/.test(phone)) {
      setNotice("Entrez un numéro camerounais à 9 chiffres, par exemple 690123456.")
      return
    }
    setNotice("")
    setOtpSent(true)
  }

  function continueToPayment() {
    if (!/^\d{6}$/.test(otp)) {
      setNotice("Entrez le code à 6 chiffres reçu par SMS.")
      return
    }
    setNotice("Vérification prête. Vous serez redirigé vers la page officielle Orange sécurisée.")
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8f2] text-[#22170f]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-[#ff7900] text-xl font-black text-white">O</div>
          <span className="text-lg font-extrabold tracking-tight">Orange<span className="text-[#ff7900]">Pay</span> CM</span>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-orange-100 bg-white px-3 py-2 text-xs font-semibold text-stone-600 sm:flex">
          <LockKeyhole className="size-3.5 text-[#ff7900]" /> Paiement sécurisé
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ffe5cf] px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-[#b84d00]">
            <span className="size-2 rounded-full bg-[#ff7900]" /> Simple. Rapide. Local.
          </div>
          <h1 className="max-w-xl text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">Payez en toute confiance au Cameroun.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">Une expérience Orange Money claire et sécurisée pour régler vos achats, sans jamais partager votre code PIN.</p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-stone-700">
            <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#ff7900]" /> Sécurité renforcée</span>
            <span className="flex items-center gap-2"><Smartphone className="size-4 text-[#ff7900]" /> 100% mobile</span>
          </div>
        </div>

        <div id="apply" className="relative mx-auto w-full max-w-md rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_-30px_rgba(255,121,0,.45)] sm:p-8">
          <div className="mb-7 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#ff7900]">Étape 1 sur 2</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight">Vérification</h2>
            </div>
            <div className="grid size-11 place-items-center rounded-2xl bg-[#fff1e6] text-[#ff7900]"><WalletCards className="size-5" /></div>
          </div>
          <div className="mb-6 flex gap-2"><span className="h-1.5 flex-1 rounded-full bg-[#ff7900]" /><span className="h-1.5 flex-1 rounded-full bg-orange-100" /></div>
          <label htmlFor="phone" className="block text-sm font-semibold">Numéro Orange / MoMo</label>
          <div className="mt-2 flex overflow-hidden rounded-xl border border-stone-200 bg-stone-50 focus-within:border-[#ff7900] focus-within:ring-4 focus-within:ring-orange-100">
            <span className="grid w-14 place-items-center border-r border-stone-200 text-sm font-bold text-stone-500">+237</span>
            <input id="phone" inputMode="numeric" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 9))} placeholder="6XXXXXXXX" className="min-w-0 flex-1 bg-transparent px-4 py-3.5 outline-none placeholder:text-stone-400" />
          </div>
          <button onClick={sendOtp} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#22170f] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#ff7900]">Envoyer le code OTP <ArrowRight className="size-4" /></button>

          {otpSent && <div className="mt-6 border-t border-stone-100 pt-6">
            <label htmlFor="otp" className="block text-sm font-semibold">Code OTP reçu par SMS</label>
            <input id="otp" inputMode="numeric" value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="123456" className="mt-2 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3.5 tracking-[.35em] outline-none focus:border-[#ff7900] focus:ring-4 focus:ring-orange-100" />
            <p className="mt-3 text-xs leading-5 text-stone-500">Votre code PIN Orange Money sera demandé uniquement sur la page officielle sécurisée d&apos;Orange, jamais ici.</p>
            <button onClick={continueToPayment} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff7900] px-4 py-3.5 font-bold text-white transition hover:bg-[#e56800]">Vérifier et continuer <ArrowRight className="size-4" /></button>
          </div>}
          {notice && <p role="status" className="mt-4 rounded-xl bg-[#fff1e6] px-3 py-2.5 text-xs font-semibold leading-5 text-[#a84600]">{notice}</p>}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-medium text-stone-400"><LockKeyhole className="size-3" /> Vos informations restent confidentielles</div>
        </div>
      </section>

      <section className="border-t border-orange-100 bg-white"><div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3 lg:px-8">
        {[['01','Un numéro local','Utilisez votre numéro Orange ou MoMo camerounais.'],['02','Un code temporaire','Recevez un OTP unique par SMS pour confirmer votre identité.'],['03','Une page officielle','Finalisez le paiement sur l’environnement sécurisé Orange.']].map(([num,title,copy]) => <div key={num} className="flex gap-4"><span className="text-sm font-black text-[#ff7900]">{num}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-stone-500">{copy}</p></div></div>)}
      </div></section>
      <footer className="bg-[#22170f] px-5 py-6 text-center text-xs text-orange-100/70">OrangePay CM · Une interface de démonstration — le PIN n&apos;est jamais collecté.</footer>
    </main>
  )
}
