'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from "react";
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const msReque = 'Campo requerido';
  const validationSchema = Yup.object({
    name: Yup.string().required(msReque),
    email: Yup.string().email('Email inválido').required('Campo requerido'),
    message: Yup.string().required(msReque),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
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
        toast.error("Error al enviar el formulario");w
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      toast.error("Error al enviar el formulario");
    }

    setSubmitting(false);
  };

  return (
    <section
      id="section-contact"
      name="section-contac"
      className="flex flex-col w-full py-12 text-gray-900 bg-gray-50 dark:bg-black dark:text-gray-100 md:flex-row md:items-center md:h-screen md:justify-center md:gap-6"
    >
      <ToastContainer />

      <div className='justify-start mb-6 text-5xl font-bold text-left md:w-2/7 md:text-6xl md:text-stoke-w md:text-right lg:text-6xl'>
        <h2 className="">
          Contact
        </h2>
      </div>

      <div className="flex items-center justify-center md:w-3/5">
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="">
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
              />
              <ErrorMessage name="name" component="div" className="ml-2 text-red-500" />
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <Field
                as="textarea"
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
              <button
                type="submit"
                className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110"
                disabled={isSubmitting}
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;