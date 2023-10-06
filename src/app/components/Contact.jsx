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
        toast.error("Error al enviar el formulario");
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
      className="w-full flex flex-col bg-black text-gray-100 py-12 
      md:flex-row md:items-center md:h-screen md:justify-center md:gap-6"
    >
      <ToastContainer />

      <div className='text-5xl text-left justify-start font-bold mb-6 md:w-2/7 md:text-6xl md:text-stoke-w md:text-right lg:text-6xl'>
        <h2 className="">
          Contact
        </h2>
      </div>

      <div className="flex justify-center items-center md:w-3/5">
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
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 ml-2" />
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <Field
                as="textarea"
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
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