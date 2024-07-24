'use client'
import React from "react";
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { HiOutlineRefresh } from 'react-icons/hi';


const validationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Email inválido').required('Campo requerido'),
  message: Yup.string().required('Campo requerido'),
});


const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_GET_FORM_URL, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // La solicitud se realizó correctamente
          resetForm();
          toast.success("Formulario enviado correctamente");
        } else {
          // Ocurrió un error al enviar la solicitud
          toast.error("Error al enviar el formulario");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        toast.error("Error al enviar el formulario");
      }
      setSubmitting(false);

    },
  });
  return (
    <section
      id="section-contact"
      name="section-contac"
      className="flex flex-col w-full py-12 text-gray-100 lg:flex-row lg:items-center lg:h-screen"
    >
      {/* Mensaje de envio exito o fallido */}
      <ToastContainer />

      <div className='w-full text-5xl text-left font-bold mb-6 lg:w-2/5 lg:text-right md:text-[8vw] lg:text-[6vw] '>
        <h2 className="">
        Contact
        </h2>
      </div>
      
      <div className="flex flex-col gap-2 text-lg text-left lg:w-3/5 lg:px-5 lg:justify-start">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full max-w-md mx-auto lg:mx-0"
        >
          <input
            className="p-2 my-2 text-white bg-transparent border-2 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            id='name'
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {
            formik.touched.name && formik.errors.name && (
              <p className="text-xs italic text-red-500">{formik.errors.name}</p>
            )
          }
          <input
            className="p-2 my-2 text-white bg-transparent border-2 rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
            id='email'
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {
            formik.touched.email && formik.errors.email && (
              <p className="text-xs italic text-red-500">{formik.errors.email}</p>
            )
          }
          <textarea
            rows="6"
            className="p-2 my-2 text-white bg-transparent border-2 rounded-sm resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            id="message"
            name="message"
            placeholder="Enter your message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            disabled={formik.isSubmitting}
          />
          {
            formik.touched.message && formik.errors.message && (
              <p className="text-xs italic text-red-500">{formik.errors.message}</p>
            )
          }
          <button
            type="submit"
            className="flex items-center justify-center p-2 text-base duration-300 border-2 border-white border-solid rounded-sm w-36 hover:scale-105"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <>
                <HiOutlineRefresh className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;