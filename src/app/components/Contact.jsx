'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from "react";
import * as Yup from 'yup';

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
        console.log("¡Datos enviados correctamente!");
      } else {
        // Ocurrió un error al enviar la solicitud
        console.error("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }

    setSubmitting(false);
  };

  return (
    <section
      id="section-contact"
      name="section-contac"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-gray-400">
        <div className="pb-8">
          <h3 className="text-4xl font-bold">
            Contact
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col w-full md:w-1/2">
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
      </div>
    </section>
  );
};

export default Contact;