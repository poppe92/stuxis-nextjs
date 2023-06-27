import React from "react";
import Hero from "./Hero";

function Contact() {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="font-bold text-2xl text-center p-4">Lets work together</h1>
      <form className="max-w-[600px] m-auto" action="">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Message"></textarea>
        <button className="border shadow-lg p-3 mt-2 w-full">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
