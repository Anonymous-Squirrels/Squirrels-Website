"use client";
import React from "react";
import GlassMorphism from "../ui/GlassMorphism";
import Input from "../ui/Input";
import { Message, Message2 } from "@/constants/Icons";
import Button from "../ui/Button";
import { ContactUsInputs } from "@/constants/Contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  [key: string]: string;
}

function ContactUs() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <div className="bg-contact-us bg-center bg-cover h-[80vh] md:h-screen grid place-items-center text-white">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-around gap-y-6 md:gap-y-0 w-full">
        <div className="px-8 md:px-0">
          <GlassMorphism
            variant="light"
            className="rounded-full p-0 text-white w-fit"
          >
            <Message2 className="w-14 h-14 md:w-20 md:h-20" />
          </GlassMorphism>

          <div className="md:w-[30rem] w-full mt-8 md:mt-16 md:px-4">
            <span className="text-2xl md:text-4xl font-bold block my-3 leading-normal">
              Get a free consultancy from our expert right now!
            </span>
            <span className="text-sm font-light leading-8">
              With lots of unique elements, you can promote and grow your
              business to the sky. Really!
            </span>
          </div>
        </div>

        <GlassMorphism
          variant="light"
          className="border rounded-xl text-white w-[350px] md:w-96 p-4"
        >
          {ContactUsInputs.map((input, index) => (
            <Input
              key={index}
              text={input.text}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.text.toLowerCase()]}
              onChange={(
                e:
                  | React.ChangeEvent<HTMLInputElement>
                  | React.ChangeEvent<HTMLTextAreaElement>
              ) => handleInputChange(input.text.toLowerCase(), e.target.value)}
              classNameDiv="bg-white text-black rounded-lg"
              classNameInput="font-thin"
              classNameText="font-semibold"
              className="my-2"
            />
          ))}
          <Button
            variant="primary"
            className="font-semibold w-full rounded-md mt-8"
          >
            Get Free Consultancy
          </Button>
        </GlassMorphism>
      </div>
    </div>
  );
}

export default ContactUs;
