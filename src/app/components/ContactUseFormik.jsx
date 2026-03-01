'use client'
import React from "react";
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { HiOutlineRefresh } from 'react-icons/hi';
import { motion } from 'framer-motion';
import WhatsAppButton from "./WhatsAppButton";

const validationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Email inválido').required('Campo requerido'),
  message: Yup.string().required('Campo requerido'),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_GET_FORM_URL, {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          resetForm();
          toast.success("¡Mensaje enviado correctamente!");
        } else {
          toast.error("Error al enviar el formulario");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error de conexión");
      }
      setSubmitting(false);
    },
  });

  return (
    <section
      id="section-contact"
      className="relative flex w-full flex-col gap-8 py-20 text-[var(--ink)] lg:flex-row lg:items-center"
      itemScope
      itemType="https://schema.org/ContactPage"
      aria-label="Sección de contacto de Felipe Vargas"
    >
      {/* Schema Markup para información de contacto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "contactType": "Contacto profesional",
            "areaServed": "Global",
            "availableLanguage": "Spanish",
            "url": "https://felipevargas.vercel.app/#section-contact"
          })
        }}
      />

      {/* Gradiente decorativo */}
      <div className="absolute right-0 top-1/2 -z-10 h-72 w-72 rounded-full bg-[rgba(255,95,46,0.08)] blur-3xl"></div>

      <ToastContainer />

      {/* Título con animación */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='w-full mb-6 text-left lg:w-2/5'
      >
        <h2 className="font-display text-5xl font-semibold text-[var(--ink)] md:text-[8vw] lg:text-[5vw]" itemProp="name">
          Contacto
        </h2>
        <div className="mt-4 h-1 w-24 bg-[var(--accent)]"></div>
        <p className="mt-6 text-base text-[var(--ink-muted)]">
          ¿Tienes un proyecto en mente? Hablemos
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 text-lg text-left lg:w-3/5 lg:px-8 lg:justify-start"
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full max-w-md flex-col rounded-3xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[var(--shadow)] lg:mx-0"
          itemScope
          itemType="https://schema.org/ContactForm"
        >
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--ink-muted)]">
              Nombre completo
            </label>
            <input
              className="w-full rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--ink)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
              id="name"
              type="text"
              name="name"
              placeholder="Ej: Juan Pérez"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              aria-required="true"
              itemProp="name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="mt-2 text-sm text-red-500" role="alert">
                {formik.errors.name}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--ink-muted)]">
              Correo electrónico
            </label>
            <input
              className="w-full rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--ink)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
              id="email"
              type="email"
              name="email"
              placeholder="Ej: juan@ejemplo.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              aria-required="true"
              itemProp="email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-2 text-sm text-red-500" role="alert">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--ink-muted)]">
              Mensaje
            </label>
            <textarea
              rows="6"
              className="w-full resize-none rounded-2xl border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--ink)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              disabled={formik.isSubmitting}
              aria-required="true"
              itemProp="message"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-2 text-sm text-red-500" role="alert">
                {formik.errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow)] disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
              disabled={formik.isSubmitting}
              aria-live="polite"
            >
              {formik.isSubmitting ? (
                <>
                  <HiOutlineRefresh className="mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </button>

            <span className="text-[var(--ink-muted)]">o</span>

            <WhatsAppButton />
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
