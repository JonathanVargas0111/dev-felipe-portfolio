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
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800"
    >
      {/* Mensaje de envio exito o fallido */}
      <ToastContainer />
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-gray-400">
        <div className="pb-8">
          <h3 className="text-4xl font-bold">
            Contact
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
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
              className="p-2 bg-transparent border-2 rounded-md text-white my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
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
              className="p-2 bg-transparent border-2 rounded-md text-white my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
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
              className="text-white bg-gradient-to-b from-cyan-800  to-blue-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
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
      </div>
    </section>
  );
};

export default Contact;