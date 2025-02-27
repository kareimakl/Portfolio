import dynamic from "next/dynamic";
import { useForm, ValidationError } from "@formspree/react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import doneAnimation from "../../public/Animation/Animation - 1720179009244.json";
import contactAnimation from "../../public/Animation/Animation - 1720180172944.json";

const Contact = () => {
  return (
    <section className="">
      <h2 className="text-center text-4xl mt-10 text-zinc-400 dark:text-white">
        Coming Soon
      </h2>
    </section>
  );
};

export default Contact;