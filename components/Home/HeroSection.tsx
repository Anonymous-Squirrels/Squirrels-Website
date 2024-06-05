import Button from "@/components/ui/Button";
import GlassMorphism from "@/components/ui/GlassMorphism";
import { Trustee } from "@/constants/Home";
import {
  Brush,
  GridFill,
  Laptop,
  PenRuler,
  Shade1,
  Shade2,
  Squirrel,
} from "@/constants/Icons";

export default function Home() {
  return (
    <div className="relative h-fit md:h-[90vh] bg-black pb-20 w-full">
      <>
        <GridFill className="absolute top-1/2 left-0 -translate-y-1/2" />
        <Shade1 className="absolute left-0 -translate-y-60" />
        <Shade2 className="absolute right-0 top-0" />
      </>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between md:mx-32 py-4 am:py-0 gap-y-20 md:gap-y-0 mx-0 h-4/5 ">
        <div className="w-10/12 md:w-1/2 ">
          <div className="text-white font-semibold text-4xl  md:text-6xl">
            <span>Unlock your</span>{" "}
            <span className="text-sq-violet">Brand&apos;s Potential</span>.{" "}
            <span className="hidden md:inline-flex">One at a time Promote and</span>{" "}
            <span className="text-sq-violet hidden md:inline-flex">Grow</span>
          </div>
          <div className="text-white text-xl md:text-2xl my-5">
            Elevate your content marketing with a powerful brand strategy.
          </div>
          <Button
            className="p-5 text-xl rounded-lg whitespace-nowrap overflow-hidden"
            variant="primary"
          >
            Get a Free Consultation
          </Button>
        </div>

        <div className="relative">
          <Squirrel/>
          <GlassMorphism
            variant="light"
            className="rounded-xl inline-block absolute top-0 right-0 translate-x-1/2"
          >
            <Laptop />
          </GlassMorphism>
          <GlassMorphism
            variant="light"
            className="rounded-xl inline-block absolute bottom-0 right-0 -translate-x-1/2"
          >
            <Brush />
          </GlassMorphism>

          <GlassMorphism
            variant="light"
            className="rounded-xl inline-block absolute left-0 top-1/2 -translate-y-1/2"
          >
            <PenRuler />
          </GlassMorphism>
        </div>
      </div>

      <div className="text-white flex flex-col justify-center items-center">
        <span className="text-2xl font-semibold">Trusted By</span>
        <div className="flex gap-3.5 md:gap-10 items-center mt-10">
          {Trustee.map((item) => (
            <GlassMorphism
              variant="light"
              className="rounded-xl"
              key={item.name}
            >
              {item.name}
            </GlassMorphism>
          ))}
        </div>
      </div>
    </div>
  );
}
