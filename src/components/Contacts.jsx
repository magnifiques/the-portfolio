import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import PlanetCanvas from "./canvas/Planet";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import { slideIn } from "../utils/animations";
import toast from "react-hot-toast";

const Contacts = () => {
  const formRef = useRef();
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formField.name,
          to_name: "Arpit",
          from_email: formField.email,
          to_email: import.meta.env.VITE_TO_EMAIL,
          message: formField.message,
        },
        import.meta.env.VITE_API_KEY
      )
      .then(() => {
        setLoading(false);
        setFormField({
          name: "",
          email: "",
          message: "",
        });
        toast(
          `Thank you for contacting me! 
          I will get back to you as soon as possible!`,
          {
            duration: 5000,
            style: {
              background: "green",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "25px",
            },
          }
        );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast("Something went wrong! Please try again later", {
          duration: 5000,
          style: {
            background: "red",
            color: "white",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
      });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formField.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:bg-zinc-700"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={formField.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:bg-zinc-700"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={formField.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium active:border-white focus:bg-zinc-700"
            />
          </label>

          <button
            type="submit"
            className="bg-red-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-red-800"
            disabled={
              loading ||
              formField.name === "" ||
              formField.email === "" ||
              formField.message === ""
            }
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <PlanetCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contacts, "contact");
