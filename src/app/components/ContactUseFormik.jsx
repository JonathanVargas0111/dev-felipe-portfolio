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
      className="w-full flex flex-col text-gray-100 py-12 
      lg:flex-row lg:items-center lg:h-screen"
    >
      {/* Mensaje de envio exito o fallido */}
      <ToastContainer />


      <div className='w-full text-5xl text-left font-bold mb-6 lg:w-1/4 lg:text-right lg:text-6xl'>
        <h2 className="">
          Contact
        </h2>
      </div>

      <div className="flex flex-col gap-4 text-lg text-left lg:w-3/4 lg:px-5 lg:justify-start">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full max-w-md mx-auto"
        >
          <input
            className="p-2 bg-transparent border-2 rounded-sm text-white my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
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
              <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
            )
          }
          <input
            className="p-2 bg-transparent border-2 rounded-sm text-white my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
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
              <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
            )
          }
          <textarea
            rows="6"
            className="p-2 bg-transparent border-2 rounded-sm text-white my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
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
              <p className="text-red-500 text-xs italic">{formik.errors.message}</p>
            )
          }
          <button
            type="submit"
            className="border-solid w-36 border-2 border-white flex items-center justify-center text-base p-2 rounded-sm hover:scale-105 duration-300"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <>
                <HiOutlineRefresh className="animate-spin mr-2" />
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