'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { translations } from '../../data/translations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

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
    <section id="contact" className="py-20 lg:py-28 relative">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-6">
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.directContact}
              </h3>

              {/* Email Direct Copy */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-400">
                  {t.emailLabel}
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-xs sm:text-sm font-mono font-medium text-slate-800 dark:text-slate-200 select-all">
                    {contactEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-500 hover:bg-white dark:hover:bg-white/10 transition-colors"
                    title="Copiar email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-400">
                  {t.locationLabel}
                </span>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.06] text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span>{t.locationVal}</span>
                </div>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>{t.responseTime}</span>
              </div>

              {/* WhatsApp Fast Track Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.whatsappBtn}</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/felipevargasarias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/JonathanVargas0111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <a
                  href="https://twitter.com/felipevargasx_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right: Modern Contact Form */}
          <div className="lg:col-span-7">
            
            <form
              onSubmit={formik.handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-dark-900 border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-[11px] text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="juan@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-[11px] text-red-500">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t.formSubject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Propuesta de rol remoto / Proyecto WooCommerce / Arquitectura Next.js"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-[11px] text-red-500">{formik.errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {t.formMessage}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Cuéntame sobre las metas de tu equipo, fechas tentativas o el alcance del sistema..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-[11px] text-red-500">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Feedback */}
              {formStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{t.successMsg}</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{t.errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-300 font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{formik.isSubmitting ? t.submittingBtn : t.submitBtn}</span>
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
