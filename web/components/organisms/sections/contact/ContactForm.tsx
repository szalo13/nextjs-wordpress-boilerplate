"use client";

import { memo, useMemo, useState } from "react";
import Button from "../../../atoms/buttons/Button";
import FadeInAnimation from "../../../atoms/animations/FadeInAnimation.component";
import { COMPANY_EMAIL, COMPANY_NAME } from "../../../../app/const";

interface IContactFormPropTypes {}

const ContactForm = ({}: IContactFormPropTypes) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const setValue = (e: any) => (fieldName: string) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const href = useMemo(() => {
    const mailtoLink = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Hello, ${COMPANY_NAME},\n\n${form.message},\n\nBest regards,\n${form.name}\n${form.email}\n\n`
    )}`;
    return mailtoLink;
  }, [form]);

  return (
    <form className="contact-form text-white">
      <div className="mb-8">
        <FadeInAnimation delay={200} duration={1000}>
          <div className="mt-1 border-b border-white">
            <input
              type="text"
              name="name"
              id="name"
              className="font-light text px-2 py-4 block w-full placeholder:text-white border-0 border-b border-transparent bg-transparent sm:text-md"
              placeholder="Your name *"
              onChange={(e) => setValue(e)("name")}
            />
          </div>
        </FadeInAnimation>
      </div>
      <div className="mb-8">
        <FadeInAnimation delay={400} duration={1000}>
          <div className="mt-1 border-b border-white">
            <input
              type="text"
              name="email"
              id="email"
              className="font-light text px-2 py-4 block w-full placeholder:text-white border-0 border-b border-transparent bg-transparent sm:text-md"
              placeholder="Your email *"
              onChange={(e) => setValue(e)("email")}
            />
          </div>
        </FadeInAnimation>
      </div>
      <div className="mb-8">
        <FadeInAnimation delay={600} duration={1000}>
          <div className="mt-1 border-b border-white">
            <input
              type="text"
              name="subject"
              id="subject"
              className="font-light text px-2 py-4 block w-full placeholder:text-white border-0 border-b border-transparent bg-transparent sm:text-md"
              placeholder="Subject *"
              onChange={(e) => setValue(e)("subject")}
            />
          </div>
        </FadeInAnimation>
      </div>
      <div className="mb-8">
        <FadeInAnimation delay={800} duration={1000}>
          <div className="mt-1 border-b border-white">
            <input
              type="text"
              name="message"
              id="message"
              className="font-light text px-2 py-4 block w-full placeholder:text-white border-0 border-b border-transparent bg-transparent sm:text-md"
              placeholder="Message *"
              onChange={(e) => setValue(e)("message")}
            />
          </div>
        </FadeInAnimation>
      </div>
      <div className="flex justify-items-end">
        <FadeInAnimation delay={1000} duration={1000}>
          <Button href={href} className="bg-white text-black">
            Submit
          </Button>
        </FadeInAnimation>
      </div>
    </form>
  );
};

export default memo(ContactForm);
