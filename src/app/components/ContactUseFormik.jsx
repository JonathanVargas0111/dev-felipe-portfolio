'use client'
import React from "react";
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { HiOutlineRefresh } from 'react-icons/hi';
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
      className="flex flex-col w-full py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
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

      <ToastContainer />

      <div className='w-full text-5xl text-left font-bold mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw]'>
        <h2 itemProp="name">Contacto</h2>
      </div>

      <div className="flex flex-col gap-2 text-lg text-left lg:w-3/5 lg:px-5 lg:justify-start">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full max-w-md mx-auto lg:mx-0"
          itemScope
          itemType="https://schema.org/ContactForm"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-white">
              Nombre completo
            </label>
            <input
              className="w-full p-2 text-white bg-transparent border-2 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              <p className="mt-1 text-sm text-red-500" role="alert">
                {formik.errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-white">
              Correo electrónico
            </label>
            <input
              className="w-full p-2 text-white bg-transparent border-2 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              <p className="mt-1 text-sm text-red-500" role="alert">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-white">
              Mensaje
            </label>
            <textarea
              rows="6"
              className="w-full p-2 text-white bg-transparent border-2 rounded-sm resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              <p className="mt-1 text-sm text-red-500" role="alert">
                {formik.errors.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex items-center justify-center p-2 text-base duration-300 border-2 border-white rounded-sm w-36 hover:scale-105"
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
            
            <p className="text-lg text-white">O</p>
            
            <WhatsAppButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;