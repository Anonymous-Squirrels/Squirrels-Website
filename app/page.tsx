import Button from "@/components/Button";
import GlassMorphism from "@/components/GlassMorphism";
import NavBar from "@/components/NavBar";
import { Trustee } from "@/constants/Home";
import HomeStyle from "@/style/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <NavBar />
      <div className="text-white font-semibold text-6xl border w-2/5">
        <span>Unlock your</span>{" "}
        <span className="text-sq-violet">Brand&apos;s Potential</span>.{" "}
        <span>One at a time Promote and</span>{" "}
        <span className="text-sq-violet">Grow</span>
      </div>
      <div className="text-white text-2xl">
        Elevate your content marketing with a powerful brand strategy.
      </div>
      <Button
        className="p-2 text-lg rounded-lg w-56 overflow-hidden"
        variant="primary"
      >
        Get a Free Consultation
      </Button>
      <div className="text-white">
        <span>Trusted By</span>
        <div className="flex gap-10 items-center">
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
