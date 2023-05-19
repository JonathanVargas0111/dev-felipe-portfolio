import React from "react";

const Contact = () => {
  return (
    <section 
      id="section-contact"
      name="section-contac"      
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-gray-400">
        <div className="pb-8">
          <p className="text-4xl font-bold  ">
            Contact
          </p>
          <p className="text-red-500">En construccion</p>  
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/43177f3f-d4f6-4d92-b761-d113f4fe4685"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <p className="py-6 m-auto text-2xl">Cuéntame de esa idea que quieres hacer realidad:</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;