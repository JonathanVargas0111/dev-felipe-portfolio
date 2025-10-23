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
      className="relative flex flex-col w-full gap-8 py-20 text-gray-100 lg:flex-row lg:items-center lg:min-h-screen"
      itemScope
      itemType="https://schema.org/ContactPage"
      aria-label="Sección de contacto de Felipe Vargas"
    >
      {/* Schema Markup para información de contacto */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "email": "tu-email@dominio.com",
          "contactType": "Soporte técnico",
          "areaServed": "Global",
          "availableLanguage": "Spanish",
          "url": "https://felipevargas.vercel.app/#section-contact"
        })}
      </script>

      {/* Gradiente decorativo */}
      <div className="absolute right-0 rounded-full top-1/2 w-72 h-72 bg-purple-500/5 blur-3xl -z-10"></div>

      <ToastContainer />

      {/* Título con animación */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='w-full mb-6 text-left lg:w-2/5 lg:text-right'
      >
        <h2 className="text-5xl md:text-[8vw] lg:text-[6vw] font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" itemProp="name">
          Contacto
        </h2>
        <div className="w-24 h-1 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 lg:ml-auto"></div>
        <p className="mt-6 text-base text-gray-400 lg:text-right">
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
          className="flex flex-col w-full max-w-md p-8 mx-auto border border-gray-800 lg:mx-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl backdrop-blur-sm"
          itemScope
          itemType="https://schema.org/ContactForm"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Nombre completo
            </label>
            <input
              className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-300 rounded-lg dark:text-white bg-gray-50 dark:bg-gray-900/50 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <p className="mt-2 text-sm text-red-400" role="alert">
                {formik.errors.name}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Correo electrónico
            </label>
            <input
              className="w-full px-4 py-3 text-gray-900 transition-all duration-300 border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <p className="mt-2 text-sm text-red-400" role="alert">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Mensaje
            </label>
            <textarea
              rows="6"
              className="w-full px-4 py-3 text-gray-900 dark:text-white transition-all duration-300 border-2 border-gray-300 dark:border-gray-700 rounded-lg resize-none bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <p className="mt-2 text-sm text-red-400" role="alert">
                {formik.errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <button
              type="submit"
              className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-lg sm:flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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

            <span className="text-gray-500">o</span>

            <WhatsAppButton />
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;