'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  MessageSquare
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function ContactSection() {
  const { lang } = useSelector((state: RootState) => state.settings);
  const t = translations[lang].contact;

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'felipevargas.dev@gmail.com';
  const whatsappUrl = 'https://wa.me/573017897176?text=Hola%20Felipe,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.';

  const validationSchema = Yup.object({
    name: Yup.string().required(lang === 'es' ? 'Ingresa tu nombre' : 'Name is required'),
    email: Yup.string().email(lang === 'es' ? 'Email no válido' : 'Invalid email').required(lang === 'es' ? 'Ingresa tu email' : 'Email is required'),
    subject: Yup.string().required(lang === 'es' ? 'Ingresa el asunto' : 'Subject is required'),
    message: Yup.string().required(lang === 'es' ? 'Escribe tu mensaje' : 'Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const formEndpoint = process.env.NEXT_PUBLIC_GET_FORM_URL || 'https://formspree.io/f/mqkvnvrq';
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (res.ok) {
          setFormStatus('success');
          resetForm();
        } else {
          setFormStatus('error');
        }
      } catch (err) {
        console.error('Submission error:', err);
        setFormStatus('error');
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <span>06 / INITIATE DIALOGUE & INQUIRIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-slate-950 dark:text-white">
            {t.title}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Contact Channels & Meta */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark space-y-5 sm:space-y-6 font-mono text-xs">
              
              <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                <span className="font-bold text-slate-900 dark:text-white uppercase">
                  DIRECT CHANNELS
                </span>
                <span className="text-slate-400">STATUS: OPEN</span>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <span className="text-slate-400 uppercase">{t.emailLabel}</span>
                <div className="flex items-center justify-between p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]">
                  <span className="text-slate-900 dark:text-white select-all text-[11px] sm:text-xs truncate mr-2">
                    {contactEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-1.5">
                <span className="text-slate-400 uppercase">FAST-TRACK MESSAGING</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-black/[0.06] dark:border-white/[0.06] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] text-slate-900 dark:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Availability Info */}
              <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] space-y-1 text-slate-500 text-[11px] sm:text-xs">
                <div>• Location: Bogotá, Colombia · 100% Remote Worldwide</div>
                <div>• Expected response window: &lt; 24 hours</div>
              </div>

              {/* Socials */}
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/felipevargasarias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/JonathanVargas0111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/felipevargasx_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          {/* Right: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={formik.handleSubmit}
              className="p-6 sm:p-9 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface-light dark:bg-surface-dark space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Name / Company"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-transparent text-slate-900 dark:text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-slate-950 dark:focus:border-white transition-colors"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-[11px] font-mono text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="contact@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-transparent text-slate-900 dark:text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-slate-950 dark:focus:border-white transition-colors"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-[11px] font-mono text-red-500">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  {t.formSubject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Subject / Project Objective"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-transparent text-slate-900 dark:text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-slate-950 dark:focus:border-white transition-colors"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-[11px] font-mono text-red-500">{formik.errors.subject}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  {t.formMessage}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Tell me about your technical requirements, team needs or project scope..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 dark:border-white/10 bg-transparent text-slate-900 dark:text-white text-xs sm:text-sm font-sans focus:outline-none focus:border-slate-950 dark:focus:border-white transition-colors resize-none"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-[11px] font-mono text-red-500">{formik.errors.message}</p>
                )}
              </div>

              {formStatus === 'success' && (
                <div className="p-3 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white">
                  ✓ {t.successMsg}
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3 rounded-lg border border-red-500/20 text-xs font-mono text-red-500">
                  ! {t.errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-mono text-xs font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {formik.isSubmitting ? '[ TRANSMITTING INQUIRY... ]' : '[ SEND MESSAGE → ]'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
