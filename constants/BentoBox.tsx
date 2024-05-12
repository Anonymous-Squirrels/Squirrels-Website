import Button from "@/components/ui/Button";
import Image from "next/image";

export const BentoItems = [
  {
    title: "Custom Pricing",
    description: `Fixed pricing and high ppw custom pricing and lowest charges in segment.`,
    content: (
      <Image src="/assets/graph.png" width={200} height={200} alt="graph" />
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
        width={200}
        height={200}
        alt="collaboration"
      />
    ),
  },
  {
    title: "Some of our Work.",
    description:
      "Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. We manage it all !!",
    content: "Null",
  },

  {
    title: "We provide Services. A lot of services.",
    description:
      "Our Company provides a lot of services ranging from Brand strategies to SEO Optimization to Web Content Management",
    content: (
      <Button variant="light" className="rounded-full p-4">
        Get Started
      </Button>
    ),
  },
];
