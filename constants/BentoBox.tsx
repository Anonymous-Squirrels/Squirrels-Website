import Button from "@/components/ui/Button";
import Image from "next/image";

export const BentoItems = [
  {
    title: "Custom Pricing",
    description: `Fixed pricing and high ppw custom pricing and lowest charges in segment.`,
    content: (
      <Image src="/assets/graph.png" width={180} height={180} alt="graph" />
    ),
  },
  {
    title: `Boosting Business. <br/> Today and Tomorrow.`,
    description:
      "Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.",
    content: (
      <Image
        src="/assets/boost_business.png"
        width={400}
        height={400}
        className="rounded-xl"
        alt="boost_business"
      />
    ),
  },
  {
    title: "Easy Collaboration",
    description:
      "Seamlessly collaborate with your team members like never before.",
    content: (
      <Image
        src="/assets/collaboration.png"
        width={180}
        height={180}
        alt="collaboration"
      />
    ),
  },
  {
    title: "Some of our Work.",
    description:
      "Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. We manage it all !!",
    content: (
      <div className="w-full">
        <Button variant="light" className="rounded-2xl px-10 py-2">
          View More
        </Button>
        <div className="flex items-center justify-between w-full">
          <Image
            src="/assets/oyoOfficial.png"
            width={180}
            height={180}
            alt="Oyo"
          />
          <Image src="/assets/leo9.png" width={180} height={180} alt="Leo 9" />
        </div>
      </div>
    ),
  },

  {
    title: "We provide Services. A lot of services.",
    description:
      "Our Company provides a lot of services ranging from Brand strategies to SEO Optimization to Web Content Management",
    content: (
      <Button variant="light" className="rounded-full p-4">
        View our services
      </Button>
    ),
  },
];
