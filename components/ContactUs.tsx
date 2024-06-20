"use client";
import React from "react";
import GlassMorphism from "./ui/GlassMorphism";
import Input from "./ui/Input";
import {Message2} from "@/constants/Icons";
import Button from "./ui/Button";
import {formInputSchema} from "@/form_schema/formInputSchema";
import {SubmitHandler, useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

function ContactUs() {
  const {
    register, handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<z.infer<typeof formInputSchema>>({
      resolver: zodResolver(formInputSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        messageToTeam: "",
        social: "",
        website: "",
      }
    }
  )

  const onSubmit: SubmitHandler<z.infer<typeof formInputSchema>> = async (data: z.infer<typeof formInputSchema>) => {
    console.log(data);
  }

  return (
    <div
      id="contact"
      className="bg-contact-us bg-center bg-cover h-fit grid place-items-center text-white py-7 md:py-14 md:px-36 "
    >
      <GlassMorphism variant={"light"} className="invisible md:visible w-full rounded-2xl">
        <div className="flex flex-col items-center justify-between md:justify-around gap-y-6 md:gap-y-0 w-full visible md:mt-6">
          <div className="md:w-full px-8 md:px-0 flex flex-col md:flex-row items-center justify-center gap-x-4">
            <GlassMorphism
              variant="light"
              className="rounded-full p-0 text-white w-fit h-fit self-start md:self-auto"
            >
              <Message2 className="w-14 h-14 md:w-20 md:h-20"/>
            </GlassMorphism>

            <div className="w-fit md:w-fit mt-5 md:mt-0 md:px-4">
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
            className="border rounded-xl text-white w-[350px] md:w-full p-4 md:hidden"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-x-8">

              <div className="h-fit w-full">
                <Input
                  text="Name (Required)"
                  type="text"
                  placeholder="i.e. John Doe"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("name")}
                />
                {errors && <p className={"text-red-500"}>{errors.name?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Email (Required)"
                  type="email"

                  placeholder="i.e. john@mail.com"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("email")}
                />
                {errors && <p className={"text-red-500"}>{errors.email?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Phone"
                  type="text"
                  placeholder="i.e. 123-456-7890"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("phone")}
                />
                {errors && <p className={"text-red-500"}>{errors.phone?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Company Socials (LinkedIn, Instagram)"
                  type="text"
                  placeholder="Please provide a link"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("social")}
                />
                {errors && <p className={"text-red-500"}>{errors.social?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Company Website"
                  type="text"
                  placeholder="Please provide us a link"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("website")}
                />
                {errors && <p className={"text-red-500"}>{errors.website?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Message to the team"
                  type="text"
                  placeholder="Enter your message"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("messageToTeam")}
                />
                {errors && <p className={"text-red-500"}>{errors.messageToTeam?.message}</p>}
              </div>

              <Button
                variant="primary"
                className="font-semibold w-full rounded-md mt-8"
              > {isSubmitting ? "Submitting..." : "Get Free Consultancy"}
              </Button>
            </form>
          </GlassMorphism>


          <div className="w-[70%] py-10 hidden md:flex">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full">
              <div className="h-fit w-full">
                <Input
                  text="Name (Required)"
                  type="text"
                  placeholder="i.e. John Doe"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("name")}
                />
                {errors && <p className={"text-red-500"}>{errors.name?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Company Socials (LinkedIn, Instagram)"
                  type="text"
                  placeholder="Please provide a link"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("social")}
                />
                {errors && <p className={"text-red-500"}>{errors.social?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Email (Required)"
                  type="email"

                  placeholder="i.e. john@mail.com"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("email")}
                />
                {errors && <p className={"text-red-500"}>{errors.email?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Company Website"
                  type="text"
                  placeholder="Please provide us a link"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("website")}
                />
                {errors && <p className={"text-red-500"}>{errors.website?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Phone"
                  type="text"
                  placeholder="i.e. 123-456-7890"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("phone")}
                />
                {errors && <p className={"text-red-500"}>{errors.phone?.message}</p>}
              </div>

              <div className="h-fit w-full">
                <Input
                  text="Message to the team"
                  type="text"
                  placeholder="Enter your message"
                  classNameDiv="bg-white rounded-lg p-0"
                  classNameInput="text-black placeholder:font-light"
                  classNameText="font-semibold"
                  className="my-2"
                  {...register("messageToTeam")}
                />
                {errors && <p className={"text-red-500"}>{errors.messageToTeam?.message}</p>}
              </div>

              <Button
                variant="primary"
                isSubmitting={isSubmitting}
                className={`font-semibold w-full rounded-md mt-8 col-span-2 hover:opacity-90 ${isSubmitting && "hover:opacity-90"}`}

              > {isSubmitting ? "Submitting..." : "Get Free Consultancy"}
              </Button>
            </form>
          </div>
        </div>
      </GlassMorphism>
    </div>
  );
}

export default ContactUs;
