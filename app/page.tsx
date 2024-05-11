import Button from "@/components/Button";
import GlassMorphism from "@/components/GlassMorphism";
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
import HomeStyle from "@/style/Home.module.css";

export default function Home() {
  return (
    <div className="relative h-screen w-screen bg-black pt-24 overflow-hidden">
      <>
        <GridFill className="absolute top-1/2 left-0 -translate-y-1/2" />
        <Shade1 className="absolute left-0 top-1/2 -translate-y-1/2" />
        <Shade2 className="absolute right-0 top-0" />
      </>
      <div className="relative z-20 flex items-center justify-between mx-32 h-4/5 ">
        <div className=" w-1/2">
          <div className="text-white font-semibold text-6xl ">
            <span>Unlock your</span>{" "}
            <span className="text-sq-violet">Brand&apos;s Potential</span>.{" "}
            <span>One at a time Promote and</span>{" "}
            <span className="text-sq-violet">Grow</span>
          </div>
          <div className="text-white text-2xl my-5">
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
          <Squirrel />
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
      <div className="text-white grid place-items-center">
        <span className="text-2xl font-semibold">Trusted By</span>
        <div className="flex gap-10 items-center mt-10">
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
